import { SectionLayout } from './SectionLayout';

export function BagGallery() {
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
      src: '/assets/Bg-02-17.jpg',
      alt: 'Jute bag with pink handles and love text design',
      name: 'Jute',
    },
    {
      src: '/assets/generated/material-paper-raffia-bag.dim_1200x1200.png',
      alt: 'Paper raffia handbag with natural woven texture',
      name: 'Paper Raffia',
    },
    {
      src: '/assets/3801.png',
      alt: 'Black and white canvas tote bag with floral pattern',
      name: 'Black & White Canvas',
    },
  ];

  return (
    <SectionLayout id="gallery" className="bg-muted/30">
      {/* Materials & Craftsmanship Section */}
      <div>
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
