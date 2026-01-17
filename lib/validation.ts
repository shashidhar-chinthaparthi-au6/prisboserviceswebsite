import { z } from 'zod';

export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  interestType: z.enum(['service', 'product']),
  interestName: z.string().min(1, 'Please select an interest'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
  sourcePage: z.string(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;
