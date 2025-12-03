import { Mail, MessageSquare, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
              Have questions or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href="mailto:contact@acsociety.club"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@acsociety.club
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Discord</p>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Join our server
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                    <Github className="w-5 h-5" />
                  </Button>
                  <a href="https://www.linkedin.com/company/acs-club/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/acs_dz/" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61577770979224"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </a>
                  <Button size="icon" variant="outline" className="hover:border-primary/50 bg-transparent">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.80449210410634!2d3.055095407340236!3d36.749646399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb27da29624c3%3A0x3ba7f072ab3c9345!2z2KfZhNmF2LHZg9iyINin2YTYq9mC2KfZgdmKINi52KjYr9in2YTYsdit2YXZhiDZhNi52YTZiQ!5e0!3m2!1sen!2sdz!4v1764785194967!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
                title="École supérieure en informatique 08 Mai 1945"
              ></iframe>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Advanced Computing Society. Abderrahmane Laala Youth House, Tech Hub, Algiers.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
