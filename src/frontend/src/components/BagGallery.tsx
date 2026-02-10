import { SectionLayout } from './SectionLayout';

export function BagGallery() {
  const bags = [
    {
      src: '/assets/2024.jpg',
      alt: 'Black and white geometric pattern handbag with brown leather handles',
    },
    {
      src: '/assets/2024-1.jpg',
      alt: 'Stylish geometric pattern tote bag with leather accents',
    },
    {
      src: '/assets/2309.png',
      alt: 'Colorful beaded clutch with geometric pattern design',
    },
    {
      src: '/assets/2309-1.png',
      alt: 'Vibrant beaded evening clutch with artistic pattern',
    },
  ];

  const materials = [
    {
      src: '/assets/generated/material-cotton-canvas-bag.dim_1200x1200.png',
      alt: 'Cotton canvas handbag showcasing durable fabric texture',
      name: 'Cotton Canvas',
    },
    {
      src: '/assets/generated/material-cotton-towel-bag.dim_1200x1200.png',
      alt: 'Cotton towel material handbag with soft textured finish',
      name: 'Cotton Towel',
    },
    {
      src: '/assets/WhatsApp Image 2026-02-10 at 8.32.42 PM.jpeg',
      alt: 'White towel bag with red text design',
      name: 'Towel bag',
    },
    {
      src: '/assets/generated/material-paper-raffia-bag.dim_1200x1200.png',
      alt: 'Paper raffia handbag with natural woven texture',
      name: 'Paper Raffia',
    },
    {
      src: '/assets/generated/material-jute-bag.dim_1200x1200.png',
      alt: 'Jute handbag showcasing natural fiber texture',
      name: 'Jute',
    },
    {
      src: '/assets/Bg-02-8.jpg',
      alt: 'Beaded clutch with decorative shell and bead embellishments',
      name: 'Beaded Clutch',
    },
  ];

  return (
    <SectionLayout id="gallery" className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Our Collection
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our diverse range of premium handbags, from classic designs to contemporary styles
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {bags.map((bag, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-background">
              <img
                src={bag.src}
                alt={bag.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Materials & Craftsmanship Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Materials & Craftsmanship
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with premium materials to create bags that combine durability with style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-background"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={material.src}
                  alt={material.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h4 className="text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                  {material.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
