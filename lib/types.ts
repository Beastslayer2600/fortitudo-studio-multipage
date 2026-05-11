export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  detail: string[];
}

export interface InsightPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}
