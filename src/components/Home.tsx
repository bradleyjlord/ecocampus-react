import { Button } from "@/components/ui/button"
import Image from "@/components/Image"
import Link from "@/components/Link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-cols justify-center align-center">
      <main className="flex-1 justify-center align-center w-full">
        <section id="Home" className="container relative pt-24 md:pt-32 min-h-[calc(100dvh-4rem)] ">
          <div className="flex flex-col items-center text-center gap-6 pb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              PLAY, LEARN & HAVE FUN LEARNING ABOUT THE ENVIRONMENT
            </h1>
            <p className="text-xl text-muted-foreground max-w-[42rem]">
              EcoCampus is an educational adventure game filled with fun challenges and interactive experiences.
            </p>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoCampus%201-9db00yNMuO8vxasXjd4oGwPWheODOg.png"
              alt="EcoCampus Game Preview"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-3xl"
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" variant="outline">
                <Link href="https://drive.google.com/file/d/1LHVupsK7GvF4O2OeQ2OUbrEEGdYOTDYj/view?usp=sharing">
                  Download Game
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link href="https://drive.usercontent.google.com/u/0/uc?id=10Wo4TyW88OD2Pp_QNZwVyHl3tc_T4N40&export=download">
                  Download Manual
                </Link>
              </Button>
            </div>
          </div>
          <div>
          </div>
        </section>

        <section className="container py-16 md:py-24">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EcoCampus%202-8IPRNoUoYF9SkoqTCYjIWdNoM52Q4o.png"
            alt="Game Features"
            width={1200}
            height={600}
            className="rounded-lg shadow-lg w-full"
          />
        </section>

        <section id="About" className="container py-16 md:py-24">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">ABOUT US</h2>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About-vao5Hesh2gtTZ6zNmJhwKplSsMib4e.png"
              alt="About EcoCampus"
              width={1200}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-4xl"
            />
          </div>
        </section>
      </main>

    </div>
  )
}

