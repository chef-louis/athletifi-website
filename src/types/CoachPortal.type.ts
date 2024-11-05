export interface FileWithPreview extends File {
    generatedId: string;
    fileName: string;
    status: 'uploading' | 'success' | 'error';
  }