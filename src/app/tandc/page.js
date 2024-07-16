/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MmwUghkYTec
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Background from "../../utils/background";
export default function Component() {
  return (
    <div>
      <Background title={"Terms And Condtions"}></Background>
      <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Terms and Conditions
            </h1>
            {/* <p className="mt-2 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p> */}
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Terms of Use{" "}
            </h2>
            <p className="mt-2 text-muted-foreground">
              Accessing and using kisanlink.in, are governed by these Terms of
              Service. By using our website{" "}
              <a href="www.kisanlink.in text-[#38bdf8]">(www.kisanlink.in)</a>,
              you agree to these terms, including our Privacy Policy, which may
              be updated periodically. Please check this page regularly for any
              changes. We reserve the right to review, modify, or withdraw
              services without notice.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Third-Party Websites and Content
            </h2>
            <p className="mt-2 text-muted-foreground">
              We offer links for content sharing on third-party sites like
              Facebook and Instagram. We are not responsible for third-party
              sites listed on our website or their content. We also disclaim
              liability for content posted by users on our site or social media
              platforms.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Messaging Consent{" "}
            </h2>
            <p className="mt-2 text-muted-foreground">
              By using our services, customers agree to receive communications
              via SMS or calls from Kisanlink.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Product Accuracy{" "}
            </h2>
            <p className="mt-2 text-muted-foreground">
              Images on the site are for illustration; colours may vary on
              different screens. We strive for accuracy in descriptions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Law and Jurisdiction{" "}
            </h2>
            <p className="mt-2 text-muted-foreground">
              These terms are governed by Indian laws, and disputes will be
              subject to the exclusive jurisdiction of Hyderabad courts.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Indemnification{" "}
            </h2>
            <p className="mt-2 text-muted-foreground">
              You agree to indemnify us from any third-party claims arising from
              your website use, breaching these terms, or infringing on
              intellectual property rights.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Violation & Termination{" "}
            </h2>
            <p className="mt-2 text-muted-foreground">
              We reserve the right to terminate your website access without
              notice if we believe you have violated these terms. You remain
              liable for ordered services up to termination.
            </p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>Email: info@kisanlink.in</li>
              <li>Phone: +91 73867 27007</li>
              <li>
                Address: Plot no 27, Nandi Hills, Road no 51, Jubliee Hills,
                Hyderabad, 500033
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
