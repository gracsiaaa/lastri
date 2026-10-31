export type Language = 'en' | 'id';

export interface LocalizedText {
  en: string;
  id: string;
}

export interface LocalizedList {
  en: string[];
  id: string[];
}

export interface TreatmentStep {
  stepNumber: number;
  title: LocalizedText;
  description: LocalizedText;
  durationMin?: number;
}

export interface Treatment {
  id: string;
  title: LocalizedText;
  category: 'massage' | 'facial' | 'bath' | 'reflexology';
  duration: string;
  price: number;
  formattedPrice: LocalizedText;
  excerpt: LocalizedText;
  fullDescription: LocalizedText;
  steps: TreatmentStep[];
  ingredients: string[];
  bestFor: LocalizedText;
  contraindications: LocalizedText;
  image: string;
  rating?: number;
  popular?: boolean;
}

export interface PackageTimelineItem {
  time: string;
  activity: LocalizedText;
}

export interface SpaPackage {
  id: string;
  title: LocalizedText;
  duration: string;
  price: number;
  formattedPrice: LocalizedText;
  excerpt: LocalizedText;
  fullDescription: LocalizedText;
  inclusions: LocalizedList;
  timeline: PackageTimelineItem[];
  image: string;
  badge?: LocalizedText;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: LocalizedText;
  category: 'equipment' | 'botanicals' | 'session' | string;
  image: string;
  location: string;
  description: LocalizedText;
}

export interface Therapist {
  id: string;
  name: string;
  title: LocalizedText;
  experience: string;
  photo: string;
  bio: LocalizedText;
  specialties: LocalizedList;
}

import { BookingData } from '../utils/whatsapp';

export type { BookingData };
export type BookingFormData = BookingData;

export type ModalType = 
  | 'none'
  | 'about'
  | 'treatment'
  | 'package'
  | 'gallery'
  | 'booking'
  | 'confirmation';

export interface ModalState {
  type: ModalType;
  data?: any;
}
