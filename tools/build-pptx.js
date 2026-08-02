// نسخة قابلة للتعديل من بوستات لوموند — PPTX بمقاس 1080×1350
// كل النصوص والأشكال طبقات حية: يستوردها كانفا/PowerPoint/Google Slides للتعديل
const pptxgen = require('pptxgenjs');
const sharp = require('sharp');
const path = require('path');

const P = (px) => px / 96; // بكسل → إنش

const C = {
  burgundy: '4D0E13',
  burgundyDeep: '3A0A0E',
  powderBlue: '94B1C8',
  dustyPink: 'C8A49F',
  paperBag: 'D8C4AC',
  creme: 'EEE4DA',
  ink: '2E2622',
  white: 'FFFFFF',
};

const AR_HEAD = 'Amiri';
const AR_BODY = 'Tajawal';
const LATIN = 'Times New Roman';

const A = (f) => path.join(__dirname, 'assets', f);
const LOGO = path.join(__dirname, '..', 'public', 'logo.png');

(async () => {
  const logoMeta = await sharp(LOGO).metadata();
  const logoRatio = logoMeta.height / logoMeta.width;

  const pres = new pptxgen();
  pres.defineLayout({name: 'IG45', width: P(1080), height: P(1350)});
  pres.layout = 'IG45';

  const centerText = (slide, text, opts) =>
    slide.addText(text, {
      align: 'center',
      margin: 0,
      valign: 'middle',
      ...opts,
    });

  const addLogo = (slide, {w = 180, y = 96, dark = false}) =>
    slide.addImage({
      path: dark ? A('logo-light.png') : LOGO,
      x: P((1080 - w) / 2),
      y: P(y),
      w: P(w),
      h: P(w * logoRatio),
    });

  const addFrame = (slide, color) => {
    slide.addShape('rect', {
      x: P(40), y: P(40), w: P(1000), h: P(1270),
      fill: {type: 'none'},
      line: {color, width: 1.5, transparency: 50},
    });
    slide.addShape('rect', {
      x: P(52), y: P(52), w: P(976), h: P(1246),
      fill: {type: 'none'},
      line: {color, width: 0.75, transparency: 70},
    });
  };

  const addDivider = (slide, {y, color, width = 340}) => {
    const cx = 1080 / 2;
    slide.addShape('rect', {
      x: P(cx - width / 2), y: P(y + 5), w: P(width / 2 - 16), h: P(1.6),
      fill: {color, transparency: 20}, line: {type: 'none'},
    });
    slide.addShape('rect', {
      x: P(cx + 16), y: P(y + 5), w: P(width / 2 - 16), h: P(1.6),
      fill: {color, transparency: 20}, line: {type: 'none'},
    });
    slide.addShape('diamond', {
      x: P(cx - 6), y: P(y), w: P(12), h: P(12),
      fill: {color}, line: {type: 'none'},
    });
  };

  const addLatin = (slide, text, {y, dark = false, size = 15, h = 40, color}) =>
    centerText(slide, text.toUpperCase(), {
      x: P(90), y: P(y), w: P(900), h: P(h),
      fontFace: LATIN, fontSize: size, charSpacing: 6,
      color: color || (dark ? C.paperBag : C.ink),
      transparency: dark ? 10 : 40,
    });

  const addHeader = (slide, {tag, latin, dark = false}) => {
    addLogo(slide, {w: 180, y: 96, dark});
    centerText(slide, tag, {
      x: P(90), y: P(96 + 180 * logoRatio + 26), w: P(900), h: P(44),
      fontFace: AR_BODY, fontSize: 19, charSpacing: 9, rtlMode: true,
      color: dark ? C.paperBag : C.ink, transparency: dark ? 10 : 40,
    });
    if (latin) addLatin(slide, latin, {y: 96 + 180 * logoRatio + 76, dark, size: 13, h: 32});
  };

  const addFooter = (slide, dark = false) =>
    addLatin(slide, 'Lomond · Fine Jewellery · KSA', {y: 1232, dark, size: 14});

  const addTitle = (slide, text, {y, size = 62, dark = false, h = 220, color}) =>
    centerText(slide, text, {
      x: P(80), y: P(y), w: P(920), h: P(h),
      fontFace: AR_HEAD, fontSize: size, bold: true, rtlMode: true,
      color: color || (dark ? C.creme : C.burgundy), lineSpacingMultiple: 1.25,
    });

  const addBody = (slide, text, {y, size = 24, dark = false, h = 120}) =>
    centerText(slide, text, {
      x: P(110), y: P(y), w: P(860), h: P(h),
      fontFace: AR_BODY, fontSize: size, rtlMode: true,
      color: dark ? C.creme : C.ink, transparency: dark ? 15 : 20,
      lineSpacingMultiple: 1.35,
    });

  const addButton = (slide, text, {y, dark = false, w = 520, h = 84}) => {
    centerText(slide, text, {
      x: P((1080 - w) / 2), y: P(y), w: P(w), h: P(h),
      fill: {color: dark ? C.creme : C.burgundy},
      fontFace: AR_BODY, fontSize: 23, bold: true, rtlMode: true, charSpacing: 2,
      color: dark ? C.burgundy : C.creme,
    });
  };

  const addSwipe = (slide, dark = false) =>
    centerText(slide, 'اسحب للمزيد  ⟵', {
      x: P(290), y: P(1148), w: P(500), h: P(52),
      fontFace: AR_BODY, fontSize: 20, bold: true, charSpacing: 4, rtlMode: true,
      color: dark ? C.paperBag : C.burgundy,
    });

  const addSparkles = (slide, spots) =>
    spots.forEach(([x, y, s]) =>
      slide.addImage({path: A('sparkle.png'), x: P(x), y: P(y), w: P(s), h: P(s), transparency: 25}),
    );

  // ————— ٠١ | الافتتاحية (داكن) —————
  {
    const s = pres.addSlide();
    s.background = {color: C.burgundyDeep};
    addFrame(s, C.paperBag);
    addSparkles(s, [[180, 310, 30], [870, 390, 22], [240, 990, 20]]);
    addLatin(s, 'Est. Riyadh', {y: 360, dark: true, size: 16});
    addLogo(s, {w: 520, y: 430, dark: true});
    addDivider(s, {y: 640, color: C.paperBag});
    addTitle(s, 'لمعتك… تستاهل اسم يليق فيها', {y: 690, size: 33, dark: true, h: 90});
    addBody(s, 'مجوهرات فاخرة بتصاميم حصرية — عيار ١٨ وألماس معتمد', {y: 790, size: 23, dark: true, h: 70});
    addFooter(s, true);
  }

  // ————— ٠٢ | عيارات الذهب —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.burgundy);
    addHeader(s, {tag: 'دليل لوموند', latin: 'The Lomond Guide'});
    centerText(s, [
      {text: '24K   21K   ', options: {color: C.ink, transparency: 55}},
      {text: '18K', options: {color: C.ink, transparency: 10, underline: true}},
    ], {
      x: P(90), y: P(370), w: P(900), h: P(60),
      fontFace: LATIN, fontSize: 28, charSpacing: 5,
    });
    addTitle(s, 'أغلى ذهب…\nمو أفضل ذهب', {y: 460, size: 70, h: 300});
    addDivider(s, {y: 800, color: C.powderBlue});
    addBody(s, 'وش الفرق بين العيارات؟ وليش أفخم بيوت المجوهرات\nبالعالم تشتغل بعيار ١٨؟', {y: 850, size: 25, h: 130});
    addSwipe(s);
    addFooter(s);
  }

  // ————— ٠٣ | اقتباس —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.dustyPink);
    addSparkles(s, [[210, 350, 26], [840, 950, 22]]);
    centerText(s, '“', {
      x: P(390), y: P(255), w: P(300), h: P(225),
      fontFace: LATIN, fontSize: 120, color: C.dustyPink,
    });
    addTitle(s, 'الفخامة الحقيقية…\nتفاصيل ما تحتاج\nتشرح نفسها', {y: 450, size: 60, h: 400});
    addDivider(s, {y: 900, color: C.dustyPink});
    addLogo(s, {w: 190, y: 960});
    addFooter(s);
  }

  // ————— بطاقة منتج موحّدة —————
  const productSlide = ({tint, icon, nameAr, nameEn, specs, sar}) => {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.burgundy);
    addHeader(s, {tag: 'تشكيلة لوموند', latin: 'The Collection'});
    s.addShape('ellipse', {
      x: P(320), y: P(310), w: P(440), h: P(440),
      fill: {color: C.white, transparency: 50},
      line: {color: tint, width: 1.2},
    });
    s.addImage({path: A(icon), x: P(380), y: P(370), w: P(320), h: P(320)});
    addTitle(s, nameAr, {y: 775, size: 52, h: 100});
    addLatin(s, nameEn, {y: 885, size: 16});
    addBody(s, specs, {y: 930, size: 23, h: 60});
    centerText(s, [
      {text: 'يبدأ من  ', options: {fontFace: AR_BODY, fontSize: 22, color: C.burgundy, transparency: 25}},
      {text: sar.toLocaleString('en-US'), options: {fontFace: LATIN, fontSize: 40, bold: true, color: C.burgundy}},
      {text: '  ر.س', options: {fontFace: AR_BODY, fontSize: 22, color: C.burgundy, transparency: 25}},
    ], {x: P(90), y: P(995), w: P(900), h: P(90), rtlMode: true});
    addButton(s, 'اطلبيها برسالة خاصة', {y: 1100});
    addFooter(s);
    return s;
  };

  // ————— ٠٤ | خاتم سوليتير —————
  productSlide({
    tint: C.powderBlue, icon: 'ring-blue.png',
    nameAr: 'خاتم سوليتير لوموند', nameEn: 'The Lomond Solitaire',
    specs: 'ذهب عيار ١٨ · ألماسة بقَطع Excellent · شهادة اعتماد', sar: 2450,
  });

  // ————— ٠٥ | الـ 4C —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.burgundy);
    addHeader(s, {tag: 'دليل لوموند', latin: 'The Lomond Guide'});
    addTitle(s, '٤ حروف…\nتحدد سعر ألماستك', {y: 400, size: 66, h: 290});
    addDivider(s, {y: 720, color: C.paperBag});
    const cards = [
      {w: 'Cut', a: 'القَطع'},
      {w: 'Color', a: 'اللون'},
      {w: 'Clarity', a: 'النقاء'},
      {w: 'Carat', a: 'القيراط'},
    ];
    cards.forEach(({w, a}, i) => {
      const x = 128 + i * 212; // 188 عرض + 24 فجوة
      s.addShape('rect', {
        x: P(x), y: P(770), w: P(188), h: P(210),
        fill: {color: C.white, transparency: 45},
        line: {color: C.dustyPink, width: 1.2},
      });
      centerText(s, 'C', {x: P(x), y: P(778), w: P(188), h: P(88), fontFace: LATIN, fontSize: 46, bold: true, color: C.burgundy});
      centerText(s, w, {x: P(x), y: P(866), w: P(188), h: P(40), fontFace: LATIN, fontSize: 18, charSpacing: 2, color: C.ink, transparency: 35});
      centerText(s, a, {x: P(x), y: P(906), w: P(188), h: P(50), fontFace: AR_BODY, fontSize: 20, bold: true, rtlMode: true, color: C.burgundy});
    });
    addBody(s, 'وأهمها واحد بس… نشرحه بالسلايدات', {y: 1020, size: 24, h: 60});
    addSwipe(s);
    addFooter(s);
  }

  // ————— ٠٦ | عقد القطرة —————
  productSlide({
    tint: C.dustyPink, icon: 'necklace.png',
    nameAr: 'عقد القطرة', nameEn: 'The Teardrop Necklace',
    specs: 'ذهب عيار ١٨ · تصميم حصري يلبس يومي ويليق بالمناسبات', sar: 1890,
  });

  // ————— ٠٧ | ألوان البراند —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addLogo(s, {w: 220, y: 90});
    addLatin(s, 'The Lomond Palette', {y: 210, size: 16});
    // بدون رمز # — يتقلب موضعه في فقرات ثنائية الاتجاه داخل باوربوينت/كانفا
    const rows = [
      {name: 'كريمي', hex: 'EEE4DA', c: C.creme, ink: true},
      {name: 'أزرق بودرة', hex: '94B1C8', c: C.powderBlue, ink: true},
      {name: 'وردي مغبّر', hex: 'C8A49F', c: C.dustyPink, ink: true},
      {name: 'بيج ورقي', hex: 'D8C4AC', c: C.paperBag, ink: true},
      {name: 'برقندي', hex: '4D0E13', c: C.burgundy, ink: false},
    ];
    rows.forEach(({name, hex, c, ink}, i) => {
      const y = 300 + i * 210;
      s.addShape('rect', {x: 0, y: P(y), w: P(1080), h: P(210), fill: {color: c}, line: {type: 'none'}});
      s.addText(name, {
        x: P(560), y: P(y + 70), w: P(400), h: P(70), align: 'right', margin: 0, valign: 'middle',
        fontFace: AR_BODY, fontSize: 27, bold: true, rtlMode: true,
        color: ink ? C.ink : C.creme,
      });
      s.addText(hex, {
        x: P(120), y: P(y + 70), w: P(320), h: P(70), align: 'left', margin: 0, valign: 'middle',
        fontFace: LATIN, fontSize: 21, charSpacing: 4,
        color: ink ? C.ink : C.creme, transparency: 35,
      });
    });
  }

  // ————— ٠٨ | طبيعي ضد مخبري —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.burgundy);
    addHeader(s, {tag: 'دليل لوموند', latin: 'The Lomond Guide'});
    addTitle(s, 'ألماستين متطابقتين…\nوالفرق ٤٠٪ بالسعر', {y: 390, size: 56, h: 240});
    // ترتيب عربي: الأول يميناً
    const cols = [
      {t: 'طبيعي', en: 'Natural', b: 'تكوّن عبر ملايين السنين\nأندر — قيمة عاطفية وتقليدية', c: C.paperBag, x: 552},
      {t: 'مخبري', en: 'Lab-Grown', b: 'نفس التركيبة والصلابة واللمعان\nأوفر ٢٠–٤٠٪ وصديق للبيئة', c: C.powderBlue, x: 100},
    ];
    cols.forEach(({t, en, b, c, x}) => {
      s.addShape('rect', {
        x: P(x), y: P(660), w: P(428), h: P(330),
        fill: {color: C.white, transparency: 45},
        line: {color: c, width: 1.2},
      });
      s.addShape('rect', {x: P(x), y: P(660), w: P(428), h: P(8), fill: {color: c}, line: {type: 'none'}});
      centerText(s, t, {x: P(x), y: P(690), w: P(428), h: P(80), fontFace: AR_HEAD, fontSize: 36, bold: true, rtlMode: true, color: C.burgundy});
      centerText(s, en.toUpperCase(), {x: P(x), y: P(775), w: P(428), h: P(34), fontFace: LATIN, fontSize: 14, charSpacing: 4, color: C.ink, transparency: 40});
      centerText(s, b, {x: P(x + 20), y: P(820), w: P(388), h: P(140), fontFace: AR_BODY, fontSize: 20, rtlMode: true, color: C.ink, transparency: 15, lineSpacingMultiple: 1.4});
    });
    addBody(s, 'الاثنتين ألماس حقيقي ١٠٠٪ — والقرار لك', {y: 1030, size: 25, h: 60});
    addFooter(s);
  }

  // ————— ٠٩ | التصميم الخاص (داكن) —————
  {
    const s = pres.addSlide();
    s.background = {color: C.burgundyDeep};
    addFrame(s, C.paperBag);
    addSparkles(s, [[190, 290, 26], [860, 1010, 22]]);
    addHeader(s, {tag: 'خدمة التصميم الخاص', latin: 'Bespoke Service', dark: true});
    s.addImage({path: A('ring-dark.png'), x: P(420), y: P(400), w: P(240), h: P(240)});
    addTitle(s, 'قطعة ما يلبسها\nأحد غيرك', {y: 660, size: 62, dark: true, h: 250});
    addDivider(s, {y: 930, color: C.paperBag});
    addBody(s, 'من الفكرة… للرسمة… للقطعة بين يدينك.\nنصمم لك من الصفر حسب ذوقك وميزانيتك.', {y: 965, size: 24, dark: true, h: 120});
    addButton(s, 'ابدئي تصميمك — الرابط بالبايو', {y: 1100, dark: true});
    addFooter(s, true);
  }

  // ————— ١٠ | أقراط اللمعة —————
  productSlide({
    tint: C.paperBag, icon: 'earrings.png',
    nameAr: 'أقراط اللمعة', nameEn: 'The Lustre Earrings',
    specs: 'ذهب عيار ١٨ · خفيفة على الأذن، ثقيلة بالحضور', sar: 1290,
  });

  // ————— ١١ | مقاس الخاتم —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.burgundy);
    addHeader(s, {tag: 'دليل لوموند', latin: 'The Lomond Guide'});
    addBody(s, 'بدون ما تحس… وبدون ما تنكشف المفاجأة', {y: 400, size: 23, h: 60});
    addTitle(s, '٣ طرق تعرف فيها\nمقاس خاتمها', {y: 480, size: 66, h: 290});
    addDivider(s, {y: 800, color: C.dustyPink});
    const chips = ['خاتم من أدراجها', 'حليفتك السرية', 'قصة الورق'];
    chips.forEach((t, i) => {
      const w = 300;
      const x = 78 + (chips.length - 1 - i) * (w + 22); // الأول يميناً
      s.addShape('rect', {
        x: P(x), y: P(860), w: P(w), h: P(92),
        fill: {color: C.white, transparency: 45},
        line: {color: C.dustyPink, width: 1.2},
      });
      centerText(s, [
        {text: `${i + 1}  `, options: {fontFace: LATIN, fontSize: 26, bold: true, color: C.dustyPink}},
        {text: t, options: {fontFace: AR_BODY, fontSize: 21, bold: true, color: C.burgundy}},
      ], {x: P(x), y: P(860), w: P(w), h: P(92), rtlMode: true});
    });
    addSwipe(s);
    addFooter(s);
  }

  // ————— ١٢ | رأي عميلة —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.paperBag);
    addHeader(s, {tag: 'من عميلاتنا', latin: 'Client Stories'});
    centerText(s, '★ ★ ★ ★ ★', {
      x: P(90), y: P(420), w: P(900), h: P(70),
      fontFace: LATIN, fontSize: 30, color: C.burgundy, charSpacing: 4,
    });
    addTitle(s, '«طلبت تصميم خاص وكنت متوترة…\nوصلتني القطعة أجمل من الصورة.\nصار عندي صايغي الخاص»', {y: 520, size: 44, h: 380});
    addDivider(s, {y: 950, color: C.paperBag});
    addBody(s, 'سارة · الرياض', {y: 990, size: 22, h: 50});
    addFooter(s);
  }

  // ————— ١٣ | خرافات الألماس —————
  {
    const s = pres.addSlide();
    s.background = {color: C.creme};
    addFrame(s, C.burgundy);
    addHeader(s, {tag: 'دليل لوموند', latin: 'The Lomond Guide'});
    addTitle(s, '٣ خرافات عن الألماس\nصدقناها كلنا', {y: 380, size: 60, h: 260});
    addDivider(s, {y: 665, color: C.powderBlue});
    const myths = ['«المخبري مزيف»', '«الأكبر أجمل»', '«لازم صفر شوائب»'];
    myths.forEach((t, i) => {
      const y = 710 + i * 112;
      s.addShape('rect', {
        x: P(230), y: P(y), w: P(620), h: P(90),
        fill: {color: C.white, transparency: 45},
        line: {color: C.powderBlue, width: 1.2},
      });
      centerText(s, [
        {text: `${i + 1}   `, options: {fontFace: LATIN, fontSize: 26, bold: true, color: C.dustyPink}},
        {text: t, options: {fontFace: AR_BODY, fontSize: 24, bold: true, color: C.burgundy, strike: true}},
      ], {x: P(230), y: P(y), w: P(620), h: P(90), rtlMode: true});
    });
    addBody(s, 'لا تشترين بالاسم… اشتري بالفهم', {y: 1058, size: 23, h: 55});
    addSwipe(s);
    addFooter(s);
  }

  // ————— ١٤ | إسوارة تينس —————
  productSlide({
    tint: C.powderBlue, icon: 'bracelet.png',
    nameAr: 'إسوارة تينس لوموند', nameEn: 'The Lomond Tennis Bracelet',
    specs: 'ذهب عيار ١٨ · صفّ ألماس متصل يدور معك وين ما رحتي', sar: 3200,
  });

  // ————— ١٥ | CTA الختامي (داكن) —————
  {
    const s = pres.addSlide();
    s.background = {color: C.burgundyDeep};
    addFrame(s, C.paperBag);
    addSparkles(s, [[200, 310, 28], [850, 430, 20], [300, 1000, 22]]);
    addLogo(s, {w: 360, y: 330, dark: true});
    addTitle(s, 'جاهزة تلمعين؟', {y: 470, size: 66, dark: true, h: 130});
    addDivider(s, {y: 620, color: C.paperBag});
    const perks = ['توصيل لكل مدن المملكة', 'شهادات اعتماد للألماس', 'دفع آمن: مدى · Apple Pay · تابي'];
    perks.forEach((t, i) => {
      centerText(s, `◆  ${t}`, {
        x: P(140), y: P(665 + i * 62), w: P(800), h: P(56),
        fontFace: AR_BODY, fontSize: 22, rtlMode: true,
        color: C.creme, transparency: 12,
      });
    });
    addButton(s, 'تسوّقي الآن — الرابط بالبايو', {y: 890, dark: true});
    addBody(s, 'أو راسلينا خاص وبنساعدك تختارين قطعتك', {y: 1010, size: 20, dark: true, h: 55});
    addFooter(s, true);
  }

  const out = path.join(__dirname, '..', 'out', 'instagram', 'lomond-instagram-editable.pptx');
  await pres.writeFile({fileName: out});
  console.log('written:', out);
})();
