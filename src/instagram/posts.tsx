import React from 'react';
import {AbsoluteFill} from 'remotion';
import {
  COLORS,
  FONTS,
  SERIF,
  arabicDigits,
  IgLightBackdrop,
  IgDarkBackdrop,
  IgFrame,
  IgLogo,
  IgDivider,
  IgLatin,
  IgSparkle,
  IgRing,
  IgNecklace,
  IgEarrings,
  IgBracelet,
  IgHeader,
  IgFooter,
  IgTitle,
  IgSub,
  IgPrice,
  IgSwipe,
  IgButton,
} from './IgAtoms';

// ١٥ بوست إنستقرام — 1080×1350 (4:5) — طابع تحريري فاخر
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
      padding: '0 110px',
      paddingTop: padTop,
    }}
  >
    {children}
  </AbsoluteFill>
);

// بطاقة منتج موحّدة
const ProductPost: React.FC<{
  tint: string;
  art: React.ReactNode;
  nameAr: string;
  nameEn: string;
  specs: string;
  sar: number;
}> = ({tint, art, nameAr, nameEn, specs, sar}) => (
  <AbsoluteFill>
    <IgLightBackdrop tint={tint} />
    <IgFrame />
    <IgHeader tag="تشكيلة لوموند" latin="The Collection" />
    <Center gap={26} padTop={150}>
      <div
        style={{
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)',
          border: `1.5px solid ${tint}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {art}
      </div>
      <IgTitle size={70}>{nameAr}</IgTitle>
      <IgLatin size={24}>{nameEn}</IgLatin>
      <IgSub size={32}>{specs}</IgSub>
      <IgPrice sar={sar} />
      <IgButton>اطلبيها برسالة خاصة</IgButton>
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠١ | افتتاحية البراند (داكن — Anchor) —————
export const Ig01Manifesto: React.FC = () => (
  <AbsoluteFill>
    <IgDarkBackdrop />
    <IgFrame color={COLORS.paperBag} />
    <IgSparkle x={180} y={310} size={30} color={COLORS.paperBag} />
    <IgSparkle x={870} y={390} size={22} color={COLORS.dustyPink} rotate={20} />
    <IgSparkle x={240} y={990} size={20} color={COLORS.powderBlue} rotate={40} opacity={0.5} />
    <Center gap={46}>
      <IgLatin dark size={22}>Est. Riyadh</IgLatin>
      <IgLogo width={520} dark />
      <IgDivider color={COLORS.paperBag} />
      <IgSub dark size={44} style={{fontFamily: FONTS.heading, opacity: 1}}>
        لمعتك… تستاهل اسم يليق فيها
      </IgSub>
      <IgSub dark size={31}>
        مجوهرات فاخرة بتصاميم حصرية — عيار ١٨ وألماس معتمد
      </IgSub>
    </Center>
    <IgFooter dark />
  </AbsoluteFill>
);

// ————— ٠٢ | تعليمي: دليل عيارات الذهب (غلاف كاروسيل) —————
export const Ig02Karats: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.powderBlue} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" latin="The Lomond Guide" />
    <Center gap={40} padTop={130}>
      <div style={{display: 'flex', gap: 34, direction: 'ltr'}}>
        {['24K', '21K', '18K'].map((k) => (
          <div
            key={k}
            style={{
              fontFamily: SERIF,
              fontSize: 40,
              letterSpacing: 5,
              color: COLORS.ink,
              opacity: k === '18K' ? 0.9 : 0.4,
              borderBottom: k === '18K' ? `2px solid ${COLORS.burgundy}` : 'none',
              paddingBottom: 6,
            }}
          >
            {k}
          </div>
        ))}
      </div>
      <IgTitle size={94}>
        أغلى ذهب…
        <br />
        مو أفضل ذهب
      </IgTitle>
      <IgDivider color={COLORS.powderBlue} />
      <IgSub size={34}>
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
    <IgSparkle x={210} y={350} size={26} color={COLORS.dustyPink} />
    <IgSparkle x={840} y={950} size={22} color={COLORS.paperBag} rotate={30} />
    <Center gap={46}>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 160,
          color: COLORS.dustyPink,
          lineHeight: 0.5,
          marginBottom: -20,
        }}
      >
        “
      </div>
      <IgTitle size={80}>
        الفخامة الحقيقية…
        <br />
        تفاصيل ما تحتاج
        <br />
        تشرح نفسها
      </IgTitle>
      <IgDivider color={COLORS.dustyPink} />
      <IgLogo width={190} style={{opacity: 0.85}} />
    </Center>
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٤ | منتج: خاتم سوليتير —————
export const Ig04ProductRing: React.FC = () => (
  <ProductPost
    tint={COLORS.powderBlue}
    art={<IgRing size={320} gem={COLORS.powderBlue} />}
    nameAr="خاتم سوليتير لوموند"
    nameEn="The Lomond Solitaire"
    specs="ذهب عيار ١٨ · ألماسة بقَطع Excellent · شهادة اعتماد"
    sar={2450}
  />
);

// ————— ٠٥ | تعليمي: 4C (غلاف كاروسيل) —————
export const Ig05FourCs: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.paperBag} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" latin="The Lomond Guide" />
    <Center gap={38} padTop={130}>
      <IgTitle size={92}>
        ٤ حروف…
        <br />
        تحدد سعر ألماستك
      </IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <div style={{display: 'flex', gap: 24, direction: 'ltr'}}>
        {[
          {w: 'Cut', a: 'القَطع'},
          {w: 'Color', a: 'اللون'},
          {w: 'Clarity', a: 'النقاء'},
          {w: 'Carat', a: 'القيراط'},
        ].map(({w, a}) => (
          <div
            key={w}
            style={{
              width: 188,
              padding: '30px 0 24px',
              background: 'rgba(255,255,255,0.55)',
              border: `1.5px solid ${COLORS.dustyPink}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div style={{fontFamily: SERIF, fontWeight: 700, fontSize: 62, color: COLORS.burgundy}}>
              C
            </div>
            <div style={{fontFamily: SERIF, fontSize: 25, letterSpacing: 2, color: COLORS.ink, opacity: 0.65}}>
              {w}
            </div>
            <div style={{fontFamily: FONTS.body, fontWeight: 700, fontSize: 27, color: COLORS.burgundy}}>
              {a}
            </div>
          </div>
        ))}
      </div>
      <IgSub size={33}>وأهمها واحد بس… نشرحه بالسلايدات</IgSub>
    </Center>
    <IgSwipe />
    <IgFooter />
  </AbsoluteFill>
);

