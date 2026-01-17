export interface Lead {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  interestType: 'service' | 'product';
  interestName: string;
  message: string;
  sourcePage: string;
  createdAt: Date;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  interestType: 'service' | 'product';
  interestName: string;
  message: string;
  sourcePage: string;
}
