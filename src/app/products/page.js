/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6ccWebbtl8O
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
import { Input } from "../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import Heading from "../components/heading";
export default function Component() {
  const products = [
    {
      id: 1,
      image:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Drone.jpg",
      name: "Equipment",
    },
    {
      id: 2,
      image:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/iot-1.jpg",
      name: "IOT",
    },
    {
      id: 3,
      image:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/solar-1.jpg",
      name: "Solar Products",
    },
    {
      id: 4,
      image:
        "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/ferti.jpg",
      name: "Agri Inputs",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "featured":
            return b.featured - a.featured;
          case "low":
            return a.price - b.price;
          case "high":
            return b.price - a.price;
          case "newest":
            return new Date(b.date) - new Date(a.date);
          default:
            return 0;
        }
      });
  }, [searchTerm, sortBy]);
  return (
    <div>
      {/* <section className="bg-primary-foreground text-primary py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover Our Curated Collection
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                Explore our carefully selected products that combine style,
                quality, and functionality.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="small:py-32  md:py-24 lg:py-32">
        <div className=" items-center text-center justify-center align-middle container px-4 -mt-44 md:px-6">
          <div className="lg:flex lg:flex-col md:flex-row items-start md:items-center lg:gap-4 md:gap-8 mb-8">
            <div className=" lg:ml-4  lg:items-center lg:text-center">
              <Heading value={"Our Product Categories"}></Heading>
              <p className="text-muted-foreground lg:ml-10 small:w-[340px] ">
                Browse our curated selection of products.
              </p>
            </div>
            <div className="lg:flex lg:items-center lg:gap-4 lg:ml-auto small:mt-4 small:w-[340px]">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowUpDownIcon className="w-4 h-4" />
                    Sort by: {sortBy}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]" align="end">
                  <DropdownMenuRadioGroup
                    value={sortBy}
                    onValueChange={setSortBy}
                  >
                    <DropdownMenuRadioItem value="featured">
                      Featured
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="newest">
                      Newest
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">
                      Price: Low to High
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">
                      Price: High to Low
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 medium:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="relative  rounded-lg group small:-mr-4 small:w-[340px] medium:w-[240px] lg:w-full"
              >
                {/* <Link
                  href=""
                  className="absolute inset-0 z-10"
                  prefetch={false}
                >
                  <span className="sr-only">View</span>
                </Link> */}
                <img
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={100}
                  className="  small:pr-6 lg:h-80 medium:h-[100px] small:h-36 lg:ml-56 medium:-ml-36  medium:w-[300px] lg:w-[350px]"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold md:text-xl ml-16  lg:ml-16">
                    {product.name}
                  </h3>
                  {/* <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <h4 className="text-base font-semibold md:text-lg">
                    ${product.price.toFixed(2)}
                  </h4> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}
