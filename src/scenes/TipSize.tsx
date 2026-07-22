import React from 'react';
import {AbsoluteFill} from 'remotion';
import {COLORS, FONTS, arabicDigits} from '../theme';
import {
  LightBackdrop,
  Rise,
  SceneTitle,
  Sparkle,
  TipBadge,
  Watermark,
  useAppear,
} from '../ui/atoms';

const WayCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  accent: string;
  delay: number;
}> = ({icon, title, desc, accent, delay}) => {
  const p = useAppear(delay);
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * 55}px)`,
        background: 'rgba(255,255,255,0.6)',
        border: `2.5px solid ${accent}`,
        borderRadius: 28,
        padding: '28px 34px',
        width: 445,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        textAlign: 'center',
      }}
    >
      <div style={{fontSize: 58}}>{icon}</div>
      <div
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 42,
          color: COLORS.burgundy,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 500,
          fontSize: 30,
          lineHeight: 1.55,
          color: COLORS.ink,
        }}
      >
        {desc}
      </div>
    </div>
  );
};

// دليل المقاسات: أمريكي ↔ المعتمد في السعودية (ISO الأوروبي)
const US_SIZES = [5, 6, 7, 8, 9, 10];
const KSA_SIZES = [49, 52, 54, 57, 60, 62];

const SizeTable: React.FC<{delay: number}> = ({delay}) => {
  const p = useAppear(delay);
  const cell = (
    content: string,
    opts: {header?: boolean; label?: boolean} = {},
  ): React.CSSProperties => ({
    fontFamily: FONTS.body,
    fontWeight: opts.label || opts.header ? 800 : 700,
    fontSize: opts.label ? 28 : 34,
    color: opts.header ? COLORS.creme : opts.label ? COLORS.burgundy : COLORS.ink,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 0',
  });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * 45}px)`,
        width: 950,
        borderRadius: 26,
        overflow: 'hidden',
        boxShadow: '0 18px 44px rgba(77,14,19,0.10)',
        background: 'rgba(255,255,255,0.75)',
      }}
    >
      <div
        style={{
          background: COLORS.burgundy,
          color: COLORS.creme,
          fontFamily: FONTS.body,
          fontWeight: 800,
          fontSize: 34,
          textAlign: 'center',
          padding: '18px 0',
        }}
      >
        📏 دليل المقاسات — الأمريكي والمعتمد في السعودية
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '250px repeat(6, 1fr)'}}>
        <div style={{...cell('', {label: true}), background: 'rgba(200,164,159,0.25)'}}>
          المقاس الأمريكي
        </div>
        {US_SIZES.map((s) => (
          <div key={`us-${s}`} style={cell(String(s))}>
            {arabicDigits(s)}
          </div>
        ))}
        <div style={{...cell('', {label: true}), background: 'rgba(148,177,200,0.25)'}}>
          السعودية (ISO)
        </div>
        {KSA_SIZES.map((s) => (
          <div key={`ksa-${s}`} style={{...cell(String(s)), background: 'rgba(148,177,200,0.10)'}}>
            {arabicDigits(s)}
          </div>
        ))}
      </div>
    </div>
  );
};

// النصيحة ٤ — مقاس الخاتم
export const TipSize: React.FC = () => (
  <AbsoluteFill style={{direction: 'rtl'}}>
    <LightBackdrop tint={COLORS.paperBag} />
    <Sparkle x={150} y={330} size={26} delay={18} color={COLORS.paperBag} />
    <Sparkle x={890} y={470} size={24} delay={48} color={COLORS.dustyPink} />

    <AbsoluteFill style={{alignItems: 'center', paddingTop: 120, gap: 44}}>
      <TipBadge n={4} accent={COLORS.paperBag} />
      <SceneTitle
        title="كيف تعرف مقاس الخاتم؟"
        sub="أسهل طريقتين لمعرفة المقاس دون أن يشعر الطرف الآخر"
        accent={COLORS.paperBag}
      />

      <div style={{display: 'flex', gap: 40}}>
        <WayCard
          icon="💍"
          title="استعر خاتماً"
          desc="خذ خاتماً يلبسه عادةً في الإصبع الصحيح، وقسه لدى الصائغ"
          accent={COLORS.dustyPink}
          delay={45}
        />
        <WayCard
          icon="👥"
          title="اسأل المقرّبين"
          desc="صديق مقرّب أو أحد أفراد العائلة غالباً يعرف المقاس"
          accent={COLORS.powderBlue}
          delay={58}
        />
      </div>

      <SizeTable delay={95} />

      <Rise delay={140}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 14,
            background: 'rgba(255,255,255,0.5)',
            borderRadius: 20,
            padding: '20px 34px',
            width: 950,
          }}
        >
          <span
            style={{
              color: COLORS.green,
              fontSize: 32,
              fontWeight: 800,
              fontFamily: FONTS.body,
            }}
          >
            ✓
          </span>
          <span
            style={{
              fontFamily: FONTS.body,
              fontWeight: 500,
              fontSize: 29,
              lineHeight: 1.55,
              color: COLORS.ink,
            }}
          >
            <b style={{color: COLORS.burgundy, fontWeight: 800}}>لا تقلق:</b> تعديل
            المقاس ممكن لدى معظم الصاغة — لكن مع أطواق الألماس يصعب التعديل أكثر من{' '}
            {arabicDigits(3)} مقاسات
          </span>
        </div>
      </Rise>
    </AbsoluteFill>
    <Watermark />
  </AbsoluteFill>
);
