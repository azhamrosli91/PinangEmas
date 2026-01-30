import React from 'react';
import { Mail, MessageSquare, Database, Users, FileText, ArrowRight, Bot, Zap, Globe, Archive } from 'lucide-react';

const AutomationDemoCards: React.FC = () => {
    const demos = [
        {
            badge: 'Lead Generation',
            title: 'Global Client Intake',
            flow: 'Website → CRM → WhatsApp',
            steps: [
                { icon: <Globe className="w-4 h-4 text-blue-400" />, text: 'Lead enters from landing page' },
                { icon: <Database className="w-4 h-4 text-emerald-400" />, text: 'AI filters & updates HubSpot/CRM' },
                { icon: <MessageSquare className="w-4 h-4 text-green-500" />, text: 'Instant WhatsApp notification' }
            ],
            icon: <Zap className="w-8 h-8 text-gold" />
        },
        {
            badge: 'FinOps & Billing',
            title: 'Automated Invoicing',
            flow: 'Xero → Customer → Archive',
            steps: [
                { icon: <FileText className="w-4 h-4 text-gold" />, text: 'New invoice generated in Xero' },
                { icon: <Mail className="w-4 h-4 text-blue-300" />, text: 'Branded email sent to client' },
                { icon: <Archive className="w-4 h-4 text-gray-400" />, text: 'Copy saved to Internal G-Drive' }
            ],
            icon: <FileText className="w-8 h-8 text-gold" />
        },
        {
            badge: 'AI Support',
            title: 'Smart Ticket Routing',
            flow: 'Email → AI Summary → Slack',
            steps: [
                { icon: <Mail className="w-4 h-4 text-red-400" />, text: 'Support ticket received' },
                { icon: <Bot className="w-4 h-4 text-purple-400" />, text: 'AI summarizes & prioritizes' },
                { icon: <Users className="w-4 h-4 text-emerald-400" />, text: 'Routed to correct Slack team' }
            ],
            icon: <Bot className="w-8 h-8 text-gold" />
        }
    ];

    return (
        <div className="mt-24">
            <div className="text-center mb-16">
                <h3 className="text-white font-black text-3xl md:text-4xl mb-6">Proven <span className="text-gold italic">Automation</span> Blueprints</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">Explore some of our most requested high-performance workflows across different industries.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {demos.map((demo, idx) => (
                    <div key={idx} className="group relative">
                        <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="card-glass p-8 rounded-[2.5rem] border-white/5 relative bg-[#0d0d0d]/80 h-full flex flex-col hover:border-gold/20 transition-all duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 text-gold group-hover:scale-110 transition-transform duration-500">
                                    {demo.icon}
                                </div>
                                <span className="px-4 py-1.5 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest border border-gold/20">
                                    {demo.badge}
                                </span>
                            </div>

                            <h4 className="text-2xl font-black text-white mb-3">{demo.title}</h4>
                            <p className="text-gold text-xs font-bold mb-8 flex items-center">
                                {demo.flow}
                                <ArrowRight className="w-3 h-3 ml-2 animate-bounce-x" />
                            </p>

                            <div className="space-y-6 flex-grow">
                                {demo.steps.map((step, sIdx) => (
                                    <div key={sIdx} className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold/30 transition-colors">
                                            {step.icon}
                                        </div>
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">{step.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] text-gray-500 uppercase font-black">Live Deployment Ready</span>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border border-dark-bg bg-white/10 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
        </div>
    );
};

export default AutomationDemoCards;
