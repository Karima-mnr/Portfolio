export const translations = {
  en: {
    nav: { home: "Home", skills: "Skills", achievements: "Achievements", projects: "Projects", contact: "Contact" },
    hero: { tag: "Portfolio 2025", title: "Karima Mansour", role: "Computer Science Master's Student • Full-Stack Developer • UI/UX Designer", description: "Passionate about crafting innovative digital solutions with 5+ years of experience. Specialized in scalable web applications and elegant user interfaces." },
    skills: { title: "Technical Skills", subtitle: "Technologies I work with" },
    achievements: { title: "Where I've Contributed", subtitle: "Achievements, competitions, and leadership roles", internship: "Internship at Air Algérie", internshipDesc: "Valuable experience and real insight into the aviation industry" },
    projects: { title: "Featured Projects", subtitle: "A curated selection of my best work" },
    contact: { title: "Get In Touch", subtitle: "Connect with me through professional channels", linkedin: "LinkedIn", github: "GitHub", email: "Email", resume: "Download Resume" },
    footer: "All rights reserved",
    achievementsList: [
      { title: "3rd Place – Mobilis Hackathon 2025", date: "Dec 2025", desc: "Won 3rd place at Mobilis Hackathon sponsored by Mobilis and WellMax. Transformed ideas into a functional solution under pressure.", skills: ["Problem-solving", "Team collaboration", "Innovation"] },
      { title: "AI4SCIENCE 2025", date: "Nov 2025", desc: "Participated in AI4SCIENCE 2025 in Constantine. Completed workshops on AI research, innovation, and IoT.", skills: ["AI Research", "Innovation", "IoT"] },
      { title: "Huawei ICT Innovation Competition", date: "2025-2026", desc: "Selected for Regional Stage! Top 22 projects in North Africa from 400+ participants.", skills: ["Innovation", "Strategy", "Presentation"] },
      { title: "President of InfoBrains Club", date: "Current", desc: "Leading computer science club. Organized BrainHack Hackathon with Mobilis and WellMax.", skills: ["Leadership", "Organization", "Management"] }
    ]
  },
  fr: {
    nav: { home: "Accueil", skills: "Compétences", achievements: "Réalisations", projects: "Projets", contact: "Contact" },
    hero: { tag: "Portfolio 2025", title: "Karima Mansour", role: "Étudiante Master Info • Développeuse Full-Stack • UI/UX", description: "Passionnée par les solutions numériques innovantes avec 5+ ans d'expérience." },
    skills: { title: "Compétences Techniques", subtitle: "Technologies que j'utilise" },
    achievements: { title: "Mes Contributions", subtitle: "Réalisations et compétitions", internship: "Stage à Air Algérie", internshipDesc: "Expérience précieuse dans l'aviation" },
    projects: { title: "Projets Phares", subtitle: "Sélection de mes meilleurs travaux" },
    contact: { title: "Contactez-moi", subtitle: "Connectez-vous avec moi", linkedin: "LinkedIn", github: "GitHub", email: "Email", resume: "Télécharger CV" },
    footer: "Tous droits réservés",
    achievementsList: [
      { title: "3ème Place – Mobilis Hackathon 2025", date: "Déc 2025", desc: "3ème place au Mobilis Hackathon sponsorisé par Mobilis et WellMax.", skills: ["Problèmes", "Collaboration", "Innovation"] },
      { title: "AI4SCIENCE 2025", date: "Nov 2025", desc: "Participation à AI4SCIENCE 2025 à Constantine.", skills: ["IA", "Innovation", "IoT"] },
      { title: "Huawei ICT Innovation", date: "2025-2026", desc: "Sélectionnée pour la phase régionale! Top 22 projets en Afrique du Nord.", skills: ["Innovation", "Stratégie", "Présentation"] },
      { title: "Présidente InfoBrains", date: "Actuel", desc: "Direction du club InfoBrains. Organisation du BrainHack Hackathon.", skills: ["Leadership", "Organisation", "Management"] }
    ]
  },
  ar: {
    nav: { home: "الرئيسية", skills: "المهارات", achievements: "الإنجازات", projects: "المشاريع", contact: "اتصل بي" },
    hero: { tag: "محفظة 2025", title: "كريمة منصور", role: "طالبة ماجستير • مطورة Full-Stack • مصممة واجهات", description: "شغوفة بصنع حلول رقمية مبتكرة مع أكثر من 5 سنوات خبرة." },
    skills: { title: "المهارات التقنية", subtitle: "التقنيات التي أعمل بها" },
    achievements: { title: "مساهماتي", subtitle: "الإنجازات والمسابقات", internship: "تدريب في الخطوط الجوية الجزائرية", internshipDesc: "خبرة قيمة في صناعة الطيران" },
    projects: { title: "المشاريع المميزة", subtitle: "مجموعة مختارة من أفضل أعمالي" },
    contact: { title: "تواصل معي", subtitle: "تواصل معي عبر القنوات المهنية", linkedin: "لينكد إن", github: "جيت هاب", email: "البريد الإلكتروني", resume: "تحميل السيرة الذاتية" },
    footer: "جميع الحقوق محفوظة",
    achievementsList: [
      { title: "المركز الثالث – هاكاثون موبيليس 2025", date: "ديسمبر 2025", desc: "الفوز بالمركز الثالث في هاكاثون موبيليس.", skills: ["حل المشكلات", "العمل الجماعي", "الابتكار"] },
      { title: "AI4SCIENCE 2025", date: "نوفمبر 2025", desc: "المشاركة في AI4SCIENCE 2025 في قسنطينة.", skills: ["بحوث الذكاء", "الابتكار", "إنترنت الأشياء"] },
      { title: "مسابقة هواوي ICT", date: "2025-2026", desc: "تم اختياري للمرحلة الإقليمية! أفضل 22 مشروع في شمال إفريقيا.", skills: ["الابتكار", "التفكير", "العرض"] },
      { title: "رئيسة نادي InfoBrains", date: "حالياً", desc: "قيادة نادي InfoBrains. تنظيم هاكاثون BrainHack.", skills: ["القيادة", "التنظيم", "الإدارة"] }
    ]
  }
};

export type Language = "en" | "fr" | "ar";