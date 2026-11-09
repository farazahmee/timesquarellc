import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "public", "art");
mkdirSync(outDir, { recursive: true });

function write(name, svg) {
  writeFileSync(join(outDir, name), svg.trimStart(), "utf8");
  console.log(`wrote public/art/${name}`);
}

const defs = `
<defs>
  <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#141824"/>
    <stop offset="18%" stop-color="#3d4d66"/>
    <stop offset="38%" stop-color="#b8d1ea"/>
    <stop offset="52%" stop-color="#f2f8ff"/>
    <stop offset="66%" stop-color="#7f9cbd"/>
    <stop offset="82%" stop-color="#2b3455"/>
    <stop offset="100%" stop-color="#0e111c"/>
  </linearGradient>
  <linearGradient id="chrome-soft" x1="1" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#20263a"/>
    <stop offset="30%" stop-color="#6c88a8"/>
    <stop offset="56%" stop-color="#dcebff"/>
    <stop offset="78%" stop-color="#455a79"/>
    <stop offset="100%" stop-color="#141828"/>
  </linearGradient>
  <linearGradient id="ribbon-edge" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#accEEF" stop-opacity="0"/>
    <stop offset="45%" stop-color="#dcecff" stop-opacity="0.8"/>
    <stop offset="100%" stop-color="#accEEF" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#acceef" stop-opacity="0.18"/>
    <stop offset="55%" stop-color="#3771c8" stop-opacity="0.07"/>
    <stop offset="100%" stop-color="#08090b" stop-opacity="0"/>
  </radialGradient>
  <filter id="blur-40" x="-60%" y="-60%" width="220%" height="220%">
    <feGaussianBlur stdDeviation="40"/>
  </filter>
  <filter id="blur-8" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <filter id="blur-2" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="2"/>
  </filter>
</defs>`;

/* ------------------------------------------------------------------ */
/* Hero ribbon                                                         */
/* ------------------------------------------------------------------ */

const hero = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100" fill="none">
  ${defs}
  <ellipse cx="1040" cy="520" rx="660" ry="470" fill="url(#glow)" filter="url(#blur-40)"/>
  <g opacity="0.5">
    <ellipse cx="1080" cy="500" rx="420" ry="280" transform="rotate(-19 1080 500)" stroke="#accEEF" stroke-opacity="0.16" stroke-width="1"/>
    <ellipse cx="1080" cy="500" rx="500" ry="340" transform="rotate(-19 1080 500)" stroke="#accEEF" stroke-opacity="0.1" stroke-width="1"/>
    <ellipse cx="1080" cy="500" rx="580" ry="400" transform="rotate(-19 1080 500)" stroke="#accEEF" stroke-opacity="0.06" stroke-width="1"/>
  </g>
  <g>
    <path d="M 120 860 C 315 545 585 330 880 330 C 1100 330 1268 430 1320 590 C 1376 764 1244 900 1046 880 C 862 862 762 704 846 560 C 914 444 1078 418 1204 492"
      stroke="#0b0e16" stroke-opacity="0.9" stroke-width="190" stroke-linecap="round" filter="url(#blur-8)"/>
    <path d="M 120 860 C 315 545 585 330 880 330 C 1100 330 1268 430 1320 590 C 1376 764 1244 900 1046 880 C 862 862 762 704 846 560 C 914 444 1078 418 1204 492"
      stroke="url(#chrome)" stroke-width="154" stroke-linecap="round"/>
    <path d="M 120 860 C 315 545 585 330 880 330 C 1100 330 1268 430 1320 590 C 1376 764 1244 900 1046 880 C 862 862 762 704 846 560 C 914 444 1078 418 1204 492"
      stroke="#0a0d15" stroke-opacity="0.55" stroke-width="118" stroke-linecap="round" filter="url(#blur-8)"/>
    <path d="M 120 860 C 315 545 585 330 880 330 C 1100 330 1268 430 1320 590 C 1376 764 1244 900 1046 880 C 862 862 762 704 846 560 C 914 444 1078 418 1204 492"
      stroke="url(#chrome-soft)" stroke-width="96" stroke-linecap="round" opacity="0.96"/>
    <path d="M 104 842 C 300 527 574 314 875 312 C 1096 312 1268 414 1322 576 C 1378 750 1242 884 1046 864 C 862 846 760 690 844 548 C 912 432 1074 404 1200 478"
      stroke="#eef7ff" stroke-opacity="0.38" stroke-width="5" stroke-linecap="round" filter="url(#blur-2)"/>
    <path d="M 137 878 C 330 563 592 348 882 348 C 1100 348 1258 444 1304 594"
      stroke="#080a10" stroke-opacity="0.5" stroke-width="10" stroke-linecap="round" filter="url(#blur-2)"/>
  </g>
  <g opacity="0.85">
    <path d="M 1010 146 C 1180 236 1364 438 1472 716" stroke="url(#chrome-soft)" stroke-width="54" stroke-linecap="round" opacity="0.62"/>
    <path d="M 1000 140 C 1170 230 1354 432 1462 710" stroke="#edf6ff" stroke-opacity="0.32" stroke-width="2" stroke-linecap="round" filter="url(#blur-2)"/>
    <path d="M 1030 160 C 1200 250 1384 452 1492 730" stroke="#05070b" stroke-opacity="0.45" stroke-width="12" stroke-linecap="round" filter="url(#blur-8)"/>
  </g>
  <g fill="#dcecff">
    <circle cx="1372" cy="272" r="2.2" opacity="0.5"/>
    <circle cx="1444" cy="386" r="1.4" opacity="0.35"/>
    <circle cx="1238" cy="216" r="1.2" opacity="0.3"/>
    <circle cx="934" cy="902" r="1.8" opacity="0.35"/>
    <circle cx="680" cy="246" r="1.2" opacity="0.28"/>
  </g>
