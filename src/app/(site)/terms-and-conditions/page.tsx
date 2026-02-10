import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Terms of Service | Gingerly",
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
                            Terms of Service
                        </h1>
                        <p className="text-center text-muted-foreground text-sm">Last Updated: January 2026</p>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg">1. Introduction</h4>
                                <p className="mt-3 text-muted-foreground">
                                    Welcome to Gingerly. By accessing or using our platform, website, and services (collectively, the &ldquo;Payment Operating System&rdquo; or &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between Gingerly (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) and the entity or individual (&ldquo;Merchant,&rdquo; &ldquo;User,&rdquo; or &ldquo;you&rdquo;) utilising our services.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">2. Scope of Service</h4>
                                <p className="mt-3 text-muted-foreground">
                                    Gingerly provides a software-as-a-service (SaaS) platform designed to automate, schedule, and reconcile recurring payments. Gingerly is a technical service provider and not a bank, money transmitter, or fiduciary. All financial transfers are processed through licensed third-party financial institutions, mobile money providers, and payment gateways.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">3. Account Obligations</h4>
                                <div className="mt-3 space-y-3 text-muted-foreground">
                                    <p><strong>Eligibility:</strong> You must be a validly organised business or a legal adult (18 years old) capable of entering into contracts to create an account. The Service is intended for legitimate business purposes only.</p>
                                    <p><strong>Accuracy:</strong> You are responsible for providing accurate and up-to-date information regarding your business, bank accounts, and customer data. By using Gingerly, you represent that all information you provide is accurate and complete.</p>
                                    <p><strong>Security:</strong> You are responsible for maintaining the confidentiality of your account credentials. All activities occurring under your account are your responsibility. You agree to notify Gingerly immediately of any unauthorised use or security breach.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">4. Payment Processing &amp; Settlements</h4>
                                <div className="mt-3 space-y-3 text-muted-foreground">
                                    <p><strong>Authorisations:</strong> By using the Service, you authorise Gingerly to act as your technical agent to facilitate payment instructions to your customers.</p>
                                    <p><strong>Settlement:</strong> Funds collected on your behalf are held by regulated partners and settled into your designated bank account according to the schedule agreed upon.</p>
                                    <p><strong>Failed Transactions:</strong> Gingerly is not responsible for losses resulting from insufficient funds, expired cards, or network failures on the customer&apos;s side, though we provide tools (Smart Retries) to mitigate these occurrences.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">5. Fees and Taxes</h4>
                                <div className="mt-3 space-y-3 text-muted-foreground">
                                    <p><strong>Service Fees:</strong> You agree to pay the fees outlined in your specific pricing plan or service agreement. Fees are generally deducted from the transaction amount or billed monthly. Gingerly reserves the right to adjust fees with prior notice to comply with market or regulatory requirements.</p>
                                    <p><strong>Taxes:</strong> You are responsible for determining which, if any, taxes apply to the payments you collect.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">6. User Responsibilities</h4>
                                <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
                                    <li>Ensure that all customer data is accurate, up-to-date, and obtained legally.</li>
                                    <li>Comply with all applicable laws and regulations, including financial and data protection requirements.</li>
                                    <li>Avoid misuse, fraudulent activity, or actions that disrupt the platform.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">7. Prohibited Use</h4>
                                <p className="mt-3 text-muted-foreground">
                                    You may not use Gingerly for any illegal activities, including but not limited to money laundering, fraud, or the sale of prohibited goods/services. We reserve the right to suspend any account suspected of violating local or international financial regulations.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">8. Intellectual Property</h4>
                                <p className="mt-3 text-muted-foreground">
                                    All software, designs, content and branding associated with the Gingerly Payment OS are the exclusive property of Gingerly. You are granted a limited, non-exclusive license to use the platform for its intended business purposes. Users may not copy, modify, distribute, or create derivative works without explicit permission.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">9. Termination</h4>
                                <div className="mt-3 space-y-3 text-muted-foreground">
                                    <p>Gingerly may suspend or terminate accounts for violation of these terms, misuse of the platform, or legal requirements.</p>
                                    <p>Users may terminate their account at any time by contacting support; however, fees already incurred remain payable.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">10. Limitation of Liability</h4>
                                <div className="mt-3 space-y-3 text-muted-foreground">
                                    <p>To the maximum extent permitted by law, Gingerly shall not be liable for any indirect, incidental, or consequential damages arising from the use of our Service, including loss of profits or data.</p>
                                    <p>We are not liable for delays or failures caused by external payment processors, banks, mobile networks, or force majeure events.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">11. Indemnification</h4>
                                <p className="mt-3 text-muted-foreground">
                                    You agree to indemnify, defend, and hold harmless Gingerly and its affiliates from any claims, damages, or losses arising from your use of the Service, violation of these Terms, or infringement of third-party rights.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">12. Modifications</h4>
                                <p className="mt-3 text-muted-foreground">
                                    Gingerly may update or modify these Terms at any time. Notice of changes will be posted on the platform. Continued use of the Service constitutes acceptance of the updated Terms.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg">13. Contact</h4>
                                <p className="mt-3 text-muted-foreground">
                                    For questions regarding these Terms, please contact:{" "}
                                    <Link href="mailto:support@gingerly.africa" className="text-teal-500 hover:underline">support@gingerly.africa</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
