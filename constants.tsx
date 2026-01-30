
import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Users, 
  Globe, 
  Layers,
  Home
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const LOGO_URL = 'https://input-file-display.s3.us-west-2.amazonaws.com/input-file-display/ucl-20/2025-02-09/52839958-8673-4467-9ba3-8ed50e9324b1/image_2025-02-09_18-47-51.png';

export const SERVICES: Service[] = [
  {
    id: 'customize-software',
    title: 'Customize Software',
    description: 'Bespoke web design, app development, and large-scale software engineering backed by 14 years of expertise.',
    longDescription: 'With over 14 years of specialized experience in high-end development, Pinang Emas provides comprehensive digital engineering. From pixel-perfect web design and robust web development to native mobile apps and complex automation workflows, we architect software that scales for both small businesses and massive enterprises.',
    features: [
      { title: 'Web Design & Development', description: 'Creating high-converting, aesthetic, and performant web platforms tailored to your brand identity.' },
      { title: 'App Development', description: 'Native and cross-platform mobile solutions for iOS and Android designed for maximum user engagement.' },
      { title: 'Automation Workflows', description: 'Integrating disparate systems into seamless, automated operational engines that save thousands of man-hours.' },
      { title: 'Enterprise Solutions', description: 'Building large-scale software architectures capable of handling massive data, complex logic, and high user concurrency.' }
    ],
    benefits: ['14+ Years Technical Excellence', 'Custom UI/UX Design', 'Scalable Architecture', 'Dedicated Project Management'],
    icon: <Code2 className="w-8 h-8" />
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Leveraging next-gen artificial intelligence to automate complex tasks and drive smarter decision making.',
    longDescription: 'Bring the power of Large Language Models and Machine Learning to your business. We integrate advanced AI to transform how you interact with customers and analyze internal data.',
    features: [
      { title: 'Predictive Analytics', description: 'Anticipate market trends and customer behavior with high accuracy.' },
      { title: 'Custom LLM Training', description: 'Fine-tuned AI models that understand your specific industry jargon.' }
    ],
    benefits: ['24/7 Intelligent automation', 'Data-driven decision making', 'Reduced human error'],
    icon: <BrainCircuit className="w-8 h-8" />
  },
  {
    id: 'n8n-workflow',
    title: 'n8n Workflow',
    description: 'Advanced low-code automation that connects your entire tech stack into a unified ecosystem.',
    longDescription: 'Stop wasting time on repetitive tasks. We use n8n to build powerful, self-hosting automation workflows that bridge the gap between your CRM, Marketing, and Operations tools.',
    features: [
      { title: 'Multi-App Sync', description: 'Synchronize data across hundreds of apps in real-time.' },
      { title: 'Self-Hosted Privacy', description: 'Keep your automation logic and data within your own infrastructure.' }
    ],
    benefits: ['Zero manual data entry', 'Faster lead response times', 'Significant time savings'],
    pricing: [
      {
        name: 'Single Spark',
        price: 'RM19',
        description: '1 simple workflow manual/schedule trigger for reminder, or daily routine.',
        features: ['1 Workflow', 'Manual/Schedule Trigger', 'Daily Routine Setup'],
        period: 'one-time'
      },
      {
        name: 'Triple Flow',
        price: 'RM49',
        description: '3 simple workflows similar to our Single Spark tier.',
        isPopular: true,
        features: ['3 Workflows', 'All Single Spark features', 'Integrated logic'],
        period: 'one-time'
      },
      {
        name: 'Managed Hosting',
        price: 'RM59',
        description: 'Premium managed hosting for your n8n instance with 99.9% uptime.',
        features: ['Full n8n Managed Instance', 'Automatic Backups', 'Security Patching', 'Priority Support'],
        period: 'month'
      },
      {
        name: 'Agent Basic',
        price: 'RM79',
        description: '1 chatbot agent for Telegram, Teams, WhatsApp, Gmail, or Outlook.',
        features: ['1 Chatbot Agent', 'Multi-Platform Choice', 'Automated Notifications'],
        period: 'one-time'
      },
      {
        name: 'Agent Pro',
        price: 'RM99',
        description: '2 chatbot agents similar to Agent Basic for higher volume needs.',
        features: ['2 Chatbot Agents', 'Advanced Routing', 'Unified Inbox Logic'],
        period: 'one-time'
      }
    ],
    icon: <Workflow className="w-8 h-8" />
  },
  {
    id: 'hrms-system',
    title: 'HRMS System',
    description: 'The definitive HR solution for Malaysian companies. Completely free for unlimited employees.',
    longDescription: 'Designed specifically for the Malaysian business ecosystem, our HRMS provides a comprehensive suite of tools to manage your workforce. From payroll compliance to talent recruitment, we offer enterprise-grade features at zero cost—supporting unlimited employees for your growing business.',
    features: [
      { title: 'Employee Management & Payroll', description: 'Centralized staff records with full LHDN, EPF, and SOCSO compliance.' },
      { title: 'Leave & Claim Modules', description: 'Streamlined digital approval workflows for leaves and expense claims.' },
      { title: 'Recruitment & Appraisal', description: 'End-to-end talent acquisition and performance review systems.' },
      { title: 'Planner (Kanban) & Training', description: 'Integrated task management and professional development tracking.' }
    ],
    benefits: ['100% Free Forever', 'Unlimited Employee Support', 'Malaysian Statutory Compliance', 'All-in-One Integrated Modules'],
    pricing: [
      {
        name: 'Forever Free',
        price: 'RM0',
        description: 'No hidden fees. No credit card required. Register and start managing your team today.',
        isPopular: true,
        features: [
          'Unlimited Employees',
          'Leave & Claim Management',
          'Recruitment & Payroll',
          'Planner (Kanban)',
          'Appraisal & Training'
        ],
        period: 'month'
      }
    ],
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 'hosting-website',
    title: 'Affordable Hosting',
    description: 'Budget-friendly, high-performance hosting solutions specifically optimized for small SME businesses.',
    longDescription: 'We understand that SMEs need reliable digital homes without breaking the bank. Our affordable hosting solutions provide local speeds, robust security, and the reliability your business deserves.',
    features: [
      { title: 'SME Focused', description: 'Optimized server configurations for small to medium business websites.' },
      { title: 'Local Support', description: 'Direct access to our Malaysian support team for any hosting queries.' },
      { title: 'Free SSL & Security', description: 'Keeping your customer data safe with enterprise-grade encryption at no extra cost.' }
    ],
    benefits: ['Affordable Pricing', '99.9% Uptime', 'Daily Backups', 'One-Click WP Installs'],
    pricing: [
      {
        name: 'SME Starter',
        price: 'RM19',
        description: 'The most cost-effective solution for small businesses looking for stable performance.',
        isPopular: true,
        features: [
          '4GB RAM',
          '2 CPU Cores',
          '10GB Dedicated Memory',
          '1TB Network Transfer',
          'Shared Bandwidth'
        ],
        period: 'month'
      }
    ],
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 'smart-home-office',
    title: 'Smart Home/Office',
    description: 'Next-level IoT integration to automate your living and working environments.',
    longDescription: 'Step into the future with intelligent environmental controls. We automate lighting, security, and climate to create spaces that react to your presence.',
    features: [
      { title: 'Unified Control', description: 'One app to rule all your office or home electronics.' },
      { title: 'Energy Optimization', description: 'Smart sensors that cut electricity waste by up to 30%.' }
    ],
    benefits: ['Enhanced security', 'Energy cost savings', 'Unmatched convenience'],
    icon: <Home className="w-8 h-8" />
  },
  {
    id: 'enterprise-it',
    title: 'Enterprise IT',
    description: 'Scalable infrastructure consulting to ensure your technology backbone can support growth.',
    longDescription: 'For established organizations looking to modernize. We provide the strategic roadmap and technical muscle to upgrade legacy systems to modern cloud standards.',
    features: [
      { title: 'Cloud Migration', description: 'Safe and efficient movement of legacy data to AWS or Google Cloud.' },
      { title: 'Network Security', description: 'Zero-trust architecture implementation for enterprise-wide safety.' }
    ],
    benefits: ['Future-proofed tech stack', 'Maximized ROI on IT spend', 'Zero downtime migrations'],
    icon: <Layers className="w-8 h-8" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Tan',
    role: 'Operations Director',
    company: 'Nexus Tech',
    content: 'Pinang Emas delivered a custom HRMS that revolutionized how we manage 200+ employees. Their attention to detail is truly gold standard.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Daniel Lim',
    role: 'CEO',
    company: 'Skyline Logistics',
    content: 'The n8n automation workflows they implemented saved us over 20 hours of manual work every single week. Incredible efficiency.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '3',
    name: 'Jessica Wong',
    role: 'Founder',
    company: 'Bloom Retail',
    content: 'Our AI-powered customer service bot from Pinang Emas handles 80% of inquiries instantly. A game changer for our brand.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  }
];
