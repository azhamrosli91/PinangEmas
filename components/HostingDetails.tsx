
import React from 'react';
import { Database, Zap, Shield, Globe, Clock, RefreshCw } from 'lucide-react';

const HostingDetails: React.FC = () => {
    const specs = [
        {
            title: 'High-Speed NVMe',
            description: 'Built on top-tier NVMe SSDs for incredible I/O performance.',
            icon: <Database className="w-6 h-6 text-blue-400" />
        },
        {
            title: 'Ultra Low Latency',
            description: 'Strategically located in MY for the fastest local response.',
            icon: <Zap className="w-6 h-6 text-gold" />
        },
        {
            title: 'Enhanced Security',
            description: 'Built-in DDoS protection and advanced firewalls included.',
            icon: <Shield className="w-6 h-6 text-emerald-400" />
        }
    ];

    return (
        <div className="py-24 border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">Infrastructure</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Premium Hardware. <br /><span className="text-gold italic">Budget Pricing.</span></h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            We leverage cloud-scale technology to provide small businesses with the same reliability as major enterprises, at a fraction of the cost.
                        </p>

                        <div className="space-y-6">
                            {['99.9% Uptime Guarantee', 'Free SSL Certificates', 'Automated Daily Backups'].map((text, i) => (
                                <div key={i} className="flex items-center space-x-4 group">
                                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <span className="text-white font-bold group-hover:text-gold transition-colors">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="grid gap-6">
                            {specs.map((spec, idx) => (
                                <div key={idx} className="card-glass p-8 rounded-[2rem] border-white/5 hover:border-gold/30 transition-all duration-500 group flex items-start space-x-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shrink-0">
                                        {spec.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-black text-white mb-2 group-hover:text-gold transition-colors">{spec.title}</h5>
                                        <p className="text-gray-500 text-sm leading-relaxed">{spec.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostingDetails;
