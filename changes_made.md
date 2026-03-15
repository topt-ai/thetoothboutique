# Changes Made

This document tracks all improvements and changes made to the site.

## [March 14, 2026]
* **Investigated broken images issue**: Found that all image files in the `public/` directory (e.g., `tooth-boutique-logo.png`, `hero tooth.webp`) were corrupted during the export or clone process from AI Studio. The binary image data was incorrectly processed as text, resulting in non-text bytes being replaced by the UTF-8 replacement character (``). As the original binary data is lost, these images must be manually re-uploaded or copied into the `public/` folder to display correctly.
* **Restored original images**: Copied the correct, uncorrupted `.webp` and `.png` image files from `~/Downloads/tooth images` into the repository's `public/` directory, resolving the broken image issue.
* **Updated CTA Text**: Modified the call to action description in both the Brackets and Invisalign pages to more explicitly state: "Tu consulta inicial incluye: Evaluación clínica, escaneo 3D y fotografías extraorales e intraorales".
* **Rebuilt Brands Carousel as a Text Ticker**: Removed the logo images entirely. The `BrandsCarousel` is now a sleek, dark green `bg-dark` solid strip spanning the *full width* at the absolute bottom edge of every hero section. It features uppercase, tracked-out text for each brand name separated by accent-colored dots, matching the reference design beautifully. We also removed the previously existing (and now duplicate) `BrandsStrip` components from the `Brackets` and `Invisalign` pages so there is only one clean, unified text ticker horizontally across all pages. Adjusted padding and sizing so it hits the absolute bottom `100dvh` edge flawlessly without any spacing.
* **Component Cleanup**: Removed the `FloatingWhatsApp` bubble from `App.tsx` and the `Contacto` links from `Navbar.tsx`. Linked the "Creada por TuWebSV" text in the `Footer.tsx` to `https://www.tuwebsv.com`.
