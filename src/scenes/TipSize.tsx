import React from 'react';
import {AbsoluteFill} from 'remotion';
import {COLORS, FONTS, arabicDigits} from '../theme';
import {
  LightBackdrop,
  Rise,
  RingIcon,
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
        borderRadius: 30,
        padding: '38px 40px',
        width: 430,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 18,
        textAlign: 'center',
      }}
    >
      <div style={{fontSize: 70}}>{icon}</div>
      <div
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 46,
          color: COLORS.burgundy,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontWeight: 500,
          fontSize: 33,
          lineHeight: 1.6,
          color: COLORS.ink,
        }}
      >
        {desc}
      </div>
    </div>
  );
};

const NOTES = [
  {t: 'تعديل المقاس ممكن', d: 'معظم الصاغة يوفرون خدمة التعديل — يكفي أن تكون قريباً من المقاس الصحيح'},
  {t: 'لكن هناك حدود', d: `مع أطواق الألماس يصعب التعديل أكثر من ${arabicDigits(3)} مقاسات`},
  {t: 'القَصّة المريحة', d: 'الحواف الداخلية المدوّرة أكثر راحة في اللبس اليومي'},
];

// النصيحة ٤ — مقاس الخاتم
export const TipSize: React.FC = () => (
  <AbsoluteFill style={{direction: 'rtl'}}>
    <LightBackdrop tint={COLORS.paperBag} />
    <Sparkle x={150} y={330} size={26} delay={18} color={COLORS.paperBag} />
    <Sparkle x={890} y={470} size={24} delay={48} color={COLORS.dustyPink} />

    <AbsoluteFill style={{alignItems: 'center', paddingTop: 130, gap: 48}}>
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
          desc="خذ خاتماً يلبسه عادةً في الإصبع الصحيح، وقسه لدى الصائغ باحترافية"
          accent={COLORS.dustyPink}
          delay={50}
        />
        <WayCard
          icon="👥"
          title="اسأل المقرّبين"
          desc="صديق مقرّب أو أحد أفراد العائلة غالباً يعرف المقاس"
          accent={COLORS.powderBlue}
          delay={65}
        />
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: 20, width: 900}}>
        {NOTES.map((n, i) => (
          <Rise key={n.t} delay={105 + i * 18}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 16,
                background: 'rgba(255,255,255,0.5)',
                borderRadius: 20,
                padding: '20px 30px',
              }}
            >
              <span style={{color: COLORS.burgundy, fontSize: 34, fontWeight: 800, fontFamily: FONTS.body}}>✓</span>
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontWeight: 800,
                  fontSize: 34,
                  color: COLORS.burgundy,
                  whiteSpace: 'nowrap',
                }}
              >
                {n.t}:
              </span>
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontWeight: 500,
                  fontSize: 31,
                  lineHeight: 1.5,
                  color: COLORS.ink,
                }}
              >
                {n.d}
              </span>
            </div>
          </Rise>
        ))}
      </div>

      <Rise delay={160}>
        <RingIcon size={130} stroke={COLORS.dustyPink} gem={COLORS.powderBlue} />
      </Rise>
    </AbsoluteFill>
    <Watermark />
  </AbsoluteFill>
);
