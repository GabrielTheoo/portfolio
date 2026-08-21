# Design System Document: The High-End Editorial Portfolio

## 1. Overview & Creative North Star

### Creative North Star: "The Nocturnal Curator"
This design system is not a mere container for work; it is an immersive, atmospheric environment. It rejects the clinical, "boxed-in" nature of standard web grids in favor of an **Editorial Experimentalism** approach. The goal is to create a digital space that feels like a high-end physical gallery at midnight—quiet, deep, and lit by the intentional glow of curated content.

To break the "template" look, we utilize:
*   **Intentional Asymmetry:** Off-center typography and staggered image placements.
*   **Fluid Motion:** Organic 3D shapes and glassmorphism that make the UI feel alive.
*   **Tonal Depth:** Replacing harsh lines with light and shadow to define space.

---

## 2. Colors: Depth and Luminescence

The palette is rooted in a deep, nocturnal base of violets and wines. It is designed to be felt rather than just seen.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define a new area of content, you must use a background color shift (e.g., transitioning from `surface` to `surface_container_low`) or a subtle tonal gradient. Boundaries should be felt through depth, not drawn with lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-transparent layers.
*   **Base Layer:** `surface` (#131313) or `surface_container_lowest` (#0e0e0e).
*   **Floating Elements:** Use `surface_container` (#201f1f) or `surface_bright` (#3a3939) for cards that need to "lift" from the background.
*   **Glassmorphism:** Use `surface_variant` at 40-60% opacity with a `backdrop-blur` of 20px–40px to create "frosted wine" containers.

### Signature Textures & Gradients
Standard flat buttons are insufficient. Use "Glowing Gradients" for primary CTAs and interactive highlights:
*   **The Wine Glow:** Linear gradient from `primary` (#ffb2b8) to `on_primary_container` (#df4f66).
*   **The Violet Aura:** Radial gradient behind 3D shapes using `secondary_container` (#622599) at 20% opacity.

---

## 3. Typography: The Editorial Voice

Hierarchy is achieved through the tension between a romantic, high-contrast serif and a functional, geometric sans-serif.

| Level | Token | Font | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Newsreader | 3.5rem | The "Hero" voice. High-impact, elegant statements. |
| **Headline**| `headline-lg`| Newsreader | 2rem | Editorial section starters. |
| **Title**   | `title-lg`   | Manrope | 1.375rem | Content headers within cards. |
| **Body**    | `body-lg`    | Manrope | 1rem | Primary reading experience. Clean and legible. |
| **Label**   | `label-md`   | Manrope | 0.75rem | Metadata, caps-locked for architectural feel. |

**Styling Note:** Headlines should favor tight letter-spacing (-0.02em) to emphasize their high-contrast serif terminals, while body text should breathe with standard or slightly increased leading (1.6).

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through **Tonal Layering** rather than structural scaffolding. 
*   **Nesting:** Place a `surface_container_high` card on a `surface_container` background. The subtle 5% shift in lightness creates a sophisticated sense of elevation.
*   **Ambient Shadows:** For floating 3D objects or high-priority cards, use "Ambient Shadows."
    *   **Value:** Blur: 60px, Spread: -10px.
    *   **Color:** Use a tinted version of the background, like `on_secondary` (#4a0080) at 8% opacity. Never use pure black or grey shadows.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**:
*   **Token:** `outline_variant` (#4d444c) at **15% opacity**. It should be a mere suggestion of a boundary, appearing only when the light hits it.

---

## 5. Components

### Buttons
*   **Primary:** A fluid gradient from `primary` to `primary_container`. Shape: `full` (pill) or `xl` (3rem) roundedness. No border.
*   **Tertiary/Ghost:** `on_surface` text with no background. Interaction state: background appears as a 10% `surface_variant` glow.

### Cards & Projects
*   **The Separation Rule:** Forbid divider lines. Use `spacing.12` (4rem) to separate project blocks. 
*   **Visual Style:** Use `surface_container_low` for the card base. Images within cards should have a subtle inner-glow to make them feel embedded in the "glass."

### Input Fields
*   **Style:** Minimalist. Only a bottom line using `outline_variant` at 30%. On focus, the line expands to 2px and transitions to `primary` (#ffb2b8).
*   **Error State:** Use `error` (#ffb4ab) for text and a subtle `error_container` glow behind the input.

### Navigation (The Floating Dock)
*   Instead of a top-bar, use a centered, floating navigation dock at the bottom of the screen.
*   **Material:** `surface_variant` with 50% opacity and 30px backdrop blur.
*   **Roundedness:** `full`.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use white space as a structural element. Allow elements to "float" in the dark void.
*   **DO** use organic 3D shapes to break the horizontal flow. Let them overlap text and containers.
*   **DO** apply subtle entrance animations (fade + slight vertical slide) to all typography to enhance the immersive feel.

### Don't:
*   **DON'T** use 1px solid borders at 100% opacity. This destroys the "atmospheric" depth.
*   **DON'T** use pure #000000 for backgrounds. Use `surface_container_lowest` (#0e0e0e) to maintain the ability to layer shadows beneath it.
*   **DON'T** align everything to a rigid 12-column grid. Shift one column left or right to create an experimental, editorial layout.
*   **DON'T** use high-saturation reds for body text. Reserve `primary` and `secondary` for highlights and interactive states only.