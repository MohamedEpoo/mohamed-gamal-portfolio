import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

type Language = 'ar' | 'en';

interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tone: string;
  repositoryUrl: string;
  demoUrl?: string;
}

interface Skill {
  name: string;
  icon: 'angular' | 'typescript' | 'javascript' | 'web' | 'responsive' | 'git' | 'ai';
}

const copy = {
  ar: {
    backToHome: 'العودة إلى الرئيسية',
    brand: 'Mohamed Gamal',
    navigation: 'التنقل الرئيسي',
    aboutLink: 'نبذة عني',
    workLink: 'أعمالي',
    skillsLink: 'مهاراتي',
    contactLink: 'لنتحدث',
    switchLanguage: 'Switch to English',
    switchThemeToDark: 'تفعيل الوضع الداكن',
    switchThemeToLight: 'تفعيل الوضع الفاتح',
    available: 'متاح للعمل على مشاريع جديدة',
    heroTitleFirst: 'أصنع تجارب',
    heroTitleSecond: 'رقمية',
    heroTitleAccent: 'تستحق التذكّر.',
    heroDescriptionStart: 'أهلاً، أنا',
    role: 'مطور واجهات أمامية',
    heroDescriptionEnd: 'أحب تحويل الأفكار إلى مواقع أنيقة، سريعة، وسهلة الاستخدام.',
    viewWork: 'اكتشف أعمالي',
    contactMe: 'خلينا نتكلم',
    socialLinks: 'روابط التواصل',
    visualLabel: 'مساحة تعريفية',
    visualCaption: 'أفكار ← تجارب',
    designNote: 'تصميم بفكرة',
    roleNote: 'مطور واجهات',
    specialties: ['واجهات ويب', 'تجارب رقمية', 'Angular', 'أدوات الذكاء الاصطناعي'],
    aboutLabel: 'نبذة عني',
    aboutTitle: 'التفاصيل الصغيرة',
    aboutAccent: 'تصنع فرقاً كبيراً.',
    aboutDescription:
      'الموقع الناجح مش مجرد شكل جميل؛ لازم يكون واضح وسريع وسهل الاستخدام. بشتغل على الواجهات من أول فكرة لحد أدق التفاصيل، وبستخدم أدوات الذكاء الاصطناعي للمساعدة في البحث واستكشاف الأفكار وتسريع المهام المتكررة، مع مراجعة النتائج بنفسي.',
    learnMore: 'اعرفني أكتر',
    approachLabel: 'أسلوبي في العمل',
    approach: [
      {
        icon: '</>',
        title: 'واجهة مرتبة',
        description: 'أحوّل الفكرة إلى واجهة واضحة ومتناسقة مع هوية المشروع.'
      },
      {
        icon: '◎',
        title: 'تجربة سهلة',
        description: 'أهتم إن الموقع يكون بسيط في التصفح ومريح على مختلف الشاشات.'
      },
      {
        icon: '✳',
        title: 'تطوير بوعي',
        description: 'أستخدم الأدوات الحديثة لتسريع الشغل، مع مراجعة كل تفصيلة بنفسي.'
      }
    ],
    workLabel: 'أعمال مختارة',
    workTitle: 'أفكار تحولت',
    workAccent: 'لواقع.',
    haveAnIdea: 'عندك فكرة؟',
    liveDemo: 'معاينة الموقع',
    sourceCode: 'الكود على GitHub',
    skillsLabel: 'الأدوات والمهارات',
    skillsTitle: 'أدوات تساعدني',
    skillsTitleSecond: 'أقدم',
    skillsAccent: 'الأفضل.',
    skillsDescription: 'أجمع بين تطوير الواجهات، والاهتمام بتجربة المستخدم، والاستخدام الواعي لأدوات الذكاء الاصطناعي.',
    nextStep: 'الخطوة الجاية',
    contactTitle: 'عندك فكرة؟',
    contactTitleSecond: 'خلينا نبدأها سوا.',
    sendMessage: 'ابعتلي رسالة',
    footerNote: '© 2026 — صُنع بحب واهتمام',
    githubProfile: 'GitHub',
    phone: 'اتصال',
    whatsapp: 'واتساب',
    contactPhone: '0100 849 3552',
    backToTop: 'العودة للأعلى ↑',
    emailSubject: 'بورتفوليو'
  },
  en: {
    backToHome: 'Back to home',
    brand: 'Mohamed Gamal',
    navigation: 'Main navigation',
    aboutLink: 'About',
    workLink: 'Work',
    skillsLink: 'Skills',
    contactLink: 'Let’s talk',
    switchLanguage: 'التغيير إلى العربية',
    switchThemeToDark: 'Enable dark mode',
    switchThemeToLight: 'Enable light mode',
    available: 'Available for new projects',
    heroTitleFirst: 'I craft digital',
    heroTitleSecond: 'experiences',
    heroTitleAccent: 'worth remembering.',
    heroDescriptionStart: 'Hi, I’m',
    role: 'a front-end developer',
    heroDescriptionEnd: 'who loves turning ideas into thoughtful, fast, and easy-to-use websites.',
    viewWork: 'Explore my work',
    contactMe: 'Let’s talk',
    socialLinks: 'Social links',
    visualLabel: 'About Mohamed',
    visualCaption: 'Ideas → experiences',
    designNote: 'Thoughtful design',
    roleNote: 'Front-end developer',
    specialties: ['Web interfaces', 'Digital experiences', 'Angular', 'AI-assisted workflow'],
    aboutLabel: 'About me',
    aboutTitle: 'Small details',
    aboutAccent: 'make a big difference.',
    aboutDescription:
      'A great website is more than good looks: it should be clear, fast, and easy to use. I build interfaces from the first idea to the finishing touches, and use AI tools to support research, explore ideas, and speed up repetitive tasks while reviewing the results myself.',
    learnMore: 'More about me',
    approachLabel: 'How I work',
    approach: [
      {
        icon: '</>',
        title: 'Thoughtful interfaces',
        description: 'I turn ideas into clear, consistent interfaces that fit each project.'
      },
      {
        icon: '◎',
        title: 'Easy experiences',
        description: 'I focus on simple navigation and comfortable use across screen sizes.'
      },
      {
        icon: '✳',
        title: 'Intentional building',
        description: 'I use modern tools to move faster, while reviewing every detail myself.'
      }
    ],
    workLabel: 'Selected work',
    workTitle: 'Ideas made',
    workAccent: 'real.',
    haveAnIdea: 'Have a project?',
    liveDemo: 'Live demo',
    sourceCode: 'View on GitHub',
    skillsLabel: 'Tools & skills',
    skillsTitle: 'The tools I use',
    skillsTitleSecond: 'to do my',
    skillsAccent: 'best work.',
    skillsDescription: 'I bring together front-end development, thoughtful user experiences, and a responsible use of AI tools.',
    nextStep: 'What’s next',
    contactTitle: 'Have an idea?',
    contactTitleSecond: 'Let’s build it together.',
    sendMessage: 'Send me a message',
    footerNote: '© 2026 — Made with care',
    githubProfile: 'GitHub',
    phone: 'Call',
    whatsapp: 'WhatsApp',
    contactPhone: '+20 100 849 3552',
    backToTop: 'Back to top ↑',
    emailSubject: 'Portfolio'
  }
} as const;

