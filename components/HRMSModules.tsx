
import React from 'react';
import {
    Users,
    Calendar,
    Clock,
    UserPlus,
    GraduationCap,
    BarChart,
    Wallet,
    Briefcase,
    Layout,
    CheckCircle2
} from 'lucide-react';

const HRMSModules: React.FC = () => {
    const modules = [
        { name: 'Employee Management', description: 'Centralized digital staff identities.', icon: <Users /> },
        { name: 'Leave Management', description: 'Automated digital approval flows.', icon: <Calendar /> },
        { name: 'AttendanceTracking', description: 'Geo-fenced clock-in & shift monitoring.', icon: <Clock /> },
        { name: 'Recruitment', description: 'End-to-end talent acquisition funnel.', icon: <UserPlus /> },
        { name: 'Professional Training', description: 'Skill tracking and certification management.', icon: <GraduationCap /> },
        { name: 'Performance Appraisal', description: 'KPI-driven reviews and assessments.', icon: <BarChart /> },
        { name: 'Compliant Payroll', description: 'LHDN, EPF & SOCSO auto-processing.', icon: <Wallet /> },
        { name: 'Project Management', description: 'Operational task and load balancing.', icon: <Briefcase /> },
        { name: 'Integrated Planner', description: 'Kanban-based visual workflows.', icon: <Layout /> }
    ];

    return (
        <div className="py-24 border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h4 className="text-gold text-xs font-black uppercase tracking-[0.4em] mb-4">The Unified Dashboard</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-white">Full-Suite <span className="text-gold italic">Modules.</span></h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Pinang Emas HRMS isn't just a database—it's a complete ecosystem designed to automate every facet of your Malaysian workforce operations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((m, idx) => (
                        <div key={idx} className="group relative">
                            <div className="card-glass p-8 rounded-[2.5rem] bg-[#0c0c0c]/80 border-white/5 hover:border-gold/30 hover:bg-[#AA771C]/5 transition-all duration-500 flex flex-col items-start h-full">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-gold border border-white/10 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500 mb-6">
                                    {React.cloneElement(m.icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
                                </div>
                                <h5 className="text-xl font-black text-white mb-2 group-hover:text-gold transition-colors">{m.name}</h5>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">{m.description}</p>

                                <div className="mt-auto flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-gold/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 size={12} className="text-gold" />
                                    <span>Included in Free Tier</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-[3rem] gold-gradient bg-opacity-10 flex flex-col md:flex-row items-center justify-between border border-gold/20">
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-black font-black text-2xl mb-2">Ready to deploy these modules?</h4>
                        <p className="text-black/60 font-bold">Registration takes less than 2 minutes. No credit card required.</p>
                    </div>
                    <button
                        onClick={() => window.open('https://hrms.pinangemas.com.my', '_blank')}
                        className="px-12 py-5 bg-black text-gold rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl"
                    >
                        Get Started Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HRMSModules;
