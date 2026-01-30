import React from 'react';
import { Zap, Cpu, Send, Brain, Database, CheckCircle2, Activity } from 'lucide-react';

const WorkflowInfographic: React.FC = () => {
    return (
        <div className="relative py-24 px-8 rounded-[4rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 overflow-hidden mb-24 group shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#AA771C 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>
            </div>

            {/* Decorative Blur */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#AA771C]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#AA771C]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6">
                        <Activity className="w-3.5 h-3.5 text-gold animate-pulse" />
                        <span className="text-gold text-[10px] font-black uppercase tracking-[0.3em]">System Architecture</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Visualizing the <span className="text-gold italic">Data Flow</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                        Our n8n automation engine acts as the central nervous system for your business operations,
                        connecting disparate tools into a single, high-performance ecosystem.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative max-w-6xl mx-auto">

                    {/* Node 1: Trigger */}
                    <div className="flex flex-col items-center w-full lg:w-max group/node scale-90 lg:scale-100">
                        <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#AA771C] mb-8 group-hover/node:border-gold/50 group-hover/node:bg-gold/10 group-hover/node:scale-110 transition-all duration-700 relative shadow-2xl">
                            <Zap className="w-12 h-12" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-2xl bg-gold text-black flex items-center justify-center text-xs font-black shadow-[0_0_20px_rgba(170,119,28,0.5)]">01</div>
                            <div className="absolute inset-0 rounded-[2rem] bg-gold/20 animate-ping opacity-0 group-hover/node:opacity-50"></div>
                        </div>
                        <h5 className="text-white font-black text-xl mb-3 tracking-tight">External Input</h5>
                        <p className="text-gray-500 text-sm text-center max-w-[180px] leading-snug">Webhooks, CRM triggers, or scheduled events.</p>
                    </div>

                    {/* Connector 1 */}
                    <div className="hidden lg:flex items-center flex-1 h-[2px] bg-white/10 relative overflow-hidden mx-4 rounded-full">
                        <div className="absolute inset-0 bg-gold w-[40%] h-full animate-flow-right blur-[1px]"></div>
                    </div>

                    {/* Node 2: Logic/AI */}
                    <div className="flex flex-col items-center w-full lg:w-max group/node scale-90 lg:scale-100">
                        <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#AA771C] mb-8 group-hover/node:border-gold/50 group-hover/node:bg-gold/10 group-hover/node:scale-110 transition-all duration-700 relative shadow-2xl">
                            <Brain className="w-12 h-12" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-2xl bg-gold text-black flex items-center justify-center text-xs font-black shadow-[0_0_20px_rgba(170,119,28,0.5)]">02</div>
                        </div>
                        <h5 className="text-white font-black text-xl mb-3 tracking-tight">AI & Cognition</h5>
                        <p className="text-gray-500 text-sm text-center max-w-[180px] leading-snug">Data processing, AI classification, and decision logic.</p>
                    </div>

                    {/* Connector 2 */}
                    <div className="hidden lg:flex items-center flex-1 h-[2px] bg-white/10 relative overflow-hidden mx-4 rounded-full">
                        <div className="absolute inset-0 bg-gold w-[40%] h-full animate-flow-right-delay blur-[1px]"></div>
                    </div>

                    {/* Node 3: Data Integration */}
                    <div className="flex flex-col items-center w-full lg:w-max group/node scale-90 lg:scale-100">
                        <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#AA771C] mb-8 group-hover/node:border-gold/50 group-hover/node:bg-gold/10 group-hover/node:scale-110 transition-all duration-700 relative shadow-2xl">
                            <Database className="w-12 h-12" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-2xl bg-gold text-black flex items-center justify-center text-xs font-black shadow-[0_0_20px_rgba(170,119,28,0.5)]">03</div>
                        </div>
                        <h5 className="text-white font-black text-xl mb-3 tracking-tight">Data Integrity</h5>
                        <p className="text-gray-500 text-sm text-center max-w-[180px] leading-snug">Cloud storage sync & legacy system integration.</p>
                    </div>

                    {/* Connector 3 */}
                    <div className="hidden lg:flex items-center flex-1 h-[2px] bg-white/10 relative overflow-hidden mx-4 rounded-full">
                        <div className="absolute inset-0 bg-gold w-[40%] h-full animate-flow-right-delay-2 blur-[1px]"></div>
                    </div>

                    {/* Node 4: Action */}
                    <div className="flex flex-col items-center w-full lg:w-max group/node scale-90 lg:scale-100">
                        <div className="w-24 h-24 rounded-[2rem] bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-8 group-hover/node:scale-110 transition-all duration-700 relative shadow-[0_0_40px_rgba(170,119,28,0.3)]">
                            <CheckCircle2 className="w-12 h-12" />
                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-2xl bg-gold text-black flex items-center justify-center text-xs font-black">04</div>
                        </div>
                        <h5 className="text-white font-black text-xl mb-3 tracking-tight">Outcome</h5>
                        <p className="text-gray-500 text-sm text-center max-w-[180px] leading-snug">Final execution, delivery, and reporting status.</p>
                    </div>

                </div>

                {/* Mobile Vertical Connectors (only visible on mobile) */}
                <div className="lg:hidden flex flex-col items-center py-4 space-y-40 absolute left-1/2 -translate-x-1/2 top-[16rem] -z-10 h-[calc(100%-400px)]">
                    <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent"></div>
                    <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent"></div>
                    <div className="w-px h-24 bg-gradient-to-b from-gold/50 to-transparent"></div>
                </div>
            </div>

            <style>{`
        @keyframes flow-right {
          0% { transform: translateX(-150%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(250%); opacity: 0; }
        }
        .animate-flow-right {
          animation: flow-right 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-flow-right-delay {
          animation: flow-right 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
          animation-delay: 1s;
        }
        .animate-flow-right-delay-2 {
          animation: flow-right 3s infinite cubic-bezier(0.4, 0, 0.2, 1);
          animation-delay: 2s;
        }
      `}</style>
        </div>
    );
};

export default WorkflowInfographic;