const projects: Record<Language, Project[]> = {
  ar: [
    {
      number: '01',
      category: 'تقنية وذكاء اصطناعي',
      title: 'Codera — حلول الذكاء الاصطناعي',
      description: 'موقع تعريفي لشركة تقنية تعرض حلول ذكاء اصطناعي تتطور مع احتياجات الأعمال.',
      image: 'projects/codera-brand.jpeg',
      imageAlt: 'فريق شركة Codera يتعاون على جهاز لوحي',
      tone: 'project-card--lavender',
      repositoryUrl: 'https://github.com/MohamedEpoo/Codera',
      demoUrl: 'https://mohamedepoo.github.io/Codera/'
    },
    {
      number: '02',
      category: 'نقل وخدمات لوجستية',
      title: 'القافلة — خدمات النقل',
      description: 'موقع خدمات لوجستية يعرّف بحلول النقل والشحن مع التركيز على الأمان والاعتمادية.',
      image: 'projects/alqaffla-1.jpg',
      imageAlt: 'سفينة شحن ضمن مشهد من مشروع القافلة',
      tone: 'project-card--mint',
      repositoryUrl: 'https://github.com/MohamedEpoo/Alqaffla',
      demoUrl: 'https://mohamedepoo.github.io/Alqaffla/'
    },
    {
      number: '03',
      category: 'خدمات تنظيف',
      title: 'المزايا — تنظيف صديق للبيئة',
      description: 'موقع لشركة تنظيف يعرّف بخدماتها وجودتها واستخدامها مواد آمنة وصديقة للبيئة.',
      image: 'projects/almazaya-service.jpg',
      imageAlt: 'سيدة تنظف غرفة باستخدام منتجات تنظيف من مشروع المزايا',
      tone: 'project-card--peach',
      repositoryUrl: 'https://github.com/MohamedEpoo/Almazaya',
      demoUrl: 'https://mohamedepoo.github.io/Almazaya/'
    },
    {
      number: '04',
      category: 'استشارات وتقييم',
      title: 'الرشيدين — خبراء التقييم',
      description: 'موقع تعريفي لمكتب خبرة واستشارات مع معلومات عن خدمات التقييم والاعتمادات.',
      image: 'projects/elrashdeen-banner.png',
      imageAlt: 'فريق عمل يتعاون على جهاز لوحي ضمن مشروع الرشيدين',
      tone: 'project-card--peach',
      repositoryUrl: 'https://github.com/MohamedEpoo/Elrashdeen',
      demoUrl: 'https://mohamedepoo.github.io/Elrashdeen/'
    }
  ],
  en: [
    {
      number: '01',
      category: 'AI & technology',
      title: 'Codera — AI solutions',
      description: 'A technology company website showcasing AI solutions that evolve with business needs.',
      image: 'projects/codera-brand.jpeg',
      imageAlt: 'The Codera team collaborating around a tablet',
      tone: 'project-card--lavender',
      repositoryUrl: 'https://github.com/MohamedEpoo/Codera',
      demoUrl: 'https://mohamedepoo.github.io/Codera/'
    },
    {
      number: '02',
      category: 'Transport & logistics',
      title: 'Alqaffla — Logistics',
      description: 'A logistics services website focused on dependable transport and safe shipping solutions.',
      image: 'projects/alqaffla-1.jpg',
      imageAlt: 'Cargo ship featured in the Alqaffla project',
      tone: 'project-card--mint',
      repositoryUrl: 'https://github.com/MohamedEpoo/Alqaffla',
      demoUrl: 'https://mohamedepoo.github.io/Alqaffla/'
    },
    {
      number: '03',
      category: 'Cleaning services',
      title: 'Almazaya — Eco-friendly cleaning',
      description: 'A cleaning company website highlighting quality services and environmentally friendly products.',
      image: 'projects/almazaya-service.jpg',
      imageAlt: 'Woman cleaning a room in the Almazaya project',
      tone: 'project-card--peach',
      repositoryUrl: 'https://github.com/MohamedEpoo/Almazaya',
      demoUrl: 'https://mohamedepoo.github.io/Almazaya/'
    },
    {
      number: '04',
      category: 'Consulting & valuation',
      title: 'Elrashdeen — Valuation experts',
      description: 'A consulting office website featuring valuation services, expertise, and official accreditations.',
      image: 'projects/elrashdeen-banner.png',
      imageAlt: 'Business team collaborating around a tablet for the Elrashdeen project',
      tone: 'project-card--peach',
      repositoryUrl: 'https://github.com/MohamedEpoo/Elrashdeen',
      demoUrl: 'https://mohamedepoo.github.io/Elrashdeen/'
    }
  ]
};

