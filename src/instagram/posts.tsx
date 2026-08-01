import React from 'react';
import {AbsoluteFill} from 'remotion';
import {
  COLORS,
  FONTS,
  arabicDigits,
  IgLightBackdrop,
  IgDarkBackdrop,
  IgFrame,
  IgLogo,
  IgDivider,
  IgSparkle,
  IgRing,
  IgNecklace,
  IgEarrings,
  IgBracelet,
  IgHeader,
  IgFooter,
  IgTitle,
  IgSub,
  IgSwipe,
  IgButton,
} from './IgAtoms';

// ١٥ بوست إنستقرام — 1080×1350 (4:5)
// التوزيع: افتتاحية/جمالي ٤ — تعليمي ٥ — منتجات ٤ — CTA بيع ٢

const Center: React.FC<{children: React.ReactNode; gap?: number; padTop?: number}> = ({
  children,
  gap = 36,
  padTop = 0,
}) => (
  <AbsoluteFill
    style={{
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap,
      padding: '0 100px',
      paddingTop: padTop,
    }}
  >
    {children}
  </AbsoluteFill>
);

// ————— ٠١ | افتتاحية البراند (داكن — Anchor) —————
export const Ig01Manifesto: React.FC = () => (
  <AbsoluteFill>
    <IgDarkBackdrop />
    <IgFrame color={COLORS.paperBag} />
    <IgSparkle x={170} y={300} size={34} color={COLORS.paperBag} />
    <IgSparkle x={870} y={380} size={26} color={COLORS.dustyPink} rotate={20} />
    <IgSparkle x={230} y={1000} size={24} color={COLORS.powderBlue} rotate={40} opacity={0.6} />
    <Center gap={44}>
      <IgLogo width={520} dark />
      <IgDivider color={COLORS.paperBag} />
      <IgSub dark size={44} style={{fontFamily: FONTS.heading, opacity: 1}}>
        لمعتك… تستاهل اسم يليق فيها
      </IgSub>
      <IgSub dark size={32}>
        مجوهرات فاخرة بتصاميم حصرية — عيار ١٨ وألماس معتمد
      </IgSub>
    </Center>
    <IgFooter dark text="LOMOND — مجوهرات فاخرة · السعودية" />
  </AbsoluteFill>
);

