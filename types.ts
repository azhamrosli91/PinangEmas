
import React from 'react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features?: string[];
  isPopular?: boolean;
  period?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  benefits: string[];
  icon: React.ReactNode;
  pricing?: PricingPlan[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
