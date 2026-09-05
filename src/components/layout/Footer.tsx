import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-text-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="font-heading font-semibold text-xl tracking-tight mb-4 inline-block">
              Yayin AI Lab
            </Link>
            <p className="text-text-secondary text-sm max-w-xs mt-2">
              Building reliable software. Researching language technology.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-primary mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-sm text-text-secondary hover:text-accent transition-colors">Web Development</Link></li>
                <li><Link href="/services" className="text-sm text-text-secondary hover:text-accent transition-colors">IT Enablement</Link></li>
                <li><Link href="/services" className="text-sm text-text-secondary hover:text-accent transition-colors">EdTech SaaS</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-mono text-sm uppercase tracking-wider mb-6 text-text-primary">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-text-secondary hover:text-accent transition-colors">Inside the Lab</Link></li>
                <li><Link href="/services" className="text-sm text-text-secondary hover:text-accent transition-colors">Capabilities</Link></li>
                <li><Link href="/portfolio" className="text-sm text-text-secondary hover:text-accent transition-colors">Shipped Work</Link></li>
                <li><Link href="/contact" className="text-sm text-text-secondary hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-primary mb-4">
                Social
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.linkedin.com/company/yayinailab/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/teamyayin" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@yayinailab.cc" className="text-sm text-text-secondary hover:text-accent transition-colors">
                    hello@yayinailab.cc
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-text-secondary pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} Yayin AI Lab. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-xs text-text-secondary hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs text-text-secondary hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