// ————— ٠٢ | تعليمي: دليل عيارات الذهب (غلاف كاروسيل) —————
export const Ig02Karats: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.powderBlue} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" />
    <Center gap={40} padTop={120}>
      <IgSub size={34} style={{letterSpacing: 2, opacity: 0.6}}>
        ٢٤؟ ٢١؟ ١٨؟
      </IgSub>
      <IgTitle size={96}>أغلى ذهب…
        <br />
        مو أفضل ذهب
      </IgTitle>
      <IgDivider color={COLORS.powderBlue} />
      <IgSub size={36}>
        وش الفرق بين العيارات؟ وليش أفخم بيوت المجوهرات
        <br />
        بالعالم تشتغل بعيار ١٨؟
      </IgSub>
    </Center>
    <IgSwipe />
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٣ | جمالي: اقتباس —————
export const Ig03Quote: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.dustyPink} />
    <IgFrame color={COLORS.dustyPink} />
    <IgSparkle x={200} y={340} size={30} color={COLORS.dustyPink} />
    <IgSparkle x={840} y={950} size={26} color={COLORS.paperBag} rotate={30} />
    <Center gap={48}>
      <div style={{fontFamily: FONTS.heading, fontSize: 130, color: COLORS.dustyPink, lineHeight: 0.6}}>
        ”
      </div>
      <IgTitle size={80}>
        الفخامة الحقيقية…
        <br />
        تفاصيل ما تحتاج
        <br />
        تشرح نفسها
      </IgTitle>
      <IgDivider color={COLORS.dustyPink} />
      <IgLogo width={200} style={{opacity: 0.85}} />
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٤ | منتج: خاتم سوليتير —————
export const Ig04ProductRing: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.powderBlue} />
    <IgFrame />
    <IgHeader tag="تشكيلة لوموند" />
    <Center gap={30} padTop={140}>
      <div
        style={{
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          border: `2px solid ${COLORS.powderBlue}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IgRing size={330} gem={COLORS.powderBlue} />
      </div>
      <IgTitle size={72}>خاتم سوليتير لوموند</IgTitle>
      <IgSub size={34}>
        ذهب عيار ١٨ · ألماسة بقَطع Excellent · شهادة اعتماد
      </IgSub>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 800,
          fontSize: 44,
          color: COLORS.burgundy,
          letterSpacing: 1,
        }}
      >
        يبدأ من {arabicDigits(2450)} ر.س
      </div>
      <IgButton>اطلبيه برسالة خاصة 💬</IgButton>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٥ | تعليمي: 4C (غلاف كاروسيل) —————
export const Ig05FourCs: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.paperBag} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" />
    <Center gap={38} padTop={120}>
      <IgTitle size={92}>
        ٤ حروف…
        <br />
        تحدد سعر ألماستك
      </IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <div style={{display: 'flex', gap: 26, direction: 'ltr'}}>
        {[
          {c: 'C', w: 'Cut', a: 'القَطع'},
          {c: 'C', w: 'Color', a: 'اللون'},
          {c: 'C', w: 'Clarity', a: 'النقاء'},
          {c: 'C', w: 'Carat', a: 'القيراط'},
        ].map(({w, a}) => (
          <div
            key={w}
            style={{
              width: 190,
              padding: '26px 0',
              borderRadius: 16,
              background: 'rgba(255,255,255,0.55)',
              border: `2px solid ${COLORS.dustyPink}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{fontFamily: 'Playfair Display', fontWeight: 800, fontSize: 56, color: COLORS.burgundy}}>
              {w[0]}
            </div>
            <div style={{fontFamily: 'Playfair Display', fontSize: 26, color: COLORS.ink, opacity: 0.7}}>{w}</div>
            <div style={{fontFamily: FONTS.body, fontWeight: 700, fontSize: 28, color: COLORS.burgundy}}>{a}</div>
          </div>
        ))}
      </div>
      <IgSub size={34}>وأهمها واحد بس… نشرحه بالسلايدات</IgSub>
    </Center>
    <IgSwipe />
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٦ | منتج: عقد —————
export const Ig06ProductNecklace: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.dustyPink} />
    <IgFrame />
    <IgHeader tag="تشكيلة لوموند" />
    <Center gap={30} padTop={140}>
      <div
        style={{
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          border: `2px solid ${COLORS.dustyPink}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IgNecklace size={330} />
      </div>
      <IgTitle size={72}>عقد القطرة</IgTitle>
      <IgSub size={34}>
        ذهب عيار ١٨ · تصميم حصري يلبس يومي ويليق بالمناسبات
      </IgSub>
      <div style={{fontFamily: FONTS.body, fontWeight: 800, fontSize: 44, color: COLORS.burgundy}}>
        يبدأ من {arabicDigits(1890)} ر.س
      </div>
      <IgButton>اطلبيه برسالة خاصة 💬</IgButton>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٧ | جمالي: ألوان البراند —————
export const Ig07Palette: React.FC = () => (
  <AbsoluteFill style={{background: COLORS.creme}}>
    <AbsoluteFill style={{direction: 'rtl', display: 'flex', flexDirection: 'column'}}>
      <div
        style={{
          height: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 18,
        }}
      >
        <IgLogo width={230} />
        <IgSub size={30} style={{letterSpacing: 6, opacity: 0.55}}>
          هوية بألوان تشبهك
        </IgSub>
      </div>
      {[
        {name: 'كريمي', hex: '#EEE4DA', c: COLORS.creme, ink: true},
        {name: 'أزرق بودرة', hex: '#94B1C8', c: COLORS.powderBlue, ink: true},
        {name: 'وردي مغبّر', hex: '#C8A49F', c: COLORS.dustyPink, ink: true},
        {name: 'بيج ورقي', hex: '#D8C4AC', c: COLORS.paperBag, ink: true},
        {name: 'برقندي', hex: '#4D0E13', c: COLORS.burgundy, ink: false},
      ].map(({name, hex, c, ink}) => (
        <div
          key={hex}
          style={{
            flex: 1,
            background: c,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 110px',
          }}
        >
          <div
            style={{
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 40,
              color: ink ? COLORS.ink : COLORS.creme,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: 'Playfair Display',
              fontSize: 30,
              letterSpacing: 4,
              color: ink ? COLORS.ink : COLORS.creme,
              opacity: 0.6,
              direction: 'ltr',
            }}
          >
            {hex}
          </div>
        </div>
      ))}
    </AbsoluteFill>
  </AbsoluteFill>
);

// ————— ٠٨ | تعليمي: طبيعي ضد مخبري —————
export const Ig08LabVsNatural: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.powderBlue} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" />
    <Center gap={36} padTop={130}>
      <IgTitle size={80}>
        ألماستين متطابقتين…
        <br />
        والفرق {arabicDigits(40)}٪ بالسعر!
      </IgTitle>
      <div style={{display: 'flex', gap: 30}}>
        {[
          {t: 'طبيعي 🌍', l1: 'تكوّن عبر ملايين السنين', l2: 'أندر — قيمة عاطفية وتقليدية', c: COLORS.paperBag},
          {t: 'مخبري ⚡', l1: 'نفس التركيبة والصلابة واللمعان', l2: 'أوفر ٢٠–٤٠٪ وصديق للبيئة', c: COLORS.powderBlue},
        ].map(({t, l1, l2, c}) => (
          <div
            key={t}
            style={{
              width: 410,
              padding: '38px 30px',
              borderRadius: 20,
              background: 'rgba(255,255,255,0.55)',
              border: `3px solid ${c}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 18,
            }}
          >
            <div style={{fontFamily: FONTS.heading, fontWeight: 700, fontSize: 48, color: COLORS.burgundy}}>{t}</div>
            <IgSub size={30}>{l1}</IgSub>
            <IgSub size={30}>{l2}</IgSub>
          </div>
        ))}
      </div>
      <IgSub size={36} style={{fontWeight: 700, color: COLORS.burgundy, opacity: 1}}>
        الاثنتين ألماس حقيقي ١٠٠٪ — والقرار لك
      </IgSub>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٩ | CTA: تصميم خاص (داكن — Anchor) —————
