import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "@/components/Image"
import Link from "@/components/Link"
import { Button } from "@/components/ui/button"

export default function Navbar () {
    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/src/assets/EcoCampus Logo.png"
              alt="EcoCampus Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#Home" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#About" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#Guide" className="text-sm font-medium hover:text-primary">
              Guide
            </Link>
            <Link href="#FAQs" className="text-sm font-medium hover:text-primary">
              FAQs
            </Link>
            <Button asChild>
              <Link href="https://drive.google.com/file/d/1LHVupsK7GvF4O2OeQ2OUbrEEGdYOTDYj/view?usp=sharing">
                Download
              </Link>
            </Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="#Home" className="text-lg font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="#About" className="text-lg font-medium hover:text-primary">
                  About
                </Link>
                <Link href="#Guide" className="text-lg font-medium hover:text-primary">
                  Guide
                </Link>
                <Link href="#FAQs" className="text-lg font-medium hover:text-primary">
                  FAQs
                </Link>
                <Button asChild className="w-full">
                  <Link href="https://drive.google.com/file/d/1LHVupsK7GvF4O2OeQ2OUbrEEGdYOTDYj/view?usp=sharing">
                    Download
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
}