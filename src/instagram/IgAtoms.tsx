import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {COLORS, FONTS, arabicDigits} from '../theme';

// ————— عناصر ثابتة لبوستات إنستقرام (Still = فريم واحد، بدون حركة) —————

// خلفية فاتحة: كريمي + توهّج لوني ناعم + حواف داكنة خفيفة
export const IgLightBackdrop: React.FC<{tint?: string}> = ({tint = COLORS.paperBag}) => (
  <AbsoluteFill>
    <AbsoluteFill style={{background: COLORS.creme}} />
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 70% at 50% 0%, ${tint}55 0%, transparent 60%),
                     radial-gradient(120% 70% at 50% 110%, ${tint}40 0%, transparent 55%)`,
      }}
    />
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(140% 120% at 50% 50%, transparent 62%, rgba(77,14,19,0.10) 100%)',
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

// إطار داخلي رفيع — لمسة الفخامة الموحّدة في كل البوستات
export const IgFrame: React.FC<{color?: string; inset?: number}> = ({
  color = COLORS.burgundy,
  inset = 44,
}) => (
  <AbsoluteFill style={{padding: inset}}>
    <div
      style={{
        width: '100%',
        height: '100%',
        border: `2px solid ${color}`,
        opacity: 0.45,
        borderRadius: 4,
      }}
    />
  </AbsoluteFill>
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
    <div style={{height: 2.5, width: width / 2, background: `linear-gradient(90deg, transparent, ${color})`}} />
    <div style={{width: 12, height: 12, background: color, transform: 'rotate(45deg)'}} />
    <div style={{height: 2.5, width: width / 2, background: `linear-gradient(270deg, transparent, ${color})`}} />
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
    <circle cx="50" cy="62" r="26" fill="none" stroke={stroke} strokeWidth="4.5" />
    <path
      d="M40 26 L46 16 H54 L60 26 L50 38 Z"
      fill={gem}
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M40 26 H60 M46 16 L50 26 L54 16 M50 26 L50 38" stroke={stroke} strokeWidth="1.6" fill="none" />
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
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <circle cx="26" cy="42" r="2.4" fill={stroke} />
    <circle cx="74" cy="42" r="2.4" fill={stroke} />
    <circle cx="36" cy="54" r="2.4" fill={stroke} />
    <circle cx="64" cy="54" r="2.4" fill={stroke} />
    <path d="M50 62 L50 70" stroke={stroke} strokeWidth="2.5" />
    <path
      d="M43 76 L50 68 L57 76 L50 90 Z"
      fill={gem}
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path d="M43 76 H57 M50 68 L50 90" stroke={stroke} strokeWidth="1.4" fill="none" />
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
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d={`M${cx} 26 L${cx} 40`} stroke={stroke} strokeWidth="2.5" />
        <path
          d={`M${cx - 9} 48 L${cx} 38 L${cx + 9} 48 L${cx} 66 Z`}
          fill={gem}
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path d={`M${cx - 9} 48 H${cx + 9} M${cx} 38 L${cx} 66`} stroke={stroke} strokeWidth="1.4" fill="none" />
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
    <circle cx="50" cy="50" r="30" fill="none" stroke={stroke} strokeWidth="4" />
    <circle cx="50" cy="50" r="24" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    {Array.from({length: 10}).map((_, i) => {
      const a = (i / 10) * Math.PI * 2;
      return (
        <circle
          key={i}
          cx={50 + Math.cos(a) * 27}
          cy={50 + Math.sin(a) * 27}
          r="2"
          fill={stroke}
        />
      );
    })}
    <rect x="44" y="12" width="12" height="12" rx="2" transform="rotate(45 50 18)" fill={gem} stroke={stroke} strokeWidth="2" />
  </svg>
);

// ————— نصوص موحّدة —————

// شريط علوي: شعار صغير + تصنيف البوست
export const IgHeader: React.FC<{tag: string; dark?: boolean; accent?: string}> = ({
  tag,
  dark,
  accent = COLORS.dustyPink,
}) => (
  <div
    style={{
      position: 'absolute',
      top: 88,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
    }}
  >
    <IgLogo width={190} dark={dark} style={{opacity: 0.95}} />
    <div
      style={{
        fontFamily: FONTS.body,
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 8,
        color: dark ? accent : COLORS.ink,
        opacity: dark ? 0.95 : 0.55,
      }}
    >
      {tag}
    </div>
  </div>
);

// ذيل البوست: سطر البراند
export const IgFooter: React.FC<{dark?: boolean; text?: string}> = ({
  dark,
  text = 'لـومـونـد — مجوهرات فاخرة',
}) => (
  <div
    style={{
      position: 'absolute',
      bottom: 84,
      left: 0,
      right: 0,
      textAlign: 'center',
      fontFamily: FONTS.body,
      fontWeight: 500,
      fontSize: 24,
      letterSpacing: 3,
      color: dark ? COLORS.paperBag : COLORS.ink,
      opacity: 0.65,
    }}
  >
    {text}
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
      lineHeight: 1.7,
      color: dark ? COLORS.creme : COLORS.ink,
      opacity: dark ? 0.85 : 0.8,
      textAlign: 'center',
      ...style,
    }}
  >
    {children}
  </p>
);

// شارة «انسحبي لليسار» للكاروسيل
export const IgSwipe: React.FC<{dark?: boolean}> = ({dark}) => (
  <div
    style={{
      position: 'absolute',
      bottom: 148,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 36px',
        borderRadius: 999,
        border: `2px solid ${dark ? COLORS.paperBag : COLORS.burgundy}`,
        fontFamily: FONTS.body,
        fontWeight: 700,
        fontSize: 28,
        color: dark ? COLORS.creme : COLORS.burgundy,
        background: dark ? 'rgba(238,228,218,0.08)' : 'rgba(255,255,255,0.4)',
      }}
    >
      <span>اسحب للمزيد</span>
      <span style={{fontSize: 30}}>←</span>
    </div>
  </div>
);

// زر CTA
export const IgButton: React.FC<{children: React.ReactNode; dark?: boolean}> = ({children, dark}) => (
  <div
    style={{
      padding: '22px 64px',
      borderRadius: 999,
      background: dark ? COLORS.creme : COLORS.burgundy,
      color: dark ? COLORS.burgundy : COLORS.creme,
      fontFamily: FONTS.body,
      fontWeight: 800,
      fontSize: 36,
      boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
    }}
  >
    {children}
  </div>
);

export {COLORS, FONTS, arabicDigits};
