
export type Image = {
  src: string; 
  alt: string;
}

interface GuideFrontmatter {
  title: string;
  subtitle?: string;
  description: string; 
  image: Image 
  tags: string[];
}

export type {
  GuideFrontmatter
}