// ————— ٠٦ | منتج: عقد —————
export const Ig06ProductNecklace: React.FC = () => (
  <ProductPost
    tint={COLORS.dustyPink}
    art={<IgNecklace size={320} />}
    nameAr="عقد القطرة"
    nameEn="The Teardrop Necklace"
    specs="ذهب عيار ١٨ · تصميم حصري يلبس يومي ويليق بالمناسبات"
    sar={1890}
  />
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
        <IgLogo width={220} />
        <IgLatin size={22}>The Lomond Palette</IgLatin>
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
            padding: '0 120px',
          }}
        >
          <div
            style={{
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 38,
              color: ink ? COLORS.ink : COLORS.creme,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontFamily: SERIF,
              fontSize: 30,
              letterSpacing: 5,
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
    <IgHeader tag="دليل لوموند" latin="The Lomond Guide" />
    <Center gap={38} padTop={140}>
      <IgTitle size={78}>
        ألماستين متطابقتين…
        <br />
        والفرق {arabicDigits(40)}٪ بالسعر
      </IgTitle>
      <div style={{display: 'flex', gap: 28}}>
        {[
          {t: 'طبيعي', en: 'Natural', l1: 'تكوّن عبر ملايين السنين', l2: 'أندر — قيمة عاطفية وتقليدية', c: COLORS.paperBag},
          {t: 'مخبري', en: 'Lab-Grown', l1: 'نفس التركيبة والصلابة واللمعان', l2: 'أوفر ٢٠–٤٠٪ وصديق للبيئة', c: COLORS.powderBlue},
        ].map(({t, en, l1, l2, c}) => (
          <div
            key={t}
            style={{
              width: 400,
              padding: '40px 30px',
              background: 'rgba(255,255,255,0.55)',
              border: `1.5px solid ${c}`,
              borderTop: `5px solid ${c}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div style={{fontFamily: FONTS.heading, fontWeight: 700, fontSize: 48, color: COLORS.burgundy}}>{t}</div>
            <IgLatin size={20}>{en}</IgLatin>
            <IgSub size={29}>{l1}</IgSub>
            <IgSub size={29}>{l2}</IgSub>
          </div>
        ))}
      </div>
      <IgSub size={34} style={{fontWeight: 700, color: COLORS.burgundy, opacity: 1}}>
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
    <IgSparkle x={190} y={290} size={26} color={COLORS.paperBag} />
    <IgSparkle x={860} y={1010} size={22} color={COLORS.dustyPink} rotate={25} />
    <IgHeader tag="خدمة التصميم الخاص" latin="Bespoke Service" dark />
    <Center gap={38} padTop={140}>
      <IgRing size={240} stroke={COLORS.paperBag} gem={COLORS.dustyPink} />
      <IgTitle dark size={86}>
        قطعة ما يلبسها
        <br />
        أحد غيرك
      </IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <IgSub dark size={33}>
        من الفكرة… للرسمة… للقطعة بين يدينك.
        <br />
        نصمم لك من الصفر حسب ذوقك وميزانيتك.
      </IgSub>
      <IgButton dark>ابدئي تصميمك — الرابط بالبايو</IgButton>
    </Center>
    <IgFooter dark />
  </AbsoluteFill>
);

// ————— ١٠ | منتج: أقراط —————
export const Ig10ProductEarrings: React.FC = () => (
  <ProductPost
    tint={COLORS.paperBag}
    art={<IgEarrings size={320} />}
    nameAr="أقراط اللمعة"
    nameEn="The Lustre Earrings"
    specs="ذهب عيار ١٨ · خفيفة على الأذن، ثقيلة بالحضور"
    sar={1290}
  />
);

// ————— ١١ | تعليمي: مقاس الخاتم (غلاف كاروسيل) —————
export const Ig11RingSize: React.FC = () => (
  <AbsoluteFill>
    <IgLightBackdrop tint={COLORS.dustyPink} />
    <IgFrame />
    <IgHeader tag="دليل لوموند" latin="The Lomond Guide" />
    <Center gap={40} padTop={130}>
      <IgSub size={32} style={{letterSpacing: 1, opacity: 0.6}}>
        بدون ما تحس… وبدون ما تنكشف المفاجأة
      </IgSub>
      <IgTitle size={92}>
        ٣ طرق تعرف فيها
        <br />
        مقاس خاتمها
      </IgTitle>
      <IgDivider color={COLORS.dustyPink} />
      <div style={{display: 'flex', gap: 22}}>
        {[
          {n: 1, t: 'خاتم من أدراجها'},
          {n: 2, t: 'حليفتك السرية'},
          {n: 3, t: 'قصة الورق'},
        ].map(({n, t}) => (
          <div
            key={n}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '18px 30px',
              background: 'rgba(255,255,255,0.55)',
              border: `1.5px solid ${COLORS.dustyPink}`,
            }}
          >
            <span style={{fontFamily: SERIF, fontWeight: 700, fontSize: 34, color: COLORS.dustyPink}}>
              {n}
            </span>
            <span style={{fontFamily: FONTS.body, fontWeight: 700, fontSize: 28, color: COLORS.burgundy}}>
              {t}
            </span>
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
    <IgHeader tag="من عميلاتنا" latin="Client Stories" />
    <Center gap={38} padTop={130}>
      <div style={{display: 'flex', gap: 12, fontSize: 44, color: COLORS.burgundy, opacity: 0.9}}>
        {'★★★★★'}
      </div>
      <IgTitle size={64} style={{fontWeight: 400, lineHeight: 1.6}}>
        «طلبت تصميم خاص وكنت متوترة…
        <br />
        وصلتني القطعة أجمل من الصورة.
        <br />
        صار عندي صايغي الخاص»
      </IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <IgSub size={30} style={{letterSpacing: 2}}>
        سارة · الرياض
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
    <IgHeader tag="دليل لوموند" latin="The Lomond Guide" />
    <Center gap={36} padTop={130}>
      <IgTitle size={88}>
        ٣ خرافات عن الألماس
        <br />
        صدقناها كلنا
      </IgTitle>
      <IgDivider color={COLORS.powderBlue} />
      {[
        '«المخبري مزيف»',
        '«الأكبر أجمل»',
        '«لازم صفر شوائب»',
      ].map((t, i) => (
        <div
          key={t}
          style={{
            width: 620,
            padding: '20px 36px',
            background: 'rgba(255,255,255,0.55)',
            border: `1.5px solid ${COLORS.powderBlue}`,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            direction: 'rtl',
          }}
        >
          <span style={{fontFamily: SERIF, fontWeight: 700, fontSize: 34, color: COLORS.dustyPink}}>
            {arabicDigits(i + 1)}
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontWeight: 700,
              fontSize: 34,
              color: COLORS.burgundy,
              textDecorationLine: 'line-through',
              textDecorationColor: `${COLORS.dustyPink}`,
              textDecorationThickness: 2,
            }}
          >
            {t}
          </span>
        </div>
      ))}
      <IgSub size={31}>لا تشترين بالاسم… اشتري بالفهم</IgSub>
    </Center>
    <IgSwipe />
    <IgFooter />
  </AbsoluteFill>
);

// ————— ١٤ | منتج: إسوارة —————
export const Ig14ProductBracelet: React.FC = () => (
  <ProductPost
    tint={COLORS.powderBlue}
    art={<IgBracelet size={310} />}
    nameAr="إسوارة تينس لوموند"
    nameEn="The Lomond Tennis Bracelet"
    specs="ذهب عيار ١٨ · صفّ ألماس متصل يدور معك وين ما رحتي"
    sar={3200}
  />
);

// ————— ١٥ | CTA ختامي (داكن — Anchor) —————
export const Ig15FinalCta: React.FC = () => (
  <AbsoluteFill>
    <IgDarkBackdrop />
    <IgFrame color={COLORS.paperBag} />
    <IgSparkle x={200} y={310} size={28} color={COLORS.paperBag} />
    <IgSparkle x={850} y={430} size={20} color={COLORS.powderBlue} rotate={30} />
    <IgSparkle x={300} y={1000} size={22} color={COLORS.dustyPink} rotate={15} />
    <Center gap={40}>
      <IgLogo width={360} dark />
      <IgTitle dark size={92}>جاهزة تلمعين؟</IgTitle>
      <IgDivider color={COLORS.paperBag} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center'}}>
        {[
          'توصيل لكل مدن المملكة',
          'شهادات اعتماد للألماس',
          'دفع آمن: مدى · Apple Pay · تابي',
        ].map((t) => (
          <div key={t} style={{display: 'flex', alignItems: 'center', gap: 16, direction: 'rtl'}}>
            <span style={{width: 7, height: 7, background: COLORS.paperBag, transform: 'rotate(45deg)'}} />
            <IgSub dark size={31}>{t}</IgSub>
          </div>
        ))}
      </div>
      <IgButton dark>تسوّقي الآن — الرابط بالبايو</IgButton>
      <IgSub dark size={28} style={{opacity: 0.7}}>
        أو راسلينا خاص وبنساعدك تختارين قطعتك
      </IgSub>
    </Center>
    <IgFooter dark />
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
