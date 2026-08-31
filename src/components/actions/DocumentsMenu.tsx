import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { FolderOpen, Save, Trash2, FileText, Check } from 'lucide-react';
import { useInvoiceContext } from '../../context/InvoiceContext';
import {
  listDocuments,
  saveDocument,
  deleteDocument,
  suggestName,
  StorageFullError,
  type SavedDocument,
} from '../../lib/library';
import { ensurePersistentStorage, storageStatus, formatBytes, type StorageStatus } from '../../lib/persistence';
import { useToast } from '../ui/ToastProvider';
import Button from '../ui/Button';
import Dialog from '../ui/Dialog';
import Input from '../ui/Input';

function formatSaved(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) +
    ' · ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

export default function DocumentsMenu() {
  const { data, dispatch } = useInvoiceContext();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [docs, setDocs] = useState<SavedDocument[]>([]);
  const [name, setName] = useState('');

  // The document being edited, so re-saving updates in place rather than
  // leaving a trail of near-identical copies.
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [storage, setStorage] = useState<StorageStatus | null>(null);

  useEffect(() => {
    if (open) {
      setDocs(listDocuments());
      setName(suggestName(data));
      storageStatus().then(setStorage);
    }
  }, [open, data]);

  const handleSave = () => {
    const id = currentId ?? nanoid();
    try {
      saveDocument({ id, name: name.trim() || suggestName(data), savedAt: new Date().toISOString(), data });
      setCurrentId(id);
      setDocs(listDocuments());
      toast('Document saved to this browser');
      // Saving is the point at which the user has asked us to keep something,
      // so it is the right moment to ask the browser to stop evicting it.
      ensurePersistentStorage().then(() => storageStatus().then(setStorage));
    } catch (err) {
      toast(
        err instanceof StorageFullError
          ? 'Your browser storage is full. Delete a saved document and try again.'
          : 'Could not save the document.',
        'error',
      );
    }
  };

  const handleOpen = (doc: SavedDocument) => {
    dispatch({ type: 'LOAD_DATA', payload: doc.data });
    setCurrentId(doc.id);
    setOpen(false);
    toast(`Opened "${doc.name}"`);
  };

  const handleDelete = (doc: SavedDocument) => {
    deleteDocument(doc.id);
    setDocs(listDocuments());
    if (currentId === doc.id) setCurrentId(null);
    toast(`Deleted "${doc.name}"`);
  };

  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        <FolderOpen size={16} />
        <span className="hidden sm:inline">Documents</span>
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} title="Saved documents">
        <div className="space-y-5">
          <div>
            <Input
              label="Save the current document as"
              id="save-doc-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="INV-001 — Acme Corp"
            />
            <button
              onClick={handleSave}
              className="mt-2 flex items-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-white hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Save size={14} />
              {currentId ? 'Update saved document' : 'Save document'}
            </button>
          </div>

          {storage && storage.state !== 'persisted' && (
            <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-[11px] leading-relaxed text-amber-800">
              <span className="font-medium">This browser has not marked the storage as permanent.</span>{' '}
              Saved documents can be cleared when disk space runs low, or after a long time
              without a visit — and clearing site data removes them too. Anything you need to
              keep, export with <span className="font-medium">More &rarr; Export JSON</span>.
            </p>
          )}
          {storage?.state === 'persisted' && (
            <p className="rounded-lg border border-green-200 bg-green-50 p-3 text-[11px] leading-relaxed text-green-800">
              <span className="font-medium">This browser has marked the storage as permanent</span>,
              so saved documents will not be cleared automatically. Clearing site data still
              removes them.
              {typeof storage.usage === 'number' && typeof storage.quota === 'number' && (
                <> Using {formatBytes(storage.usage)} of {formatBytes(storage.quota)}.</>
              )}
            </p>
          )}

          <div>
            <h3 className="text-xs font-medium text-gray-600 mb-2">
              On this browser ({docs.length})
            </h3>
            {docs.length === 0 ? (
              <p className="rounded-lg border border-dashed border-gray-300 p-4 text-xs text-gray-500">
                Nothing saved yet. Saved documents stay on this device — they are never uploaded,
                which also means they will not follow you to another browser, and they are only
                as durable as this browser's storage. Use Export JSON for anything you must keep.
              </p>
            ) : (
              <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100 rounded-lg border border-gray-200">
                {docs.map((doc) => (
                  <li key={doc.id} className="flex items-center gap-2 px-3 py-2.5">
                    <FileText size={14} className="flex-shrink-0 text-gray-400" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-gray-900">{doc.name}</p>
                      <p className="text-[11px] text-gray-500">
                        {doc.data.mode} · {formatSaved(doc.savedAt)}
                      </p>
                    </div>
                    {currentId === doc.id && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-green-600">
                        <Check size={12} /> open
                      </span>
                    )}
                    <button
                      onClick={() => handleOpen(doc)}
                      className="rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Open
                    </button>
                    <button
                      onClick={() => handleDelete(doc)}
                      aria-label={`Delete ${doc.name}`}
                      className="rounded-md p-1 text-gray-400 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
}
