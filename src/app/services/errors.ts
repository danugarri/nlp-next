export class FetchingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Fetching error';
  }
}
