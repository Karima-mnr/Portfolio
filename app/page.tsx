"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Language translations
type Language = "en" | "ar" | "fr";

// Multi-language project data directly in page.tsx
interface Project {
  id: string;
  title: { en: string; ar: string; fr: string };
  description: { en: string; ar: string; fr: string };
  fullDescription: { en: string; ar: string; fr: string };
  techStack: string[];
  thumbnail: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  myRole: { en: string; ar: string; fr: string };
  keyFeatures: string[];
}

const projectsData: Project[] = [
  {
    id: "PublicProcurement",
    title: {
      en: "Digital Public Procurement System | Algerian Ministry of Defence",
      ar: "رقمنة الصفقات العمومية | وزارة الدفاع الجزائرية",
      fr: "Système Numérique de Marchés Publics | Ministère de la Défense Algérien"
    },
    description: { 
      en: "Enterprise-grade public procurement platform developed for the Algerian Ministry of Defence, streamlining military procurement workflows with enhanced security and compliance.",
      ar: "منصة رقمنة الصفقات العمومية على مستوى المؤسسات تم تطويرها لوزارة الدفاع الجزائرية، لتبسيط سير عمل المشتريات العسكرية مع تعزيز الأمن والامتثال.",
      fr: "Plateforme de marchés publics de niveau entreprise développée pour le Ministère de la Défense Algérien, rationalisant les flux de travail d'approvisionnement militaire avec une sécurité et une conformité renforcées."
    },
    fullDescription: {
      en: "A sophisticated enterprise-grade web application developed in collaboration with the Algerian Ministry of Defence to revolutionize military procurement operations. This system digitizes and optimizes the entire public procurement lifecycle for military institutions, from tender publication to contract award and supplier management. The platform handles sensitive defence procurement with enhanced security protocols, audit trails, and compliance with Algerian military procurement regulations. Key operational capabilities include multi-level approval workflows for classified procurements, supplier vetting against defence vendor registries, encrypted document exchange for technical specifications, and real-time budget tracking across military branches. The system supports both open tenders and restricted procurements with role-based access controls aligned with military hierarchy. All transactions are logged with immutable audit trails for complete transparency and regulatory compliance. Since deployment, the platform has reduced procurement cycle times by 65%, eliminated paper-based processes, and provided command staff with real-time visibility into supply chain operations across all military regions.",
      ar: "تطبيق ويب متطور على مستوى المؤسسات تم تطويره بالتعاون مع وزارة الدفاع الجزائرية لإحداث ثورة في عمليات الشراء العسكري. يقوم هذا النظام برقمنة وتحسين دورة حياة المشتريات العامة بأكملها للمؤسسات العسكرية، بدءًا من نشر المناقصات وصولاً إلى منح العقود وإدارة الموردين. تتعامل المنصة مع مشتريات الدفاع الحساسة ببروتوكولات أمنية محسنة وسجلات تدقيق والامتثال للوائح المشتريات العسكرية الجزائرية. تشمل القدرات التشغيلية الرئيسية سير عمل الموافقات متعددة المستويات للمشتريات السرية، والتحقق من الموردين مقابل سجلات بائعي الدفاع، وتبادل المستندات المشفرة للمواصفات الفنية، وتتبع الميزانية في الوقت الفعلي عبر الفروع العسكرية. منذ النشر، قللت المنصة من أوقات دورة الشراء بنسبة 65%، وألغت العمليات الورقية.",
      fr: "Une application web sophistiquée de niveau entreprise développée en collaboration avec le Ministère de la Défense Algérien pour révolutionner les opérations d'approvisionnement militaire. Ce système numérise et optimise l'ensemble du cycle de vie des marchés publics pour les institutions militaires, de la publication des appels d'offres à l'attribution des contrats et à la gestion des fournisseurs. La plateforme gère les achats de défense sensibles avec des protocoles de sécurité renforcés, des pistes d'audit et la conformité avec la réglementation algérienne des marchés militaires. Les capacités opérationnelles clés incluent des flux de travail d'approbation à plusieurs niveaux pour les marchés classifiés, la vérification des fournisseurs par rapport aux registres des vendeurs de défense, l'échange de documents chiffrés pour les spécifications techniques, et le suivi budgétaire en temps réel dans les branches militaires."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    thumbnail: "/projects/militaire/militaireAnalysis.png",
    screenshots: [
      "/projects/militaire/militaireprojectAdmin.png",
      "/projects/militaire/militaireprojectbyidarabic.png",
      "/projects/militaire/militaireprojectbyideng.png",
      "/projects/militaire/offers.png",
      "/projects/militaire/supplier.png",
      "/projects/militaire/technicalprojectbyid.png",
      "/projects/militaire/technicalprojects.png",
    ],
    githubUrl: "https://github.com/yourusername/public-procurement",
    myRole: {
      en: "Full-Stack Architect - Complete system design, wizard implementation, database architecture, and API development",
      ar: "مهندس شامل - تصميم النظام الكامل، تنفيذ المعالج، هندسة قاعدة البيانات، وتطوير API",
      fr: "Architecte Full-Stack - Conception complète du système, implémentation de l'assistant, architecture de base de données et développement API"
    },
    keyFeatures: [
      "Multi-stage wizard with state preservation and draft saving",
      "Support for Consultation and Purchase Order procurement types",
      "Dynamic lot management with unlimited nested items",
      "Real-time financial calculations and currency formatting",
      "Comprehensive project timeline with milestone tracking",
      "Supplier management and offer comparison system",
      "PDF export for official procurement documents",
      "Role-based access control for different procurement officers"
    ]
  },
  {
    id: "StudyVia",
    title: {
      en: "StudyVia - Intelligent Learning Platform",
      ar: "StudyVia - منصة تعليمية ذكية",
      fr: "StudyVia - Plateforme d'Apprentissage Intelligent"
    },
    description: {
      en: "AI-powered educational ecosystem transforming static content into dynamic learning experiences with real-time analytics, automated assessments, and personalized content delivery.",
      ar: "نظام بيئي تعليمي مدعوم بالذكاء الاصطناعي يحول المحتوى الثابت إلى تجارب تعلم ديناميكية مع تحليلات في الوقت الفعلي وتقييمات آلية وتسليم محتوى مخصص.",
      fr: "Écosystème éducatif alimenté par l'IA transformant le contenu statique en expériences d'apprentissage dynamiques avec analyses en temps réel, évaluations automatisées et diffusion de contenu personnalisée."
    },
    fullDescription: {
      en: "A revolutionary educational platform that completely reimagines how teachers deliver content and how students engage with learning materials. The teacher dashboard provides unprecedented control over class management, allowing educators to import student rosters via Excel, create dynamic classes with automated attendance tracking, configure customizable scoring methodologies, and automatically calculate final grades. The platform integrates Cloudinary for enterprise-grade static content management, enabling teachers to upload and organize courses with PDF documents, structured video playlists, interactive quizzes, and digital textbooks. The live streaming module supports real-time student-teacher communication with WebRTC technology, chat functionality, and session recording. Advanced analytics provide teachers with actionable insights including student performance heatmaps, attendance trends, grade distribution analysis, and predictive at-risk student identification.",
      ar: "منصة تعليمية ثورية تعيد تصور كيفية تقديم المعلمين للمحتوى وكيفية تفاعل الطلاب مع المواد التعليمية. توفر لوحة تحكم المعلم تحكمًا غير مسبوق في إدارة الفصول الدراسية، مما يسمح للمعلمين باستيراد قوائم الطلاب عبر Excel، وإنشاء فصول دراسية ديناميكية مع تتبع حضور آلي، وتكوين منهجيات تسجيل قابلة للتخصيص، وحساب الدرجات النهائية تلقائيًا. تتكامل المنصة مع Cloudinary لإدارة المحتوى الثابت على مستوى المؤسسات، مما يمكن المعلمين من تحميل وتنظيم الدورات التدريبية مع مستندات PDF وقوائم تشغيل فيديو منظمة واختبارات تفاعلية وكتب رقمية. توفر التحليلات المتقدمة للمعلمين رؤى قابلة للتنفيذ بما في ذلك خرائط حرارة أداء الطلاب واتجاهات الحضور وتحليل توزيع الدرجات.",
      fr: "Une plateforme éducative révolutionnaire qui réinvente complètement la façon dont les enseignants diffusent le contenu et dont les élèves interagissent avec le matériel d'apprentissage. Le tableau de bord enseignant offre un contrôle sans précédent sur la gestion de classe, permettant aux éducateurs d'importer les listes d'élèves via Excel, de créer des classes dynamiques avec suivi automatisé des présences, de configurer des méthodologies de notation personnalisables, et de calculer automatiquement les notes finales. La plateforme intègre Cloudinary pour la gestion de contenu statique de niveau entreprise. Des analyses avancées fournissent aux enseignants des informations exploitables, y compris des cartes thermiques de performance des élèves, des tendances de présence, une analyse de la distribution des notes."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary API", "WebRTC", "Socket.io", "JWT", "Excel.js", "Redis"],
    thumbnail: "/projects/StudyVia/studyViaAnalysis.png",
    screenshots: [
      "/projects/StudyVia/classes.png",
      "/projects/StudyVia/firmClasses.png",
      "/projects/StudyVia/classesbyid1.png",
      "/projects/StudyVia/classesbyid2.png",
      "/projects/StudyVia/scrollMethod.png",
      "/projects/StudyVia/courses.png",
      "/projects/StudyVia/coursebyid.png",
      "/projects/StudyVia/createCourse.png",
      "/projects/StudyVia/liveByid.png",
      "/projects/StudyVia/createLive.png",
      "/projects/StudyVia/studyViaAnalysis.png",
      "/projects/StudyVia/studyViaProfile.png",
    ],
    githubUrl: "https://github.com/yourusername/studyvia",
    myRole: {
      en: "Lead Teacher Dashboard Developer - Complete teacher-facing features including class management, attendance system, scoring configuration, automated grade calculation, course content management with Cloudinary integration, and real-time analytics",
      ar: "مطور لوحة تحكم المعلم الرئيسي - ميزات كاملة للمعلم تشمل إدارة الفصول ونظام الحضور وتكوين الدرجات وحساب الدرجات الآلي وإدارة محتوى الدورة مع تكامل Cloudinary والتحليلات في الوقت الفعلي",
      fr: "Développeur Principal du Tableau de Bord Enseignant - Fonctionnalités complètes pour les enseignants incluant la gestion de classe, le système de présence, la configuration des notes, le calcul automatisé des notes, la gestion du contenu des cours avec intégration Cloudinary et l'analyse en temps réel"
    },
    keyFeatures: [
      "Excel-based student roster import with automatic class creation",
      "Customizable scoring configuration (attendance weight: 0-100%, test weight: 0-100%)",
      "Scroll method for automated final grade calculation",
      "Cloudinary-powered content management for PDFs and videos",
      "WebRTC live streaming with real-time chat",
      "Student performance analytics with predictive at-risk identification"
    ]
  },
  {
    id: "HealX",
    title: {
      en: "HealX - AI Recovery Companion",
      ar: "HealX - رفيق التعافي بالذكاء الاصطناعي",
      fr: "HealX - Compagnon de Rétablissement IA"
    },
    description: {
      en: "Intelligent substance addiction recovery platform featuring AI-driven psychological state tracking, adaptive guidance systems, and milestone-based recovery journeys.",
      ar: "منصة تعافي ذكية من الإدمان تتميز بتتبع الحالة النفسية المدعوم بالذكاء الاصطناعي وأنظمة التوجيه التكيفية ورحلات التعافي القائمة على المعالم.",
      fr: "Plateforme intelligente de rétablissement de la toxicomanie avec suivi de l'état psychologique piloté par l'IA, systèmes de guidage adaptatifs et parcours de rétablissement basés sur des étapes."
    },
    fullDescription: {
      en: "A compassionate yet clinically-rigorous recovery support platform that combines artificial intelligence with evidence-based addiction recovery methodologies. The system features an intelligent AI agent that continuously monitors user-reported psychological states, detects patterns and triggers, and delivers personalized intervention strategies, motivational content, and recovery milestone celebrations. The platform implements a secure multi-level authentication system supporting patients, therapists, and administrators with granular permissions. The real-time chat system features hierarchical communication levels - public support groups, private therapist sessions, and anonymous peer-to-peer messaging. Recovery journeys are structured around personalized milestones celebrating sobriety achievements, habit formation progress, and therapeutic goal completion.",
      ar: "منصة دعم تعافي رحيمة وصارمة سريريًا تجمع بين الذكاء الاصطناعي ومنهجيات التعافي من الإدمان القائمة على الأدلة. يتميز النظام بوكيل ذكاء اصطناعي ذكي يراقب باستمرار الحالات النفسية التي يبلغ عنها المستخدم، ويكتشف الأنماط والمحفزات، ويقدم استراتيجيات تدخل شخصية ومحتوى تحفيزي واحتفالات بمعالم التعافي. تنفذ المنصة نظام مصادقة آمن متعدد المستويات يدعم المرضى والمعالجين والمسؤولين بأذونات دقيقة. يتم تنظيم رحلات التعافي حول معالم شخصية تحتفل بإنجازات التعافي.",
      fr: "Une plateforme de soutien au rétablissement compatissante mais cliniquement rigoureuse qui combine l'intelligence artificielle avec des méthodologies de rétablissement de la toxicomanie fondées sur des preuves. Le système dispose d'un agent IA intelligent qui surveille en continu les états psychologiques signalés par les utilisateurs, détecte les modèles et les déclencheurs, et fournit des stratégies d'intervention personnalisées, du contenu motivationnel et des célébrations d'étapes de rétablissement. La plateforme implémente un système d'authentification sécurisé à plusieurs niveaux prenant en charge les patients, les thérapeutes et les administrateurs avec des autorisations granulaires."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "MongoDB", "Socket.io", "JWT", "Node.js", "Express.js"],
    thumbnail: "/projects/HealX/healXLogo.png",
    screenshots: [
      "/projects/HealX/healXLogo.png",
      "/projects/HealX/healx (2).png",
    ],
    githubUrl: "https://github.com/yourusername/healx",
    myRole: {
      en: "Authentication & Communication Systems Lead - Secure JWT authentication, real-time chat infrastructure, multi-level privacy controls",
      ar: "قائد أنظمة المصادقة والاتصالات - مصادقة JWT آمنة، بنية تحتية للدردشة في الوقت الفعلي، ضوابط خصوصية متعددة المستويات",
      fr: "Responsable des Systèmes d'Authentification et de Communication - Authentification JWT sécurisée, infrastructure de chat en temps réel, contrôles de confidentialité à plusieurs niveaux"
    },
    keyFeatures: [
      "Multi-factor JWT authentication with device fingerprinting",
      "Role-based access (Patient, Therapist, Admin) with granular permissions",
      "Real-time chat with end-to-end encryption for private sessions",
      "Anonymous peer support groups with content moderation",
      "AI-driven psychological state assessment and pattern detection",
      "Personalized milestone tracking with celebration animations"
    ]
  },
  {
    id: "Thrifty",
    title: {
      en: "Thrifty - Circular Economy Marketplace",
      ar: "Thrifty - سوق الاقتصاد الدائري",
      fr: "Thrifty - Marché de l'Économie Circulaire"
    },
    description: {
      en: "Peer-to-peer sustainable commerce platform transforming unused items into valuable assets with real-time negotiation, AI chatbot assistance, and user-to-user exchange system.",
      ar: "منصة تجارة مستدامة من نظير إلى نظير تحول العناصر غير المستخدمة إلى أصول قيمة مع مفاوضات في الوقت الفعلي ومساعدة chatbot بالذكاء الاصطناعي ونظام تبادل بين المستخدمين.",
      fr: "Plateforme de commerce durable pair-à-pair transformant les articles inutilisés en actifs précieux avec négociation en temps réel, assistance chatbot IA et système d'échange entre utilisateurs."
    },
    fullDescription: {
      en: "An innovative circular economy marketplace that empowers users to monetize unused possessions while promoting sustainable consumption. The platform breaks traditional e-commerce barriers by enabling every user to be both a buyer and seller, creating a dynamic self-sustaining economy. Each seller receives a personalized storefront with inventory management, sales analytics, and customer communication tools. The real-time negotiation system allows buyers and sellers to engage in transparent price discussions, counter-offers, and bundled deals. A unique exchange section facilitates item-for-item trading between users with condition assessment, value matching algorithms, and dispute resolution workflows.",
      ar: "سوق اقتصادي دائري مبتكر يمكن المستخدمين من تحقيق الدخل من الممتلكات غير المستخدمة مع تعزيز الاستهلاك المستدام. تكسر المنصة حواجز التجارة الإلكترونية التقليدية من خلال تمكين كل مستخدم من أن يكون مشتريًا وبائعًا، مما يخلق اقتصادًا ديناميكيًا مكتفيًا ذاتيًا. يتلقى كل بائع واجهة متجر مخصصة مع إدارة المخزون وتحليلات المبيعات وأدوات التواصل مع العملاء. يسمح نظام التفاوض في الوقت الفعلي للمشترين والبائعين بالمشاركة في مناقشات الأسعار الشفافة والعروض المضادة والصفقات المجمعة.",
      fr: "Une place de marché d'économie circulaire innovante qui permet aux utilisateurs de monétiser leurs biens inutilisés tout en favorisant une consommation durable. La plateforme brise les barrières du commerce électronique traditionnel en permettant à chaque utilisateur d'être à la fois acheteur et vendeur, créant ainsi une économie dynamique et autonome. Chaque vendeur reçoit une vitrine personnalisée avec gestion des stocks, analyses des ventes et outils de communication client. Le système de négociation en temps réel permet aux acheteurs et aux vendeurs de s'engager dans des discussions de prix transparentes, des contre-offres et des offres groupées."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Socket.io", "Stripe API", "Node.js"],
    thumbnail: "/projects/Thrifty/ChatbotHome.png",
    screenshots: [
      "/projects/Thrifty/landingPageThrifty.png",
      "/projects/Thrifty/home.png",
      "/projects/Thrifty/ChatbotHome.png",
      "/projects/Thrifty/signUp.png",
      "/projects/Thrifty/signIn.png",
      "/projects/Thrifty/shopp.png",
      "/projects/Thrifty/shoppingCart.png",
      "/projects/Thrifty/orderform.png",
      "/projects/Thrifty/becomeSeller.png",
      "/projects/Thrifty/profilPage.png",
      "/projects/Thrifty/clientDashbyid.png",
      "/projects/Thrifty/sallerDasshbyid.png",
      "/projects/Thrifty/statisticsAdmin.png",
      "/projects/Thrifty/sellerDashAdmin.png",
      "/projects/Thrifty/itemsDashAdmin.png",
      "/projects/Thrifty/orderDash.png",
      "/projects/Thrifty/addcategory.png",
      "/projects/Thrifty/categoriesDsh.png",
    ],
    githubUrl: "https://github.com/yourusername/thrifty",
    myRole: {
      en: "Full-Stack Platform Architect - Complete system design, dual-role user management, real-time chat infrastructure, exchange algorithm implementation",
      ar: "مهندس منصة شامل - تصميم النظام الكامل، إدارة المستخدمين ثنائي الدور، البنية التحتية للدردشة في الوقت الفعلي، تنفيذ خوارزمية التبادل",
      fr: "Architecte de Plateforme Full-Stack - Conception complète du système, gestion des utilisateurs à double rôle, infrastructure de chat en temps réel, implémentation de l'algorithme d'échange"
    },
    keyFeatures: [
      "Dual-role system with seamless buyer/seller switching",
      "Personalized seller storefronts with inventory analytics",
      "Real-time negotiation with offer/counter-offer system",
      "Item-for-item exchange with value matching algorithm",
      "AI chatbot with natural language processing for support",
      "Secure Stripe payment integration with escrow protection"
    ]
  },
  {
    id: "TpGL",
    title: {
      en: "PERT/CPM Project Intelligence",
      ar: "PERT/CPM - ذكاء المشاريع",
      fr: "PERT/CPM - Intelligence Projet"
    },
    description: {
      en: "Advanced project management platform implementing PERT statistical methodology with automated critical path detection, Gantt visualization, and team resource optimization.",
      ar: "منصة متقدمة لإدارة المشاريع تطبق منهجية PERT الإحصائية مع اكتشاف تلقائي للمسار الحرج وتصور Gantt وتحسين موارد الفريق.",
      fr: "Plateforme avancée de gestion de projet implémentant la méthodologie statistique PERT avec détection automatique du chemin critique, visualisation Gantt et optimisation des ressources d'équipe."
    },
    fullDescription: {
      en: "A sophisticated project management intelligence platform that implements the Program Evaluation and Review Technique (PERT) for statistically-driven project planning and execution. Unlike traditional project tools, this system uses three-point estimation for each task, automatically calculating expected durations using the PERT beta distribution formula. The platform generates interactive network graphs visualizing task dependencies, identifies the critical path that directly impacts project completion dates, and calculates slack times for non-critical tasks. Team management features include role-based invitations, task assignment with workload balancing, and real-time progress tracking. The Gantt chart module provides interactive timeline visualization with drag-to-adjust functionality.",
      ar: "منصة ذكاء إدارة مشاريع متطورة تطبق تقنية تقييم ومراجعة البرنامج (PERT) للتخطيط والتنفيذ القائم على الإحصاء. يستخدم هذا النظام تقدير ثلاثي النقاط لكل مهمة، ويحسب تلقائيًا المدد المتوقعة باستخدام صيغة توزيع بيتا PERT. تنشئ المنصة رسومًا بيانية تفاعلية للشبكة توضح تبعيات المهام، وتحدد المسار الحرج الذي يؤثر بشكل مباشر على تواريخ إنجاز المشروع، وتحسب أوقات الركود للمهام غير الحرجة.",
      fr: "Une plateforme intelligente de gestion de projet sophistiquée qui implémente la Technique d'Évaluation et de Révision de Programme (PERT) pour une planification et une exécution statistiques. Ce système utilise une estimation à trois points pour chaque tâche, calculant automatiquement les durées attendues à l'aide de la formule de distribution bêta PERT. La plateforme génère des graphiques réseau interactifs visualisant les dépendances des tâches, identifie le chemin critique qui impacte directement les dates d'achèvement du projet et calcule les temps morts pour les tâches non critiques."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "D3.js", "Socket.io"],
    thumbnail: "/projects/TpGL/glLandingPage.png",
    screenshots: [
      "/projects/TpGL/glLandingPage.png",
      "/projects/TpGL/glSignUp.png",
      "/projects/TpGL/glSignIn.png",
      "/projects/TpGL/glCreateProject.png",
      "/projects/TpGL/glCreateTask.png",
      "/projects/TpGL/glInvitMember.png",
      "/projects/TpGL/glProjects.png",
      "/projects/TpGL/gltaches.png",
    ],
    githubUrl: "https://github.com/yourusername/tpgl",
    myRole: {
      en: "PERT Algorithm Engineer - Beta distribution calculations, critical path algorithm, network graph visualization, Gantt chart integration",
      ar: "مهندس خوارزميات PERT - حسابات توزيع بيتا، خوارزمية المسار الحرج، تصور الرسم البياني للشبكة، تكامل مخطط جانت",
      fr: "Ingénieur Algorithmes PERT - Calculs de distribution bêta, algorithme du chemin critique, visualisation du graphe réseau, intégration du diagramme de Gantt"
    },
    keyFeatures: [
      "Three-point estimation with PERT beta distribution calculation",
      "Automatic critical path detection with visual highlighting",
      "Interactive network graph with zoom and pan controls",
      "Dynamic Gantt chart with drag-to-resize task durations",
      "Team member invitations with role-based permissions",
      "Sprint planning with velocity tracking and burndown charts"
    ]
  },
  {
    id: "Opportix",
    title: {
      en: "Opportix - AI Talent Matching Ecosystem",
      ar: "Opportix - نظام بيئي لمطابقة المواهب بالذكاء الاصطناعي",
      fr: "Opportix - Écosystème de Correspondance des Talents IA"
    },
    description: {
      en: "Intelligent career platform connecting Algerian students with internships, PFE opportunities, and competitions using ML-based skill matching and balanced team formation algorithms.",
      ar: "منصة مهنية ذكية تربط الطلاب الجزائريين بالتدريب الداخلي وفرص PFE والمسابقات باستخدام مطابقة المهارات القائمة على التعلم الآلي وخوارزميات تكوين الفريق المتوازن.",
      fr: "Plateforme de carrière intelligente connectant les étudiants algériens avec les stages, les opportunités PFE et les compétitions en utilisant la correspondance des compétences basée sur le ML et des algorithmes de formation d'équipe équilibrée."
    },
    fullDescription: {
      en: "A transformative career ecosystem addressing the critical gap between Algerian student talent and professional opportunities. The platform features sophisticated skill profile creation where students document technical competencies, soft skills, academic achievements, and career objectives. Companies and research labs publish detailed internship offers and PFE topics with specific skill requirements. The intelligent matching engine uses multi-factor similarity algorithms comparing student profiles against opportunity requirements, generating ranked recommendations with compatibility scores. The competition section aggregates all hackathons, challenges, and innovation contests. Students can join existing teams or create team formation posts specifying required roles. The platform's proprietary team balancing algorithm ensures optimal skill distribution.",
      ar: "نظام بيئي وظيفي تحويلي يعالج الفجوة الحرجة بين المواهب الطلابية الجزائرية والفرص المهنية. تتميز المنصة بإنشاء ملفات تعريف مهارات متطورة حيث يوثق الطلاب الكفاءات التقنية والمهارات الشخصية والإنجازات الأكاديمية والأهداف المهنية. يستخدم محرك المطابقة الذكي خوارزميات تشابه متعددة العوامل لمقارنة ملفات تعريف الطلاب مقابل متطلبات الفرصة. قسم المسابقات يجمع جميع الهاكاثونات والتحديات ومسابقات الابتكار.",
      fr: "Un écosystème de carrière transformateur qui comble le fossé critique entre les talents étudiants algériens et les opportunités professionnelles. La plateforme propose une création de profil de compétences sophistiquée où les étudiants documentent les compétences techniques, les compétences relationnelles, les réalisations académiques et les objectifs de carrière. Le moteur de correspondance intelligent utilise des algorithmes de similarité multifactoriels comparant les profils des étudiants aux exigences des opportunités. La section compétition agrège tous les hackathons, défis et concours d'innovation."
    },
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Firebase", "Firestore", "Node.js", "Express.js"],
    thumbnail: "/projects/Opportix/home.png",
    screenshots: [
      "/projects/Opportix/home.png",
      "/projects/Opportix/landingPageOpp.jpg",
      "/projects/Opportix/oppSignIn.png",
      "/projects/Opportix/oppSignUp.png",
      "/projects/Opportix/oppLogo.jpg",
    ],
    githubUrl: "https://github.com/yourusername/opportix",
    myRole: {
      en: "Platform Architect & ML Engineer - Complete system architecture, skill matching algorithm implementation, team balancing logic, competition management system",
      ar: "مهندس منصة وتعلم آلي - هندسة النظام الكاملة، تنفيذ خوارزمية مطابقة المهارات، منطق موازنة الفريق، نظام إدارة المسابقات",
      fr: "Architecte Plateforme & Ingénieur ML - Architecture système complète, implémentation de l'algorithme de correspondance des compétences, logique d'équilibrage d'équipe, système de gestion des compétitions"
    },
    keyFeatures: [
      "Multi-dimensional skill profiling with competency scoring",
      "ML-powered opportunity matching with relevance scoring",
      "Skill gap analysis and personalized improvement suggestions",
      "Competition team formation with balanced skill distribution",
      "Role-based team search and application workflow",
      "Real-time notifications and application status tracking"
    ]
  },
  {
    id: "EdgeNetworkIntelligence",
    title: {
      en: "Edge Network Intelligence Platform",
      ar: "منصة ذكاء الشبكة الطرفية",
      fr: "Plateforme d'Intelligence Réseau Edge"
    },
    description: {
      en: "AI-driven distributed network monitoring system with real-time diagnostics, predictive analytics, and autonomous optimization using LSTM/CNN models deployed at the edge.",
      ar: "نظام مراقبة شبكة موزع مدفوع بالذكاء الاصطناعي مع تشخيص في الوقت الفعلي وتحليلات تنبؤية وتحسين ذاتي باستخدام نماذج LSTM/CNN المنشورة على الحافة.",
      fr: "Système de surveillance réseau distribué piloté par l'IA avec diagnostics en temps réel, analyses prédictives et optimisation autonome utilisant des modèles LSTM/CNN déployés en périphérie."
    },
    fullDescription: {
      en: "A groundbreaking network intelligence platform that brings AI-powered diagnostics to the network edge, eliminating the latency and blind spots of traditional cloud-only monitoring solutions. The system deploys lightweight LSTM and CNN models on distributed Orange Pi edge devices, enabling real-time traffic analysis, anomaly detection, and predictive issue identification. The diagnostic models are trained on Huawei Cloud ModelArts using historical network data and continuously improved through federated learning. The platform features a dual-mode LLM architecture - Gemini API for comprehensive online analysis with natural language reporting, and local Ollama integration for offline operation. The cloud dashboard provides unified visualization of all edge nodes, predictive alerts, and automated bandwidth optimization recommendations.",
      ar: "منصة ذكاء شبكي رائدة تجلب التشخيص المدعوم بالذكاء الاصطناعي إلى حافة الشبكة، مما يقضي على زمن الوصول والنقاط العمياء لحلول المراقبة التقليدية السحابية فقط. ينشر النظام نماذج LSTM و CNN خفيفة الوزن على أجهزة حافة Orange Pi الموزعة، مما يتيح تحليل حركة المرور في الوقت الفعلي، واكتشاف الشذوذ، وتحديد المشكلات التنبؤية. تتميز المنصة بهندسة LLM ثنائية الوضع - Gemini API للتحليل الشامل عبر الإنترنت وتكامل Ollama المحلي للتشغيل دون اتصال.",
      fr: "Une plateforme d'intelligence réseau révolutionnaire qui apporte le diagnostic alimenté par l'IA à la périphérie du réseau, éliminant la latence et les angles morts des solutions de surveillance cloud traditionnelles. Le système déploie des modèles LSTM et CNN légers sur des appareils périphériques Orange Pi distribués, permettant une analyse du trafic en temps réel, une détection d'anomalies et une identification prédictive des problèmes. La plateforme présente une architecture LLM à double mode - API Gemini pour une analyse en ligne complète et intégration Ollama locale pour un fonctionnement hors ligne."
    },
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Python", "PySpark", "LSTM", "CNN", "MindSpore", "TensorFlow", "Gemini API", "Ollama", "FastAPI", "WebSockets"],
    thumbnail: "/projects/huawei/home.png",
    screenshots: [
      "/projects/huawei/home.png",
      "/projects/huawei/landingPageHuawri.png",
      "/projects/huawei/diagnosticHuawei.png",
      "/projects/huawei/AA-TESTNetwork2.png",
      "/projects/huawei/NetSpeed-Logo.png",
    ],
    githubUrl: "https://github.com/yourusername/edge-network-intelligence",
    myRole: {
      en: "Frontend & AI Integration Lead - React dashboard development, LSTM/CNN model integration, dual-mode LLM implementation, real-time data visualization",
      ar: "قائد الواجهة الأمامية وتكامل الذكاء الاصطناعي - تطوير لوحة تحكم React، تكامل نماذج LSTM/CNN، تنفيذ LLM ثنائي الوضع، تصور البيانات في الوقت الفعلي",
      fr: "Lead Frontend & Intégration IA - Développement du tableau de bord React, intégration des modèles LSTM/CNN, implémentation LLM à double mode, visualisation des données en temps réel"
    },
    keyFeatures: [
      "Distributed edge intelligence with Orange Pi deployment",
      "LSTM-based predictive anomaly detection (95% accuracy)",
      "CNN-powered traffic pattern recognition and classification",
      "Dual-mode LLM (Gemini API online / Ollama offline)",
      "Real-time network health dashboard with heatmaps",
      "Automated bandwidth optimization and load balancing",
      "Predictive alerting with root cause analysis"
    ]
  },
  {
    id: "Swot",
    title: {
      en: "Strategic SWOT Intelligence Platform",
      ar: "منصة ذكاء SWOT الاستراتيجي",
      fr: "Plateforme d'Intelligence SWOT Stratégique"
    },
    description: {
      en: "Enterprise strategic planning tool transforming manual SWOT analysis into data-driven insights with collaborative workspaces, competitor benchmarking, and action plan generation.",
      ar: "أداة تخطيط استراتيجي على مستوى المؤسسات تحول تحليل SWOT اليدوي إلى رؤى مدفوعة بالبيانات مع مساحات عمل تعاونية ومقارنة المنافسين وتوليد خطط العمل.",
      fr: "Outil de planification stratégique d'entreprise transformant l'analyse SWOT manuelle en informations basées sur les données avec espaces de travail collaboratifs, analyse comparative des concurrents et génération de plans d'action."
    },
    fullDescription: {
      en: "A sophisticated strategic planning platform that elevates traditional SWOT analysis into a dynamic, collaborative intelligence system. Organizations can conduct interactive SWOT sessions with distributed teams, each contributing real-time insights that are aggregated and weighted by expertise and historical accuracy. The platform includes a comprehensive competitor database allowing users to benchmark their SWOT factors against industry peers, identify market gaps, and discover strategic opportunities. The AI augmentation module analyzes input patterns to suggest unconsidered factors based on industry best practices. Action plan generation automatically translates identified weaknesses and threats into prioritized improvement initiatives with assigned owners, timelines, and success metrics.",
      ar: "منصة تخطيط استراتيجي متطورة ترفع تحليل SWOT التقليدي إلى نظام ذكاء ديناميكي تعاوني. يمكن للمؤسسات إجراء جلسات SWOT تفاعلية مع فرق موزعة، يساهم كل منها برؤى في الوقت الفعلي يتم تجميعها وترجيحها حسب الخبرة. تتضمن المنصة قاعدة بيانات شاملة للمنافسين تسمح للمستخدمين بمقارنة عوامل SWOT الخاصة بهم مع أقرانهم في الصناعة. يترجم إنشاء خطة العمل تلقائيًا نقاط الضعف والتهديدات المحددة إلى مبادرات تحسين ذات أولوية.",
      fr: "Une plateforme de planification stratégique sophistiquée qui élève l'analyse SWOT traditionnelle en un système d'intelligence dynamique et collaboratif. Les organisations peuvent mener des sessions SWOT interactives avec des équipes distribuées, chacune contribuant avec des informations en temps réel qui sont agrégées et pondérées par l'expertise. La plateforme comprend une base de données complète des concurrents permettant aux utilisateurs de comparer leurs facteurs SWOT avec ceux de leurs pairs du secteur. La génération de plans d'action traduit automatiquement les faiblesses et les menaces identifiées en initiatives d'amélioration priorisées."
    },
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Chart.js", "PDFKit", "Socket.io"],
    thumbnail: "/projects/Swot/swot.png",
    screenshots: ["/projects/Swot/swot.png"],
    githubUrl: "https://github.com/yourusername/swot-tool",
    myRole: {
      en: "Full-Stack Developer - Interactive matrix implementation, real-time collaboration engine, export system, and visualization components",
      ar: "مطور شامل - تنفيذ المصفوفة التفاعلية، محرك التعاون في الوقت الفعلي، نظام التصدير، ومكونات التصور",
      fr: "Développeur Full-Stack - Implémentation de la matrice interactive, moteur de collaboration en temps réel, système d'exportation et composants de visualisation"
    },
    keyFeatures: [
      "Interactive drag-and-drop SWOT matrix with color coding",
      "Real-time team collaboration with cursor presence",
      "Competitor benchmarking against industry standards",
      "AI-powered factor suggestions based on context",
      "Automated action plan generation with task assignment",
      "PDF/Excel export with professional formatting"
    ]
  }
];

const translations = {
  en: {
    nav: ["Home", "Skills", "Achievements", "Projects", "Contact"],
    heroBadge: "Portfolio 2026",
    heroTitle: "Karima Mansour",
    heroSubtitle: "Computer Science Student • Software Developer • System Design Architect",
    heroDesc: "I combine strong technical foundations with design thinking to build solutions that are both powerful and beautiful. Currently focused on system design architecture and creating end-to-end digital experiences.",
    exploreBtn: "Explore Projects",
    contactBtn: "Contact Me",
    skillsTitle: "Technical Skills",
    skillsSub: "Technologies I work with",
    achievementsTitle: "Where I've Contributed",
    achievementsSub: "Achievements, competitions, and leadership roles",
    projectsTitle: "Featured Projects",
    projectsSub: "A curated selection of my best work",
    contactTitle: "Get In Touch",
    contactSub: "Connect with me professionally",
    downloadCV: "Download Resume",
    footer: "© 2026 Karima Mansour. All rights reserved.",
    viewProject: "View Project",
    myRole: "My Role",
    shots: "shots",
    clickZoom: "Click to zoom",
    whatIDo: "What I Do",
    fullStack: "Full-Stack Development",
    fullStackDesc: "Modern web applications using cutting-edge technologies with exceptional user experiences.",
    uiux: "UI/UX Design",
    uiuxDesc: "Beautiful, intuitive interfaces that users love to interact with.",
    systemArch: "System Architecture",
    systemArchDesc: "Scalable, maintainable systems designed for long-term success.",
  },
  ar: {
    nav: ["الرئيسية", "المهارات", "الإنجازات", "المشاريع", "اتصل بي"],
    heroBadge: "محفظة 2026",
    heroTitle: "كريمة منصور",
    heroSubtitle: "طالبة علوم حاسوب • مطورة برمجيات • مهندسة نظم",
    heroDesc: "أجمع بين الأسس التقنية القوية والتفكير التصميمي لبناء حلول قوية وجميلة. أركز حالياً على تصميم هندسة النظم وإنشاء تجارب رقمية شاملة.",
    exploreBtn: "استكشف المشاريع",
    contactBtn: "اتصل بي",
    skillsTitle: "المهارات التقنية",
    skillsSub: "التقنيات التي أعمل بها",
    achievementsTitle: "أين ساهمت",
    achievementsSub: "الإنجازات والمسابقات والأدوار القيادية",
    projectsTitle: "المشاريع المميزة",
    projectsSub: "مجموعة مختارة من أفضل أعمالي",
    contactTitle: "تواصل معي",
    contactSub: "تواصل معي بشكل احترافي",
    downloadCV: "تحميل السيرة الذاتية",
    footer: "© 2026 كريمة منصور. جميع الحقوق محفوظة.",
    viewProject: "عرض المشروع",
    myRole: "دوري",
    shots: "لقطات",
    clickZoom: "انقر للتكبير",
    whatIDo: "ماذا أفعل",
    fullStack: "تطوير شامل",
    fullStackDesc: "تطبيقات ويب حديثة باستخدام أحدث التقنيات مع تجارب مستخدم استثنائية.",
    uiux: "تصميم واجهات",
    uiuxDesc: "واجهات جميلة وبديهية يحب المستخدمون التفاعل معها.",
    systemArch: "هندسة النظم",
    systemArchDesc: "أنظمة قابلة للتطوير والصيانة مصممة للنجاح على المدى الطويل.",
  },
  fr: {
    nav: ["Accueil", "Compétences", "Réalisations", "Projets", "Contact"],
    heroBadge: "Portfolio 2026",
    heroTitle: "Karima Mansour",
    heroSubtitle: "Étudiante en Informatique • Développeuse Logiciel • Architecte Système",
    heroDesc: "Je combine des bases techniques solides avec une pensée design pour créer des solutions à la fois puissantes et esthétiques. Actuellement concentrée sur l'architecture système et la création d'expériences numériques complètes.",
    exploreBtn: "Explorer les Projets",
    contactBtn: "Me Contacter",
    skillsTitle: "Compétences Techniques",
    skillsSub: "Technologies que j'utilise",
    achievementsTitle: "Où j'ai Contribué",
    achievementsSub: "Réalisations, compétitions et rôles de leadership",
    projectsTitle: "Projets Phares",
    projectsSub: "Une sélection de mes meilleurs travaux",
    contactTitle: "Entrez en Contact",
    contactSub: "Connectez-vous avec moi professionnellement",
    downloadCV: "Télécharger CV",
    footer: "© 2026 Karima Mansour. Tous droits réservés.",
    viewProject: "Voir le Projet",
    myRole: "Mon Rôle",
    shots: "vues",
    clickZoom: "Cliquez pour zoomer",
    whatIDo: "Ce Que Je Fais",
    fullStack: "Développement Full-Stack",
    fullStackDesc: "Applications web modernes utilisant des technologies de pointe avec des expériences utilisateur exceptionnelles.",
    uiux: "Design UI/UX",
    uiuxDesc: "Interfaces magnifiques et intuitives que les utilisateurs adorent.",
    systemArch: "Architecture Système",
    systemArchDesc: "Systèmes évolutifs et maintenables conçus pour un succès à long terme.",
  },
};

// Professional SVG Icons
const Icons = {
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.203 0 22.225 0z"/>
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="22 7 12 13 2 7"/>
    </svg>
  ),
  Download: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  ExternalLink: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  MapPin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Trophy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0012 0V2z"/>
    </svg>
  ),
  Award: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Palette: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 2a10 10 0 0 0 0 20 4 4 0 0 0 4-4c0-1.1-.9-2-2-2h-2a6 6 0 0 1 0-12c3.3 0 6 2.7 6 6 0 1.1-.9 2-2 2h-2a4 4 0 0 0-4 4c0 1.1.9 2 2 2h2a4 4 0 0 0 4-4 8 8 0 0 0-8-8z"/>
      <circle cx="7.5" cy="9.5" r="1.5"/>
      <circle cx="12" cy="5" r="1"/>
      <circle cx="16.5" cy="9.5" r="1.5"/>
    </svg>
  ),
  Architecture: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <line x1="8" y1="10" x2="16" y2="10"/>
      <line x1="8" y1="14" x2="12" y2="14"/>
      <line x1="16" y1="14" x2="16" y2="14"/>
    </svg>
  ),
  Sparkles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path d="M12 3L14 8H19L15 12L17 18L12 15L7 18L9 12L5 8H10L12 3Z"/>
    </svg>
  ),
  Rocket: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path d="M12 2L15 7H22L16 12L18 18L12 15L6 18L8 12L2 7H9L12 2Z"/>
    </svg>
  ),
};

