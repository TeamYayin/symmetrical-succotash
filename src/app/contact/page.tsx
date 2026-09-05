import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Yayin AI Lab",
  description: "Get in touch with Yayin AI Lab.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-24 border-b border-text-secondary bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="You can reach us through any of the mediums below ⬇" 
              kicker="// WE ARE HERE TO HELP" 
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <Card hoverEffect={false} className="bg-bg-primary">
                  <h3 className="font-heading text-xl font-semibold mb-6 text-accent">Contact Details</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-text-secondary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <span className="text-text-secondary">
                        STPI Incubation Center, Kakatiya IT Park,<br/>
                        Hanamkonda, Telangana - 506001
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-text-secondary mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <a href="mailto:ask@yayinailab.cc" className="text-text-secondary hover:text-accent transition-colors">
                        ask@yayinailab.cc
                      </a>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-text-secondary mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <a href="tel:+919182398852" className="text-text-secondary hover:text-accent transition-colors">
                        +91 9182398852
                      </a>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 text-text-secondary mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66A1.66 1.66 0 0 0 7.83 6.2z"/></svg>
                      <a href="https://www.linkedin.com/company/yayinailab/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                        LinkedIn / yayinailab
                      </a>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Formspree Contact Form */}
              <div>
                <Card hoverEffect={false} className="bg-bg-primary">
                  <h3 className="font-heading text-xl font-semibold mb-6">Contact Form</h3>
                  <form action="https://formspree.io/f/mrgyrdgl" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-mono text-sm text-text-secondary mb-2 uppercase">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full bg-bg-secondary border border-text-secondary/50 text-text-primary px-4 py-3 focus:outline-none focus:border-accent transition-colors rounded-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-mono text-sm text-text-secondary mb-2 uppercase">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        className="w-full bg-bg-secondary border border-text-secondary/50 text-text-primary px-4 py-3 focus:outline-none focus:border-accent transition-colors rounded-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-mono text-sm text-text-secondary mb-2 uppercase">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        required 
                        className="w-full bg-bg-secondary border border-text-secondary/50 text-text-primary px-4 py-3 focus:outline-none focus:border-accent transition-colors rounded-none resize-y"
                      ></textarea>
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
