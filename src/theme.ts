// ألوان البراند — LOMOND لوموند
export const COLORS = {
  green: '#3E7C4F', // صح أخضر للخيار الأفضل
  creme: '#EEE4DA', // Base
  powderBlue: '#94B1C8', // Cool accent
  dustyPink: '#C8A49F', // Warm complement
  paperBag: '#D8C4AC', // Earth complement
  burgundy: '#4D0E13', // Anchor
  burgundyDeep: '#3A0A0E',
  ink: '#2E2622', // نص داكن دافئ على الخلفيات الفاتحة
  cremeSoft: '#F6F0E9',
};

export const FONTS = {
  heading: 'Amiri', // سيريف عربي فاخر للعناوين
  body: 'Tajawal', // سانس عربي نظيف للنصوص
  latin: 'Playfair Display', // للشعار اللاتيني
};

// أرقام هندية (٠١٢٣٤٥٦٧٨٩)
export const arabicDigits = (input: string | number): string =>
  String(input).replace(/[0-9.]/g, (d) =>
    d === '.' ? '٫' : '٠١٢٣٤٥٦٧٨٩'[Number(d)],
  );
