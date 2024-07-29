"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "../../components/ui/pagination"
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

// Sample articles data - replace this with dynamic data fetching as needed
const articles = Array.from({ length: 15 }).map((_, index) => ({
  title: `Blog Post ${index + 1}`,
  date: "July 29, 2024",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
  imageSrc: "/placeholder.svg"
}));

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(articles.length / 5); // Assuming 5 articles per page
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="font-bold">Acme Blog</span>
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
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3 lg:gap-12">
          <div className="col-span-2 space-y-8">
            {articles.slice((currentPage - 1) * 5, currentPage * 5).map((article, index) => (
              <article key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="aspect-video overflow-hidden rounded-lg sm:col-span-1">
                  <img
                    src={article.imageSrc}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-xl font-bold">{article.title}</h2>
                  <p className="mt-2 text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                      Read More
                    </Link>
                    <div className="h-4 w-4 rounded-full bg-muted" />
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
            <div className="flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" onClick={handlePrevPage} disabled={currentPage === 1} />
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
                    <PaginationNext href="#" onClick={handleNextPage} disabled={currentPage === totalPages} />
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
                <nav className="space-y-2">
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Technology
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Design
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Business
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Lifestyle
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
                    Travel
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
                  <Badge variant="outline">Technology</Badge>
                  <Badge variant="outline">Design</Badge>
                  <Badge variant="outline">Business</Badge>
                  <Badge variant="outline">Lifestyle</Badge>
                  <Badge variant="outline">Travel</Badge>
                  <Badge variant="outline">News</Badge>
                  <Badge variant="outline">Marketing</Badge>
                  <Badge variant="outline">Productivity</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-4">
                  <Link href="#" className="flex items-center gap-4" prefetch={false}>
                    <div className="aspect-video w-16 overflow-hidden rounded-lg">
                      <img
                        src="/placeholder.svg"
                        alt="Recent Post"
                        width={150}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Recent Post Title</h3>
                      <p className="text-xs text-muted-foreground">July 29, 2024</p>
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
  )
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
  )
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
  )
}
