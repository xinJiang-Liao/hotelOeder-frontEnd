import { FileSaverOptions, saveAs } from 'file-saver';

export function saveas(data: Blob | string, filename?: string, options?: FileSaverOptions): void {
  saveAs(data, filename, options);
}
