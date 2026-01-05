
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}