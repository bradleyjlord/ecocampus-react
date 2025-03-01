import { Button } from "@/components/ui/button"
import Image from "@/components/Image"
import Link from "@/components/Link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section id="Home" className="container relative pt-24 md:pt-32 min-h-[calc(100dvh-4rem)]">
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

        <section id="Guide" className="container py-16 md:py-24 space-y-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">INSTALLATION GUIDE</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Download the Game:</h3>
              <p className="text-muted-foreground">
                Scan the QR code or click the button below to download the game file to your device.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Install the Game:</h3>
              <p className="text-muted-foreground">
                Tap the downloaded file, and confirm the installation when prompted.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Launch the Game:</h3>
              <p className="text-muted-foreground">
                Once installed, locate the EcoCampus icon on your home screen or app list and tap to start playing!
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start pt-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-bold">Enjoy the Game:</h3>
              <p className="text-muted-foreground">
                Begin your adventure and start making a difference for the environment!
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-primary">
                  Note: If your device blocks the installation, ensure that your settings allow installations from
                  unknown sources. Check your device's security settings for assistance.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QR-6alfGd6ErTnCXqgggxmsmGZCqIGNzK.png"
                alt="Download QR Code"
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Button asChild size="lg">
              <Link href="https://drive.google.com/file/d/1LHVupsK7GvF4O2OeQ2OUbrEEGdYOTDYj/view?usp=sharing">
                Download
              </Link>
            </Button>
          </div>
        </section>

        <section id="FAQs" className="container py-16 md:py-24 space-y-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="grid gap-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <Button asChild variant="outline">
              <Link href="https://forms.gle/ywXxyhAPJ17tMHr5A">Report Bugs</Link>
            </Button>
            <Button asChild>
              <Link href="https://forms.gle/vbTSfE3KoxkVbtdK6">Submit Feedback</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EcoCampus. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

const faqs = [
  {
    question: "Is EcoCampus an open-world game?",
    answer:
      "No, EcoCampus is not an open-world game due to time constraints during development. However, it offers an immersive and interactive experience within a structured environment inspired by Cavite State University.",
  },
  {
    question: "Does the game have different levels or challenges?",
    answer:
      "Yes! Players will encounter various missions and challenges designed to educate and engage them in environmental conservation.",
  },
  {
    question: "What kind of missions or tasks will I encounter?",
    answer:
      "Missions include tasks such as picking up and recycling waste, saving water, conserving energy, and making eco-friendly choices to improve the virtual environment.",
  },
  {
    question: "What platforms is the game available on?",
    answer: "EcoCampus is available on mobile devices running Android 6.0 and above.",
  },
  {
    question: "Do I need an internet connection to play?",
    answer: "No, EcoCampus can be played offline, allowing you to enjoy the game anytime, anywhere.",
  },
  {
    question: "How can I report a bug or issue in the game?",
    answer:
      "If you encounter any issues, you can report them through our website or contact us via email or click the report button below.",
  },
  {
    question: "How can I support the project?",
    answer:
      "You can support us by sharing the game, providing feedback, and spreading awareness about environmental conservation. Your support helps us improve the game and reach more players!",
  },
]

