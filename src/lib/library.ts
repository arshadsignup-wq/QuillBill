import type { InvoiceData, ContactInfo } from '../types/invoice';
import { isValidInvoiceData } from './validation';

/**
 * Local document library, sender profile and client book.
 *
 * The app held exactly one draft under a single key, so a freelancer sending
 * their second invoice retyped their own address, their client's address,
 * their bank details and their payment terms from scratch. Everything here is
 * localStorage on the user's own device — the privacy promise on the homepage
 * is that document data never reaches a server, and that stays true.
 */

const DOCUMENTS_KEY = 'quillbill-documents';
const PROFILE_KEY = 'quillbill-profile';
const CLIENTS_KEY = 'quillbill-clients';

export interface SavedDocument {
  id: string;
  name: string;
  /** ISO timestamp of the last save. */
  savedAt: string;
  data: InvoiceData;
}

export interface SenderProfile {
  from: ContactInfo;
  logo: string;
  bankDetails: string;
  paymentTerms: string;
}

/** Raised when the browser refuses the write, which in practice means quota. */
export class StorageFullError extends Error {
  constructor() {
    super('Not enough browser storage left to save this.');
    this.name = 'StorageFullError';
  }
}

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // QuotaExceededError is the only realistic failure and it is worth
    // surfacing: silently dropping a save the user asked for is how people
    // lose work they believed was stored.
    throw new StorageFullError();
  }
}

// --- documents --------------------------------------------------------------

export function listDocuments(): SavedDocument[] {
  const docs = read<SavedDocument[]>(DOCUMENTS_KEY, []);
  if (!Array.isArray(docs)) return [];
  return docs
    .filter((d) => d && typeof d.id === 'string' && isValidInvoiceData(d.data))
    .sort((a, b) => (a.savedAt < b.savedAt ? 1 : -1));
}

export function saveDocument(doc: SavedDocument): void {
  const docs = listDocuments().filter((d) => d.id !== doc.id);
  write(DOCUMENTS_KEY, [doc, ...docs]);
}

export function deleteDocument(id: string): void {
  write(
    DOCUMENTS_KEY,
    listDocuments().filter((d) => d.id !== id),
  );
}

/**
 * A sensible default name so the save dialog is one keystroke, not a decision:
 * "INV-2041 — Northwind Coffee Roasters".
 */
export function suggestName(data: InvoiceData): string {
  const number = data.documentNumber.trim();
  const client = data.to.name.trim();
  if (number && client) return `${number} — ${client}`;
  return number || client || 'Untitled document';
}

// --- sender profile ---------------------------------------------------------

export function loadProfile(): SenderProfile | null {
  const p = read<SenderProfile | null>(PROFILE_KEY, null);
  if (!p || typeof p !== 'object' || !p.from || typeof p.from.name !== 'string') return null;
  return p;
}

export function saveProfile(profile: SenderProfile): void {
  write(PROFILE_KEY, profile);
}

export function clearProfile(): void {
  try {
    localStorage.removeItem(PROFILE_KEY);
  } catch {
    // nothing to do
  }
}

// --- client book ------------------------------------------------------------

export function listClients(): ContactInfo[] {
  const clients = read<ContactInfo[]>(CLIENTS_KEY, []);
  if (!Array.isArray(clients)) return [];
  return clients
    .filter((c) => c && typeof c.name === 'string' && c.name.trim())
    .sort((a, b) => a.name.localeCompare(b.name));
}

/** Upsert by name, so saving the same client twice updates rather than duplicates. */
export function saveClient(client: ContactInfo): void {
  const key = client.name.trim().toLowerCase();
  const rest = listClients().filter((c) => c.name.trim().toLowerCase() !== key);
  write(CLIENTS_KEY, [...rest, client]);
}

export function deleteClient(name: string): void {
  const key = name.trim().toLowerCase();
  write(
    CLIENTS_KEY,
    listClients().filter((c) => c.name.trim().toLowerCase() !== key),
  );
}
