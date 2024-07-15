"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Icons components
function FocusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

export default function Component() {
  const router = useRouter();

  useEffect(() => {
    // Check if there is a hash in the URL and scroll to that section on load
    if (router.replace("#")) {
      const id = router.replace.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.replace]);

  return (
    <main className="lg:ml-16 -mt-12 w-full">
      <section id="home" className="py-12 md:py-24 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px] lg:gap-12">
            <div className="-mt-24 space-y-6">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted py-1 text-4xl font-semibold">
                  Our Esteemed Partners
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                    At Kisanlink, our mission is to empower farmers, Farmer Producer Organizations (FPOs), and Kisansathis by providing them with innovative solutions and comprehensive support. Our esteemed partners play a crucial role in helping us deliver top-notch services and solutions to agricultural communities. Together, we are transforming the agricultural landscape and fostering sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/store-web.png"
              width="500"
              height="310"
              alt="Home Image"
              className="mx-auto aspect-video h-[400px] rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-24 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] xl:grid-cols-[550px_1fr] lg:gap-12">
            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Copy-of-kisanlink-certificate-1.png"
              width="550"
              height="310"
              alt="channelPartners"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="-mt-24 space-y-6">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted py-1 text-4xl font-semibold">
                  Channel Partners
                </div>
                <div className="space-y-2">
                  <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                    Our channel partners are essential in extending our reach and impact by managing experience centers that serve as hubs for selling products and services to farmers. These centers are strategically located to maximize accessibility and convenience for the farming community.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted py-1 text-4xl font-semibold">
                    JK University
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
                      Strategic Partnership
                    </h2>
                    <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                      Kisanlink is proud to announce its strategic partnership with JKU University, a leading institution in agricultural education and research. This partnership aims to empower agri students through cutting-edge training programs and workshops.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
                      Training Programs
                    </h2>
                    <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                      JKU University and Kisanlink have collaborated to develop comprehensive training programs for farmers, focusing on sustainable farming practices, precision agriculture, and agribusiness management.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
                      Certification
                    </h2>
                    <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                      Participants in these training programs receive certification, demonstrating their proficiency and readiness to apply their skills in real-world scenarios. This certification not only enhances their credibility but also opens up new opportunities for career advancement.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
                      EVERGREEN ENERGY ENTERPRISES
                    </h2>
                    <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                      Kisanlink has partnered with Evergreen Energy Enterprises to provide sustainable energy solutions to farmers and rural communities. This partnership aims to reduce carbon footprint and promote eco-friendly agricultural practices.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-2xl lg:text-2xl">
                      RELIANCE FOUNDATION
                    </h2>
                    <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                      Kisanlink has partnered with Reliance Foundation to support rural development initiatives and promote sustainable agriculture practices. This partnership aims to empower farmers and rural communities through capacity building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-24 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] xl:grid-cols-[1fr_550px] lg:gap-12">
            <div className="-mt-24 space-y-6">
              <div className="space-y-2">
               
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted py-1 text-4xl font-semibold">
                    Join Us in Transforming Agriculture
                  </div>
                  <div className="space-y-2">
                    <p className="max-w-[600px] text-lg md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
                      We are always looking to expand our network of partners who share our vision of empowering the agricultural community. If you are interested in partnering with us, please reach out to us at info@kisanlink.in or visit our website at our d33hqsk72xx8w2.cloudfront.net. Together, we can make a significant impact on the agricultural sector, driving growth, sustainability, and prosperity for farmers and rural communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/partners-customer-support.png"
              width="500"
              height="310"
              alt="Services Image"
              className="mx-auto aspect-video h-[400px] rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
