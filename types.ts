
// Import React to resolve React namespace for ReactNode type
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}