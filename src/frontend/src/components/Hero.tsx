import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden pt-16 pb-12 md:pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-block">
              <p className="text-sm md:text-base font-medium text-primary/90 tracking-wide uppercase mb-2">
                Behind every successful/beautiful woman is a fabulous handbag
              </p>
            </div>
            <h1 className="font-bold leading-tight" style={{ fontSize: '20px' }}>
              Premium Ladies
              <span className="block text-primary mt-2">Handbag Manufacturer</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Over 10 years of excellence in crafting trend-focused handbags for the UK and European markets. Quality, style, and reliability in every piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact} className="text-base group">
                Request Catalog
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image - Reduced Height */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[400px] md:max-h-[500px]">
              <img
                src="/assets/generated/hero-handbag-model.dim_1600x900.png"
                alt="Elegant woman model showcasing premium fabric ladies handbag from Gal Fashion World"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
