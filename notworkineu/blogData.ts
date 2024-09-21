// blogData.ts
export interface Blog {
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    slug: "why-gdpr-isnt-working",
    title: "Why GDPR isn’t working",
    content: "This is the content of the GDPR blog...",
    author: "John Doe",
    date: "2024-09-21",
  },
  {
    slug: "why-dma-isnt-working",
    title: "Why DMA isn’t working",
    content: "This is the content of the DMA blog...",
    author: "Jane Smith",
    date: "2024-09-22",
  },
];