</svg>`;

write("hero-ribbon.svg", hero);

/* ------------------------------------------------------------------ */
/* Capability emblems                                                 */
/* ------------------------------------------------------------------ */

const artFrame = (inner, tint = "#0d1118") => `
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420" fill="none">
  <defs>
    <radialGradient id="bg" cx="50%" cy="42%" r="70%">
      <stop offset="0%" stop-color="#161b24"/>
      <stop offset="58%" stop-color="${tint}"/>
      <stop offset="100%" stop-color="#080a0e"/>
    </radialGradient>
    <radialGradient id="ice-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#acceef" stop-opacity="0.22"/>
      <stop offset="60%" stop-color="#3771c8" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#080a0e" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f1420"/>
      <stop offset="32%" stop-color="#587393"/>
      <stop offset="50%" stop-color="#dcecff"/>
      <stop offset="68%" stop-color="#617c9e"/>
      <stop offset="100%" stop-color="#111624"/>
    </linearGradient>
    <linearGradient id="metal-soft" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#283148"/>
      <stop offset="45%" stop-color="#8fabca"/>
      <stop offset="65%" stop-color="#dcecff"/>
      <stop offset="100%" stop-color="#1a2032"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f4f9ff" stop-opacity="0.2"/>
      <stop offset="45%" stop-color="#acceef" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#3771c8" stop-opacity="0.14"/>
    </linearGradient>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="16"/>
    </filter>
    <filter id="tiny" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.2"/>
    </filter>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" stroke="#ffffff" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="640" height="420" fill="url(#bg)"/>
  <rect width="640" height="420" fill="url(#grid)" opacity="0.7"/>
  <ellipse cx="320" cy="206" rx="250" ry="190" fill="url(#ice-glow)" filter="url(#soft)"/>
  ${inner}
  <rect width="640" height="420" fill="url(#bg)" opacity="0.06"/>
</svg>`;

const automation = artFrame(`
  <g stroke="#accEEF" fill="none">
    <circle cx="320" cy="208" r="152" stroke-opacity="0.1"/>
    <circle cx="320" cy="208" r="130" stroke-opacity="0.18" stroke-dasharray="1 7"/>
    <circle cx="320" cy="208" r="108" stroke-opacity="0.2"/>
    <circle cx="320" cy="208" r="88" stroke-opacity="0.12"/>
  </g>
  <g transform="translate(320 208)">
    <circle r="70" fill="#080b11" stroke="#accEEF" stroke-opacity="0.22"/>
    <g>
      ${Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * 360;
        return `<path d="M 0 -30 L 17 -96 L 0 -108 L -17 -96 Z" fill="url(#metal)" opacity="${0.6 + (i % 3) * 0.12}" transform="rotate(${angle})"/>`;
      }).join("")}
    </g>
    <circle r="42" fill="url(#metal-soft)" opacity="0.92"/>
    <circle r="32" fill="#080b11"/>
    <circle r="22" fill="url(#ice-glow)"/>
    <circle r="7" fill="#dcecff" opacity="0.9"/>
    <circle r="3" fill="#ffffff"/>
    <circle r="58" stroke="#dcecff" stroke-opacity="0.32" stroke-width="1.2" fill="none"/>
  </g>
  <g fill="#dcecff">
    <circle cx="464" cy="118" r="2" opacity="0.5"/>
    <circle cx="182" cy="312" r="1.5" opacity="0.4"/>
    <circle cx="470" cy="318" r="1.2" opacity="0.3"/>
  </g>
