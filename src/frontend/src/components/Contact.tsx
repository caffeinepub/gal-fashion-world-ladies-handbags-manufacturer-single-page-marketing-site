import { SectionLayout } from './SectionLayout';
import { ContactForm } from './ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <SectionLayout id="contact" className="bg-muted/30">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to discuss your handbag requirements? Contact us for catalogs, pricing, MOQ details, or any inquiries.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:galfashionworld@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    galfashionworld@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone / WhatsApp</p>
                  <a href="tel:+919350270959" className="text-muted-foreground hover:text-primary transition-colors">
                    +91-9350270959
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    B-1, Dwarka<br />
                    Delhi - 110059, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </SectionLayout>
  );
}
