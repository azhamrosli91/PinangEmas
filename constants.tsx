
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

export const LOGO_URL = '/assets/PinangEmasLogo_1.png';

export const SERVICES: Service[] = [
  {
    id: 'customize-software',
    title: 'Customize Software',
    description: 'Bespoke web design, app development, and large-scale software engineering backed by 14 years of expertise.',
    longDescription: 'With over 14 years of specialized experience in high-end development, Pinang Emas provides comprehensive digital engineering. From pixel-perfect web design and robust web development to native mobile apps and complex automation workflows, we architect software that scales for both small businesses and massive enterprises.',
    features: [
      { title: 'Web Design', description: 'Crafting high-end, visual identities and user interfaces that resonate with luxury and professionalism.' },
      { title: 'Web Development', description: 'Building high-performance, responsive web applications using modern frameworks like React and Next.js.' },
      { title: 'Mobile App', description: 'Native and cross-platform mobile solutions for iOS and Android, focusing on seamless user experience.' },
      { title: 'Database Design', description: 'Architecting robust, scalable, and secure data structures to handle complex business logic and massive datasets.' },
      { title: 'Automation Workflow', description: 'Engineering custom scripts and internal tools to eliminate manual repetitive tasks and optimize operations.' },
      { title: 'Windows App Development', description: 'Creating high-performance, native desktop applications for Windows environments, optimized for enterprise utility and stability.' }
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
      { title: 'Image Training & Computer Vision', description: 'Development of custom vision models for object detection, classification, and industrial visual inspection.' },
      { title: 'Predictive Data Science', description: 'Advanced statistical modeling to uncover hidden patterns and forecast business outcomes with high precision.' },
      { title: 'Automated Data Cleaning', description: 'Systematic transformation of raw, messy data into high-quality training sets for reliable AI inference.' },
      { title: 'Custom LLM Training', description: 'Fine-tuned AI models that understand your specific industry jargon and organizational knowledge.' }
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
      { title: 'Secure 24/7 Managed Hosting', description: 'We host and manage everything for you on our secure, high-performance infrastructure with 24/7 uptime monitoring.' }
    ],
    benefits: ['Zero manual data entry', 'Faster lead response times', 'Significant time savings'],
    pricing: [
      {
        name: 'Single Spark',
        price: 'RM19',
        description: '1 simple workflow manual/schedule trigger for reminder, or daily routine.',
        features: ['1 Workflow', 'Manual/Schedule Trigger', 'Daily Routine Setup', 'Shared cloud hosting 24/7'],
        period: 'month'
      },
      {
        name: 'Triple Flow',
        price: 'RM49',
        description: '2 simple workflows similar to our Single Spark tier + 1 advance daily routine setup.',
        isPopular: true,
        features: ['3 Workflows', 'All Single Spark features', 'Integrated logic', 'Shared cloud hosting 24/7'],
        period: 'month'
      },
      {
        name: 'Agent Basic',
        price: 'RM79',
        description: '1 chatbot agent for Telegram, Teams, WhatsApp, Gmail, or Outlook. Excludes AI pricing; requires ChatGPT API / DeepSeek API / Gemini API.',
        features: [
          '1 Chatbot Agent',
          'Multi-Platform Choice',
          'Automated Notifications',
          'Requires ChatGPT API / DeepSeek API / Gemini API',
          'Shared cloud hosting 24/7'
        ],
        period: 'month'
      },
      {
        name: 'Agent Pro',
        price: 'RM149',
        description: '2 chatbot agents similar to Agent Basic for higher volume needs. Excludes AI pricing; requires ChatGPT API / DeepSeek API / Gemini API.',
        features: [
          '2 Chatbot Agents',
          'Advanced Routing',
          'Unified Inbox Logic',
          'Requires ChatGPT API / DeepSeek API / Gemini API',
          'Shared cloud hosting 24/7'
        ],
        period: 'month'
      },
      {
        name: 'Agent Enterprise',
        price: 'RM349',
        description: 'Multiple agents with advanced scheduling and routing for enterprise-grade automation. Excludes AI pricing; requires ChatGPT API / DeepSeek API / Gemini API.',
        features: [
          'Multiple Agents',
          'Multiple Scheduler Triggers',
          'Daily Routine Setup',
          'Advanced Routing',
          'Requires ChatGPT API / DeepSeek API / Gemini API',
          'Shared cloud hosting 24/7'
        ],
        period: 'month'
      }
    ],
    icon: <Workflow className="w-8 h-8" />
  },
  {
    id: 'hrms-system',
    title: 'HRMS System',
    description: 'The definitive HR solution for Malaysian companies. Completely free for unlimited employees.',
    longDescription: 'Designed specifically for the Malaysian business ecosystem, our HRMS provides a comprehensive suite of tools to manage your workforce. From payroll compliance to project planning, we offer enterprise-grade modules including Employee Management, Leave & Attendance, Recruitment, Training, Performance Appraisal, Payroll, and integrated Project Management tools—all at zero cost for unlimited employees.',
    features: [
      { title: 'Employee Management', description: 'Centralized digital profiles with document storage, family details, and employment history.' },
      { title: 'Leave & Attendance', description: 'Sophisticated leave application workflows with geo-fenced attendance tracking and shift management.' },
      { title: 'Payroll & Statutory', description: 'Automated calculations with full LHDN, EPF, SOCSO, and EIS compliance for Malaysian companies.' },
      { title: 'Recruitment & Training', description: 'End-to-end talent acquisition pipeline and employee skill development tracking.' },
      { title: 'Appraisal & Performance', description: 'Structured performance reviews, KPI tracking, and 360-degree feedback systems.' },
      { title: 'Project Management & Planner', description: 'Integrated Kanban boards (Planner) and project tracking to align HR with operations.' }
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
      { title: 'NVMe SSD Storage', description: 'Experience up to 10x faster data access speeds compared to traditional SSDs for lightning-fast page loads.' },
      { title: 'Local MY Peering', description: 'Our servers are peered locally in Malaysia to ensure the lowest possible latency for your domestic customers.' },
      { title: '99.9% Uptime SLA', description: 'Enterprise-grade reliability with redundant power and cooling systems to keep your business online 24/7.' },
      { title: 'Automated Backups', description: 'Daily off-site backups ensure your website data is always safe and restorable with a single click.' },
      { title: 'Free SSL (Let\'s Encrypt)', description: 'Industry-standard encryption automatically provisioned for every domain to protect user data and boost SEO.' },
      { title: 'One-Click Deploy', description: 'Instantly install WordPress, Joomla, or custom Node.js apps via our intuitive control panel.' }
    ],
    benefits: ['Affordable Pricing', '99.9% Uptime', 'Daily Backups', 'One-Click WP Installs'],
    pricing: [
      {
        name: 'SME Starter',
        price: 'RM19',
        description: 'Hosted locally in Malaysia for extreme speed. The most cost-effective solution for small businesses looking for stable performance.',
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
      { title: 'Tuya Ecosystem', description: 'Complete integration with Tuya-powered devices for a massive range of compatible smart hardware.' },
      { title: 'Voice Assistant Control', description: 'Hands-free operation through seamless Google Assistant and Amazon Alexa voice commands.' },
      { title: 'Aqara & Xiaomi Integration', description: 'Ultra-reliable Zigbee-based sensors and hubs from Aqara/Xiaomi for robust stability.' },
      { title: 'Unified Smart Dashboard', description: 'Control lighting, climate, and security from a single, intuitive interface synchronized across all devices.' },
      { title: 'Scene Automation', description: 'Intelligent routines that react to your presence, the time of day, or environmental changes automatically.' }
    ],
    benefits: ['Enhanced security', 'Energy cost savings', 'Unmatched convenience'],
    icon: <Home className="w-8 h-8" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aina Sofiah',
    role: 'HR Manager',
    company: 'Nexus Tech',
    content: 'Pinang Emas delivered a custom HRMS that revolutionized how we manage 100+ employees. Their attention to detail is truly gold standard.',
    avatar: '/assets/ainsofiah.png'
  },
  {
    id: '2',
    name: 'Sharon Yeap',
    role: 'CEO',
    company: 'Skyline Logistics',
    content: 'The n8n automation workflows they implemented saved us over 20 hours of manual work every single week. Incredible efficiency.',
    avatar: '/assets/sharonyeap.webp'
  },
  {
    id: '3',
    name: 'Siti Maryam',
    role: 'Founder',
    company: 'Bloom Retail',
    content: 'Our AI-powered customer service bot from Pinang Emas handles 80% of inquiries instantly. A game changer for our brand.',
    avatar: '/assets/sitimaryam.png'
  }
];
