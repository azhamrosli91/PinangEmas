
import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
                            <Shield className="w-8 h-8 text-[#AA771C]" />
                        </div>
                        <div>
                            <h1 className="text-5xl font-black text-[#101010]">Privacy Policy</h1>
                            <p className="text-[#101010]/65 mt-2">Last Updated: February 3, 2026</p>
                        </div>
                    </div>
                    <p className="text-[#101010]/75 text-lg leading-relaxed">
                        This Privacy Policy is compliant with the Personal Data Protection Act 2010 (PDPA) of Malaysia and
                        explains how Pinang Emas IT Solutions collects, uses, discloses, and protects your personal information.
                    </p>
                </div>

                <div className="prose  max-w-none">
                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <FileText className="w-6 h-6 mr-3 text-[#AA771C]" />
                            1. Introduction and Commitment
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Pinang Emas IT Solutions ("we", "us", "our") is committed to protecting your privacy and ensuring
                            the security of your personal data in accordance with the Personal Data Protection Act 2010 (PDPA)
                            and other applicable Malaysian laws.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            This Privacy Policy applies to all personal data collected through our website, services, and
                            communications. By using our services, you consent to the collection and use of your personal
                            data as described in this policy.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Database className="w-6 h-6 mr-3 text-[#AA771C]" />
                            2. Personal Data We Collect
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We collect personal data that you provide to us directly and automatically when you use our services:
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">2.1 Information You Provide</h3>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Contact Information:</strong> Name, email address, phone number, company name</li>
                            <li><strong className="text-[#101010]">Business Information:</strong> Company registration details, business requirements, project specifications</li>
                            <li><strong className="text-[#101010]">Financial Information:</strong> Billing address, payment information (processed through secure third-party payment gateways)</li>
                            <li><strong className="text-[#101010]">Communication Records:</strong> Emails, messages, support tickets, and other correspondence</li>
                            <li><strong className="text-[#101010]">Project Data:</strong> Files, documents, and information you provide for service delivery</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">2.2 Automatically Collected Information</h3>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Technical Data:</strong> IP address, browser type, device information, operating system</li>
                            <li><strong className="text-[#101010]">Usage Data:</strong> Pages visited, time spent on pages, navigation patterns</li>
                            <li><strong className="text-[#101010]">Cookies:</strong> Session cookies and analytics cookies (see Section 8 for details)</li>
                        </ul>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Eye className="w-6 h-6 mr-3 text-[#AA771C]" />
                            3. How We Use Your Personal Data
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We process your personal data for the following lawful purposes under PDPA:
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">3.1 Service Delivery</h3>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>To provide, maintain, and improve our IT services</li>
                            <li>To communicate with you about projects and services</li>
                            <li>To process payments and manage billing</li>
                            <li>To provide technical support and customer service</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">3.2 Business Operations</h3>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>To analyze and improve our services and website performance</li>
                            <li>To send service updates, security alerts, and administrative messages</li>
                            <li>To comply with legal obligations and regulatory requirements</li>
                            <li>To protect against fraud, security breaches, and illegal activities</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">3.3 Marketing (With Consent)</h3>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>To send promotional materials about our services (only with your explicit consent)</li>
                            <li>To inform you about new features, updates, and special offers</li>
                            <li>You may opt-out of marketing communications at any time</li>
                        </ul>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">4. Legal Basis for Processing (PDPA Compliance)</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Under the Personal Data Protection Act 2010, we process your personal data based on:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Consent:</strong> You have given explicit consent for specific processing purposes</li>
                            <li><strong className="text-[#101010]">Contract Performance:</strong> Processing is necessary to fulfill our service agreements</li>
                            <li><strong className="text-[#101010]">Legal Obligation:</strong> Processing is required to comply with Malaysian laws</li>
                            <li><strong className="text-[#101010]">Legitimate Interests:</strong> Processing is necessary for our legitimate business interests,
                                provided it does not override your rights</li>
                        </ul>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">5. Data Sharing and Disclosure</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We do not sell your personal data. We may share your information only in the following circumstances:
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">5.1 Service Providers</h3>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We may share data with trusted third-party service providers who assist in our operations, such as:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>Cloud hosting providers (for data storage and hosting services)</li>
                            <li>Payment processors (for secure payment processing)</li>
                            <li>Email service providers (for communication purposes)</li>
                            <li>Analytics providers (for website performance analysis)</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            All service providers are contractually obligated to protect your data and use it only for specified purposes.
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">5.2 Legal Requirements</h3>
                        <p className="text-[#101010]/75 leading-relaxed">
                            We may disclose your personal data if required by Malaysian law, court order, or government authority,
                            or to protect our legal rights and safety.
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">5.3 Business Transfers</h3>
                        <p className="text-[#101010]/75 leading-relaxed">
                            In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the
                            acquiring entity, subject to the same privacy protections.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Lock className="w-6 h-6 mr-3 text-[#AA771C]" />
                            6. Data Security Measures
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We implement industry-standard security measures to protect your personal data:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Encryption:</strong> Data transmission is encrypted using SSL/TLS protocols</li>
                            <li><strong className="text-[#101010]">Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                            <li><strong className="text-[#101010]">Secure Storage:</strong> Data stored on secure servers with regular backups</li>
                            <li><strong className="text-[#101010]">Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                            <li><strong className="text-[#101010]">Employee Training:</strong> Staff trained on data protection and confidentiality</li>
                            <li><strong className="text-[#101010]">Incident Response:</strong> Procedures in place for data breach notification and response</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            While we strive to protect your data, no system is completely secure. We cannot guarantee absolute security
                            but will notify you promptly of any data breaches as required by PDPA.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <UserCheck className="w-6 h-6 mr-3 text-[#AA771C]" />
                            7. Your Rights Under PDPA
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            Under the Personal Data Protection Act 2010, you have the following rights:
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">7.1 Right to Access</h3>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            You have the right to request access to your personal data that we hold. We will provide a copy of your
                            data in a commonly used format within 21 days of your request.
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">7.2 Right to Correction</h3>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            You may request correction of inaccurate or incomplete personal data. We will update your information
                            promptly upon verification.
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">7.3 Right to Withdraw Consent</h3>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            You may withdraw your consent for data processing at any time. However, this may affect our ability to
                            provide certain services.
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">7.4 Right to Limit Processing</h3>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            You may request that we limit the processing of your personal data in certain circumstances.
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">7.5 Right to Data Portability</h3>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            You may request a copy of your personal data in a structured, machine-readable format for transfer to
                            another service provider.
                        </p>

                        <p className="text-[#101010]/75 leading-relaxed mt-6">
                            To exercise any of these rights, please contact us at <strong className="text-[#101010]">sales.pinangemas@gmail.com</strong>.
                            We may require verification of your identity before processing your request.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">8. Cookies and Tracking Technologies</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We use cookies and similar tracking technologies to enhance your experience:
                        </p>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">8.1 Types of Cookies</h3>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Essential Cookies:</strong> Required for website functionality and security</li>
                            <li><strong className="text-[#101010]">Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                            <li><strong className="text-[#101010]">Preference Cookies:</strong> Remember your settings and preferences</li>
                        </ul>

                        <h3 className="text-xl font-bold text-[#101010] mt-6 mb-3">8.2 Managing Cookies</h3>
                        <p className="text-[#101010]/75 leading-relaxed">
                            You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">9. Data Retention</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li><strong className="text-[#101010]">Active Clients:</strong> Data retained for the duration of the service relationship</li>
                            <li><strong className="text-[#101010]">Completed Projects:</strong> Project data retained for 7 years for legal and tax compliance</li>
                            <li><strong className="text-[#101010]">Marketing Data:</strong> Retained until you withdraw consent or request deletion</li>
                            <li><strong className="text-[#101010]">Legal Requirements:</strong> Some data may be retained longer to comply with Malaysian legal obligations</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            After the retention period, we will securely delete or anonymize your personal data.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">10. International Data Transfers</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            As we operate exclusively within Malaysia, your personal data is primarily stored and processed within Malaysia.
                            However, some of our service providers (such as cloud hosting services) may store data in servers located outside Malaysia.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            When data is transferred internationally, we ensure that appropriate safeguards are in place to protect your
                            data in accordance with PDPA requirements, including contractual clauses and security measures.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">11. Children's Privacy</h2>
                        <p className="text-[#101010]/75 leading-relaxed">
                            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal
                            data from children. If we become aware that we have collected data from a child without parental consent,
                            we will take steps to delete such information promptly.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">12. Changes to This Privacy Policy</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                            We will notify you of significant changes by:
                        </p>
                        <ul className="list-disc list-inside text-[#101010]/75 space-y-2 ml-4">
                            <li>Posting the updated policy on our website with a new "Last Updated" date</li>
                            <li>Sending email notifications to registered clients for material changes</li>
                            <li>Obtaining fresh consent where required by law</li>
                        </ul>
                        <p className="text-[#101010]/75 leading-relaxed mt-4">
                            Your continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4">13. Complaints and Enforcement</h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            If you have concerns about how we handle your personal data, please contact us first. We will investigate
                            and respond to your complaint promptly.
                        </p>
                        <p className="text-[#101010]/75 leading-relaxed">
                            If you are not satisfied with our response, you have the right to lodge a complaint with the Personal Data
                            Protection Commissioner of Malaysia:
                        </p>
                        <div className="mt-4 p-4 bg-white/5 rounded-xl">
                            <p className="text-[#101010]/75"><strong className="text-[#101010]">Personal Data Protection Department</strong></p>
                            <p className="text-[#101010]/75">Ministry of Communications and Digital</p>
                            <p className="text-[#101010]/75">Website: <a href="http://www.pdp.gov.my" className="text-[#AA771C] hover:underline">www.pdp.gov.my</a></p>
                        </div>
                    </div>

                    <div className="card-glass p-8 rounded-3xl mb-8 bg-[#AA771C]/10 border-2 border-[#AA771C]/30">
                        <h2 className="text-2xl font-bold text-[#101010] mb-4 flex items-center">
                            <Shield className="w-6 h-6 mr-3 text-[#AA771C]" />
                            Contact Us About Privacy
                        </h2>
                        <p className="text-[#101010]/75 leading-relaxed mb-4">
                            If you have questions about this Privacy Policy or wish to exercise your rights under PDPA, please contact us:
                        </p>
                        <div className="space-y-2 text-[#101010]/75">
                            <p><strong className="text-[#101010]">Data Protection Officer</strong></p>
                            <p><strong className="text-[#101010]">Email:</strong> sales.pinangemas@gmail.com</p>
                            <p><strong className="text-[#101010]">WhatsApp:</strong> +6014-6595979</p>
                            <p><strong className="text-[#101010]">Response Time:</strong> Within 21 days as per PDPA requirements</p>
                        </div>
                    </div>

                    <div className="text-center text-[#101010]/50 text-sm italic mt-12">
                        <p>This Privacy Policy is compliant with the Personal Data Protection Act 2010 (PDPA) of Malaysia.</p>
                        <p className="mt-2">By using our services, you acknowledge that you have read and understood this Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
