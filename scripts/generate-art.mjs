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
/* Project spotlight — chauffeur operations dashboard                 */
/* ------------------------------------------------------------------ */

const dashNav = [
  ["Overview", false],
  ["Bookings", true],
  ["Compliance", false],
  ["Invoices", false],
  ["Drivers", false],
  ["Vehicles", false],
];

const dashKpis = [
  ["Live jobs", "12", "+3 today", "#7ee2b8"],
  ["Pending review", "4", "2 airport", "#f5c76b"],
  ["Hours saved", "18.5", "this week", "#8fa3b8"],
  ["Compliance", "96%", "1 expiring", "#f5c76b"],
];

const complianceRows = [
  ["MOT", "Valid", "#7ee2b8"],
  ["PHV vehicle", "9 days", "#f5c76b"],
  ["Insurance", "Valid", "#7ee2b8"],
  ["DBS", "Valid", "#7ee2b8"],
];

const chauffeur = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="760" viewBox="0 0 1600 760" fill="none" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif">
  <defs>
    <radialGradient id="ch-bg" cx="50%" cy="44%" r="72%">
      <stop offset="0%" stop-color="#101722"/>
      <stop offset="58%" stop-color="#090c11"/>
      <stop offset="100%" stop-color="#06080c"/>
    </radialGradient>
    <radialGradient id="ch-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#acceef" stop-opacity="0.2"/>
      <stop offset="55%" stop-color="#3771c8" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#08090b" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ch-panel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d121a"/>
      <stop offset="100%" stop-color="#080b10"/>
    </linearGradient>
    <linearGradient id="ch-route" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#3771c8" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#acceef" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#dcecff"/>
    </linearGradient>
    <pattern id="ch-grid" width="34" height="34" patternUnits="userSpaceOnUse">
      <path d="M34 0H0V34" stroke="#ffffff" stroke-opacity="0.028" stroke-width="1"/>
    </pattern>
    <filter id="ch-shadow" x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow dx="0" dy="30" stdDeviation="34" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
    <filter id="ch-blur" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="44"/>
    </filter>
    <filter id="ch-route-glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
    <clipPath id="ch-map-clip">
      <rect x="310" y="350" width="760" height="324" rx="0"/>
    </clipPath>
  </defs>

  <rect width="1600" height="760" fill="url(#ch-bg)"/>
  <rect width="1600" height="760" fill="url(#ch-grid)" opacity="0.8"/>
  <ellipse cx="1290" cy="150" rx="480" ry="300" fill="url(#ch-glow)" filter="url(#ch-blur)"/>
  <ellipse cx="260" cy="650" rx="320" ry="220" fill="url(#ch-glow)" opacity="0.45" filter="url(#ch-blur)"/>

  <rect x="64" y="44" width="1472" height="672" rx="24" fill="url(#ch-panel)" stroke="#ffffff" stroke-opacity="0.09" filter="url(#ch-shadow)"/>
  <path d="M64 102H1536" stroke="#ffffff" stroke-opacity="0.07"/>
  <path d="M274 102V716" stroke="#ffffff" stroke-opacity="0.07"/>

  <!-- top bar -->
  <g>
    <circle cx="94" cy="73" r="4" fill="#ffffff" opacity="0.14"/>
    <circle cx="112" cy="73" r="4" fill="#ffffff" opacity="0.1"/>
    <circle cx="130" cy="73" r="4" fill="#ffffff" opacity="0.08"/>
    <text x="160" y="78" fill="#e8eef6" font-size="13" font-weight="600" letter-spacing="-0.2">Chauffeur operations</text>
    <g font-size="12">
      <rect x="610" y="56" width="58" height="34" rx="8" fill="#ffffff" fill-opacity="0.06"/>
      <text x="639" y="78" fill="#dce6f2" text-anchor="middle">Today</text>
      <text x="710" y="78" fill="#8a97a8" text-anchor="middle">Bookings</text>
      <text x="800" y="78" fill="#8a97a8" text-anchor="middle">Compliance</text>
      <text x="906" y="78" fill="#8a97a8" text-anchor="middle">Invoices</text>
    </g>
    <rect x="1114" y="57" width="252" height="32" rx="8" fill="#ffffff" fill-opacity="0.035" stroke="#ffffff" stroke-opacity="0.06"/>
    <circle cx="1132" cy="73" r="5" stroke="#8a97a8" stroke-opacity="0.8" fill="none"/>
    <path d="M1136 77L1141 82" stroke="#8a97a8" stroke-opacity="0.8" stroke-linecap="round"/>
    <text x="1152" y="78" fill="#6f7c8d" font-size="11">Search jobs, drivers, vehicles</text>
    <circle cx="1468" cy="73" r="15" fill="#acceef" fill-opacity="0.12" stroke="#acceef" stroke-opacity="0.22"/>
    <text x="1468" y="77" fill="#dcecff" font-size="10" font-weight="600" text-anchor="middle">JW</text>
  </g>

  <!-- sidebar -->
  <g>
    <rect x="86" y="122" width="30" height="30" rx="8" fill="#acceef" fill-opacity="0.1" stroke="#acceef" stroke-opacity="0.22"/>
    <rect x="94" y="130" width="6" height="6" rx="1.5" fill="#dcecff"/>
    <rect x="103" y="130" width="6" height="6" rx="1.5" fill="#dcecff" opacity="0.55"/>
    <rect x="94" y="139" width="6" height="6" rx="1.5" fill="#dcecff" opacity="0.55"/>
    <rect x="103" y="139" width="6" height="6" rx="1.5" fill="#dcecff" opacity="0.25"/>
    <text x="126" y="136" fill="#e8eef6" font-size="12" font-weight="600" letter-spacing="-0.1">TimeSquare</text>
    <text x="126" y="149" fill="#6f7c8d" font-size="9" letter-spacing="0.8">OPS</text>

    ${dashNav
      .map(([label, active], index) => {
        const y = 196 + index * 40;
        return `
    ${active ? `<rect x="82" y="${y - 16}" width="174" height="32" rx="8" fill="#acceef" fill-opacity="0.08"/><rect x="82" y="${y - 16}" width="2" height="32" rx="1" fill="#acceef" fill-opacity="0.8"/>` : ""}
    <rect x="96" y="${y - 6}" width="12" height="12" rx="3" fill="${active ? "#acceef" : "#ffffff"}" fill-opacity="${active ? "0.75" : "0.16"}"/>
    <text x="118" y="${y + 4}" fill="${active ? "#dcecff" : "#8a97a8"}" font-size="12" font-weight="${active ? "500" : "400"}">${label}</text>`;
      })
      .join("")}

    <rect x="86" y="590" width="166" height="94" rx="12" fill="#ffffff" fill-opacity="0.028" stroke="#ffffff" stroke-opacity="0.07"/>
    <rect x="102" y="606" width="24" height="38" rx="6" stroke="#acceef" stroke-opacity="0.4" fill="#acceef" fill-opacity="0.06"/>
    <rect x="108" y="612" width="12" height="22" rx="2" fill="#acceef" fill-opacity="0.18"/>
    <circle cx="114" cy="638" r="1.8" fill="#acceef" fill-opacity="0.7"/>
    <text x="138" y="620" fill="#dce6f2" font-size="11" font-weight="500">Driver app</text>
    <text x="138" y="637" fill="#6f7c8d" font-size="9">Installed on 6 phones</text>
    <rect x="138" y="648" width="66" height="19" rx="5" fill="#7ee2b8" fill-opacity="0.09"/>
    <text x="171" y="661" fill="#7ee2b8" font-size="8" text-anchor="middle" letter-spacing="0.4">PWA READY</text>
  </g>

  <!-- main header -->
  <g>
    <text x="310" y="151" fill="#edf3fa" font-size="30" font-weight="600" letter-spacing="-0.9">Bookings</text>
    <text x="310" y="176" fill="#6f7c8d" font-size="12">Friday, 14 November · 09:42</text>
    <rect x="1318" y="128" width="182" height="40" rx="10" fill="#edf3fa"/>
    <text x="1409" y="153" fill="#0a0d12" font-size="12" font-weight="600" text-anchor="middle">+ New booking</text>
  </g>

  <!-- KPI cards -->
  ${dashKpis
    .map(([label, value, trend, color], index) => {
      const x = 310 + index * 301;
      return `
  <g>
    <rect x="${x}" y="196" width="287" height="98" rx="14" fill="#ffffff" fill-opacity="0.025" stroke="#ffffff" stroke-opacity="0.065"/>
    <text x="${x + 16}" y="${222}" fill="#7d8a9b" font-size="10" letter-spacing="0.7">${label.toUpperCase()}</text>
    <text x="${x + 16}" y="${258}" fill="#edf3fa" font-size="29" font-weight="600" letter-spacing="-0.9">${value}</text>
    <circle cx="${x + 20}" cy="${272}" r="2.5" fill="${color}"/>
    <text x="${x + 29}" y="${276}" fill="${color}" font-size="10" opacity="0.8">${trend}</text>
  </g>`;
    })
    .join("")}

  <!-- map card -->
  <g>
    <rect x="310" y="310" width="760" height="364" rx="14" fill="#080c12" stroke="#ffffff" stroke-opacity="0.07"/>
    <text x="330" y="338" fill="#dce6f2" font-size="12" font-weight="500">Live map</text>
    <rect x="958" y="322" width="92" height="24" rx="12" fill="#7ee2b8" fill-opacity="0.08" stroke="#7ee2b8" stroke-opacity="0.18"/>
    <text x="1004" y="338" fill="#7ee2b8" font-size="9" text-anchor="middle" letter-spacing="0.4">12 ACTIVE</text>
  </g>

  <g clip-path="url(#ch-map-clip)">
    <rect x="310" y="350" width="760" height="324" fill="#070b10"/>
    <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
      <path d="M310 420H1070"/>
      <path d="M310 500H1070"/>
      <path d="M310 580H1070"/>
      <path d="M310 660H1070"/>
      <path d="M420 350V674"/>
      <path d="M540 350V674"/>
      <path d="M660 350V674"/>
      <path d="M780 350V674"/>
      <path d="M900 350V674"/>
      <path d="M1020 350V674"/>
    </g>
    <g stroke="#1b2533" stroke-width="6" fill="none" opacity="0.9">
      <path d="M330 640C430 610 470 540 560 520S700 548 760 500 860 410 960 390"/>
      <path d="M330 470C420 500 500 470 590 440S720 380 830 400 950 500 1040 520"/>
    </g>
    <g stroke="#111a25" stroke-width="2" fill="none" opacity="0.8">
      <path d="M330 640C430 610 470 540 560 520S700 548 760 500 860 410 960 390"/>
      <path d="M330 470C420 500 500 470 590 440S720 380 830 400 950 500 1040 520"/>
    </g>
    <path d="M390 610C470 562 530 542 610 518S760 456 820 428 930 386 980 362" stroke="#acceef" stroke-opacity="0.28" stroke-width="14" stroke-linecap="round" filter="url(#ch-route-glow)"/>
    <path d="M390 610C470 562 530 542 610 518S760 456 820 428 930 386 980 362" stroke="url(#ch-route)" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="390" cy="610" r="15" fill="#acceef" fill-opacity="0.12"/>
    <circle cx="390" cy="610" r="5" fill="#dcecff"/>
    <circle cx="980" cy="362" r="17" fill="#acceef" fill-opacity="0.12"/>
    <circle cx="980" cy="362" r="6" fill="#dcecff"/>
    <circle cx="980" cy="362" r="10" stroke="#acceef" stroke-opacity="0.45" fill="none"/>
    <g transform="translate(686 478)">
      <rect x="-17" y="-13" width="34" height="26" rx="8" fill="#edf3fa"/>
      <rect x="-9" y="-5" width="18" height="10" rx="3" fill="#0a0d12"/>
      <circle cx="-8" cy="10" r="2.4" fill="#0a0d12"/>
      <circle cx="8" cy="10" r="2.4" fill="#0a0d12"/>
    </g>
    <text x="958" y="358" fill="#dcecff" font-size="11" font-weight="500" text-anchor="end">Heathrow T5</text>
    <text x="958" y="372" fill="#7d8a9b" font-size="9" text-anchor="end">Drop-off · 14:28</text>
    <g>
      <rect x="330" y="582" width="248" height="72" rx="11" fill="#0a1018" fill-opacity="0.94" stroke="#ffffff" stroke-opacity="0.09"/>
      <text x="348" y="604" fill="#7d8a9b" font-size="9" letter-spacing="0.6">NEXT PICKUP</text>
      <text x="348" y="624" fill="#edf3fa" font-size="15" font-weight="500">Mayfair · 14:10</text>
      <text x="348" y="641" fill="#8a97a8" font-size="9">James W. · Mercedes V-Class</text>
    </g>
  </g>

  <!-- next job -->
  <g>
    <rect x="1086" y="310" width="414" height="170" rx="14" fill="#ffffff" fill-opacity="0.025" stroke="#ffffff" stroke-opacity="0.07"/>
    <text x="1106" y="338" fill="#7d8a9b" font-size="10" letter-spacing="0.7">NEXT JOB</text>
    <rect x="1400" y="322" width="80" height="24" rx="12" fill="#7ee2b8" fill-opacity="0.08" stroke="#7ee2b8" stroke-opacity="0.18"/>
    <text x="1440" y="338" fill="#7ee2b8" font-size="9" text-anchor="middle" letter-spacing="0.4">CONFIRMED</text>
    <text x="1106" y="376" fill="#edf3fa" font-size="24" font-weight="500" letter-spacing="-0.5">Airport transfer</text>
    <text x="1106" y="401" fill="#8a97a8" font-size="12">Heathrow T5 → Mayfair</text>
    <path d="M1106 418H1480" stroke="#ffffff" stroke-opacity="0.06"/>
    <text x="1106" y="442" fill="#dce6f2" font-size="12">Today · 14:30</text>
    <text x="1106" y="461" fill="#7d8a9b" font-size="10">James W. · Mercedes V-Class · BA 123</text>
  </g>

  <!-- compliance -->
  <g>
    <rect x="1086" y="492" width="414" height="182" rx="14" fill="#ffffff" fill-opacity="0.025" stroke="#ffffff" stroke-opacity="0.07"/>
    <text x="1106" y="520" fill="#7d8a9b" font-size="10" letter-spacing="0.7">COMPLIANCE</text>
    <text x="1480" y="520" fill="#edf3fa" font-size="14" font-weight="600" text-anchor="end">96%</text>
    ${complianceRows
      .map(([label, status, color], index) => {
        const y = 552 + index * 30;
        return `
    <path d="M1106 ${y - 14}H1480" stroke="#ffffff" stroke-opacity="0.05"/>
    <text x="1106" y="${y + 4}" fill="#b9c4d1" font-size="11">${label}</text>
    <circle cx="1430" cy="${y}" r="2.5" fill="${color}"/>
    <text x="1480" y="${y + 4}" fill="${color}" font-size="10" text-anchor="end">${status}</text>`;
      })
      .join("")}
  </g>
</svg>`;

write("project-chauffeur.svg", chauffeur);

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
