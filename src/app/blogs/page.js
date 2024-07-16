/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9n45mFQI1t7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import Link from "next/link"

import Background from "../../utils/background"

export default function Component() {
  return (

    <div>
        <Background title={"Our Blogs"}/>

  
    <div className="min-h-dvh flex flex-col ">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:pl-24">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <img src="/blog.jpg" alt="Farm" className="h-full w-full object-cover object-center" />
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Coming Soon</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cultivate Your Knowledge</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the latest insights and trends in sustainable agriculture with our upcoming blogs. Sign up now
                to be the first to know when we launch.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                  <Button type="submit">Notify Me</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We'll never share your email. Read our{" "}
                  <Link href="/privacy-policy" className="underline underline-offset-2" prefetch={false}>
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
    </div>
  )
}