export const Ig09CustomDesign: React.FC = () => (
  <AbsoluteFill>
    <IgDarkBackdrop />
    <IgFrame color={COLORS.paperBag} />
    <IgSparkle x={180} y={280} size={30} color={COLORS.paperBag} />
    <IgSparkle x={860} y={1020} size={26} color={COLORS.dustyPink} rotate={25} />
    <IgHeader tag="خدمة التصميم الخاص" dark />
    <Center gap={40} padTop={120}>
      <IgRing size={260} stroke={COLORS.paperBag} gem={COLORS.dustyPink} />
      <IgTitle dark size={88}>
        قطعة ما يلبسها
        <br />
        أحد غيرك
      </IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <IgSub dark size={34}>
        من الفكرة… للرسمة… للقطعة بين يدينك.
        <br />
        نصمم لك من الصفر حسب ذوقك وميزانيتك.
      </IgSub>
      <IgButton dark>ابدئي تصميمك — رابط البايو</IgButton>
    </Center>
    <IgFooter dark />
  </AbsoluteFill>
);

// ————— ١٠ | منتج: أقراط —————
export const Ig10ProductEarrings: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.paperBag} />
    <IgFrame />
    <IgHeader tag="تشكيلة لوموند" />
    <Center gap={30} padTop={140}>
      <div
        style={{
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          border: `2px solid ${COLORS.paperBag}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IgEarrings size={330} />
      </div>
      <IgTitle size={72}>أقراط اللمعة</IgTitle>
      <IgSub size={34}>
        ذهب عيار ١٨ · خفيفة على الأذن، ثقيلة بالحضور
      </IgSub>
      <div style={{fontFamily: FONTS.body, fontWeight: 800, fontSize: 44, color: COLORS.burgundy}}>
        يبدأ من {arabicDigits(1290)} ر.س
      </div>
      <IgButton>اطلبيها برسالة خاصة 💬</IgButton>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ١١ | تعليمي: مقاس الخاتم (غلاف كاروسيل) —————
export const Ig11RingSize: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.dustyPink} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" />
    <Center gap={40} padTop={120}>
      <IgSub size={34} style={{letterSpacing: 2, opacity: 0.6}}>
        بدون ما تحس… وبدون ما تنكشف المفاجأة
      </IgSub>
      <IgTitle size={92}>
        ٣ طرق تعرف فيها
        <br />
        مقاس خاتمها
      </IgTitle>
      <IgDivider color={COLORS.dustyPink} />
      <div style={{display: 'flex', gap: 24}}>
        {['خاتم من أدراجها 💍', 'حليفتك السرية 🤫', 'قصة الورق 📏'].map((t) => (
          <div
            key={t}
            style={{
              padding: '20px 34px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.55)',
              border: `2px solid ${COLORS.dustyPink}`,
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 30,
              color: COLORS.burgundy,
            }}
          >
            {t}
          </div>
        ))}
      </div>
    </Center>
    <IgSwipe />
    <IgFooter />
  </AbsoluteFill>
);

// ————— ١٢ | جمالي: رأي عميلة —————
export const Ig12Testimonial: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.paperBag} />
    <IgFrame color={COLORS.paperBag} />
    <IgHeader tag="من عميلاتنا" />
    <Center gap={38} padTop={120}>
      <div style={{display: 'flex', gap: 10, fontSize: 52, color: COLORS.paperBag}}>
        {'★★★★★'.split('').map((s, i) => (
          <span key={i} style={{color: COLORS.burgundy, opacity: 0.9}}>{s}</span>
        ))}
      </div>
      <IgTitle size={68} style={{fontWeight: 400}}>
        «طلبت تصميم خاص وكنت متوترة…
        <br />
        وصلتني القطعة أجمل من الصورة.
        <br />
        صار عندي صايغي الخاص»
      </IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <IgSub size={32} style={{letterSpacing: 2}}>
        — سارة · الرياض
      </IgSub>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ١٣ | تعليمي: خرافات الألماس (غلاف كاروسيل) —————
export const Ig13Myths: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.powderBlue} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" />
    <Center gap={40} padTop={120}>
      <IgTitle size={92}>
        ٣ خرافات عن الألماس
        <br />
        صدقناها كلنا
      </IgTitle>
      <IgDivider color={COLORS.powderBlue} />
      {[
        '«المخبري مزيف»',
        '«الأكبر أجمل»',
        '«لازم صفر شوائب»',
      ].map((t) => (
        <div
          key={t}
          style={{
            width: 640,
            padding: '22px 0',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.55)',
            border: `2px solid ${COLORS.powderBlue}`,
            textAlign: 'center',
            fontFamily: FONTS.body,
            fontWeight: 700,
            fontSize: 36,
            color: COLORS.burgundy,
          }}
        >
          ❌ {t}
        </div>
      ))}
      <IgSub size={34}>الحقيقة كاملة داخل السلايدات ← لا تشترين بالاسم، اشتري بالفهم</IgSub>
    </Center>
    <IgSwipe />
    <IgFooter />
  </AbsoluteFill>
);

// ————— ١٤ | منتج: إسوارة —————
export const Ig14ProductBracelet: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.powderBlue} />
    <IgFrame />
    <IgHeader tag="تشكيلة لوموند" />
    <Center gap={30} padTop={140}>
      <div
        style={{
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          border: `2px solid ${COLORS.powderBlue}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IgBracelet size={320} />
      </div>
      <IgTitle size={72}>إسوارة تينس لوموند</IgTitle>
      <IgSub size={34}>
        ذهب عيار ١٨ · صفّ ألماس متصل يدور معك وين ما رحتي
      </IgSub>
      <div style={{fontFamily: FONTS.body, fontWeight: 800, fontSize: 44, color: COLORS.burgundy}}>
        يبدأ من {arabicDigits(3200)} ر.س
      </div>
      <IgButton>اطلبيها برسالة خاصة 💬</IgButton>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ١٥ | CTA ختامي (داكن — Anchor) —————
export const Ig15FinalCta: React.FC = () => (
  <AbsoluteFill>
    <IgDarkBackdrop />
    <IgFrame color={COLORS.paperBag} />
    <IgSparkle x={190} y={300} size={32} color={COLORS.paperBag} />
    <IgSparkle x={850} y={420} size={24} color={COLORS.powderBlue} rotate={30} />
    <IgSparkle x={300} y={1010} size={26} color={COLORS.dustyPink} rotate={15} />
    <Center gap={42}>
      <IgLogo width={380} dark />
      <IgTitle dark size={92}>جاهزة تلمعين؟</IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <IgSub dark size={34}>
        توصيل لكل مدن المملكة 🚚 · شهادات اعتماد للألماس 💎
        <br />
        دفع آمن: مدى · Apple Pay · تابي
      </IgSub>
      <IgButton dark>تسوّقي الآن — الرابط بالبايو</IgButton>
      <IgSub dark size={30} style={{opacity: 0.7}}>
        أو راسلينا خاص وبنساعدك تختارين قطعتك ✨
      </IgSub>
    </Center>
    <IgFooter dark text="LOMOND — مجوهرات فاخرة · السعودية" />
  </AbsoluteFill>
);

export const IG_POSTS: {id: string; component: React.FC}[] = [
  {id: 'IG01-Manifesto', component: Ig01Manifesto},
  {id: 'IG02-Karats', component: Ig02Karats},
  {id: 'IG03-Quote', component: Ig03Quote},
  {id: 'IG04-Product-Ring', component: Ig04ProductRing},
  {id: 'IG05-FourCs', component: Ig05FourCs},
  {id: 'IG06-Product-Necklace', component: Ig06ProductNecklace},
  {id: 'IG07-Palette', component: Ig07Palette},
  {id: 'IG08-LabVsNatural', component: Ig08LabVsNatural},
  {id: 'IG09-CustomDesign', component: Ig09CustomDesign},
  {id: 'IG10-Product-Earrings', component: Ig10ProductEarrings},
  {id: 'IG11-RingSize', component: Ig11RingSize},
  {id: 'IG12-Testimonial', component: Ig12Testimonial},
  {id: 'IG13-Myths', component: Ig13Myths},
  {id: 'IG14-Product-Bracelet', component: Ig14ProductBracelet},
  {id: 'IG15-FinalCta', component: Ig15FinalCta},
];
