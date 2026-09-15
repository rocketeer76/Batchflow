export type ImportProgress = {
  total: number;
  processed: number;
  succeeded: number;
  failed: number;
};
export function progressPercent(progress: ImportProgress) {
  if (progress.total <= 0) return 0;
  return Math.min(100, Math.round((progress.processed / progress.total) * 100));
}
export function isConsistent(progress: ImportProgress) {
  return (
    progress.processed === progress.succeeded + progress.failed &&
    progress.processed <= progress.total
  );
}
