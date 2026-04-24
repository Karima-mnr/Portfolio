// app/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  thumbnail: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  myRole?: string;
  keyFeatures?: string[];
}

// Multi-language project data
export const projectsData: Project[] = [
  {
    id: "PublicProcurement",
    title: "Digital Public Procurement System | Algerian Ministry of Defence",
    description: "Enterprise-grade public procurement platform developed for the Algerian Ministry of Defence, streamlining military procurement workflows with enhanced security and compliance.",
    fullDescription: "EN: A sophisticated enterprise-grade web application developed in collaboration with the Algerian Ministry of Defence to revolutionize military procurement operations. This system digitizes and optimizes the entire public procurement lifecycle for military institutions, from tender publication to contract award and supplier management. The platform handles sensitive defence procurement with enhanced security protocols, audit trails, and compliance with Algerian military procurement regulations.\n\nKey operational capabilities include multi-level approval workflows for classified procurements, supplier vetting against defence vendor registries, encrypted document exchange for technical specifications, and real-time budget tracking across military branches. The system supports both open tenders and restricted procurements with role-based access controls aligned with military hierarchy. All transactions are logged with immutable audit trails for complete transparency and regulatory compliance.\n\nSince deployment, the platform has reduced procurement cycle times by 65%, eliminated paper-based processes, and provided command staff with real-time visibility into supply chain operations across all military regions. The system currently manages over 500 active procurement projects and 2,000+ pre-qualified defence suppliers.\n\n---\n\nAR: تطبيق ويب متطور على مستوى المؤسسات تم تطويره بالتعاون مع وزارة الدفاع الجزائرية لإحداث ثورة في عمليات الشراء العسكري. يقوم هذا النظام برقمنة وتحسين دورة حياة المشتريات العامة بأكملها للمؤسسات العسكرية، بدءًا من نشر المناقصات وصولاً إلى منح العقود وإدارة الموردين. تتعامل المنصة مع مشتريات الدفاع الحساسة ببروتوكولات أمنية محسنة وسجلات تدقيق والامتثال للوائح المشتريات العسكرية الجزائرية.\n\nتشمل القدرات التشغيلية الرئيسية سير عمل الموافقات متعددة المستويات للمشتريات السرية، والتحقق من الموردين مقابل سجلات بائعي الدفاع، وتبادل المستندات المشفرة للمواصفات الفنية، وتتبع الميزانية في الوقت الفعلي عبر الفروع العسكرية. تدعم المنصة كلاً من المناقصات المفتوحة والمشتريات المقيدة مع عناصر تحكم في الوصول قائمة على الأدوار تتماشى مع التسلسل الهرمي العسكري. يتم تسجيل جميع المعاملات بسجلات تدقيق غير قابلة للتغيير للشفافية الكاملة والامتثال التنظيمي.\n\nمنذ النشر، قللت المنصة من أوقات دورة الشراء بنسبة 65٪، وألغت العمليات الورقية، وقدمت لموظفي القيادة رؤية في الوقت الفعلي لعمليات سلسلة التوريد عبر جميع المناطق العسكرية. تدير المنصة حالياً أكثر من 500 مشروع شراء نشط وأكثر من 2000 مورد دفاع مؤهل مسبقاً.\n\n---\n\nFR: Une application web sophistiquée de niveau entreprise développée en collaboration avec le Ministère de la Défense Algérien pour révolutionner les opérations d'approvisionnement militaire. Ce système numérise et optimise l'ensemble du cycle de vie des marchés publics pour les institutions militaires, de la publication des appels d'offres à l'attribution des contrats et à la gestion des fournisseurs. La plateforme gère les achats de défense sensibles avec des protocoles de sécurité renforcés, des pistes d'audit et la conformité avec la réglementation algérienne des marchés militaires.\n\nLes capacités opérationnelles clés incluent des flux de travail d'approbation à plusieurs niveaux pour les marchés classifiés, la vérification des fournisseurs par rapport aux registres des vendeurs de défense, l'échange de documents chiffrés pour les spécifications techniques, et le suivi budgétaire en temps réel dans les branches militaires. Le système prend en charge à la fois les appels d'offres ouverts et les marchés restreints avec des contrôles d'accès basés sur les rôles alignés sur la hiérarchie militaire. Toutes les transactions sont enregistrées avec des pistes d'audit immuables pour une transparence totale et une conformité réglementaire.\n\nDepuis son déploiement, la plateforme a réduit les cycles d'approvisionnement de 65%, éliminé les processus papier et fourni au personnel d'état-major une visibilité en temps réel sur les opérations de la chaîne d'approvisionnement dans toutes les régions militaires. Le système gère actuellement plus de 500 projets d'approvisionnement actifs et plus de 2000 fournisseurs de défense préqualifiés.",
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
    myRole: "EN: Full-Stack Architect - Complete system design, wizard implementation, database architecture, and API development\n\nAR: مهندس شامل - تصميم النظام الكامل، تنفيذ المعالج، هندسة قاعدة البيانات، وتطوير API\n\nFR: Architecte Full-Stack - Conception complète du système, implémentation de l'assistant, architecture de base de données et développement API",
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
    title: "StudyVia - Intelligent Learning Platform",
    description: "AI-powered educational ecosystem transforming static content into dynamic learning experiences with real-time analytics, automated assessments, and personalized content delivery.",
    fullDescription: "EN: A revolutionary educational platform that completely reimagines how teachers deliver content and how students engage with learning materials. The teacher dashboard provides unprecedented control over class management, allowing educators to import student rosters via Excel, create dynamic classes with automated attendance tracking, configure customizable scoring methodologies (attendance weighting 0-100%, test weighting 0-100%), and automatically calculate final TD/TP grades out of 20 based on configurable rubrics. The platform integrates Cloudinary for enterprise-grade static content management, enabling teachers to upload and organize courses with PDF documents, structured video playlists (YouTube/Vimeo integration), interactive quizzes, and digital textbooks - all stored securely in the cloud with CDN optimization. The live streaming module supports real-time student-teacher communication with WebRTC technology, chat functionality, and session recording. Advanced analytics provide teachers with actionable insights including student performance heatmaps, attendance trends, grade distribution analysis, and predictive at-risk student identification. Students receive AI-powered content recommendations based on their learning patterns and performance history.\n\n---\n\nAR: منصة تعليمية ثورية تعيد تصور كيفية تقديم المعلمين للمحتوى وكيفية تفاعل الطلاب مع المواد التعليمية. توفر لوحة تحكم المعلم تحكمًا غير مسبوق في إدارة الفصول الدراسية، مما يسمح للمعلمين باستيراد قوائم الطلاب عبر Excel، وإنشاء فصول دراسية ديناميكية مع تتبع حضور آلي، وتكوين منهجيات تسجيل قابلة للتخصيص (توزين الحضور 0-100%، توزين الاختبارات 0-100%)، وحساب الدرجات النهائية TD/TP من 20 تلقائيًا بناءً على قواعد قابلة للتكوين. تتكامل المنصة مع Cloudinary لإدارة المحتوى الثابت على مستوى المؤسسات، مما يمكن المعلمين من تحميل وتنظيم الدورات التدريبية مع مستندات PDF وقوائم تشغيل فيديو منظمة وتكامل YouTube/Vimeo واختبارات تفاعلية وكتب رقمية - كل ذلك يتم تخزينه بشكل آمن في السحابة مع تحسين CDN. تدعم وحدة البث المباشر التواصل الفوري بين الطالب والمعلم باستخدام تقنية WebRTC والدردشة وتسجيل الجلسات. توفر التحليلات المتقدمة للمعلمين رؤى قابلة للتنفيذ بما في ذلك خرائط حرارة أداء الطلاب واتجاهات الحضور وتحليل توزيع الدرجات وتحديد الطلاب المعرضين للخطر بشكل تنبؤي. يتلقى الطلاب توصيات محتوى مدعومة بالذكاء الاصطناعي بناءً على أنماط التعلم الخاصة بهم وتاريخ الأداء.\n\n---\n\nFR: Une plateforme éducative révolutionnaire qui réinvente complètement la façon dont les enseignants diffusent le contenu et dont les élèves interagissent avec le matériel d'apprentissage. Le tableau de bord enseignant offre un contrôle sans précédent sur la gestion de classe, permettant aux éducateurs d'importer les listes d'élèves via Excel, de créer des classes dynamiques avec suivi automatisé des présences, de configurer des méthodologies de notation personnalisables (pondération des présences 0-100%, pondération des tests 0-100%), et de calculer automatiquement les notes finales TD/TP sur 20 basées sur des grilles configurables. La plateforme intègre Cloudinary pour la gestion de contenu statique de niveau entreprise, permettant aux enseignants de télécharger et d'organiser des cours avec des documents PDF, des listes de lecture vidéo structurées (intégration YouTube/Vimeo), des quiz interactifs et des manuels numériques - tous stockés en toute sécurité dans le cloud avec optimisation CDN. Le module de streaming en direct prend en charge la communication en temps réel entre élèves et enseignants avec la technologie WebRTC, la fonctionnalité de chat et l'enregistrement de sessions. Des analyses avancées fournissent aux enseignants des informations exploitables, y compris des cartes thermiques de performance des élèves, des tendances de présence, une analyse de la distribution des notes et une identification prédictive des élèves à risque. Les élèves reçoivent des recommandations de contenu alimentées par l'IA basées sur leurs modèles d'apprentissage et leurs antécédents de performance.",
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
    myRole: "EN: Lead Teacher Dashboard Developer - Complete teacher-facing features including class management, attendance system, scoring configuration, automated grade calculation with scroll method, course content management with Cloudinary integration, and real-time analytics\n\nAR: مطور لوحة تحكم المعلم الرئيسي - ميزات كاملة للمعلم تشمل إدارة الفصول ونظام الحضور وتكوين الدرجات وحساب الدرجات الآلي بطريقة التمرير وإدارة محتوى الدورة مع تكامل Cloudinary والتحليلات في الوقت الفعلي\n\nFR: Développeur Principal du Tableau de Bord Enseignant - Fonctionnalités complètes pour les enseignants incluant la gestion de classe, le système de présence, la configuration des notes, le calcul automatisé des notes avec méthode de défilement, la gestion du contenu des cours avec intégration Cloudinary et l'analyse en temps réel",
    keyFeatures: [
      "Excel-based student roster import with automatic class creation and duplicate detection",
      "Customizable scoring configuration (attendance weight: 0-100%, test weight: 0-100%)",
      "Individual attendance point values (0.25pt, 0.5pt, 0.75pt, 1pt per session)",
      "Scroll method for automated final grade calculation (TD/TP out of 20)",
      "One-click Excel export for final grades with detailed breakdown",
      "Cloudinary-powered content management for PDFs, video playlists, and digital books",
      "WebRTC live streaming with real-time chat and session recording",
      "Student performance analytics with predictive at-risk identification"
    ]
  },
  {
    id: "HealX",
    title: "HealX - AI Recovery Companion",
    description: "Intelligent substance addiction recovery platform featuring AI-driven psychological state tracking, adaptive guidance systems, and milestone-based recovery journeys.",
    fullDescription: "EN: A compassionate yet clinically-rigorous recovery support platform that combines artificial intelligence with evidence-based addiction recovery methodologies. The system features an intelligent AI agent that continuously monitors user-reported psychological states, detects patterns and triggers, and delivers personalized intervention strategies, motivational content, and recovery milestone celebrations. The platform implements a secure multi-level authentication system supporting patients, therapists, and administrators with granular permissions. The real-time chat system features hierarchical communication levels - public support groups, private therapist sessions, and anonymous peer-to-peer messaging - each with appropriate privacy controls and content filtering. Recovery journeys are structured around personalized milestones celebrating sobriety achievements, habit formation progress, and therapeutic goal completion. The AI agent adapts its guidance based on user responsiveness, time in recovery, identified triggers, and historical success patterns.\n\n---\n\nAR: منصة دعم تعافي رحيمة وصارمة سريريًا تجمع بين الذكاء الاصطناعي ومنهجيات التعافي من الإدمان القائمة على الأدلة. يتميز النظام بوكيل ذكاء اصطناعي ذكي يراقب باستمرار الحالات النفسية التي يبلغ عنها المستخدم، ويكتشف الأنماط والمحفزات، ويقدم استراتيجيات تدخل شخصية ومحتوى تحفيزي واحتفالات بمعالم التعافي. تنفذ المنصة نظام مصادقة آمن متعدد المستويات يدعم المرضى والمعالجين والمسؤولين بأذونات دقيقة. يتميز نظام الدردشة في الوقت الفعلي بمستويات اتصال هرمية - مجموعات دعم عامة وجلسات معالج خاصة ومراسلات مجهولة بين الأقران - كل منها مع ضوابط خصوصية وتصفية محتوى مناسبة. يتم تنظيم رحلات التعافي حول معالم شخصية تحتفل بإنجازات التعافي وتقدم تكوين العادات وإكمال الأهداف العلاجية. يتكيف وكيل الذكاء الاصطناعي مع توجيهاته بناءً على استجابة المستخدم والوقت في التعافي والمحفزات المحددة وأنماط النجاح التاريخية.\n\n---\n\nFR: Une plateforme de soutien au rétablissement compatissante mais cliniquement rigoureuse qui combine l'intelligence artificielle avec des méthodologies de rétablissement de la toxicomanie fondées sur des preuves. Le système dispose d'un agent IA intelligent qui surveille en continu les états psychologiques signalés par les utilisateurs, détecte les modèles et les déclencheurs, et fournit des stratégies d'intervention personnalisées, du contenu motivationnel et des célébrations d'étapes de rétablissement. La plateforme implémente un système d'authentification sécurisé à plusieurs niveaux prenant en charge les patients, les thérapeutes et les administrateurs avec des autorisations granulaires. Le système de chat en temps réel dispose de niveaux de communication hiérarchiques - groupes de soutien publics, séances privées avec des thérapeutes et messagerie anonyme entre pairs - chacun avec des contrôles de confidentialité et un filtrage de contenu appropriés. Les parcours de rétablissement sont structurés autour d'étapes personnalisées célébrant les réalisations de sobriété, les progrès dans la formation d'habitudes et l'achèvement des objectifs thérapeutiques. L'agent IA adapte ses conseils en fonction de la réactivité de l'utilisateur, du temps passé en rétablissement, des déclencheurs identifiés et des modèles de réussite historiques.",
    techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "MongoDB", "Socket.io", "JWT", "Node.js", "Express.js"],
    thumbnail: "/projects/HealX/healXLogo.png",
    screenshots: [
      "/projects/HealX/healXLogo.png",
      "/projects/HealX/healx (2).png",
    ],
    githubUrl: "https://github.com/yourusername/healx",
    myRole: "EN: Authentication & Communication Systems Lead - Implemented secure JWT authentication with role-based access, real-time chat infrastructure with message queuing and delivery receipts, multi-level chat privacy controls\n\nAR: قائد أنظمة المصادقة والاتصالات - تنفيذ مصادقة JWT آمنة مع وصول قائم على الأدوار، وبنية تحتية للدردشة في الوقت الفعلي مع قوائم انتظار الرسائل وإيصالات التسليم، وضوابط خصوصية دردشة متعددة المستويات\n\nFR: Responsable des Systèmes d'Authentification et de Communication - Implémentation d'une authentification JWT sécurisée avec accès basé sur les rôles, infrastructure de chat en temps réel avec file d'attente des messages et accusés de réception, contrôles de confidentialité du chat à plusieurs niveaux",
    keyFeatures: [
      "Multi-factor JWT authentication with device fingerprinting",
      "Role-based access (Patient, Therapist, Admin) with granular permissions",
      "Real-time chat with end-to-end encryption for private sessions",
      "Anonymous peer support groups with content moderation",
      "AI-driven psychological state assessment and pattern detection",
      "Personalized milestone tracking with celebration animations",
      "Secure audit logging for therapist-patient communications"
    ]
  },
  {
    id: "Thrifty",
    title: "Thrifty - Circular Economy Marketplace",
    description: "Peer-to-peer sustainable commerce platform transforming unused items into valuable assets with real-time negotiation, AI chatbot assistance, and user-to-user exchange system.",
    fullDescription: "EN: An innovative circular economy marketplace that empowers users to monetize unused possessions while promoting sustainable consumption. The platform breaks traditional e-commerce barriers by enabling every user to be both a buyer and seller, creating a dynamic self-sustaining economy. Each seller receives a personalized storefront with inventory management, sales analytics, and customer communication tools. The real-time negotiation system allows buyers and sellers to engage in transparent price discussions, counter-offers, and bundled deals. A unique exchange section facilitates item-for-item trading between users with condition assessment, value matching algorithms, and dispute resolution workflows. The integrated AI chatbot provides 24/7 platform assistance, answers FAQs, guides users through the selling process, and even helps price items based on market data. The platform uses Supabase for real-time database synchronization and Socket.io for instant message delivery.\n\n---\n\nAR: سوق اقتصادي دائري مبتكر يمكن المستخدمين من تحقيق الدخل من الممتلكات غير المستخدمة مع تعزيز الاستهلاك المستدام. تكسر المنصة حواجز التجارة الإلكترونية التقليدية من خلال تمكين كل مستخدم من أن يكون مشتريًا وبائعًا، مما يخلق اقتصادًا ديناميكيًا مكتفيًا ذاتيًا. يتلقى كل بائع واجهة متجر مخصصة مع إدارة المخزون وتحليلات المبيعات وأدوات التواصل مع العملاء. يسمح نظام التفاوض في الوقت الفعلي للمشترين والبائعين بالمشاركة في مناقشات الأسعار الشفافة والعروض المضادة والصفقات المجمعة. تسهل قسم التبادل الفريد تداول العناصر بين المستخدمين مع تقييم الحالة وخوارزميات مطابقة القيمة وسير عمل حل النزاعات. يوفر chatbot الذكاء الاصطناعي المدمج مساعدة المنصة على مدار الساعة طوال أيام الأسبوع، ويجيب على الأسئلة الشائعة، ويرشد المستخدمين خلال عملية البيع، بل ويساعد في تسعير العناصر بناءً على بيانات السوق. تستخدم المنصة Supabase لمزامنة قاعدة البيانات في الوقت الفعلي و Socket.io لتسليم الرسائل الفورية.\n\n---\n\nFR: Une place de marché d'économie circulaire innovante qui permet aux utilisateurs de monétiser leurs biens inutilisés tout en favorisant une consommation durable. La plateforme brise les barrières du commerce électronique traditionnel en permettant à chaque utilisateur d'être à la fois acheteur et vendeur, créant ainsi une économie dynamique et autonome. Chaque vendeur reçoit une vitrine personnalisée avec gestion des stocks, analyses des ventes et outils de communication client. Le système de négociation en temps réel permet aux acheteurs et aux vendeurs de s'engager dans des discussions de prix transparentes, des contre-offres et des offres groupées. Une section d'échange unique facilite le troc d'articles entre utilisateurs avec évaluation de l'état, algorithmes de correspondance de valeur et flux de travail de résolution des litiges. Le chatbot IA intégré fournit une assistance 24h/24 et 7j/7, répond aux FAQ, guide les utilisateurs tout au long du processus de vente et aide même à fixer le prix des articles en fonction des données du marché. La plateforme utilise Supabase pour la synchronisation de la base de données en temps réel et Socket.io pour la livraison instantanée des messages.",
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
    myRole: "EN: Full-Stack Platform Architect - Complete system design, dual-role user management, real-time chat infrastructure, exchange algorithm implementation\n\nAR: مهندس منصة شامل - تصميم النظام الكامل، إدارة المستخدمين ثنائي الدور، البنية التحتية للدردشة في الوقت الفعلي، تنفيذ خوارزمية التبادل\n\nFR: Architecte de Plateforme Full-Stack - Conception complète du système, gestion des utilisateurs à double rôle, infrastructure de chat en temps réel, implémentation de l'algorithme d'échange",
    keyFeatures: [
      "Dual-role system with seamless buyer/seller switching",
      "Personalized seller storefronts with inventory analytics",
      "Real-time negotiation with offer/counter-offer system",
      "Item-for-item exchange with value matching algorithm",
      "AI chatbot with natural language processing for support",
      "Secure Stripe payment integration with escrow protection",
      "Admin dashboard with platform-wide analytics and moderation"
    ]
  },
  {
    id: "TpGL",
    title: "PERT/CPM Project Intelligence",
    description: "Advanced project management platform implementing PERT statistical methodology with automated critical path detection, Gantt visualization, and team resource optimization.",
    fullDescription: "EN: A sophisticated project management intelligence platform that implements the Program Evaluation and Review Technique (PERT) for statistically-driven project planning and execution. Unlike traditional project tools, this system uses three-point estimation (optimistic, pessimistic, most likely) for each task, automatically calculating expected durations using the PERT beta distribution formula. The platform generates interactive network graphs visualizing task dependencies, identifies the critical path that directly impacts project completion dates, and calculates slack times for non-critical tasks. Team management features include role-based invitations, task assignment with workload balancing, and real-time progress tracking. The Gantt chart module provides interactive timeline visualization with drag-to-adjust functionality and automatic schedule recalculation. The system supports Agile methodologies with sprint planning, backlog management, and velocity tracking.\n\n---\n\nAR: منصة ذكاء إدارة مشاريع متطورة تطبق تقنية تقييم ومراجعة البرنامج (PERT) للتخطيط والتنفيذ القائم على الإحصاء. على عكس أدوات المشروع التقليدية، يستخدم هذا النظام تقدير ثلاثي النقاط (متفائل، متشائم، الأكثر احتمالية) لكل مهمة، ويحسب تلقائيًا المدد المتوقعة باستخدام صيغة توزيع بيتا PERT. تنشئ المنصة رسومًا بيانية تفاعلية للشبكة توضح تبعيات المهام، وتحدد المسار الحرج الذي يؤثر بشكل مباشر على تواريخ إنجاز المشروع، وتحسب أوقات الركود للمهام غير الحرجة. تشمل ميزات إدارة الفريق الدعوات القائمة على الأدوار، وتعيين المهام مع موازنة عبء العمل، وتتبع التقدم في الوقت الفعلي. توفر وحدة مخطط جانت تصورًا تفاعليًا للجدول الزمني مع وظيفة السحب للتعديل وإعادة الحساب التلقائي للجدول. يدعم النظام منهجيات Agile مع تخطيط Sprint وإدارة الأعمال المتراكمة وتتبع السرعة.\n\n---\n\nFR: Une plateforme intelligente de gestion de projet sophistiquée qui implémente la Technique d'Évaluation et de Révision de Programme (PERT) pour une planification et une exécution statistiques. Contrairement aux outils de projet traditionnels, ce système utilise une estimation à trois points (optimiste, pessimiste, le plus probable) pour chaque tâche, calculant automatiquement les durées attendues à l'aide de la formule de distribution bêta PERT. La plateforme génère des graphiques réseau interactifs visualisant les dépendances des tâches, identifie le chemin critique qui impacte directement les dates d'achèvement du projet et calcule les temps morts pour les tâches non critiques. Les fonctionnalités de gestion d'équipe incluent des invitations basées sur les rôles, l'attribution de tâches avec équilibrage de la charge de travail et le suivi des progrès en temps réel. Le module de diagramme de Gantt fournit une visualisation interactive de la chronologie avec fonctionnalité de glisser-déposer pour ajustement et recalcul automatique du calendrier. Le système prend en charge les méthodologies Agile avec planification de sprint, gestion du backlog et suivi de la vélocité.",
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
    myRole: "EN: PERT Algorithm Engineer - Implemented beta distribution calculations, critical path algorithm, network graph visualization, and Gantt chart integration\n\nAR: مهندس خوارزميات PERT - تنفيذ حسابات توزيع بيتا، خوارزمية المسار الحرج، تصور الرسم البياني للشبكة، وتكامل مخطط جانت\n\nFR: Ingénieur Algorithmes PERT - Implémentation des calculs de distribution bêta, de l'algorithme du chemin critique, de la visualisation du graphe réseau et de l'intégration du diagramme de Gantt",
    keyFeatures: [
      "Three-point estimation with PERT beta distribution calculation",
      "Automatic critical path detection with visual highlighting",
      "Interactive network graph with zoom and pan controls",
      "Dynamic Gantt chart with drag-to-resize task durations",
      "Team member invitations with role-based permissions",
      "Resource workload balancing and allocation optimization",
      "Sprint planning with velocity tracking and burndown charts"
    ]
  },
  {
    id: "Opportix",
    title: "Opportix - AI Talent Matching Ecosystem",
    description: "Intelligent career platform connecting Algerian students with internships, PFE opportunities, and competitions using ML-based skill matching and balanced team formation algorithms.",
    fullDescription: "EN: A transformative career ecosystem addressing the critical gap between Algerian student talent and professional opportunities. The platform features sophisticated skill profile creation where students document technical competencies (programming languages, frameworks, tools), soft skills (leadership, communication, teamwork), academic achievements, and career objectives (internship, PFE, competition participation). Companies and research labs publish detailed internship offers and PFE topics with specific skill requirements, project scopes, and mentor information. The intelligent matching engine uses multi-factor similarity algorithms comparing student profiles against opportunity requirements, generating ranked recommendations with compatibility scores. The competition section is revolutionary - all hackathons, challenges, and innovation contests are aggregated in one place. Students can either join existing teams or create team formation posts specifying required roles (backend, frontend, UI/UX, marketing, business development). The platform's proprietary team balancing algorithm ensures optimal skill distribution and complementary team composition.\n\n---\n\nAR: نظام بيئي وظيفي تحويلي يعالج الفجوة الحرجة بين المواهب الطلابية الجزائرية والفرص المهنية. تتميز المنصة بإنشاء ملفات تعريف مهارات متطورة حيث يوثق الطلاب الكفاءات التقنية (لغات البرمجة، الأطر، الأدوات)، المهارات الشخصية (القيادة، التواصل، العمل الجماعي)، الإنجازات الأكاديمية، والأهداف المهنية (تدريب، PFE، المشاركة في المسابقات). تنشر الشركات والمختبرات البحثية عروض تدريب مفصلة وموضوعات PFE مع متطلبات مهارات محددة ونطاقات المشروع ومعلومات المرشد. يستخدم محرك المطابقة الذكي خوارزميات تشابه متعددة العوامل لمقارنة ملفات تعريف الطلاب مقابل متطلبات الفرصة، مما يولد توصيات مرتبة مع درجات التوافق. قسم المسابقات ثوري - يتم تجميع جميع الهاكاثونات والتحديات ومسابقات الابتكار في مكان واحد. يمكن للطلاب إما الانضمام إلى الفرق الحالية أو إنشاء منشورات تشكيل الفريق تحدد الأدوار المطلوبة (الواجهة الخلفية، الواجهة الأمامية، UI/UX، التسويق، تطوير الأعمال). تضمن خوارزمية موازنة الفريق الخاصة بالمنصة التوزيع الأمثل للمهارات وتكوين الفريق التكميلي.\n\n---\n\nFR: Un écosystème de carrière transformateur qui comble le fossé critique entre les talents étudiants algériens et les opportunités professionnelles. La plateforme propose une création de profil de compétences sophistiquée où les étudiants documentent les compétences techniques (langages de programmation, frameworks, outils), les compétences relationnelles (leadership, communication, travail d'équipe), les réalisations académiques et les objectifs de carrière (stage, PFE, participation à des compétitions). Les entreprises et les laboratoires de recherche publient des offres de stage détaillées et des sujets PFE avec des exigences de compétences spécifiques, des périmètres de projet et des informations sur les mentors. Le moteur de correspondance intelligent utilise des algorithmes de similarité multifactoriels comparant les profils des étudiants aux exigences des opportunités, générant des recommandations classées avec des scores de compatibilité. La section compétition est révolutionnaire - tous les hackathons, défis et concours d'innovation sont agrégés au même endroit. Les étudiants peuvent soit rejoindre des équipes existantes, soit créer des annonces de formation d'équipe spécifiant les rôles requis (backend, frontend, UI/UX, marketing, développement commercial). L'algorithme d'équilibrage d'équipe propriétaire de la plateforme garantit une distribution optimale des compétences et une composition d'équipe complémentaire.",
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
    myRole: "EN: Platform Architect & ML Engineer - Complete system architecture, skill matching algorithm implementation, team balancing logic, and competition management system\n\nAR: مهندس منصة وتعلم آلي - هندسة النظام الكاملة، تنفيذ خوارزمية مطابقة المهارات، منطق موازنة الفريق، ونظام إدارة المسابقات\n\nFR: Architecte Plateforme & Ingénieur ML - Architecture système complète, implémentation de l'algorithme de correspondance des compétences, logique d'équilibrage d'équipe et système de gestion des compétitions",
    keyFeatures: [
      "Multi-dimensional skill profiling with competency scoring",
      "ML-powered opportunity matching with relevance scoring",
      "Skill gap analysis and personalized improvement suggestions",
      "Competition team formation with balanced skill distribution",
      "Role-based team search and application workflow",
      "Admin dashboard for competition management and analytics",
      "Real-time notifications and application status tracking",
      "Success metrics dashboard for platform impact measurement"
    ]
  },
  {
    id: "EdgeNetworkIntelligence",
    title: "Edge Network Intelligence Platform",
    description: "AI-driven distributed network monitoring system with real-time diagnostics, predictive analytics, and autonomous optimization using LSTM/CNN models deployed at the edge.",
    fullDescription: "EN: A groundbreaking network intelligence platform that brings AI-powered diagnostics to the network edge, eliminating the latency and blind spots of traditional cloud-only monitoring solutions. The system deploys lightweight LSTM (Long Short-Term Memory) and CNN (Convolutional Neural Network) models on distributed Orange Pi edge devices, enabling real-time traffic analysis, anomaly detection, and predictive issue identification before they impact operations. The diagnostic models are trained on Huawei Cloud ModelArts using historical network data and continuously improved through federated learning. The platform features a dual-mode LLM architecture - Gemini API for comprehensive online analysis with natural language reporting, and local Ollama integration for offline operation ensuring continuous functionality even without internet connectivity. The cloud dashboard provides unified visualization of all edge nodes, predictive alerts, automated bandwidth optimization recommendations, and historical trend analysis. The B2C solution allows any user to diagnose their network performance, receive actionable insights, and implement AI-recommended optimizations.\n\n---\n\nAR: منصة ذكاء شبكي رائدة تجلب التشخيص المدعوم بالذكاء الاصطناعي إلى حافة الشبكة، مما يقضي على زمن الوصول والنقاط العمياء لحلول المراقبة التقليدية السحابية فقط. ينشر النظام نماذج LSTM خفيفة الوزن و CNN على أجهزة حافة Orange Pi الموزعة، مما يتيح تحليل حركة المرور في الوقت الفعلي، واكتشاف الشذوذ، وتحديد المشكلات التنبؤية قبل أن تؤثر على العمليات. يتم تدريب نماذج التشخيص على Huawei Cloud ModelArts باستخدام بيانات الشبكة التاريخية وتحسينها باستمرار من خلال التعلم الموحد. تتميز المنصة بهندسة LLM ثنائية الوضع - Gemini API للتحليل الشامل عبر الإنترنت مع تقارير اللغة الطبيعية، وتكامل Ollama المحلي للتشغيل دون اتصال لضمان الوظائف المستمرة حتى بدون اتصال بالإنترنت. توفر لوحة التحكم السحابية تصورًا موحدًا لجميع عقد الحافة، والتنبيهات التنبؤية، وتوصيات تحسين عرض النطاق الترددي الآلي، وتحليل الاتجاهات التاريخية. يسمح حل B2C لأي مستخدم بتشخيص أداء شبكته، وتلقي رؤى قابلة للتنفيذ، وتنفيذ التحسينات الموصى بها من الذكاء الاصطناعي.\n\n---\n\nFR: Une plateforme d'intelligence réseau révolutionnaire qui apporte le diagnostic alimenté par l'IA à la périphérie du réseau, éliminant la latence et les angles morts des solutions de surveillance cloud traditionnelles. Le système déploie des modèles LSTM et CNN légers sur des appareils périphériques Orange Pi distribués, permettant une analyse du trafic en temps réel, une détection d'anomalies et une identification prédictive des problèmes avant qu'ils n'affectent les opérations. Les modèles de diagnostic sont formés sur Huawei Cloud ModelArts en utilisant des données réseau historiques et continuellement améliorés grâce à l'apprentissage fédéré. La plateforme présente une architecture LLM à double mode - API Gemini pour une analyse en ligne complète avec rapport en langage naturel, et intégration Ollama locale pour un fonctionnement hors ligne assurant une fonctionnalité continue même sans connectivité Internet. Le tableau de bord cloud fournit une visualisation unifiée de tous les nœuds périphériques, des alertes prédictives, des recommandations d'optimisation de bande passante automatisées et une analyse des tendances historiques. La solution B2C permet à tout utilisateur de diagnostiquer ses performances réseau, de recevoir des informations exploitables et de mettre en œuvre des optimisations recommandées par l'IA.",
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
    myRole: "EN: Frontend & AI Integration Lead - React dashboard development, LSTM/CNN model integration, dual-mode LLM implementation, real-time data visualization\n\nAR: قائد الواجهة الأمامية وتكامل الذكاء الاصطناعي - تطوير لوحة تحكم React، تكامل نماذج LSTM/CNN، تنفيذ LLM ثنائي الوضع، تصور البيانات في الوقت الفعلي\n\nFR: Lead Frontend & Intégration IA - Développement du tableau de bord React, intégration des modèles LSTM/CNN, implémentation LLM à double mode, visualisation des données en temps réel",
    keyFeatures: [
      "Distributed edge intelligence with Orange Pi deployment",
      "LSTM-based predictive anomaly detection (95% accuracy)",
      "CNN-powered traffic pattern recognition and classification",
      "Dual-mode LLM (Gemini API online / Ollama offline)",
      "Real-time network health dashboard with heatmaps",
      "Automated bandwidth optimization and load balancing",
      "Predictive alerting with root cause analysis",
      "Historical trend analysis and capacity planning"
    ]
  },
  {
    id: "Swot",
    title: "Strategic SWOT Intelligence Platform",
    description: "Enterprise strategic planning tool transforming manual SWOT analysis into data-driven insights with collaborative workspaces, competitor benchmarking, and action plan generation.",
    fullDescription: "EN: A sophisticated strategic planning platform that elevates traditional SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) into a dynamic, collaborative intelligence system. Organizations can conduct interactive SWOT sessions with distributed teams, each contributing real-time insights that are aggregated and weighted by expertise and historical accuracy. The platform includes a comprehensive competitor database allowing users to benchmark their SWOT factors against industry peers, identify market gaps, and discover strategic opportunities. The AI augmentation module analyzes input patterns to suggest unconsidered factors based on industry best practices and similar organization profiles. Action plan generation automatically translates identified weaknesses and threats into prioritized improvement initiatives with assigned owners, timelines, and success metrics. Export capabilities include professional PDF reports, Excel data packages for further analysis, and presentation-ready visualizations.\n\n---\n\nAR: منصة تخطيط استراتيجي متطورة ترفع تحليل SWOT التقليدي (نقاط القوة والضعف والفرص والتهديدات) إلى نظام ذكاء ديناميكي تعاوني. يمكن للمؤسسات إجراء جلسات SWOT تفاعلية مع فرق موزعة، يساهم كل منها برؤى في الوقت الفعلي يتم تجميعها وترجيحها حسب الخبرة والدقة التاريخية. تتضمن المنصة قاعدة بيانات شاملة للمنافسين تسمح للمستخدمين بمقارنة عوامل SWOT الخاصة بهم مع أقرانهم في الصناعة، وتحديد فجوات السوق، واكتشاف الفرص الاستراتيجية. تحلل وحدة تعزيز الذكاء الاصطناعي أنماط الإدخال لاقتراح عوامل غير مدروسة بناءً على أفضل ممارسات الصناعة وملفات تعريف المنظمات المماثلة. يترجم إنشاء خطة العمل تلقائيًا نقاط الضعف والتهديدات المحددة إلى مبادرات تحسين ذات أولوية مع مالكين معينين وجداول زمنية ومقاييس نجاح. تشمل قدرات التصدير تقارير PDF احترافية وحزم بيانات Excel لمزيد من التحليل وتصورات جاهزة للعرض التقديمي.\n\n---\n\nFR: Une plateforme de planification stratégique sophistiquée qui élève l'analyse SWOT traditionnelle (Forces, Faiblesses, Opportunités, Menaces) en un système d'intelligence dynamique et collaboratif. Les organisations peuvent mener des sessions SWOT interactives avec des équipes distribuées, chacune contribuant avec des informations en temps réel qui sont agrégées et pondérées par l'expertise et la précision historique. La plateforme comprend une base de données complète des concurrents permettant aux utilisateurs de comparer leurs facteurs SWOT avec ceux de leurs pairs du secteur, d'identifier les lacunes du marché et de découvrir les opportunités stratégiques. Le module d'augmentation IA analyse les modèles d'entrée pour suggérer des facteurs non pris en compte sur la base des meilleures pratiques de l'industrie et des profils d'organisations similaires. La génération de plans d'action traduit automatiquement les faiblesses et les menaces identifiées en initiatives d'amélioration priorisées avec des propriétaires assignés, des calendriers et des indicateurs de succès. Les capacités d'exportation incluent des rapports PDF professionnels, des packages de données Excel pour une analyse plus approfondie et des visualisations prêtes pour la présentation.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Chart.js", "PDFKit", "Socket.io"],
    thumbnail: "/projects/Swot/swot.png",
    screenshots: ["/projects/Swot/swot.png"],
    githubUrl: "https://github.com/yourusername/swot-tool",
    myRole: "EN: Full-Stack Developer - Interactive matrix implementation, real-time collaboration engine, export system, and visualization components\n\nAR: مطور شامل - تنفيذ المصفوفة التفاعلية، محرك التعاون في الوقت الفعلي، نظام التصدير، ومكونات التصور\n\nFR: Développeur Full-Stack - Implémentation de la matrice interactive, moteur de collaboration en temps réel, système d'exportation et composants de visualisation",
    keyFeatures: [
      "Interactive drag-and-drop SWOT matrix with color coding",
      "Real-time team collaboration with cursor presence",
      "Competitor benchmarking against industry standards",
      "AI-powered factor suggestions based on context",
      "Automated action plan generation with task assignment",
      "PDF/Excel export with professional formatting",
      "Historical analysis across multiple SWOT sessions",
      "Trend detection and strategic recommendation engine"
    ]
  }
];