`, "#0b0f16");

const agents = artFrame(`
  <g stroke="#accEEF" fill="none">
    <ellipse cx="320" cy="208" rx="188" ry="80" stroke-opacity="0.16" transform="rotate(-22 320 208)"/>
    <ellipse cx="320" cy="208" rx="162" ry="70" stroke-opacity="0.12" transform="rotate(28 320 208)"/>
    <ellipse cx="320" cy="208" rx="210" ry="105" stroke-opacity="0.07" transform="rotate(68 320 208)" stroke-dasharray="1 6"/>
  </g>
  <circle cx="320" cy="208" r="124" fill="url(#ice-glow)" filter="url(#soft)"/>
  <circle cx="320" cy="208" r="88" fill="url(#glass)" stroke="#dcecff" stroke-opacity="0.32"/>
  <circle cx="320" cy="208" r="70" fill="url(#metal)" opacity="0.28"/>
  <ellipse cx="298" cy="176" rx="32" ry="20" fill="#ffffff" opacity="0.13" transform="rotate(-24 298 176)" filter="url(#tiny)"/>
  <circle cx="320" cy="208" r="42" stroke="#dcecff" stroke-opacity="0.18" fill="none"/>
  <circle cx="320" cy="208" r="16" fill="url(#metal-soft)" opacity="0.9"/>
  <circle cx="320" cy="208" r="7" fill="#dcecff"/>
  <g fill="#dcecff">
    <circle cx="470" cy="146" r="3" opacity="0.75"/>
    <circle cx="170" cy="260" r="2.2" opacity="0.6"/>
    <circle cx="424" cy="300" r="1.8" opacity="0.5"/>
  </g>
  <g stroke="#dcecff" stroke-opacity="0.12">
    <line x1="470" y1="146" x2="404" y2="176"/>
    <line x1="170" y1="260" x2="250" y2="238"/>
  </g>
`, "#0c1018");

const software = artFrame(`
  <g transform="translate(320 212) rotate(-7)">
    <rect x="-148" y="-116" width="296" height="220" rx="18" fill="#0a0d13" stroke="#ffffff" stroke-opacity="0.08"/>
    <g opacity="0.9">
      <rect x="-148" y="54" width="296" height="50" rx="18" fill="url(#metal)" opacity="0.34"/>
      <rect x="-134" y="-92" width="268" height="112" rx="12" fill="url(#glass)" stroke="#dcecff" stroke-opacity="0.14"/>
      <rect x="-134" y="-92" width="268" height="24" rx="12" fill="#ffffff" fill-opacity="0.03"/>
      <circle cx="-116" cy="-80" r="3" fill="#acceef" opacity="0.7"/>
      <circle cx="-104" cy="-80" r="3" fill="#ffffff" opacity="0.2"/>
      <circle cx="-92" cy="-80" r="3" fill="#ffffff" opacity="0.2"/>
      <rect x="-116" y="-48" width="96" height="7" rx="3.5" fill="#dcecff" opacity="0.5"/>
      <rect x="-116" y="-31" width="148" height="5" rx="2.5" fill="#ffffff" opacity="0.14"/>
      <rect x="-116" y="-20" width="120" height="5" rx="2.5" fill="#ffffff" opacity="0.1"/>
      <rect x="8" y="-48" width="112" height="66" rx="7" fill="#acceef" fill-opacity="0.08" stroke="#acceef" stroke-opacity="0.16"/>
      <rect x="20" y="-32" width="52" height="5" rx="2.5" fill="#dcecff" opacity="0.55"/>
      <rect x="20" y="-20" width="84" height="4" rx="2" fill="#ffffff" opacity="0.16"/>
      <rect x="-116" y="-2" width="70" height="5" rx="2.5" fill="#ffffff" opacity="0.12"/>
    </g>
    <rect x="-122" y="42" width="244" height="46" rx="10" fill="url(#metal)" opacity="0.24" stroke="#ffffff" stroke-opacity="0.08"/>
    <rect x="-120" y="108" width="240" height="46" rx="10" fill="url(#metal)" opacity="0.14" stroke="#ffffff" stroke-opacity="0.06"/>
    <rect x="-104" y="56" width="76" height="5" rx="2.5" fill="#dcecff" opacity="0.4"/>
    <rect x="-104" y="69" width="120" height="4" rx="2" fill="#ffffff" opacity="0.12"/>
  </g>
  <g fill="#dcecff">
    <circle cx="158" cy="118" r="2" opacity="0.4"/>
    <circle cx="500" cy="304" r="1.6" opacity="0.35"/>
  </g>
