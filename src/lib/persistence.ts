/**
 * Asks the browser not to evict what we have stored.
 *
 * localStorage defaults to "best-effort" storage, which browsers are allowed to
 * clear when disk runs low or after a long period without a visit. That was
 * survivable when the only thing stored was a scratch draft. It is not
 * survivable now that the app keeps a document library, a client book and a
 * business profile — someone can save five invoices, come back weeks later and
 * find them gone, with no warning and no way to recover them.
 *
 * `navigator.storage.persist()` asks for the origin to be marked persistent so
 * it is exempt from automatic eviction. Browsers answer differently: some grant
 * it silently based on engagement, some prompt, some decline. We never assert
 * which — `storageStatus()` reports what the browser actually said so the UI can
 * tell the user the truth rather than a guess.
 */

export type PersistenceState = 'persisted' | 'not-persisted' | 'unsupported';

let inFlight: Promise<PersistenceState> | null = null;

/**
 * Request persistence once per page load.
 *
 * Called from explicit save actions rather than from autosave. In browsers that
 * prompt, asking is a real interruption, and it should follow a deliberate
 * "keep this" from the user rather than fire while they are still typing.
 */
export function ensurePersistentStorage(): Promise<PersistenceState> {
  if (inFlight) return inFlight;

  inFlight = (async () => {
    if (typeof navigator === 'undefined' || !navigator.storage?.persist) {
      return 'unsupported';
    }
    try {
      // Asking again when it is already granted would re-prompt in browsers
      // that prompt, for no gain.
      if (await navigator.storage.persisted?.()) return 'persisted';
      return (await navigator.storage.persist()) ? 'persisted' : 'not-persisted';
    } catch {
      return 'unsupported';
    }
  })();

  return inFlight;
}

export interface StorageStatus {
  state: PersistenceState;
  /** Bytes this origin is using, when the browser will say. */
  usage?: number;
  /** Bytes it will allow, when the browser will say. */
  quota?: number;
}

export async function storageStatus(): Promise<StorageStatus> {
  if (typeof navigator === 'undefined' || !navigator.storage) return { state: 'unsupported' };
  try {
    const persisted = (await navigator.storage.persisted?.()) ?? false;
    const estimate = (await navigator.storage.estimate?.()) ?? {};
    return {
      state: persisted ? 'persisted' : 'not-persisted',
      usage: estimate.usage,
      quota: estimate.quota,
    };
  } catch {
    return { state: 'unsupported' };
  }
}

export function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${Math.round(n / 1024)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}
