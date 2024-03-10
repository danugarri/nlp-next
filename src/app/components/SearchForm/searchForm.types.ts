export type SearchFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  updateDisplayPreview: () => void;
  query: string;
};
