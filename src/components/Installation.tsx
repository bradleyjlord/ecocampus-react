import { Button } from "./ui/button"
import Image from "./Image"
import Link from "./Link"

export default function Installation() {
    return (
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
    )
}