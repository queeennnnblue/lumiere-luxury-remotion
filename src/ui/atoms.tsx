import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import {COLORS, FONTS, arabicDigits} from '../theme';

// ————— أدوات حركة —————

export const useAppear = (delay: number, stiffness = 90) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return spring({
    frame: frame - delay,
    fps,
    config: {damping: 200, stiffness, mass: 0.9},
  });
};

// ظهور نص بانزلاق لأعلى
export const Rise: React.FC<{
  delay?: number;
  children: React.ReactNode;
  distance?: number;
  style?: React.CSSProperties;
}> = ({delay = 0, children, distance = 60, style}) => {
  const p = useAppear(delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * distance}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ————— عناصر زخرفية —————

// نجمة لمعان رباعية
export const Sparkle: React.FC<{
  x: number;
  y: number;
  size?: number;
  delay?: number;
  color?: string;
  period?: number;
}> = ({x, y, size = 28, delay = 0, color = COLORS.paperBag, period = 70}) => {
  const frame = useCurrentFrame();
  const t = (frame - delay + period * 10) % period;
  const glow = interpolate(t, [0, period * 0.35, period * 0.7, period], [0, 1, 0.15, 0], {
    extrapolateRight: 'clamp',
  });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity: glow,
        transform: `scale(${0.6 + glow * 0.5}) rotate(${frame * 0.4}deg)`,
      }}
    >
      <path
        d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z"
        fill={color}
      />
    </svg>
  );
};

// خاتم ألماس (رسم SVG)
export const RingIcon: React.FC<{
  size?: number;
  stroke?: string;
  gem?: string;
  style?: React.CSSProperties;
}> = ({size = 160, stroke = COLORS.paperBag, gem = COLORS.powderBlue, style}) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
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

// فاصل مزخرف: خط — معيّن — خط
export const Divider: React.FC<{
  width?: number;
  color?: string;
  delay?: number;
}> = ({width = 360, color = COLORS.dustyPink, delay = 0}) => {
  const p = useAppear(delay);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        justifyContent: 'center',
        opacity: p,
        transform: `scaleX(${0.3 + p * 0.7})`,
      }}
    >
      <div style={{height: 2.5, width: width / 2, background: `linear-gradient(90deg, transparent, ${color})`}} />
      <div style={{width: 12, height: 12, background: color, transform: 'rotate(45deg)'}} />
      <div style={{height: 2.5, width: width / 2, background: `linear-gradient(270deg, transparent, ${color})`}} />
    </div>
  );
};

// شارة رقم النصيحة + العداد (٠١ / ٠٤)
export const TipBadge: React.FC<{n: number; accent: string}> = ({n, accent}) => {
  const p = useAppear(4);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 14,
        opacity: p,
        transform: `scale(${0.7 + p * 0.3})`,
      }}
    >
      <div
        style={{
          width: 108,
          height: 108,
          borderRadius: '50%',
          border: `3px solid ${accent}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 60,
          color: COLORS.burgundy,
          background: 'rgba(255,255,255,0.35)',
        }}
      >
        {arabicDigits(n)}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 500,
          fontSize: 30,
          letterSpacing: 6,
          color: COLORS.ink,
          opacity: 0.55,
        }}
      >
        {arabicDigits(`0${n}`)} / {arabicDigits('04')}
      </div>
    </div>
  );
};

// شعار LOMOND (يتحول للأبيض على الخلفيات الداكنة)
export const Logo: React.FC<{width?: number; dark?: boolean; style?: React.CSSProperties}> = ({
  width = 260,
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

// علامة البراند أسفل الشاشة
export const Watermark: React.FC<{dark?: boolean}> = ({dark}) => (
  <div
    style={{
      position: 'absolute',
      bottom: 54,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
    }}
  >
    <Logo width={210} dark={dark} style={{opacity: 0.9}} />
    <div
      style={{
        fontFamily: FONTS.body,
        fontSize: 22,
        letterSpacing: 3,
        color: dark ? COLORS.paperBag : COLORS.ink,
        opacity: 0.6,
      }}
    >
      لـومـونـد — مجوهرات فاخرة
    </div>
  </div>
);

// خلفية فاتحة أنيقة مع توهّج ناعم وحواف داكنة خفيفة
export const LightBackdrop: React.FC<{tint: string}> = ({tint}) => (
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

// عنوان قسم موحّد
export const SceneTitle: React.FC<{
  title: string;
  sub?: string;
  accent: string;
  delay?: number;
}> = ({title, sub, accent, delay = 10}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22}}>
    <Rise delay={delay}>
      <h1
        style={{
          margin: 0,
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 92,
          lineHeight: 1.25,
          color: COLORS.burgundy,
          textAlign: 'center',
        }}
      >
        {title}
      </h1>
    </Rise>
    <Divider color={accent} delay={delay + 6} />
    {sub ? (
      <Rise delay={delay + 10}>
        <p
          style={{
            margin: 0,
            fontFamily: FONTS.body,
            fontWeight: 500,
            fontSize: 40,
            color: COLORS.ink,
            opacity: 0.8,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          {sub}
        </p>
      </Rise>
    ) : null}
  </div>
);