const skills: Record<Language, Skill[]> = {
  ar: [
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'HTML وCSS', icon: 'web' },
    { name: 'تصميم متجاوب', icon: 'responsive' },
    { name: 'Git وGitHub', icon: 'git' },
    { name: 'أدوات الذكاء الاصطناعي', icon: 'ai' }
  ],
  en: [
    { name: 'Angular', icon: 'angular' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'HTML & CSS', icon: 'web' },
    { name: 'Responsive design', icon: 'responsive' },
    { name: 'Git & GitHub', icon: 'git' },
    { name: 'AI tools', icon: 'ai' }
  ]
};

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected language: Language = 'ar';
  protected isDarkMode = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.updateDocumentLanguage();
    this.updateDocumentTheme();
  }

  protected get text() {
    return copy[this.language];
  }

  protected get projects() {
    return projects[this.language];
  }

  protected get skills() {
    return skills[this.language];
  }

  protected get isEnglish(): boolean {
    return this.language === 'en';
  }

  protected get themeToggleLabel(): string {
    return this.isDarkMode ? this.text.switchThemeToLight : this.text.switchThemeToDark;
  }

  protected toggleLanguage(): void {
    this.language = this.isEnglish ? 'ar' : 'en';
    this.updateDocumentLanguage();
  }

  protected toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateDocumentTheme();
  }

  private updateDocumentLanguage(): void {
    this.document.documentElement.lang = this.language;
    this.document.documentElement.dir = this.isEnglish ? 'ltr' : 'rtl';
    this.document.title = this.isEnglish
      ? 'Mohamed Gamal — Front-end Developer'
      : 'محمد جمال — مطور واجهات أمامية';
    this.document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        this.isEnglish
          ? 'Mohamed Gamal’s portfolio — a front-end developer crafting thoughtful digital experiences.'
          : 'بورتفوليو محمد جمال — مطور واجهات أمامية يصنع تجارب رقمية أنيقة وسهلة الاستخدام.'
      );
  }

  private updateDocumentTheme(): void {
    this.document.documentElement.dataset['theme'] = this.isDarkMode ? 'dark' : 'light';
  }
}
