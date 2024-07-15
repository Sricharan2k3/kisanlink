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
              User Agreement
            </h2>
            <p className="mt-2 text-muted-foreground">
              By accessing or using our website, you agree to be bound by these
              terms and conditions and our privacy policy. If you do not agree
              with any part of these terms, please do not use our website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Intellectual Property Rights
            </h2>
            <p className="mt-2 text-muted-foreground">
              The content, design, and all intellectual property on our website
              are owned by [Company Name] and are protected by copyright,
              trademark, and other intellectual property laws. You may not
              modify, copy, distribute, transmit, display, reproduce, or create
              derivative works from our website without our prior written
              consent.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Limitations of Liability
            </h2>
            <p className="mt-2 text-muted-foreground">
              We will not be liable for any indirect, special, incidental, or
              consequential damages arising out of or in connection with your
              use of our website. Our total liability to you for all claims
              shall not exceed $100. Some jurisdictions do not allow the
              exclusion of certain warranties or the limitation or exclusion of
              liability for incidental or consequential damages, so some of the
              above limitations may not apply to you.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Governing Law
            </h2>
            <p className="mt-2 text-muted-foreground">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of [Jurisdiction], without giving effect
              to any principles of conflicts of law.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Contact Information
            </h2>
            <p className="mt-2 text-muted-foreground">
              If you have any questions or concerns about these terms and
              conditions, please contact us at:
            </p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>Email: support@[company].com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, Anytown USA 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
