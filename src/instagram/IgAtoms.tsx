import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {COLORS, FONTS, arabicDigits} from '../theme';

// ————— عناصر ثابتة لبوستات إنستقرام (Still = فريم واحد، بدون حركة) —————
// الطابع: تحريري فاخر — سيريف Times (Tinos) للاتيني والأرقام، Amiri للعناوين العربية

export const SERIF = FONTS.serif;

// خلفية فاتحة: كريمي + توهّج لوني ناعم + حواف داكنة خفيفة
export const IgLightBackdrop: React.FC<{tint?: string}> = ({tint = COLORS.paperBag}) => (
  <AbsoluteFill>
    <AbsoluteFill style={{background: COLORS.creme}} />
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 70% at 50% 0%, ${tint}40 0%, transparent 60%),
                     radial-gradient(120% 70% at 50% 110%, ${tint}30 0%, transparent 55%)`,
      }}
    />
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(150% 130% at 50% 50%, transparent 68%, rgba(77,14,19,0.07) 100%)',
      }}
    />
  </AbsoluteFill>
);

// خلفية داكنة: برقندي عميق مع توهّج مركزي
export const IgDarkBackdrop: React.FC = () => (
  <AbsoluteFill>
    <AbsoluteFill style={{background: COLORS.burgundyDeep}} />
    <AbsoluteFill
      style={{
        background: `radial-gradient(90% 60% at 50% 42%, ${COLORS.burgundy} 0%, transparent 75%)`,
      }}
    />
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(140% 120% at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)',
      }}
    />
  </AbsoluteFill>
);

// إطار مزدوج كلاسيكي: خط خارجي + هيرلاين داخلي — توقيع لوموند البصري
export const IgFrame: React.FC<{color?: string}> = ({color = COLORS.burgundy}) => (
  <>
    <AbsoluteFill style={{padding: 40}}>
      <div style={{width: '100%', height: '100%', border: `2px solid ${color}`, opacity: 0.5}} />
    </AbsoluteFill>
    <AbsoluteFill style={{padding: 52}}>
      <div style={{width: '100%', height: '100%', border: `1px solid ${color}`, opacity: 0.3}} />
    </AbsoluteFill>
  </>
);

// شعار LOMOND
export const IgLogo: React.FC<{width?: number; dark?: boolean; style?: React.CSSProperties}> = ({
  width = 240,
  dark,
  style,
}) => (
  <Img
    src={staticFile('logo.png')}
    style={{
      width,
      filter: dark ? 'brightness(0) invert(0.93) sepia(0.12)' : undefined,
      ...style,
    }}
  />
);

// فاصل مزخرف ثابت: خط — معيّن — خط
export const IgDivider: React.FC<{width?: number; color?: string}> = ({
  width = 340,
  color = COLORS.dustyPink,
}) => (
  <div style={{display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center'}}>
    <div style={{height: 1.5, width: width / 2, background: `linear-gradient(90deg, transparent, ${color})`}} />
    <div style={{width: 9, height: 9, background: color, transform: 'rotate(45deg)'}} />
    <div style={{height: 1.5, width: width / 2, background: `linear-gradient(270deg, transparent, ${color})`}} />
  </div>
);

// سطر لاتيني سيريف بأحرف كبيرة متباعدة — اللمسة التحريرية
export const IgLatin: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({children, dark, size = 26, color, style}) => (
  <div
    style={{
      fontFamily: SERIF,
      fontSize: size,
      letterSpacing: size * 0.32,
      textTransform: 'uppercase',
      color: color ?? (dark ? COLORS.paperBag : COLORS.ink),
      opacity: dark ? 0.9 : 0.55,
      direction: 'ltr',
      textIndent: size * 0.32, // موازنة التباعد الأخير للتوسيط البصري
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </div>
);

// نجمة لمعان رباعية ثابتة
export const IgSparkle: React.FC<{
  x: number;
  y: number;
  size?: number;
  color?: string;
  opacity?: number;
  rotate?: number;
}> = ({x, y, size = 28, color = COLORS.paperBag, opacity = 0.8, rotate = 0}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    style={{position: 'absolute', left: x, top: y, opacity, transform: `rotate(${rotate}deg)`}}
  >
    <path
      d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z"
      fill={color}
    />
  </svg>
);

// ————— رسومات مجوهرات SVG —————

export const IgRing: React.FC<{size?: number; stroke?: string; gem?: string}> = ({
  size = 300,
  stroke = COLORS.burgundy,
  gem = COLORS.powderBlue,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="62" r="26" fill="none" stroke={stroke} strokeWidth="3" />
    <circle cx="50" cy="62" r="22.5" fill="none" stroke={stroke} strokeWidth="0.8" opacity="0.5" />
    <path
      d="M40 26 L46 16 H54 L60 26 L50 38 Z"
      fill={gem}
      stroke={stroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M40 26 H60 M46 16 L50 26 L54 16 M50 26 L50 38" stroke={stroke} strokeWidth="1.2" fill="none" />
  </svg>
);

export const IgNecklace: React.FC<{size?: number; stroke?: string; gem?: string}> = ({
  size = 300,
  stroke = COLORS.burgundy,
  gem = COLORS.dustyPink,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path
      d="M14 18 C22 52 38 62 50 62 C62 62 78 52 86 18"
      fill="none"
      stroke={stroke}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <circle cx="26" cy="42" r="2" fill={stroke} />
    <circle cx="74" cy="42" r="2" fill={stroke} />
    <circle cx="36" cy="54" r="2" fill={stroke} />
    <circle cx="64" cy="54" r="2" fill={stroke} />
    <path d="M50 62 L50 70" stroke={stroke} strokeWidth="2" />
    <path
      d="M43 76 L50 68 L57 76 L50 90 Z"
      fill={gem}
      stroke={stroke}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M43 76 H57 M50 68 L50 90" stroke={stroke} strokeWidth="1.1" fill="none" />
  </svg>
);

export const IgEarrings: React.FC<{size?: number; stroke?: string; gem?: string}> = ({
  size = 300,
  stroke = COLORS.burgundy,
  gem = COLORS.paperBag,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {[30, 70].map((cx) => (
      <g key={cx}>
        <path
          d={`M${cx - 7} 22 A7 7 0 0 1 ${cx + 7} 22`}
          fill="none"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d={`M${cx} 26 L${cx} 40`} stroke={stroke} strokeWidth="2" />
        <path
          d={`M${cx - 9} 48 L${cx} 38 L${cx + 9} 48 L${cx} 66 Z`}
          fill={gem}
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d={`M${cx - 9} 48 H${cx + 9} M${cx} 38 L${cx} 66`} stroke={stroke} strokeWidth="1.1" fill="none" />
      </g>
    ))}
  </svg>
);

export const IgBracelet: React.FC<{size?: number; stroke?: string; gem?: string}> = ({
  size = 300,
  stroke = COLORS.burgundy,
  gem = COLORS.powderBlue,
}) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" fill="none" stroke={stroke} strokeWidth="3" />
    <circle cx="50" cy="50" r="25" fill="none" stroke={stroke} strokeWidth="0.9" opacity="0.5" />
    {Array.from({length: 10}).map((_, i) => {
      const a = (i / 10) * Math.PI * 2;
      return (
        <circle
          key={i}
          cx={50 + Math.cos(a) * 27.5}
          cy={50 + Math.sin(a) * 27.5}
          r="1.7"
          fill={stroke}
        />
      );
    })}
    <rect x="44" y="12" width="12" height="12" rx="1" transform="rotate(45 50 18)" fill={gem} stroke={stroke} strokeWidth="1.6" />
  </svg>
);

// ————— نصوص موحّدة —————

// شريط علوي: شعار + تصنيف عربي + سطر لاتيني سيريف
export const IgHeader: React.FC<{tag: string; latin?: string; dark?: boolean}> = ({
  tag,
  latin,
  dark,
}) => (
  <div
    style={{
      position: 'absolute',
      top: 96,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
    }}
  >
    <IgLogo width={180} dark={dark} style={{opacity: 0.95}} />
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8}}>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 500,
          fontSize: 25,
          letterSpacing: 9,
          color: dark ? COLORS.paperBag : COLORS.ink,
          opacity: dark ? 0.9 : 0.55,
        }}
      >
        {tag}
      </div>
      {latin ? <IgLatin dark={dark} size={19}>{latin}</IgLatin> : null}
    </div>
  </div>
);

// ذيل البوست: سطر لاتيني سيريف موحّد
export const IgFooter: React.FC<{dark?: boolean; text?: string}> = ({
  dark,
  text = 'Lomond · Fine Jewellery · KSA',
}) => (
  <div style={{position: 'absolute', bottom: 92, left: 0, right: 0}}>
    <IgLatin dark={dark} size={21}>{text}</IgLatin>
  </div>
);

// عنوان رئيسي
export const IgTitle: React.FC<{children: React.ReactNode; dark?: boolean; size?: number; style?: React.CSSProperties}> = ({
  children,
  dark,
  size = 84,
  style,
}) => (
  <h1
    style={{
      margin: 0,
      fontFamily: FONTS.heading,
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1.3,
      color: dark ? COLORS.creme : COLORS.burgundy,
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </h1>
);

// نص فرعي
export const IgSub: React.FC<{children: React.ReactNode; dark?: boolean; size?: number; style?: React.CSSProperties}> = ({
  children,
  dark,
  size = 36,
  style,
}) => (
  <p
    style={{
      margin: 0,
      fontFamily: FONTS.body,
      fontWeight: 500,
      fontSize: size,
      lineHeight: 1.75,
      color: dark ? COLORS.creme : COLORS.ink,
      opacity: dark ? 0.85 : 0.8,
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </p>
);

// السعر — أرقام سيريف بطابع Times مع نص عربي
export const IgPrice: React.FC<{sar: number; dark?: boolean}> = ({sar, dark}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      direction: 'rtl',
      color: dark ? COLORS.creme : COLORS.burgundy,
    }}
  >
    <span style={{fontFamily: FONTS.body, fontWeight: 500, fontSize: 30, opacity: 0.75}}>
      يبدأ من
    </span>
    <span style={{fontFamily: SERIF, fontWeight: 700, fontSize: 56, letterSpacing: 1, direction: 'ltr'}}>
      {sar.toLocaleString('en-US')}
    </span>
    <span style={{fontFamily: FONTS.body, fontWeight: 500, fontSize: 30, opacity: 0.75}}>ر.س</span>
  </div>
);

// شارة الكاروسيل — بدون إطار، سهم وخط
export const IgSwipe: React.FC<{dark?: boolean}> = ({dark}) => (
  <div
    style={{
      position: 'absolute',
      bottom: 158,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        fontFamily: FONTS.body,
        fontWeight: 700,
        fontSize: 27,
        letterSpacing: 4,
        color: dark ? COLORS.paperBag : COLORS.burgundy,
      }}
    >
      <span>اسحب للمزيد</span>
      <svg width="72" height="14" viewBox="0 0 72 14">
        <path
          d="M72 7 H4 M10 1 L2 7 L10 13"
          stroke={dark ? COLORS.paperBag : COLORS.burgundy}
          strokeWidth="1.8"
          fill="none"
        />
      </svg>
    </div>
  </div>
);

// زر CTA — مستطيل حاد بطابع فاخر
export const IgButton: React.FC<{children: React.ReactNode; dark?: boolean; outline?: boolean}> = ({
  children,
  dark,
  outline,
}) => (
  <div
    style={{
      padding: '24px 72px',
      background: outline ? 'transparent' : dark ? COLORS.creme : COLORS.burgundy,
      color: outline
        ? dark
          ? COLORS.creme
          : COLORS.burgundy
        : dark
          ? COLORS.burgundy
          : COLORS.creme,
      border: outline ? `1.5px solid ${dark ? COLORS.creme : COLORS.burgundy}` : 'none',
      fontFamily: FONTS.body,
      fontWeight: 700,
      fontSize: 33,
      letterSpacing: 2,
    }}
  >
    {children}
  </div>
);

export {COLORS, FONTS, arabicDigits};
