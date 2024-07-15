import SubheadingDescription from "./subheading";
import ImageComponent from "./image";
import QuoteComponent from "./quote";
import React from "react";
import CommentForm from "./comment";
import CategoryList from "./category";
import TagList from "./taglist";
import Footer from "./footer";
import Background from "../../utils/background";

export default function Component() {
  return (
    <>
      <Background title={"Blogs"} />
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Future of Web Development
          </h1>
          <p className="text-muted-foreground">
            Exploring the latest trends and technologies shaping the web.
          </p>

          <SubheadingDescription
            subheading="Serverless Architecture"
            text="The rise of serverless computing has revolutionized the way we build and deploy web applications. By offloading infrastructure management to cloud providers, developers can focus on writing business logic and delivering features faster than ever before."
          />
          <ImageComponent
            src="/placeholder.svg"
            alt="Serverless Architecture"
          />

          <SubheadingDescription
            subheading="Headless CMS"
            text="Headless content management systems (CMS) decouple the content from the presentation layer, allowing for greater flexibility and scalability. This approach enables developers to build custom front-end experiences while leveraging the powerful content management capabilities of a headless CMS."
          />
          <ImageComponent src="/placeholder.svg" alt="Headless CMS" />

          <SubheadingDescription
            subheading="Static Site Generators"
            text="Static site generators (SSGs) have become increasingly popular for building fast, secure, and scalable websites. By pre-rendering content at build time, SSGs eliminate the need for server-side rendering, resulting in lightning-fast load times and improved performance."
          />
          <ImageComponent src="/placeholder.svg" alt="Static Site Generators" />

          <QuoteComponent
            quote="The future of web development is in the cloud, where developers can focus on building amazing experiences without worrying about infrastructure."
            author="John Doe, CTO at Acme Inc."
          />
        </article>

        <div className="container mx-auto p-6">
          <CommentForm />
          <CategoryList />
          <TagList />
          <Footer />
        </div>
      </div>
    </>
  );
}
