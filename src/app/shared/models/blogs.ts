export interface Blog {
  id?: string; // Optional for new blogs
  author?: string; // Optional, can be set later
  title: string;
  date: string; // ISO string or date
  coverImage: string; // URL or base64
  content: string;
  slug: string;
}