`, "#0b0e14");

const web = artFrame(`
  <g opacity="0.55" stroke="#accEEF" fill="none">
    <path d="M60 210 H260" stroke-opacity="0.12"/>
    <path d="M380 210 H588" stroke-opacity="0.12"/>
    <path d="M100 150 H250" stroke-opacity="0.08"/>
    <path d="M390 270 H552" stroke-opacity="0.08"/>
  </g>
  <path d="M320 72 L472 320 L168 320 Z" fill="url(#glass)" stroke="#dcecff" stroke-opacity="0.3" stroke-width="1.2"/>
  <path d="M320 108 L445 306 L195 306 Z" fill="url(#metal)" opacity="0.24"/>
  <path d="M320 72 L320 320" stroke="#ffffff" stroke-opacity="0.13"/>
  <path d="M320 72 L396 210 L244 210 Z" fill="#acceef" fill-opacity="0.07"/>
  <g stroke="#dcecff" stroke-opacity="0.5" stroke-width="1.4">
    <path d="M60 180 H244" />
    <path d="M60 208 H228" stroke-opacity="0.3"/>
    <path d="M60 236 H248" stroke-opacity="0.2"/>
  </g>
  <g stroke="#acceef" stroke-width="1.4">
    <path d="M390 182 L584 150" stroke-opacity="0.7"/>
    <path d="M390 208 L598 208" stroke-opacity="0.45"/>
    <path d="M390 234 L566 266" stroke-opacity="0.3"/>
  </g>
  <circle cx="320" cy="72" r="3.5" fill="#edf6ff"/>
  <circle cx="320" cy="320" r="3" fill="#acceef" opacity="0.6"/>
  <g fill="#dcecff">
    <circle cx="486" cy="104" r="2" opacity="0.45"/>
    <circle cx="152" cy="310" r="1.8" opacity="0.35"/>
  </g>
`, "#0c1017");

write("cap-automation.svg", automation);
write("cap-agents.svg", agents);
write("cap-software.svg", software);
write("cap-web.svg", web);

/* ------------------------------------------------------------------ */
/* Topographic CTA background                                         */
/* ------------------------------------------------------------------ */

function contour(cx, cy, rx, ry, phase, points = 96) {
  const vertices = [];
  for (let i = 0; i <= points; i += 1) {
    const angle = (i / points) * Math.PI * 2;
    const wobble =
      1 +
      0.075 * Math.sin(angle * 3 + phase) +
      0.038 * Math.sin(angle * 7 + phase * 1.9) +
      0.018 * Math.sin(angle * 11 + phase * 0.7);
    const x = cx + Math.cos(angle) * rx * wobble;
    const y = cy + Math.sin(angle) * ry * wobble;
    vertices.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `${vertices.join(" ")} Z`;
}

const contourPaths = Array.from({ length: 26 }, (_, index) => {
  const t = index / 25;
  const rx = 260 + t * 620;
  const ry = 150 + t * 380;
  const opacity = 0.06 + (1 - t) * 0.12;
  return `<path d="${contour(1040, 420, rx, ry, index * 0.42)}" stroke="#accEEF" stroke-opacity="${opacity.toFixed(3)}" stroke-width="1"/>`;
}).join("\n  ");

const topography = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="800" viewBox="0 0 1600 800" fill="none">
  <defs>
    <radialGradient id="topo-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3771c8" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="#1e215a" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#08090b" stop-opacity="0"/>
    </radialGradient>
    <filter id="topo-blur" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="50"/>
    </filter>
  </defs>
  <rect width="1600" height="800" fill="#090b0e"/>
  <ellipse cx="1100" cy="400" rx="620" ry="410" fill="url(#topo-glow)" filter="url(#topo-blur)"/>
  <g>
  ${contourPaths}
  </g>
  <g fill="#dcecff">
    <circle cx="1190" cy="196" r="1.6" opacity="0.35"/>
    <circle cx="1460" cy="520" r="1.2" opacity="0.25"/>
    <circle cx="820" cy="630" r="1.4" opacity="0.22"/>
  </g>
</svg>`;

write("cta-topography.svg", topography);

/* ------------------------------------------------------------------ */
/* Grain overlay                                                      */
/* ------------------------------------------------------------------ */

write(
  "grain.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="220" height="220" filter="url(#n)" opacity="0.55"/>
</svg>`,
);
