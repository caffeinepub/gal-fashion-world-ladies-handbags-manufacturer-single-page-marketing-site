# Specification

## Summary
**Goal:** Remove all videos from the UI, apply Times New Roman italic typography site-wide, and update two Materials & Craftsmanship cards with the provided photos and labels.

**Planned changes:**
- Remove/replace any frontend `<video>` usage, including swapping the Hero video for a static `<img>` using the existing hero image asset so no video loads or plays.
- Update global typography so all visible text uses `"Times New Roman"` (fallback: `"Times"`, `serif`) and is italic by default.
- Set the Hero phrase "Premium Ladies Handbag Manufacturer" to a fixed 20px font size (non-responsive), leaving other Hero text sizing unchanged.
- In the Materials & Craftsmanship grid, replace the Jacquard card with the uploaded white towel bag image and label it exactly "Towel bag" with an appropriate English alt attribute.
- In the Materials & Craftsmanship grid, replace the "Beads / Embroidery" card with the uploaded beaded bag image and label it exactly "Beaded Clutch" with an appropriate English alt attribute.

**User-visible outcome:** The site displays no videos (Hero shows an image instead), all text appears in Times New Roman italic, the Hero heading phrase is 20px, and the materials gallery shows the updated Towel bag and Beaded Clutch cards using the newly provided photos.
