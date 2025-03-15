import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-6 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to embark on your global adventure?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Expand your horizons, learn new languages, and make lifelong friends through YouPursue's exchange programs.
        </p>
        <div className="flex flex-col gap-4 mt-8">
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-black hover:bg-black hover:text-white transition-colors"
          >
            <Link href="/how-it-works">How It Works</Link>
          </Button>
          <Button size="lg" className="bg-emerald-600 hover:bg-black hover:text-white transition-colors">
            <Link href="/apply">Start Your Application</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

