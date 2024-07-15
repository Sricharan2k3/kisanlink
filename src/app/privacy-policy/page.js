/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mUAV5xrJAam
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import Link from "next/link";
import Background from "../../utils/background";
export default function Component() {
  return (
    <div>
      <Background title={"Privacy Policy"}></Background>
      <div className="w-full max-w-3xl mx-auto -mt-16 px-4 md:px-6 py-12 md:py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-2 text-muted-foreground"></p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Data Collection
            </h2>
            <p className="text-muted-foreground">
              We collect certain personal information from you when you use our
              website or services, such as your name, email address, and any
              other information you provide to us. We may also collect
              information about your usage of our website, including your IP
              address, browser type, and referring URLs.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Data Usage</h2>
            <p className="text-muted-foreground">
              We use the personal information we collect to provide and improve
              our services, to communicate with you, and to comply with
              applicable laws and regulations. We may also use your information
              for marketing purposes, such as sending you newsletters or
              promotional offers, but we will always give you the option to
              opt-out of these communications.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              User Rights and Data Retention
            </h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal
              information at any time. You can also request that we limit or
              stop processing your data, or export your data in a
              machine-readable format. We will retain your personal information
              for as long as necessary to fulfill the purposes outlined in this
              policy, or as required by law.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices or the content of
              these third-party services. We encourage you to review the privacy
              policies of any third-party services you use.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Changes to this Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on our
              website. We encourage you to review this policy periodically for
              any updates.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our privacy policy,
              please contact us at{" "}
              <Link href="#" prefetch={false}>
                privacy@example.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
