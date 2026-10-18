export interface Project {
  id: string;
  monographNumber: string;
  title: string;
  subtitle: string;
  category: 'residential' | 'luxury' | 'office' | 'culinary' | 'commercial';
  categoryLabel: string;
  scale: string;
  location: string;
  completedYear: string;
  discipline: string;
  image: string;
  description: string;
  architecturalAxioms: string[];
  materialsUsed: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ServiceDetail {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  scopePoints: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  specialization: string[];
}

export interface JournalArticle {
  id: string;
  date: string;
  category: string;
  title: string;
  readTime: string;
  excerpt: string;
  fullContent: string[];
}

export interface EstimationInputs {
  projectType: 'residential' | 'villa' | 'office' | 'commercial';
  areaSqFt: number;
  finishGrade: 'contemporary' | 'luxury-bespoke' | 'heritage-estate';
  includeModularKitchen: boolean;
  includeSmartLighting: boolean;
  includeItalianMarble: boolean;
  includeAcousticMillwork: boolean;
}

export interface ConsultationFormState {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  areaSqFt: number;
  location: string;
  message: string;
  preferredConsultation: 'studio' | 'onsite' | 'virtual';
}
