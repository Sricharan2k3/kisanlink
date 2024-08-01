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
            <p className="mt-2 text-muted-foreground">
              Kisanlink is dedicated to safeguarding your privacy. This policy
              outlines how we use and protect any information you provide while
              using our website. We may update this policy periodically, so
              please revisit this page to stay informed. This is effective from
              July 16, 2024.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Information We Collect{" "}
            </h2>
            <p className="text-muted-foreground">
              We may gather:
              <ul className="list-disc list-inside ml-4">
                <li>Name and date of birth</li>
                <li> Contact details like email address</li>
                <li>Demographic data and preferences</li>
                <li> Other information for surveys or offer</li>
              </ul>
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              How We Use Your Information
            </h2>
            <p className="text-muted-foreground">
              We utilize this data to:
              <ul className="list-disc list-inside ml-4">
                <li>Improve our services</li>
                <li>Send promotional emails about new products or offers</li>
                <li>Contact you for market research</li>
                <li>Personalize your website experience</li>
                <li>Security Measures</li>
              </ul>
              Your information's security is crucial. We've implemented suitable
              measures to prevent unauthorized access or disclosure.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Cookie Usage</h2>
            <p className="text-muted-foreground">
              Cookies help tailor website operations to your preferences. We use
              them for statistical analysis to enhance our site's functionality.
              You can manage cookie settings in your browser preferences.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Links to Other Websites
            </h2>
            <p className="text-muted-foreground">
              We may link to other sites; however, we are not responsible for
              their privacy practices. Exercise caution and review their privacy
              statements.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              Your Control Over Information{" "}
            </h2>
            <p className="text-muted-foreground">
              You can:
              <ul className="list-disc list-inside ml-4">
                <li>Opt-out of direct marketing</li>
                <li>Request information held about you</li>
                <li>Correct any inaccuracies in your information</li>
              </ul>
              We don’t sell your information to third parties without consent
              unless required by law.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our privacy policy,
              please contact us at{" "}
              <Link href="#" prefetch={false}>
                info@kisanlink.in
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
