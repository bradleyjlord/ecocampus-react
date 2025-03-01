import { Button } from "./ui/button"
import Link from "./Link"

export default function Faqs() {
    return (
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
  
  