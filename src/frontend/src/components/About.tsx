import { SectionLayout } from './SectionLayout';

export function About() {
  return (
    <SectionLayout id="about" className="bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Gal Fashion World</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 10 years of manufacturing excellence, Gal Fashion World has established itself as a trusted supplier of premium ladies handbags to the UK and European markets. Our state-of-the-art manufacturing facilities and in-house design studio enable us to deliver unique, trend-focused products that meet the highest standards of quality and style.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We pride ourselves on consistent quality, timely deliveries, responsive communication, and competitive pricing. Our flexible approach to minimum order quantities makes us the ideal partner for businesses of all sizes looking to source exceptional handbags.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
