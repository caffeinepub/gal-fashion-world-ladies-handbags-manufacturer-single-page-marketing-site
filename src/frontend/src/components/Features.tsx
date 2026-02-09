import { Palette, Shield, Clock, MessageCircle, DollarSign, Package } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SectionLayout } from './SectionLayout';

const features = [
  {
    icon: Palette,
    title: 'In-House Design Studio',
    description: 'Our talented design team creates unique, trend-focused handbag collections that capture the latest fashion movements and customer preferences.',
  },
  {
    icon: Shield,
    title: 'Consistent Quality',
    description: 'Rigorous quality control at every stage ensures each handbag meets our exacting standards for materials, craftsmanship, and durability.',
  },
  {
    icon: Clock,
    title: 'Timely Deliveries',
    description: 'Reliable production schedules and efficient logistics guarantee your orders arrive on time, every time, keeping your business running smoothly.',
  },
  {
    icon: MessageCircle,
    title: 'Responsive Communication',
    description: 'Our dedicated team provides prompt, clear communication throughout the entire process, from initial inquiry to final delivery.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Direct manufacturer pricing with no middlemen ensures you receive the best value without compromising on quality or service.',
  },
  {
    icon: Package,
    title: 'Flexible MOQ',
    description: 'We understand different business needs and offer flexible minimum order quantities to support both growing brands and established retailers.',
  },
];

export function Features() {
  return (
    <SectionLayout id="features">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Why Choose Us</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover what makes Gal Fashion World the preferred manufacturing partner for UK and European handbag brands.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionLayout>
  );
}
