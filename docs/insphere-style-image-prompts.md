# TimeSquare — Insphere-style image prompt pack

Prompts for the abstract chrome / dark editorial art used across the redesign.
Designed for GPT Image 2, Midjourney, Flux, or Higgsfield.

## Master style block

Append this to every abstract 3D prompt:

> Premium enterprise AI brand art, near-black #0A0A0A environment, liquid chrome
> and smoked glass, icy blue #ACCEEF and deep indigo #1E215A reflections, soft
> cinematic studio lighting, subtle volumetric haze, fine film grain, deep
> shadows, clean minimal composition with generous negative space,
> photorealistic 3D render, octane render, ultra-detailed, 8k, no text, no
> logos, no watermarks.

Keep the palette cool. Avoid purple, magenta, neon green, and lens flares.

## 1. Hero ribbon

**Use:** full-bleed hero background, desktop.
**Aspect:** 21:9 (also render a 4:5 mobile crop).

> Ultra-wide hero image for a premium AI automation studio. A single flowing
> ribbon of liquid chrome and smoked glass arcs in from the right third and
> twists through the centre like a Möbius strip, catching icy blue highlights
> and deep indigo shadows. The left 40% is empty near-black space for a
> headline. A few fine dust particles in the light, soft rim light, cinematic
> depth of field, subtle film grain. [master style block] --ar 21:9

**Mobile crop:**

> Vertical crop of the same liquid-chrome ribbon, subject weighted to the lower
> right, large empty near-black area in the upper half for type. [master style
> block] --ar 4:5

## 2. Capability card art (set of four)

Use the same seed and the hero image as a style reference for consistency.

### 2a. AI automation

> Abstract 3D emblem for AI automation: interlocking brushed-chrome rings
> forming a mechanical iris, with a thin ice-blue light seam through the
> centre. Floating over near-black, soft top light, faint reflection below,
> centred with generous breathing room. [master style block] --ar 1:1

### 2b. AI agents

> Abstract 3D emblem for AI agents: a translucent smoked-glass sphere with a
> bright ice-blue core, encircled by three thin chrome orbital rings at
> different angles. Near-black background, soft volumetric glow, delicate
> reflections, centred. [master style block] --ar 1:1

### 2c. Custom software

> Abstract 3D emblem for custom software: three stacked slabs of frosted glass
> and brushed chrome, slightly offset, with fine circuit-like etchings glowing
> faint blue between the layers. Near-black background, cinematic side light,
> centred. [master style block] --ar 1:1

### 2d. Web & mobile apps

> Abstract 3D emblem for web and mobile products: a translucent chrome prism
> refracting a grid of pale blue light into thin beams, resting on a dark
> reflective surface. Near-black background, soft glow, centred. [master style
> block] --ar 1:1

## 3. Outcome / case-study art (set of three)

**Aspect:** 4:3 or 16:10. Dark editorial photography, not stock-bright.

### 3a. Healthcare

> Dark editorial photograph for a healthcare technology case study: a surgical
> team silhouetted around a monitor in a dim operating room, cool blue monitor
> glow on their faces, shallow depth of field, cinematic grain, premium and
> understated, no text, no logos. --ar 4:3

### 3b. Digital signage

> Dark editorial photograph of a digital signage control room at night: a wall
> of screens glowing cool blue, silhouetted operator, deep navy shadows,
> cinematic grain, premium enterprise mood, no readable text, no logos. --ar 4:3

### 3c. Finance

> Dark editorial photograph of a modern finance team reviewing documents on a
> glass table at night, cool blue screen light, deep shadows, shallow depth of
> field, cinematic grain, premium and calm, no text, no logos. --ar 4:3

## 4. Industry cards (set of four)

**Aspect:** 4:5 portrait. Same dark editorial grade across all four.

### 4a. Healthcare

> Dark editorial photograph of an empty modern hospital corridor at night, cool
> blue emergency lighting, polished floors, deep shadows, cinematic, quiet and
> premium, no people, no text. --ar 4:5

### 4b. Telecommunications

> Dark editorial photograph of a telecommunications rooftop at blue hour: cell
> antennas against a deep navy sky, city lights as soft bokeh, cool rim light,
> cinematic grain, no text. --ar 4:5

### 4c. E-commerce

> Dark editorial photograph of a modern fulfilment centre at night: rows of
> parcels on conveyors, cool blue overhead lighting, shallow depth of field,
> cinematic grain, no readable text. --ar 4:5

### 4d. Education

> Dark editorial photograph of a modern university library at night: warm desk
> lamps against deep blue shadows, a lone student silhouette between shelves,
> cinematic grain, no text. --ar 4:5

## 5. CTA background

**Use:** full-width section behind the closing headline.

> Abstract topographic background: fine contour lines made of pale ice-blue
> light flowing across a near-black surface like a digital terrain map, a soft
> indigo glow rising from the bottom edge, heavy negative space in the centre,
> subtle film grain, minimal, no text. [master style block] --ar 16:9

## 6. Grain / noise texture

**Use:** CSS overlay at 3–5% opacity, repeated.

> Seamless fine film grain texture, monochrome, subtle and uniform, no pattern,
> no objects, tileable, 1:1.

## 7. Optional footer wordmark backdrop

> Very subtle abstract chrome horizon line low in the frame, almost black
> above, faint ice-blue reflection below, minimal, lots of negative space,
> cinematic grain. [master style block] --ar 21:9

## Negative prompt

> text, typography, letters, logo, watermark, signature, UI screenshots,
> buttons, cartoon, anime, neon purple, magenta, oversaturated colours, lens
> flare, busy composition, clutter, low contrast, flat lighting, plastic,
> toy-like, deformed geometry, blurry, low resolution

## Consistency notes

- Generate the hero first, then use it as an image reference (`--sref` in
  Midjourney, `--image` in Higgsfield, image prompt in Flux) at low strength
  for the four capability cards.
- Fix one seed across the set.
- Render at 2k, export WebP/AVIF, and serve responsive `srcset` sizes.
- Keep the left 35–40% of the hero visually quiet so the headline stays legible.
- For Midjourney add: `--style raw --stylize 250 --v 7`.
- For GPT Image 2 / Higgsfield, paste the full prompt and ask for 2k.
