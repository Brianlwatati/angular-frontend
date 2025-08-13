export interface Blog {
  title: string;
  date: string; // ISO string or date
  coverImage: string; // URL or base64
  content: string;
  slug: string;
}
