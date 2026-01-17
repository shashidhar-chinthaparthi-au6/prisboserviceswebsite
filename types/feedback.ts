export interface Feedback {
  _id?: string;
  name: string;
  email: string;
  rating: number; // 1-5
  message: string;
  category?: 'general' | 'service' | 'website' | 'suggestion' | 'complaint';
  createdAt: Date;
}
