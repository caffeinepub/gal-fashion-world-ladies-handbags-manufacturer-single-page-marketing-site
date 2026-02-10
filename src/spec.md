# Specification

## Summary
**Goal:** Replace specific BagGallery and homepage images with newly uploaded bag photos and remove model/close-up image boxes from the homepage sections.

**Planned changes:**
- Add the uploaded images `3801.png` and `Bg-02-17.jpg` to `frontend/public/assets/` so they are publicly accessible.
- Update `frontend/src/components/BagGallery.tsx` Materials & Craftsmanship grid:
  - Remove the “Towel bag” card and add a “Jute” card using `/assets/Bg-02-17.jpg` (with updated alt text).
  - Remove the “Beaded Clutch” card and add a “Black & White Canvas” card using `/assets/3801.png` (with updated alt text), and ensure the prior beaded clutch image is no longer used in the grid.
- Update `frontend/src/components/About.tsx` to remove the two image boxes currently showing:
  - `/assets/generated/gallery-models-bags-1.dim_1200x800.png`
  - `/assets/generated/gallery-bag-closeup-1.dim_1200x800.png`
- Update `frontend/src/components/Hero.tsx` to remove the hero model image box currently using `/assets/generated/hero-handbag-model.dim_1600x900.png`, keeping the hero responsive and visually balanced.

**User-visible outcome:** The Materials & Craftsmanship grid shows “Jute” and “Black & White Canvas” cards with the new uploaded images, and the homepage no longer displays the model/close-up image boxes in the Hero and About sections while remaining clean and responsive.
