export class FetchingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Fetching error';
  }
}

export class FileReaderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'File reading error';
  }
}

export class llamaindexError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Llamaindex error';
  }
}
