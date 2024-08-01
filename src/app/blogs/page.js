"use client";
import Heading from "../components/heading";
import Background from "../../utils/background";
import { useState } from "react";
import Link from "next/link";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../../components/ui/pagination";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

// Sample articles data - replace this with dynamic data fetching as needed
// const articles = Array.from({ length: 15 }).map((_, index) => ({
//   title: `Blog Post`,
//   date: "July 29, 2024",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
// }));

const articles = [
  {
    title:
      "Analysis of the Union Budget 2024: Implications for Agriculture Startups",
    date: "July 31, 2024",
    description:
      "The Union Budget 2024, presented by Finance Minister Nirmala Sitharaman, has sparked considerable debate, particularly regarding its implications for the agriculture sector. With a substantial allocation of ₹1.52 lakh crore, the budget aims to revitalize agriculture and create a conducive environment for innovation, especially for startups.",
    url: "./blog18",
  },
  {
    title: "National Mission on Edible Oils – Oil Palm",
    date: "January 5, 2024",
    description:
      "Introduction: Given the rising local demand for edible oils, the considerable shortfall, and the financial stress caused by imports, the imperative to expand oil palm cultivation becomes a matter of...",
    url: "./blog10",
  },
  {
    title: "SMAM (Submission on Agriculture Mechanization)",
    date: "December 29, 2023",
    description:
      "Introduction to SMAM: The SMAM scheme was launched with the primary objective of promoting agricultural mechanization across the country. Recognizing the significance of mechanized farming in boosting agricultural output, reducing...",
    url: "./blog11",
  },
  {
    title: "Credit Guarantee Fund Scheme for Farmers' Producer Organizations",
    date: "December 4, 2023",
    description:
      "The Credit Guarantee Fund Scheme for Farmer Producer Organizations (CGFFPO) is a crucial initiative by the Indian government aimed at enhancing the financial capabilities and empowerment of Farmer Producer...",
    url: "./blog12",
  },
  {
    title:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises Scheme",
    date: "November 29, 2023",
    description:
      "Pradhan Mantri Formalisation of Micro Food Processing Enterprises Scheme: The Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME) Scheme is a significant initiative by the Indian government to empower...",
    url: "./blog13",
  },
  {
    title: "Market Access Initiative (MAI) Scheme",
    date: "November 16, 2023",
    description:
      "The primary goal of the Market Access Initiative Scheme is to promote India's exports by providing financial assistance to exporters and industry associations. By facilitating market access and addressing...",
    url: "./blog14",
  },
  {
    title: "The Dalit Bandhu Scheme",
    date: "November 9, 2023",
    description:
      "The Dalit Bandhu program, introduced by the Telangana government, is an exceptional effort aimed at improving the economic progress of Scheduled Caste (SC) families. This initiative offers Rs. 10...",
    url: "./blog15",
  },
  {
    title: "Revolutionizing Agriculture: The Power of Farm Mechanization!",
    date: "October 23, 2023",
    description:
      "Introduction: Agriculture has been the backbone of human civilization for thousands of years. However, it has come a long way from the days of manual labour and rudimentary tools. The...",
    url: "./blog16",
  },
  {
    title:
      "Decoding Indian Agritech 3.0: Is It Time To Focus On GM Instead Of GMV?",
    date: "July 18, 2023",
    description:
      "Indian agritech is not about to double back. The last five to seven years saw first-mover startups disrupting agri-input, output, fintech and advisory services. The sector's funding...",
    url: "./blog17",
  },
  {
    title:
      "Harnessing Collective Strength: Exploring the Benefits of Farmer Producer Organizations (FPOs)",
    date: "May 6, 2024",
    description:
      "Within the sphere of agriculture, where individual farmers often face numerous challenges ranging from limited resources to market accessibility, the emergence of Farmer Producer Organizations (FPOs) has...",
    url: "./blog5",
  },
  {
    title:
      "The Role of Farmer Producer Organizations (FPOs) and Regulatory Framework",
    date: "May 1, 2024",
    description:
      "In the dynamic landscape of agriculture, where challenges like market volatility, inadequate infrastructure, and limited access to resources persist, the emergence of Farmer Producer Organizations (FPOs) has been...",
    url: "./blog1",
  },
  {
    title:
      "Transforming Agriculture with Artificial Intelligence: Exploring Innovative Start-ups",
    date: "April 23, 2024",
    description:
      "In recent years, the agricultural sector has witnessed a profound transformation fueled by the integration of artificial intelligence (AI). This marriage of cutting-edge technology with traditional farming practices has...",
    url: "./blog2",
  },
  {
    title:
      "The Hidden Cost of India's Growing GDP: Agricultural Sector Struggles amidst Economic Growth",
    date: "April 19, 2024",
    description:
      "Introduction: The recent release of the National Statistical Office's (NSO) advance estimates for the 2023-24 fiscal year brought with it both good news and a stark reality check. While the...",
    url: "./blog3",
  },
  {
    title: "Government policies and support for FPOs in India",
    date: "June 6, 2024",
    description:
      "The Indian government has been actively promoting and supporting Farmer Producer Organizations (FPOs) to enhance the welfare of small and marginal farmers. The government's initiatives aim to improve the...",
    url: "./blog4",
  },
  {
    title:
      "Empowering Smallholder Farmers: The Transformative Role of Farmer Producer Organizations (FPOs)",
    date: "May 29, 2024",
    description:
      "In the agricultural sector, smallholder farmers often face numerous challenges, including limited access to resources, markets, and decision-making power. However, Farmer Producer Organizations (FPOs) are emerging as powerful agents...",
    url: "./blog6",
  },
  {
    title:
      "Cultivating Sustainability: The Integral Role of Farmer Producer Organizations (FPOs) in Agriculture",
    date: "May 23, 2024",
    description:
      "In an era marked by growing environmental concerns and the imperative for sustainable development, the agricultural sector faces mounting pressure to adopt practices that promote ecological balance, social equity...",
    url: "./blog7",
  },
  {
    title: "Pradhan Mantri Kisan Sampada Yojana (PMKSY)",
    date: "February 23, 2024",
    description:
      "The Central Sector Scheme - SAMPADA (Scheme for Agro-Marine Processing and Development of Agro-Processing Clusters) was approved by the cabinet in May 2017 for the period of 2016-20 (coterminous...",
    url: "./blog8",
  },
  {
    title: "Rashtriya Gokul Mission",
    date: "February 9, 2024",
    description:
      "Description: The Rashtriya Gokul Mission (RGM) has been in operation since December 2014, focusing on the development and preservation of native bovine breeds. This initiative plays a crucial role in...",
    url: "./blog9",
  },
  {
    title: "Regenerative Agriculture: A Sustainable Way to Feed the World",
    date: "July 16, 2022",
    description:
      "What is Regenerative Agriculture? Regenerative agriculture is a progressive form of farming that minimizes the utilization of resources like water and other inputs, while also preventing the deterioration of land ...",
    url: "./videoblog4",
  },
  {
    title: "Top 10 Agritech Startups Empowering Indian Farmers",
    date: "July 16, 2022",
    description:
      "For a long time, the use of technology in the agricultural industry has been limited in India. That is the reason why the agriculture industry in India employs over ...",
    url: "./videoblog1",
  },
  {
    title:
      "How ITC’s Business STRATEGY revolutionised Indian Agriculture? : Business case study",
    date: "July 16, 2022",
    description:
      "Every now and then we all keep hearing about the pathetic state of farmers in our country! and in spite of employing more than 50% of the workforce, the ...",
    url: "./videoblog2",
  },
  {
    title:
      "Introduction to Agriculture | Crop Production and Management | Don’t Memorise",
    date: "July 16, 2022",
    description:
      "What is agriculture? Agriculture forms the most integral part of our lives, as the food we require is obtained from it. Agriculture seems to be a set of easy ...",
    url: "./videoblog3",
  },
];

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / 5); // Assuming 5 articles per page

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Background title={"Blogs"}></Background>

      <div className="flex min-h-screen flex-col bg-background">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container flex h-16 mt-6 items-center justify-between px-4 md:px-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <MountainIcon className="h-6 w-6" />
            </Link>
            <div className="ml-auto flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="search"
                  placeholder="Search..."
                  className="h-9 w-full rounded-md bg-muted pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <Button variant="outline" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </header>
        <main className="container my-12 flex justify-center">
          <div className="grid w-full ml-8 grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:gap-12">
            <div className="col-span-2 space-y-8">
              {articles
                .slice((currentPage - 1) * 5, currentPage * 5)
                .map((article, index) => (
                  <article key={index} className=" gap-4 sm:grid-cols-3">
                    {/* <div className="aspect-video overflow-hidden rounded-lg sm:col-span-1">
                    <img
                      src={article.imageSrc}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div> */}
                    <div className="sm:col-span-2 w-full">
                      <Link
                        href={article.url}
                        className="text-sm font-medium hover:underline"
                        prefetch={false}
                      >
                        <h2 className="text-xl font-bold">{article.title}</h2>
                      </Link>
                      <p className="mt-2 text-muted-foreground">
                        {article.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <Link
                          href={article.url}
                          className="text-sm font-medium hover:underline"
                          prefetch={false}
                        >
                          Read More
                        </Link>
                        <div className="h-4 w-4 rounded-full bg-muted" />
                        <span className="text-sm text-muted-foreground">
                          {article.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                      <PaginationItem key={pageIndex}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === pageIndex + 1}
                          onClick={() => setCurrentPage(pageIndex + 1)}
                        >
                          {pageIndex + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-x-12 space-y-2">
                    <Link
                      href="#"
                      className="text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Blog
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Blogs
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Video Blogs
                    </Link>
                    <Link
                      href="#"
                      className="text-sm font-medium hover:underline"
                      prefetch={false}
                    >
                      Others
                    </Link>
                  </nav>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">#AgriRevolution</Badge>
                    <Badge variant="outline">#agroecology</Badge>
                    <Badge variant="outline">#Audit</Badge>
                    <Badge variant="outline">#CGSFPO</Badge>
                    <Badge variant="outline">
                      #FarmersProducerOrganizations
                    </Badge>
                    <Badge variant="outline">#AgriculturalCredit</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-4">
                    <Link
                      href="#"
                      className="flex items-center gap-4"
                      prefetch={false}
                    >
                      {/* <div className="aspect-video w-16 overflow-hidden rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Recent Post"
                          width={150}
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div> */}
                      <div>
                        <h3 className="text-sm font-medium">
                          Recent Post Title
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          July 29, 2024
                        </p>
                      </div>
                    </Link>
                    {/* Repeat the above Link element for more recent posts */}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