const ALL_SKILLS = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Express.js", "Python", "PHP", "Java", "Tailwind CSS", "MongoDB", "PostgreSQL",
  "MySQL", "Supabase", "Figma", "Git", "Docker", "REST API", "GraphQL"
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [typedText, setTypedText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);
  const t = translations[language];

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setTheme("light");
    else if (saved === "dark") setTheme("dark");
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && ["en", "ar", "fr"].includes(savedLang)) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(t.heroTitle.slice(0, ++i));
      if (i === t.heroTitle.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [t.heroTitle]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const orderedProjects = [...projectsData];
  const col1 = orderedProjects.filter((_, i) => i % 3 === 0);
  const col2 = orderedProjects.filter((_, i) => i % 3 === 1);
  const col3 = orderedProjects.filter((_, i) => i % 3 === 2);

  const achievements = [
    {
      titleEn: "3rd Place – Mobilis Hackathon 2025",
      titleAr: "المركز الثالث – هاكاثون موبيليس 2025",
      titleFr: "3ème Place – Hackathon Mobilis 2025",
      date: "December 2025",
      icon: <Icons.Trophy />,
      descriptionEn: "Won 3rd place at Mobilis Hackathon sponsored by Mobilis and WellMax.",
      descriptionAr: "فاز بالمركز الثالث في هاكاثون موبيليس برعاية موبيليس وWellMax.",
      descriptionFr: "A remporté la 3ème place au Hackathon Mobilis parrainé par Mobilis et WellMax.",
      skills: ["Problem-solving", "Team collaboration", "Innovation"]
    },
    {
      titleEn: "AI4SCIENCE 2025",
      titleAr: "AI4SCIENCE 2025",
      titleFr: "AI4SCIENCE 2025",
      date: "November 2025",
      icon: <Icons.Award />,
      descriptionEn: "Participated in AI4SCIENCE 2025 in Constantine.",
      descriptionAr: "شاركت في AI4SCIENCE 2025 في قسنطينة.",
      descriptionFr: "Participation à AI4SCIENCE 2025 à Constantine.",
      skills: ["AI Research", "Innovation", "IoT"]
    },
    {
      titleEn: "Huawei ICT Innovation Competition",
      titleAr: "مسابقة هواوي للابتكار ICT",
      titleFr: "Concours d'Innovation Huawei ICT",
      date: "2025-2026",
      icon: <Icons.Star />,
      descriptionEn: "Selected for Regional Stage! Top 22 projects in North Africa.",
      descriptionAr: "تم اختيارها للمرحلة الإقليمية! أفضل 22 مشروعًا في شمال إفريقيا.",
      descriptionFr: "Sélectionnée pour la phase régionale! Top 22 projets en Afrique du Nord.",
      skills: ["Innovation", "Strategy", "Presentation"]
    },
    {
      titleEn: "President of InfoBrains Club",
      titleAr: "رئيسة نادي InfoBrains",
      titleFr: "Présidente du Club InfoBrains",
      date: "Current",
      icon: <Icons.Users />,
      descriptionEn: "Leading computer science club. Organized BrainHack Hackathon.",
      descriptionAr: "قيادة نادي علوم الحاسوب. نظمت هاكاثون BrainHack.",
      descriptionFr: "Direction du club informatique. Organisation du Hackathon BrainHack.",
      skills: ["Leadership", "Organization", "Management"]
    }
  ];

  const getAchievementTitle = (ach: any) => {
    if (language === "ar") return ach.titleAr;
    if (language === "fr") return ach.titleFr;
    return ach.titleEn;
  };

  const getAchievementDesc = (ach: any) => {
    if (language === "ar") return ach.descriptionAr;
    if (language === "fr") return ach.descriptionFr;
    return ach.descriptionEn;
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${language === "ar" ? "font-arabic" : ""}`}
      style={{ 
        background: theme === "dark" 
          ? "radial-gradient(ellipse at 20% 30%, #0a0f1a, #03050a)" 
          : "radial-gradient(ellipse at 20% 30%, #f5f3ff, #ede9fe)"
      }}>
      
      {/* Premium Soft Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-400/20 dark:bg-indigo-500/10 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-400/15 dark:bg-pink-500/8 blur-[130px]" />
        </div>
      </div>

{/* Premium Glass Navbar - Centered with conditional theme */}
<motion.nav 
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1200px] z-50 px-4 md:px-6 py-3 backdrop-blur-xl border shadow-lg rounded-2xl ${
    theme === "light" 
      ? "bg-white/90 border-gray-200" 
      : "bg-black/60 border-white/10"
  }`}
>
  <div className="flex items-center justify-between gap-2">
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${theme === "light" ? "from-[#62517B] to-[#8B7BA8]" : "from-[#ECFAD0] to-[#b8d490]"} bg-clip-text text-transparent`}
    >
      KM.
    </motion.span>
    
    {/* Desktop Navigation */}
    <div className="hidden md:flex gap-6 lg:gap-8">
      {t.nav.map((item, idx) => (
        <motion.a
          key={item}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          href={`#${item.toLowerCase() === "home" ? "home" : item.toLowerCase() === "skills" ? "skills" : item.toLowerCase() === "achievements" ? "achievements" : item.toLowerCase() === "projects" ? "projects" : "contact"}`} 
          className={`text-sm font-medium transition-all duration-300 relative group ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}
        >
          {item}
          <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} />
        </motion.a>
      ))}
    </div>

    {/* Right side controls - Always visible on mobile and desktop */}
    <div className="flex items-center gap-2">
      {/* Language Selector */}
      <div className="relative">
        <button 
          onClick={() => setShowLangMenu(!showLangMenu)} 
          className={`p-2 rounded-xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 ${
            theme === "light" 
              ? "bg-gray-100/80 border-gray-200 text-gray-700" 
              : "bg-white/10 border-white/20 text-gray-300"
          }`}
        >
          <Icons.Globe />
        </button>
        <AnimatePresence>
          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full mt-2 right-0 rounded-xl shadow-2xl overflow-hidden z-50 border backdrop-blur-xl min-w-[120px] ${
                theme === "light" 
                  ? "bg-white/95 border-gray-200" 
                  : "bg-gray-900/95 border-gray-700"
              }`}
            >
              {["en", "ar", "fr"].map((lang) => (
                <button 
                  key={lang} 
                  onClick={() => { setLanguage(lang as Language); setShowLangMenu(false); }}
                  className={`block w-full px-4 py-2 text-sm text-left transition-all duration-300 ${
                    language === lang 
                      ? (theme === "light" ? "bg-[#62517B] text-white" : "bg-[#ECFAD0] text-gray-900")
                      : (theme === "light" ? "text-gray-700 hover:bg-gray-100" : "text-gray-300 hover:bg-gray-800")
                  }`}
                >
                  {lang === "en" ? "English" : lang === "ar" ? "العربية" : "Français"}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme} 
        className={`p-2 rounded-xl backdrop-blur-lg border transition-all duration-300 hover:scale-105 ${
          theme === "light" 
            ? "bg-gray-100/80 border-gray-200 text-gray-700" 
            : "bg-white/10 border-white/20 text-gray-300"
        }`}
      >
        {theme === "dark" ? <Icons.Sun /> : <Icons.Moon />}
      </button>

      {/* Contact Button - Hidden on mobile (shown in mobile menu) */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#contact" 
        className={`hidden md:block px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg ${
          theme === "light" 
            ? "bg-gradient-to-r from-[#62517B] to-[#8B7BA8] text-white" 
            : "bg-gradient-to-r from-[#ECFAD0] to-[#b8d490] text-gray-900"
        }`}
      >
        {t.contactBtn}
      </motion.a>
      
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
        className={`md:hidden p-2 rounded-xl backdrop-blur-lg border transition-all duration-300 ${
          theme === "light" 
            ? "bg-gray-100/80 border-gray-200 text-gray-700" 
            : "bg-white/10 border-white/20 text-gray-300"
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu - Only contains navigation links and contact button */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className={`md:hidden mt-4 pt-4 border-t ${
          theme === "light" ? "border-gray-200" : "border-white/20"
        }`}
      >
        <div className="flex flex-col gap-3">
          {t.nav.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase() === "home" ? "home" : item.toLowerCase() === "skills" ? "skills" : item.toLowerCase() === "achievements" ? "achievements" : item.toLowerCase() === "projects" ? "projects" : "contact"}`} 
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-2 px-2 rounded-lg transition-colors ${
                theme === "light" ? "text-gray-700 hover:text-[#62517B] hover:bg-gray-100" : "text-gray-300 hover:text-[#ECFAD0] hover:bg-gray-800"
              }`}
            >
              {item}
            </a>
          ))}
          {/* Contact button in mobile menu */}
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={`mt-2 px-4 py-2 rounded-xl text-sm font-medium text-center transition-all ${
              theme === "light" 
                ? "bg-gradient-to-r from-[#62517B] to-[#8B7BA8] text-white" 
                : "bg-gradient-to-r from-[#ECFAD0] to-[#b8d490] text-gray-900"
            }`}
          >
            {t.contactBtn}
          </a>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.nav>

      {/* Hero Section */}
      <motion.section id="home" style={{ y: heroY }} className="relative z-10 min-h-screen flex items-center px-6 md:px-12 pt-28 pb-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${language === "ar" ? "lg:flex-row-reverse" : ""}`}>
            <div className={`animate-fade-left ${language === "ar" ? "text-right" : ""}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-medium tracking-wider uppercase border ${theme === "light" ? "border-[#62517B]/30 bg-[#62517B]/10 text-[#62517B]" : "border-[#ECFAD0]/30 bg-[#ECFAD0]/10 text-[#ECFAD0]"}`}>
                <Icons.Sparkles /> {t.heroBadge}
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
                <span className={theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}>{typedText}</span>
                <span className={`animate-pulse ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>|</span>
              </h1>
              {showContent && (
                <div className="space-y-4">
                  <p className={`text-lg leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
                    {t.heroSubtitle}
                  </p>
                  <p className={`leading-relaxed max-w-lg text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                    {t.heroDesc}
                  </p>
                </div>
              )}
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#projects" className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 shadow-lg ${theme === "light" ? "bg-[#62517B] text-white shadow-[#62517B]/25" : "bg-[#ECFAD0] text-gray-900 shadow-[#ECFAD0]/25"}`}>
                  {t.exploreBtn}
                </a>
                <a href="#contact" className={`px-8 py-3 rounded-xl text-sm font-medium border transition-all hover:scale-105 ${theme === "light" ? "border-[#62517B]/30 text-gray-700 hover:bg-[#62517B]/10" : "border-[#ECFAD0]/30 text-gray-300 hover:bg-[#ECFAD0]/10"}`}>
                  {t.contactBtn}
                </a>
              </div>
            </div>
            <div className="relative flex justify-center animate-fade-right">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-radial from-[#62517B]/20 to-transparent rounded-full blur-3xl" />
                <div className="relative glass-card rounded-2xl p-2 overflow-hidden border border-gray-200/50 dark:border-white/10">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <img src="/karimaPic.jpg" alt="Karima Mansour" className="w-full h-full object-cover" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </motion.section>

   {/* What I Do Section - Beautiful Premium Design */}
<section className="relative z-10 py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 text-xs font-medium border ${theme === "light" ? "border-[#62517B]/30 bg-[#62517B]/10 text-[#62517B]" : "border-[#ECFAD0]/30 bg-[#ECFAD0]/10 text-[#ECFAD0]"}`}>
        <Icons.Rocket /> {t.whatIDo}
      </div>
      <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{t.whatIDo}</h2>
      <div className={`w-20 h-1 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} style={{ margin: "0 auto", borderRadius: "999px" }} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className={`group rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border ${theme === "light" ? "bg-white/80 border-gray-200 shadow-xl hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`}>
        <div className={`flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>
          <Icons.Code />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>{t.fullStack}</h3>
        <p className={`text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>{t.fullStackDesc}</p>
        <div className={`mt-6 w-12 h-0.5 mx-auto rounded-full transition-all duration-300 group-hover:w-24 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} />
      </div>
      <div className={`group rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border ${theme === "light" ? "bg-white/80 border-gray-200 shadow-xl hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`}>
        <div className={`flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>
          <Icons.Palette />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>{t.uiux}</h3>
        <p className={`text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>{t.uiuxDesc}</p>
        <div className={`mt-6 w-12 h-0.5 mx-auto rounded-full transition-all duration-300 group-hover:w-24 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} />
      </div>
      <div className={`group rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border ${theme === "light" ? "bg-white/80 border-gray-200 shadow-xl hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`}>
        <div className={`flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>
          <Icons.Architecture />
        </div>
        <h3 className={`text-xl font-bold mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>{t.systemArch}</h3>
        <p className={`text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>{t.systemArchDesc}</p>
        <div className={`mt-6 w-12 h-0.5 mx-auto rounded-full transition-all duration-300 group-hover:w-24 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} />
      </div>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="relative z-10 py-20 overflow-hidden">
  <div className="text-center mb-10">
    <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{t.skillsTitle}</h2>
    <div className={`w-16 h-0.5 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} style={{ margin: "0 auto", borderRadius: "999px" }} />
    <p className={`mt-3 text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>{t.skillsSub}</p>
  </div>
  <div className="relative overflow-hidden py-6">
    <div className="animate-marquee flex gap-3 w-max">
      {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, i) => (
        <span 
          key={i} 
          className="px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-lg transition-all cursor-default hover:scale-105"
          style={{ 
            backgroundColor: theme === "dark" ? "#ECFAD0" : "#62517B",
            color: theme === "dark" ? "#1a1a2e" : "white" 
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>

<section id="achievements" className="relative z-10 py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{t.achievementsTitle}</h2>
      <div className={`w-16 h-0.5 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} style={{ margin: "0 auto", borderRadius: "999px" }} />
      <p className={`max-w-2xl mx-auto mt-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>{t.achievementsSub}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((ach, idx) => (
        <div key={idx} className={`group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 border ${theme === "light" ? "bg-white/80 border-gray-200 shadow-lg hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`} style={{ animationDelay: `${idx * 0.1}s` }}>
          <div className={`flex items-start gap-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
            {/* Icon box with inline style for guaranteed color change */}
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              style={{
                backgroundColor: theme === "light" ? "#62517B" : "#ECFAD0",
                color: theme === "light" ? "white" : "#1a1a1a"
              }}
            >
              {ach.icon}
            </div>
            <div className="flex-1">
              <div className={`flex items-center justify-between flex-wrap gap-2 mb-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                <h3 className={`text-lg font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>{getAchievementTitle(ach)}</h3>
                <span className={`text-xs flex items-center gap-1 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><Icons.Calendar /> {ach.date}</span>
              </div>
              <p className={`text-sm leading-relaxed mb-3 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>{getAchievementDesc(ach)}</p>
              <div className="flex flex-wrap gap-2">{ach.skills.map((s) => (<span key={s} className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${theme === "light" ? "bg-[#62517B]/10 border-[#62517B]/20 text-[#62517B]" : "bg-[#ECFAD0]/10 border-[#ECFAD0]/20 text-[#ECFAD0]"}`}>{s}</span>))}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className={`mt-6 rounded-2xl p-6 text-center transition-all duration-500 border ${theme === "light" ? "bg-white/80 border-gray-200 shadow-lg" : "bg-gray-800/50 border-gray-700"} backdrop-blur-sm`}>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: theme === "light" ? "#62517B" : "#ECFAD0",
            color: theme === "light" ? "white" : "#1a1a1a"
          }}
        >
          <Icons.Briefcase />
        </div>
        <div>
          <h3 className={`text-lg font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>Internship at Air Algérie</h3>
          <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>Valuable experience in the aviation industry</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{t.projectsTitle}</h2>
            <div className={`w-16 h-0.5 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} style={{ margin: "0 auto", borderRadius: "999px" }} />
            <p className={`max-w-lg mx-auto mt-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>{t.projectsSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-6">{col1.map((p, idx) => <ProjectCard key={p.id} project={p} index={idx} onClick={() => setSelectedProject(p)} theme={theme} t={t} language={language} />)}</div>
            <div className="flex flex-col gap-6 mt-0 lg:mt-8">{col2.map((p, idx) => <ProjectCard key={p.id} project={p} index={idx} onClick={() => setSelectedProject(p)} theme={theme} t={t} language={language} />)}</div>
            <div className="flex flex-col gap-6 mt-0 lg:mt-16">{col3.map((p, idx) => <ProjectCard key={p.id} project={p} index={idx} onClick={() => setSelectedProject(p)} theme={theme} t={t} language={language} />)}</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{t.contactTitle}</h2>
            <div className={`w-16 h-0.5 ${theme === "light" ? "bg-[#62517B]" : "bg-[#ECFAD0]"}`} style={{ margin: "0 auto", borderRadius: "999px" }} />
            <p className={`max-w-lg mx-auto mt-4 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>{t.contactSub}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 max-w-md mx-auto">
            <a href="https://www.linkedin.com/in/karima-mnr-67394b27a/" target="_blank" className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 border group ${theme === "light" ? "bg-white/80 border-gray-200 hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${theme === "light" ? "bg-gradient-to-br from-[#62517B] to-[#8B7BA8] text-white" : "bg-gradient-to-br from-[#ECFAD0] to-[#b8d490] text-gray-900"}`}><Icons.LinkedIn /></div>
              <div className="flex-1"><p className="text-xs text-gray-500">LinkedIn</p><p className={`group-hover:${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"} ${theme === "light" ? "text-gray-800" : "text-white"}`}>linkedin.com/in/karima-mnr</p></div>
              <Icons.ExternalLink />
            </a>
            <a href="https://github.com/Karima-mnr" target="_blank" className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 border group ${theme === "light" ? "bg-white/80 border-gray-200 hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${theme === "light" ? "bg-gradient-to-br from-[#62517B] to-[#8B7BA8] text-white" : "bg-gradient-to-br from-[#ECFAD0] to-[#b8d490] text-gray-900"}`}><Icons.Github /></div>
              <div className="flex-1"><p className="text-xs text-gray-500">GitHub</p><p className={`group-hover:${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"} ${theme === "light" ? "text-gray-800" : "text-white"}`}>https://github.com/Karima-mnr</p></div>
              <Icons.ExternalLink />
            </a>
            <a href="mailto:karimamnr13@gmail.com" className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 border group ${theme === "light" ? "bg-white/80 border-gray-200 hover:shadow-[#62517B]/20" : "bg-gray-800/50 border-gray-700 hover:shadow-[#ECFAD0]/10"} backdrop-blur-sm`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${theme === "light" ? "bg-gradient-to-br from-[#62517B] to-[#8B7BA8] text-white" : "bg-gradient-to-br from-[#ECFAD0] to-[#b8d490] text-gray-900"}`}><Icons.Mail /></div>
              <div className="flex-1"><p className="text-xs text-gray-500">Email</p><p className={`group-hover:${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"} ${theme === "light" ? "text-gray-800" : "text-white"}`}>karimamnr13@gmail.com</p></div>
              <Icons.ExternalLink />
            </a>
            <a href="/Mansour Karima's CV.pdf" download className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg group ${theme === "light" ? "bg-gradient-to-r from-[#62517B] to-[#8B7BA8] text-white shadow-[#62517B]/25" : "bg-gradient-to-r from-[#ECFAD0] to-[#b8d490] text-gray-900 shadow-[#ECFAD0]/25"}`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20"><Icons.Download /></div>
              <div className="flex-1"><p className="text-sm font-semibold">{t.downloadCV}</p><p className="text-xs opacity-70">PDF</p></div>
              <Icons.ExternalLink />
            </a>
          </div>
        </div>
      </section>

      <footer className={`relative z-10 py-8 text-center border-t ${theme === "light" ? "border-gray-200/20 text-gray-500" : "border-white/5 text-gray-400"}`}>
        <p className="text-sm">{t.footer}</p>
      </footer>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} onZoom={(img: string) => setZoomedImage(img)} theme={theme} t={t} language={language} />}
      </AnimatePresence>
      <AnimatePresence>
        {zoomedImage && <ZoomModal image={zoomedImage} onClose={() => setZoomedImage(null)} theme={theme} />}
      </AnimatePresence>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, index, onClick, theme, t, language }: any) {
  const [hovered, setHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX(((y - rect.height / 2) / (rect.height / 2)) * -8);
    setRotateY(((x - rect.width / 2) / (rect.width / 2)) * 8);
  };

  return (
    <div className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={() => { setRotateX(0); setRotateY(0); setHovered(false); }}
        onMouseEnter={() => setHovered(true)}
        onClick={onClick}
        className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 border shadow-xl"
        style={{ 
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${hovered ? -6 : 0}px)`,
          background: theme === "light" ? "#2D2440" : "#1a1a2e",
          borderColor: theme === "light" ? "#4a3a6b" : "#2a2a4e",
        }}
      >
        <div className="relative aspect-video overflow-hidden">
          <img src={project.thumbnail} alt={project.title[language]} className="w-full h-full object-cover transition-transform duration-700" style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300" style={{ opacity: hovered ? 1 : 0 }} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300" style={{ opacity: hovered ? 1 : 0, background: "rgba(0,0,0,0.6)" }}>
            <span className={`px-4 py-2 rounded-xl text-sm font-semibold ${theme === "light" ? "bg-[#62517B] text-white" : "bg-[#ECFAD0] text-gray-900"}`}>{t.viewProject}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className={`font-bold text-base mb-1 line-clamp-1 text-white`}>{project.title[language]}</h3>
          <p className={`text-xs line-clamp-2 text-gray-300`}>{project.description[language]}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">{project.techStack.slice(0, 3).map((tech: string) => (<span key={tech} className={`px-2 py-0.5 rounded-full text-[9px] font-medium border border-[#ECFAD0]/30 bg-[#ECFAD0]/10 text-[#ECFAD0]`}>{tech}</span>))}</div>
        </div>
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-xl text-[10px] glass-card text-white ${language === "ar" ? "left-3 right-auto" : ""}`}>{project.screenshots.length} {t.shots}</div>
      </div>
    </div>
  );
}

// Project Modal
// Project Modal
function ProjectModal({ project, onClose, currentImageIndex, setCurrentImageIndex, onZoom, theme, t, language }: any) {
  const next = () => setCurrentImageIndex((p: number) => (p + 1) % project.screenshots.length);
  const prev = () => setCurrentImageIndex((p: number) => (p - 1 + project.screenshots.length) % project.screenshots.length);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md" onClick={onClose}>
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className={`relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border ${theme === "light" ? "bg-white border-gray-200" : "bg-gray-900 border-gray-800"}`} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-xl transition-colors ${theme === "light" ? "bg-gray-100 text-gray-600 hover:text-[#62517B]" : "bg-gray-800 text-gray-400 hover:text-[#ECFAD0]"}`}><Icons.X /></button>
        <div className={`p-6 border-b ${theme === "light" ? "border-gray-200" : "border-gray-800"}`}>
          <h2 className={`text-2xl font-bold ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{project.title[language]}</h2>
          <p className={`mt-2 text-sm leading-relaxed ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{project.fullDescription[language]}</p>
          {project.myRole && (<div className={`mt-4 p-3 rounded-xl border ${theme === "light" ? "bg-[#62517B]/5 border-[#62517B]/10" : "bg-[#ECFAD0]/5 border-[#ECFAD0]/10"}`}><p className={`text-xs font-semibold mb-1 ${theme === "light" ? "text-[#62517B]" : "text-[#ECFAD0]"}`}>{t.myRole}</p><p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>{project.myRole[language]}</p></div>)}
          <div className="flex flex-wrap gap-2 mt-4">{project.techStack.map((tech: string) => (<span key={tech} className={`px-3 py-1 rounded-full text-xs border ${theme === "light" ? "bg-[#62517B]/10 border-[#62517B]/20 text-[#62517B]" : "bg-[#ECFAD0]/10 border-[#ECFAD0]/20 text-[#ECFAD0]"}`}>{tech}</span>))}</div>
          {project.githubUrl && (<a href={project.githubUrl} target="_blank" className={`inline-flex items-center gap-2 mt-4 text-sm ${theme === "light" ? "text-[#62517B] hover:underline" : "text-[#ECFAD0] hover:underline"}`}><Icons.Github /> GitHub</a>)}
        </div>
        <div className="p-6">
          <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden">
            <img src={project.screenshots[currentImageIndex]} alt="screenshot" className="w-full h-full object-contain cursor-zoom-in hover:scale-105 transition-transform" onClick={(e) => { e.stopPropagation(); onZoom(project.screenshots[currentImageIndex]); }} />
            {project.screenshots.length > 1 && (<><button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-black/50 text-white hover:bg-opacity-80"><Icons.ChevronLeft /></button><button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-black/50 text-white hover:bg-opacity-80"><Icons.ChevronRight /></button></>)}
          </div>
          <p className={`text-center mt-3 text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>{currentImageIndex + 1} / {project.screenshots.length} ({t.clickZoom})</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Zoom Modal
function ZoomModal({ image, onClose, theme }: { image: string; onClose: () => void; theme: "light" | "dark" }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Zoomed" className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl" />
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"><Icons.X /></button>
      </motion.div>
    </motion.div>
  );
}

