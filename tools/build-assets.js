// توليد أصول PNG لملف الـ PPTX: أيقونات المجوهرات + نسخة فاتحة من الشعار
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const C = {
  burgundy: '#4D0E13',
  powderBlue: '#94B1C8',
  dustyPink: '#C8A49F',
  paperBag: '#D8C4AC',
  creme: '#EEE4DA',
};

const svgs = {
  'ring-blue': (s = C.burgundy, g = C.powderBlue) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 100 100">
      <circle cx="50" cy="62" r="26" fill="none" stroke="${s}" stroke-width="3"/>
      <circle cx="50" cy="62" r="22.5" fill="none" stroke="${s}" stroke-width="0.8" opacity="0.5"/>
      <path d="M40 26 L46 16 H54 L60 26 L50 38 Z" fill="${g}" stroke="${s}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M40 26 H60 M46 16 L50 26 L54 16 M50 26 L50 38" stroke="${s}" stroke-width="1.2" fill="none"/>
    </svg>`,
  necklace: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 100 100">
      <path d="M14 18 C22 52 38 62 50 62 C62 62 78 52 86 18" fill="none" stroke="${C.burgundy}" stroke-width="2.6" stroke-linecap="round"/>
      <circle cx="26" cy="42" r="2" fill="${C.burgundy}"/><circle cx="74" cy="42" r="2" fill="${C.burgundy}"/>
      <circle cx="36" cy="54" r="2" fill="${C.burgundy}"/><circle cx="64" cy="54" r="2" fill="${C.burgundy}"/>
      <path d="M50 62 L50 70" stroke="${C.burgundy}" stroke-width="2"/>
      <path d="M43 76 L50 68 L57 76 L50 90 Z" fill="${C.dustyPink}" stroke="${C.burgundy}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M43 76 H57 M50 68 L50 90" stroke="${C.burgundy}" stroke-width="1.1" fill="none"/>
    </svg>`,
  earrings: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 100 100">
      ${[30, 70]
        .map(
          (cx) => `<g>
        <path d="M${cx - 7} 22 A7 7 0 0 1 ${cx + 7} 22" fill="none" stroke="${C.burgundy}" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M${cx} 26 L${cx} 40" stroke="${C.burgundy}" stroke-width="2"/>
        <path d="M${cx - 9} 48 L${cx} 38 L${cx + 9} 48 L${cx} 66 Z" fill="${C.paperBag}" stroke="${C.burgundy}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M${cx - 9} 48 H${cx + 9} M${cx} 38 L${cx} 66" stroke="${C.burgundy}" stroke-width="1.1" fill="none"/>
      </g>`,
        )
        .join('')}
    </svg>`,
  bracelet: () => {
    const dots = Array.from({length: 10})
      .map((_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return `<circle cx="${50 + Math.cos(a) * 27.5}" cy="${50 + Math.sin(a) * 27.5}" r="1.7" fill="${C.burgundy}"/>`;
      })
      .join('');
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" fill="none" stroke="${C.burgundy}" stroke-width="3"/>
      <circle cx="50" cy="50" r="25" fill="none" stroke="${C.burgundy}" stroke-width="0.9" opacity="0.5"/>
      ${dots}
      <rect x="44" y="12" width="12" height="12" rx="1" transform="rotate(45 50 18)" fill="${C.powderBlue}" stroke="${C.burgundy}" stroke-width="1.6"/>
    </svg>`;
  },
  'ring-dark': () => svgs['ring-blue'](C.paperBag, C.dustyPink),
  sparkle: () => `
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 24 24">
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" fill="${C.paperBag}"/>
    </svg>`,
};

(async () => {
  const outDir = path.join(__dirname, 'assets');
  fs.mkdirSync(outDir, {recursive: true});

  for (const [name, fn] of Object.entries(svgs)) {
    await sharp(Buffer.from(fn())).png().toFile(path.join(outDir, `${name}.png`));
  }

  // نسخة فاتحة من الشعار للخلفيات الداكنة: تعبئة كريمي عبر قناة الشفافية
  const logo = path.join(__dirname, '..', 'public', 'logo.png');
  const meta = await sharp(logo).metadata();
  const solid = await sharp({
    create: {width: meta.width, height: meta.height, channels: 4, background: C.creme},
  })
    .png()
    .toBuffer();
  await sharp(solid)
    .composite([{input: logo, blend: 'dest-in'}])
    .png()
    .toFile(path.join(outDir, 'logo-light.png'));

  console.log('assets done:', fs.readdirSync(outDir).join(', '));
})();
