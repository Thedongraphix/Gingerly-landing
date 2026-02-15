import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Privacy Policy | Gingerly",
};

export default function Page() {
    return (
        <section>
            <div
                className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
            >
                <div className="container relative z-10">
                    <div className="flex flex-col gap-5">
                        <h1 className="md:text-6xl text-4xl font-medium text-center">
                            Privacy Policy
                        </h1>
                        <p className="text-center text-muted-foreground text-sm">Last Updated: January 2026</p>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg">1. Our Privacy Commitment</h4>
                                <p className="mt-3 text-muted-foreground">
                                    At Gingerly, we understand that your data is a strategic asset. Our Payment OS is built with a &ldquo;Privacy by Design&rdquo; philosophy. We are committed to protecting the data you entrust to us and ensuring transparency in how we collect, use, and share information.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">2. Information We Collect</h4>
                                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li><strong>Merchant Data:</strong> Name, business registration details, contact information, and bank account details for settlement.</li>
                                    <li><strong>Customer Data:</strong> As part of the collection process, we store customer names, phone numbers (for mobile money/alerts), and transaction histories as provided by the Merchant.</li>
                                    <li><strong>Usage Data:</strong> Information on how you interact with our dashboard to help us optimise OS performance.</li>
                                    <li><strong>Cookies &amp; Analytics:</strong> Non-identifiable data to improve platform performance and user experience.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">3. How We Use Information</h4>
                                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li><strong>Facilitation:</strong> To process transactions and send automated payment reminders.</li>
                                    <li><strong>Verification:</strong> To comply with &ldquo;Know Your Customer&rdquo; (KYC) and Anti-Money Laundering (AML) regulations.</li>
                                    <li><strong>Optimisation:</strong> To provide you with cashflow analytics, churn reports, and financial insights.</li>
                                    <li><strong>Communication:</strong> To send system updates, security alerts, and support responses.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">4. Data Sharing and Disclosure</h4>
                                <p className="mt-3 text-muted-foreground">
                                    We do not sell, rent, or trade your data to third parties. We only share information with:
                                </p>
                                <ul className="mt-2 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li><strong>Financial Partners:</strong> Licensed banks and mobile money operators required to move the funds.</li>
                                    <li><strong>Service Providers:</strong> Secure cloud hosting and communication tools.</li>
                                    <li><strong>Legal Necessity:</strong> If required by law, regulation, or a valid legal process.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">5. Data Security</h4>
                                <p className="mt-3 text-muted-foreground">We employ enterprise-grade security measures, including:</p>
                                <ul className="mt-2 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li><strong>Encryption:</strong> All data in transit and at rest is protected using AES-256 encryption.</li>
                                    <li><strong>Access Control:</strong> Strict internal protocols ensure only authorised personnel have access to sensitive systems.</li>
                                    <li><strong>Compliance:</strong> Our processing partners are PCI-DSS compliant, ensuring the highest standards for card and mobile data. We conduct regular audits and monitoring for potential breaches.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">6. Data Ownership and Retention</h4>
                                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li><strong>Your Data, Your Choice:</strong> You retain ownership of your customer lists and transaction data. You may request an export of your data at any time.</li>
                                    <li><strong>Retention:</strong> We retain data for as long as your account is active or as required by financial record-keeping laws (typically 7 years for tax/audit purposes).</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">7. International Data Transfers</h4>
                                <p className="mt-3 text-muted-foreground">
                                    Where data is transferred across borders, we ensure the receiving party provides an adequate level of protection consistent with global data protection regulations (such as GDPR or local Data Protection Acts).
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">8. Your Rights</h4>
                                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li>Access your data to see what we hold</li>
                                    <li>Correct inaccuracies or update information</li>
                                    <li>Request deletion of data, where legally allowed</li>
                                    <li>Opt out of marketing communications at any time</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">9. Third-Party Links</h4>
                                <p className="mt-3 text-muted-foreground">
                                    Our platform may contain links to third-party services. We are not responsible for their privacy practices. Please review their policies separately.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">10. Changes to the Privacy Policy</h4>
                                <p className="mt-3 text-muted-foreground">
                                    We may update this Privacy Policy to reflect new features or legal requirements. Changes will be posted on the platform, and continued use constitutes acceptance.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">11. Contact Us</h4>
                                <p className="mt-3 text-muted-foreground">
                                    For any questions regarding this policy or to exercise your data rights, please contact our Data Privacy Officer at{" "}
                                    <Link href="mailto:privacy@gingerly.africa" className="text-teal-brand hover:underline">privacy@gingerly.africa</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
