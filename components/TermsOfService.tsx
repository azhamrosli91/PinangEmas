
import React from 'react';
import { ArrowLeft, Scale, Shield, FileText } from 'lucide-react';

interface TermsOfServiceProps {
    onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen py-24 bg-dark-surface">
            <div className="container mx-auto px-6 max-w-5xl">
                <button
                    onClick={onBack}
                    className="flex items-center text-[#AA771C] hover:text-[#101010] transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="mb-16">
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 rounded-2xl bg-[#AA771C]/10">
                            <Scale className="w-8 h-8 text-[#AA771C]" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black text-[#101010]">Terms of Service</h1>
                            <p className="text-[#101010]/65 mt-2">Last Updated: February 3, 2026</p>
                        </div>
                    </div>
                </div>

                <div className="prose  max-w-none">
                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />
                            1. Agreement to Terms
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            By accessing and using the services provided by Pinang Emas IT Solutions ("Company", "we", "us", or "our"),
                            you agree to be bound by these Terms of Service and all applicable laws and regulations of Malaysia.
                            If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            These terms are governed by the laws of Malaysia, including but not limited to the Communications and
                            Multimedia Act 1998, Personal Data Protection Act 2010 (PDPA), and Computer Crimes Act 1997.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">2. Services Provided</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Pinang Emas provides the following IT services exclusively for clients within Malaysia:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>Custom Software Development (Web Design, Web Development, Mobile Applications)</li>
                            <li>Artificial Intelligence Solutions</li>
                            <li>n8n Workflow Automation</li>
                            <li>Human Resource Management Systems (HRMS)</li>
                            <li>Web Hosting Services</li>
                            <li>Smart Home/Office Automation</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            All services are provided on an online basis. We do not maintain physical office locations for client visits.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">3. Service Agreements and Quotations</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">3.1 Quotations:</strong> All project quotations are valid for 30 days from the date of issue
                            unless otherwise specified. Prices are quoted in Malaysian Ringgit (RM) and are subject to applicable taxes including
                            Service Tax as per Malaysian tax regulations.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">3.2 Project Scope:</strong> The scope of work will be clearly defined in a separate
                            Statement of Work (SOW) or Service Agreement. Any changes to the agreed scope may result in additional charges.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">3.3 Payment Terms:</strong> Payment terms will be specified in individual service
                            agreements. Standard terms include deposit requirements and milestone-based payments. Late payments may incur
                            interest charges as permitted under Malaysian law.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">4. Intellectual Property Rights</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">4.1 Client Ownership:</strong> Upon full payment, clients will own the final deliverables
                            as specified in the service agreement. This includes custom code, designs, and documentation created specifically for the client.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">4.2 Company Retention:</strong> We retain ownership of our proprietary frameworks, tools,
                            methodologies, and pre-existing intellectual property used in delivering services.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">4.3 Third-Party Licenses:</strong> Some solutions may incorporate third-party software
                            or services. Clients are responsible for obtaining and maintaining necessary licenses for such components.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">5. Confidentiality and Data Protection</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We are committed to protecting client confidentiality in accordance with the Personal Data Protection Act 2010 (PDPA)
                            and other applicable Malaysian laws.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">5.1 Non-Disclosure:</strong> We will not disclose confidential client information to
                            third parties without explicit consent, except as required by Malaysian law.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">5.2 Data Security:</strong> We implement industry-standard security measures to protect
                            client data. However, no system is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">6. Warranties and Disclaimers</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">6.1 Service Warranty:</strong> We warrant that services will be performed with reasonable
                            skill and care in accordance with industry standards in Malaysia.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">6.2 No Guarantee of Results:</strong> While we strive for excellence, we do not guarantee
                            specific business outcomes or results from our services.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">6.3 Third-Party Services:</strong> We are not responsible for failures or issues arising
                            from third-party services, platforms, or infrastructure beyond our control.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">7. Limitation of Liability</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            To the maximum extent permitted by Malaysian law, our total liability for any claims arising from our services
                            shall not exceed the total fees paid by the client for the specific service giving rise to the claim.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but
                            not limited to loss of profits, data, or business opportunities.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">8. Service Level Agreements (SLA)</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">8.1 Hosting Services:</strong> For hosting services, we target 99.9% uptime.
                            Scheduled maintenance will be communicated in advance.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">8.2 Support Response:</strong> Support response times will be specified in individual
                            service agreements. Standard business hours are Monday to Friday, 9:00 AM to 6:00 PM (Malaysia Time), excluding
                            Malaysian public holidays.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">8.3 Force Majeure:</strong> We are not liable for delays or failures due to circumstances
                            beyond our reasonable control, including natural disasters, government actions, or telecommunications failures.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">9. Termination</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">9.1 Termination by Client:</strong> Clients may terminate services by providing
                            30 days written notice. Fees for work completed up to the termination date remain payable.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">9.2 Termination by Company:</strong> We reserve the right to terminate services
                            immediately if the client breaches these terms, fails to make payments, or engages in illegal activities.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">9.3 Effect of Termination:</strong> Upon termination, we will deliver all completed
                            work upon receipt of outstanding payments. Access to hosted services may be suspended or terminated.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">10. Compliance with Malaysian Laws</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Clients agree to use our services in compliance with all applicable Malaysian laws and regulations, including:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>Communications and Multimedia Act 1998</li>
                            <li>Personal Data Protection Act 2010 (PDPA)</li>
                            <li>Computer Crimes Act 1997</li>
                            <li>Copyright Act 1987</li>
                            <li>Digital Signature Act 1997</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            Clients shall not use our services for any illegal purposes, including but not limited to fraud, defamation,
                            or distribution of prohibited content.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">11. Dispute Resolution</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">11.1 Negotiation:</strong> In the event of any dispute, both parties agree to
                            first attempt to resolve the matter through good faith negotiations.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            <strong className="text-[#101010]">11.2 Mediation:</strong> If negotiation fails, parties may agree to mediation
                            before pursuing legal action.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            <strong className="text-[#101010]">11.3 Jurisdiction:</strong> These terms are governed by Malaysian law.
                            Any legal proceedings shall be subject to the exclusive jurisdiction of the Malaysian courts.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">12. Modifications to Terms</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon
                            posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            For significant changes, we will make reasonable efforts to notify existing clients via email or through our website.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8 bg-[#AA771C]/10 border-2 border-[#AA771C]/30">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-[#AA771C]" />
                            Contact Information
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            For questions regarding these Terms of Service, please contact us:
                        </p>
                        <div className="space-y-2 text-[#101010]/75">
                            <p><strong className="text-[#101010]">Email:</strong> sales.pinangemas@gmail.com</p>
                            <p><strong className="text-[#101010]">WhatsApp:</strong> +6014-6595979</p>
                            <p><strong className="text-[#101010]">Service Area:</strong> Malaysia Only</p>
                        </div>
                    </div>

                    <div className="text-center text-[#101010]/50 text-sm italic mt-12">
                        <p>By using Pinang Emas IT Solutions services, you acknowledge that you have read, understood,
                            and agree to be bound by these Terms of Service.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
