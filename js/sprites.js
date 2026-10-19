"use strict";
/* ================= SPRITES (SVG vẽ tay, style sticker) ================= */
const INK = "#5D4037";
function svgWrap(inner, vb){
  return `<svg viewBox="${vb||'0 0 100 100'}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}
function petals(cx, cy, n, rx, ry, dist, fill, rot0){
  let s = "";
  for(let i=0;i<n;i++){
    const a = (rot0||0) + i*360/n;
    s += `<ellipse cx="${cx}" cy="${cy-dist}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${INK}" stroke-width="3.5" transform="rotate(${a} ${cx} ${cy})"/>`;
  }
  return s;
}
function kface(cx, cy, s){
  s = s || 1;
  const e = 3*s, mx = 8*s, my = 5*s, chx = 13*s;
  return `<g>`
    + `<circle cx="${cx-mx}" cy="${cy}" r="${e}" fill="${INK}"/>`
    + `<circle cx="${cx+mx}" cy="${cy}" r="${e}" fill="${INK}"/>`
    + `<circle cx="${cx-mx+e*0.3}" cy="${cy-e*0.3}" r="${e*0.35}" fill="#fff"/>`
    + `<circle cx="${cx+mx+e*0.3}" cy="${cy-e*0.3}" r="${e*0.35}" fill="#fff"/>`
    + `<ellipse cx="${cx-chx}" cy="${cy+my+2*s}" rx="${4*s}" ry="${2.6*s}" fill="#FFCDD2" opacity=".85"/>`
    + `<ellipse cx="${cx+chx}" cy="${cy+my+2*s}" rx="${4*s}" ry="${2.6*s}" fill="#FFCDD2" opacity=".85"/>`
    + `<path d="M${cx-4*s} ${cy+my} Q${cx} ${cy+my+4*s} ${cx+4*s} ${cy+my}" stroke="${INK}" stroke-width="${2.2*s}" fill="none" stroke-linecap="round"/>`
    + `</g>`;
}
const SPR = {
  // --- Hoa 4 cấp cho game Ghép Hoa (kawaii style) ---
  bud: () => svgWrap(`
    <path d="M50 92 C50 78 50 68 50 60" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 74 C36 70 28 62 26 50 C38 52 47 60 50 74 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 74 C64 70 72 62 74 50 C62 52 53 60 50 74 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 26 C36 36 34 56 50 70 C66 56 64 36 50 26 Z" fill="#FFD1DC" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M50 26 C44 34 42 46 46 58" stroke="#FFCDD2" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M36 66 L44 62 L42 72 L34 74 Z M64 66 L56 62 L58 72 L66 74 Z" fill="#81C784" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    ${kface(50, 48)}`),
  bloom1: () => svgWrap(`
    <path d="M50 92 C50 80 50 70 50 62" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 78 C38 74 30 66 28 56 C40 58 48 66 50 78 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${petals(50, 44, 6, 11, 17, 16, "#FF9EBB")}
    <circle cx="50" cy="44" r="12" fill="#FFE082" stroke="${INK}" stroke-width="3.5"/>
    ${kface(50, 44, 1.15)}
    <circle cx="42" cy="36" r="2.5" fill="#fff"/><circle cx="57" cy="39" r="1.8" fill="#fff"/>`),
  bloom2: () => svgWrap(`
    <path d="M50 94 C50 82 50 72 50 64" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 80 C36 76 28 68 26 58 C38 60 47 68 50 80 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 80 C64 76 72 68 74 58 C62 60 53 68 50 80 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${petals(50, 44, 10, 9, 18, 17, "#F48FB1")}
    ${petals(50, 44, 6, 8, 13, 12, "#FFD1DC", 30)}
    <circle cx="50" cy="44" r="13" fill="#FF9E6D" stroke="${INK}" stroke-width="3.5"/>
    <circle cx="50" cy="44" r="6" fill="#FFE082"/>
    ${kface(50, 44, 1.2)}
    <circle cx="41" cy="35" r="2.5" fill="#fff"/>`),
  bloomX: () => svgWrap(`
    <path d="M50 94 C50 82 50 72 50 64" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 82 C36 78 28 70 26 60 C38 62 47 70 50 82 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 82 C64 78 72 70 74 60 C62 62 53 70 50 82 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${petals(50, 42, 10, 11, 20, 19, "#FF9E6D")}
    ${petals(50, 42, 8, 9, 15, 14, "#FF9EBB", 22.5)}
    ${petals(50, 42, 6, 6, 10, 9, "#FFF9C4", 15)}
    <circle cx="50" cy="42" r="12" fill="#FFE082" stroke="${INK}" stroke-width="3.5"/>
    <circle cx="50" cy="42" r="5" fill="#fff"/>
    ${kface(50, 42, 1.25)}
    <path d="M18 20 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 Z" fill="#FFF9C4" stroke="${INK}" stroke-width="2"/>
    <path d="M82 18 l2.4 5.6 5.6 2.4 -5.6 2.4 -2.4 5.6 -2.4 -5.6 -5.6 -2.4 5.6 -2.4 Z" fill="#FFF9C4" stroke="${INK}" stroke-width="2"/>
    <circle cx="24" cy="70" r="3" fill="#FFF9C4" stroke="${INK}" stroke-width="1.5"/>`),
  wilt: () => svgWrap(`
    <path d="M52 92 C48 78 44 68 40 60" stroke="#8D6E63" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M40 60 C26 58 18 50 16 40 C28 42 38 50 40 60 Z" fill="#C9A227" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M40 60 C48 52 50 42 46 32 C38 38 36 50 40 60 Z" fill="#A68B1F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M26 46 q6 4 12 4 M40 44 q4 6 2 12" stroke="#7a6216" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M30 52 l3 3 M44 46 l-3 3" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M33 60 q4 3 8 0" stroke="${INK}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`),

  // --- Icon cho game Nối Cặp (15 loại, kawaii) ---
  rose: () => svgWrap(`
    <path d="M50 90 C50 78 50 68 50 62" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 74 C40 70 34 64 32 56 C40 58 47 64 50 74 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 74 C60 70 66 64 68 56 C60 58 53 64 50 74 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="50" cy="44" r="19" fill="#FF8FA3" stroke="${INK}" stroke-width="3.5"/>
    <path d="M50 29 c-9 2 -14 9 -14 15 c0 9 7 15 14 15 c7 0 14 -6 14 -15 c0 -6 -5 -13 -14 -15 Z" fill="none" stroke="#B76E79" stroke-width="3"/>
    <path d="M50 37 c-5 1 -8 5 -8 8 c0 5 4 8 8 8" stroke="#B76E79" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    ${kface(50, 46, 0.9)}`),
  daisy: () => svgWrap(`
    <path d="M50 92 C50 80 50 70 50 62" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 78 C40 74 34 68 32 60 C40 62 47 68 50 78 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    ${petals(50, 42, 12, 6.5, 15, 14, "#ffffff")}
    <circle cx="50" cy="42" r="11" fill="#FFE082" stroke="${INK}" stroke-width="3.5"/>
    ${kface(50, 42, 1.05)}`),
  tulip: () => svgWrap(`
    <path d="M50 92 C50 78 50 68 50 60" stroke="#81C784" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M50 74 C40 70 34 64 32 56 C40 58 47 64 50 74 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M32 54 C32 36 39 27 45 22 L45 38 L53 28 L53 42 L61 32 C68 38 73 45 73 54 C73 66 63 75 52.5 75 C42 75 32 66 32 54 Z"
      fill="#FF9EBB" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M45 40 C43 48 43 56 45 64" stroke="#E57399" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    ${kface(52, 56, 0.9)}`),
  butterfly: () => svgWrap(`
    <ellipse cx="33" cy="44" rx="17" ry="23" fill="#CE93D8" stroke="${INK}" stroke-width="3.5" transform="rotate(-22 33 44)"/>
    <ellipse cx="67" cy="44" rx="17" ry="23" fill="#E1BEE7" stroke="${INK}" stroke-width="3.5" transform="rotate(22 67 44)"/>
    <circle cx="30" cy="38" r="6" fill="#FFD1DC"/><circle cx="70" cy="50" r="6" fill="#E1BEE7"/>
    <circle cx="36" cy="54" r="4" fill="#fff" opacity=".8"/><circle cx="64" cy="36" r="4" fill="#fff" opacity=".8"/>
    <rect x="45.5" y="32" width="9" height="34" rx="4.5" fill="${INK}"/>
    <circle cx="50" cy="27" r="8" fill="${INK}"/>
    <circle cx="47" cy="26" r="2.5" fill="#fff"/><circle cx="53" cy="26" r="2.5" fill="#fff"/>
    <path d="M47.5 31 q2.5 2 5 0" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <path d="M45 20 C41 12 35 10 31 12 M55 20 C59 12 65 10 69 12" stroke="${INK}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <circle cx="31" cy="12" r="2.5" fill="#FF9EBB"/><circle cx="69" cy="12" r="2.5" fill="#FF9EBB"/>`),
  bee: () => svgWrap(`
    <ellipse cx="31" cy="30" rx="13" ry="9" fill="#E1F5FE" stroke="${INK}" stroke-width="3" transform="rotate(-28 31 30)"/>
    <ellipse cx="69" cy="30" rx="13" ry="9" fill="#E1F5FE" stroke="${INK}" stroke-width="3" transform="rotate(28 69 30)"/>
    <ellipse cx="50" cy="60" rx="23" ry="19" fill="#FFD54F" stroke="${INK}" stroke-width="3.5"/>
    <path d="M39 46 C37 54 37 66 39 76 M51 44 C49 54 49 66 51 78" stroke="${INK}" stroke-width="5.5" fill="none"/>
    <path d="M72 58 l8 -3 l-6 7 Z" fill="${INK}"/>
    <circle cx="62" cy="56" r="3.2" fill="${INK}"/>
    <ellipse cx="68" cy="63" rx="3.4" ry="2.4" fill="#FFD1DC"/>
    <path d="M58 65 q4 3 8 1" stroke="${INK}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M44 42 q4 -6 9 -7" stroke="${INK}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`),
  heart: () => svgWrap(`
    <path d="M50 80 C28 63 18 50 18 37 C18 27 26 20 35 20 C42 20 48 25 50 31 C52 25 58 20 65 20 C74 20 82 27 82 37 C82 50 72 63 50 80 Z"
      fill="#F48FB1" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M68 62 c-6 -4 -10 -9 -10 -14 c0 -4 3 -7 7 -7 c3 0 5 2 6 4 c1 -2 3 -4 6 -4 c4 0 7 3 7 7 c0 5 -4 10 -10 14 l-3 2 Z"
      fill="#FFD1DC" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    <ellipse cx="35" cy="36" rx="5" ry="7" fill="#fff" opacity=".75" transform="rotate(-18 35 36)"/>
    ${kface(46, 48, 0.95)}`),
  leaf: () => svgWrap(`
    <path d="M50 12 C76 25 84 54 66 80 C40 72 28 40 50 12 Z" fill="#81C784" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M50 12 C56 34 60 56 66 80" stroke="${INK}" stroke-width="2.5" fill="none"/>
    <path d="M54 34 l12 -4 M57 48 l12 -3 M60 62 l11 -2" stroke="#4E9A51" stroke-width="2" stroke-linecap="round"/>
    ${kface(56, 50, 0.85)}`),
  drop: () => svgWrap(`
    <path d="M50 14 C63 33 73 48 73 63 C73 77 63 87 50 87 C37 87 27 77 27 63 C27 48 37 33 50 14 Z"
      fill="#81D4FA" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <ellipse cx="41" cy="62" rx="5" ry="9" fill="#fff" opacity=".75" transform="rotate(-16 41 62)"/>
    ${kface(52, 62, 0.95)}`),
  star: () => svgWrap(`
    <path d="M50 14 L60 37 L84 38 L65 53 L71 77 L50 63 L29 77 L35 53 L16 38 L40 37 Z"
      fill="#FFE082" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M50 24 L55 36" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
    ${kface(50, 50, 1.0)}`),
  candy: () => svgWrap(`
    <path d="M30 50 L14 36 L21 28 L36 42 Z" fill="#E1BEE7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M70 50 L86 36 L79 28 L64 42 Z" fill="#E1BEE7" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <rect x="28" y="36" width="44" height="28" rx="14" fill="#9D84B6" stroke="${INK}" stroke-width="3.5"/>
    <path d="M38 38 C44 44 44 56 38 62 M50 36 C50 46 50 54 50 64 M62 38 C56 44 56 56 62 62" stroke="#fff" stroke-width="3.5" fill="none" opacity=".85" stroke-linecap="round"/>
    ${kface(50, 50, 0.8)}`),
  bell: () => svgWrap(`
    <circle cx="50" cy="18" r="6.5" fill="#FFE082" stroke="${INK}" stroke-width="3"/>
    <path d="M50 24 C35 24 29 43 27 58 L73 58 C71 43 65 24 50 24 Z" fill="#FF9E6D" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M38 40 C36 46 36 52 37 57" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    <rect x="23" y="58" width="54" height="11" rx="5.5" fill="#FF9EBB" stroke="${INK}" stroke-width="3"/>
    <circle cx="50" cy="77" r="6.5" fill="#FFE082" stroke="${INK}" stroke-width="3"/>
    ${kface(50, 46, 0.85)}`),
  bow: () => svgWrap(`
    <path d="M48 50 L20 32 C13 43 13 57 20 68 Z" fill="#FF9EBB" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M52 50 L80 32 C87 43 87 57 80 68 Z" fill="#FF9EBB" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M30 42 L24 38 M70 42 L76 38" stroke="#E57399" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M48 52 L36 82 L45 80 L52 60 Z" fill="#F48FB1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M52 52 L64 82 L55 80 L48 60 Z" fill="#F48FB1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <rect x="41" y="41" width="18" height="18" rx="6" fill="#F48FB1" stroke="${INK}" stroke-width="3.5"/>
    <circle cx="47" cy="47" r="2" fill="#fff"/><circle cx="53" cy="52" r="1.6" fill="#fff"/>`),
  sun: () => svgWrap(`
    ${Array.from({length:8},(_,i)=>{const a=i*45;return `<line x1="50" y1="12" x2="50" y2="22" stroke="#FF9E6D" stroke-width="5" stroke-linecap="round" transform="rotate(${a} 50 50)"/>`;}).join("")}
    <circle cx="50" cy="50" r="22" fill="#FFE082" stroke="${INK}" stroke-width="3.5"/>
    ${kface(50, 50, 1.1)}`),
  shroom: () => svgWrap(`
    <rect x="42" y="58" width="16" height="24" rx="7" fill="#FFE0B2" stroke="${INK}" stroke-width="3.5"/>
    <path d="M50 16 C30 16 20 32 18 52 C18 56 21 58 25 58 L75 58 C79 58 82 56 82 52 C80 32 70 16 50 16 Z"
      fill="#FF8FA3" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="36" cy="38" r="5.5" fill="#fff"/><circle cx="58" cy="30" r="4.5" fill="#fff"/><circle cx="66" cy="46" r="3.5" fill="#fff"/>
    ${kface(50, 70, 0.9)}`),
  shell: () => svgWrap(`
    <path d="M50 84 C34 70 26 54 28 38 L36 42 L34 30 L44 36 L44 24 L52 32 L58 20 L60 34 L70 28 L66 40 L76 38 C76 56 66 72 50 84 Z"
      fill="#FFD1DC" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M50 84 L50 40 M40 74 L44 44 M60 74 L56 44" stroke="#FFCDD2" stroke-width="2.5" stroke-linecap="round"/>
    ${kface(50, 62, 0.9)}`),

  // --- Lọ hoa finale ---
  vase: () => svgWrap(`
    <path d="M50 88 C46 70 40 58 34 48" stroke="#81C784" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 88 C50 68 50 50 50 36" stroke="#81C784" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 88 C54 70 60 58 66 48" stroke="#81C784" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M50 70 C42 68 36 64 32 58 C40 58 47 62 50 70 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M50 70 C58 68 64 64 68 58 C60 58 53 62 50 70 Z" fill="#A5D6A7" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    ${petals(32, 40, 6, 8, 13, 12, "#FF8FA3")}
    <circle cx="32" cy="40" r="7" fill="#FFE082" stroke="${INK}" stroke-width="3"/>
    ${petals(50, 28, 8, 8, 14, 13, "#FF9EBB")}
    <circle cx="50" cy="28" r="8" fill="#FFE082" stroke="${INK}" stroke-width="3"/>
    ${kface(50, 28, 1.0)}
    ${petals(68, 40, 6, 8, 13, 12, "#ffffff")}
    <circle cx="68" cy="40" r="7" fill="#FFE082" stroke="${INK}" stroke-width="3"/>
    <path d="M31 86 L69 86 L65 108 L35 108 Z" fill="#B3E5FC" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M35 108 L65 108 L63 112 L37 112 Z" fill="#81D4FA" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 92 L40 86 L40 98 Z" fill="#FF9EBB" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M50 92 L60 86 L60 98 Z" fill="#FF9EBB" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="50" cy="92" r="4" fill="#F48FB1" stroke="${INK}" stroke-width="2.5"/>`, '0 0 100 116'),
  sparkle: (color) => `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z" fill="${color||"#FFF9C4"}" stroke="#9D84B6" stroke-width="1.2"/></svg>`,
  check: () => `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M4 12l6 6L20 6"/></svg>`,
  lock: () => `<svg viewBox="0 0 24 24" fill="none" stroke="#A1887F" stroke-width="2.5" width="34" height="34"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>`
};
const PAIR_ICONS = ["rose","daisy","tulip","butterfly","bee","heart","leaf","drop","star","candy","bell","bow","sun","shroom","shell"];
const FLOWER_LEVELS = ["bud","bloom1","bloom2","bloomX"];
const FLOWER_NAMES = ["Nụ hoa","Hoa chớm nở","Hoa nở rộ","Hoa 20/10"];
