import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
	// ===== PERSONAL INFO =====
	personal: {
		name: 'Mathilde Arconte',
		photo: '/images/photo.jpg',
		photoBackEmoji: '👩‍💻',
		title: {
			en: 'Front End Developer & UX/UI Designer',
			fr: 'Front End Developer & UX/UI Designer',
		},
		subtitle: {
			en: 'Freelance since 2013, specialized in React, TypeScript and UI Design',
			fr: 'Freelance depuis 2013, spécialisée en React, Typescript et UI Design',
		},
		location: 'France',
	},

	// ===== SEO =====
	seo: {
		title: 'Mathilde Arconte — Front End Developer & UX/UI Designer',
		description: 'Portfolio of Mathilde Arconte, Front End Developer & UX/UI Designer active since 2013.',
	},

	// ===== LANGUAGES (Interface) =====
	languages: {
		default: 'fr',
		available: ['fr', 'en'],
		labels: {
			en: 'EN',
			fr: 'FR',
		},
	},

	// ===== CONTACT =====
	contact: [
		{ type: 'phone', label: '07 67 47 15 57', href: 'tel:+33767471557' },
		{ type: 'email', label: 'mat.arconte@gmail.com', href: 'mailto:mat.arconte@gmail.com' },
		{ type: 'linkedin', label: 'mathildearconte', href: 'https://www.linkedin.com/in/mathildearconte/' },
		{ type: 'github', label: 'maarconte', href: 'https://github.com/maarconte' },
		{ type: 'location', label: 'Paris, France' },
	],

	// ===== SKILLS =====
	skills: [
		{
			title: { en: 'Languages', fr: 'Langages' },
			type: 'badges',
			items: [
				{ name: 'TypeScript' },
				{ name: 'JavaScript ES6' },
				{ name: 'Node.js' },
				{ name: 'PHP' },
				{ name: 'HTML 5' },
				{ name: 'CSS 3' },
				{ name: 'SCSS' },
			],
		},
		{
			title: { en: 'Frameworks/CMS', fr: 'Frameworks/CMS' },
			type: 'badges',
			items: [
				{ name: 'React JS' },
				{ name: 'Vue JS' },
				{ name: 'WordPress' },
			],
		},
		{
			title: { en: 'Databases', fr: 'Bases de données' },
			type: 'badges',
			items: [
				{ name: 'Firebase' },
				{ name: 'MySQL' },
			],
		},
		{
			title: { en: 'Code Management', fr: 'Gestionnaires de code' },
			type: 'badges',
			items: [
				{ name: 'Git' },
				{ name: 'GitHub' },
				{ name: 'GitLab' },
			],
		},
		{
			title: { en: 'Design', fr: 'Design' },
			type: 'badges',
			items: [
				{ name: 'UX/UI' },
				{ name: 'Figma' },
				{ name: 'Web design' },
				{ name: 'Logo design' },
				{ name: 'Illustrator' },
				{ name: 'Photoshop' },
				{ name: 'InDesign' },
			],
		},
		{
			title: { en: 'Methodologies', fr: 'Méthodes de travail' },
			type: 'badges',
			items: [
				{ name: 'Agile Scrum' },
			],
		},
		{
			title: { en: 'Spoken Languages', fr: 'Langues parlées' },
			type: 'languages',
			items: [
				{ name: { en: 'English', fr: 'Anglais' }, level: { en: 'TOEIC 925/990', fr: 'TOEIC 925/990' } },
				{ name: { en: 'Spanish', fr: 'Espagnol' }, level: { en: 'Advanced (B2)', fr: 'Avancé (B2)' } },
			],
		},
	],

	// ===== EXPERIENCES =====
	experiences: [
		{
			id: 'abyss-energy',
			company: { en: 'Abyss Energy', fr: 'Abyss Energy' },
			role: { en: 'Freelance Web Developer & Designer', fr: 'Développeuse Web & Designer Freelance' },
			type: { en: 'Freelance', fr: 'Freelance' },
			period: { en: '2025', fr: '2025' },
			description: {
				en: 'Redesign of a showcase website for Abyss Energy.',
				fr: 'Refonte d\'un site vitrine sous WordPress poour Abyss Energy.',
			},
			techs: ['WordPress', 'Figma', 'Lottie Files'],
			details: {
				context: {
					en: 'Complete overhaul of the corporate identity and website.',
					fr: 'Refonte complète de l\'identité visuelle et du site web.',
				},
				env: {
					en: 'WordPress / Figma / Lottie Files',
					fr: 'WordPress / Figma / Lottie Files',
				},
				tasks: {
					en: [
						'Redesign of a WordPress showcase website',
						'Graphic charter & illustrations, Motion design with Lottie Files',
						'UI/UX mockups and creation of a custom WordPress theme',
						'Creation of company presentations',
					],
					fr: [
						'Refonte d\'un site vitrine sous WordPress',
						'Charte graphique & illustrations, Motion design avec Lottie Files',
						'Maquettes UI/UX et création d\'un thème WordPress sur mesure',
						'Créations des présentations d\'entreprise',
					],
				},
			},
		},
		{
			id: 'heptalytics',
			company: { en: 'Heptalytics', fr: 'Heptalytics' },
			role: { en: 'Web Developer & Designer', fr: 'Développeuse & Designer' },
			type: { en: 'Freelance', fr: 'Freelance' },
			period: { en: '2024', fr: '2024' },
			description: {
				en: 'Showcase website redesign.',
				fr: 'Refonte d\'un site vitrine.',
			},
			techs: ['WordPress', 'Figma'],
			details: {
				context: {
					en: 'Showcase website project.',
					fr: 'Projet de site vitrine.',
				},
				env: {
					en: 'WordPress / Figma',
					fr: 'WordPress / Figma',
				},
				tasks: {
					en: [
						'UI Design: Integrate graphic charter into Figma mockup',
						'UX Design: Restructure site architecture, illustrate technical discourse',
						'Development: Custom WordPress theme, Responsive design, Content integration, Performance optimization',
					],
					fr: [
						'UI Design : Intégrer la charte graphique dans la maquette Figma',
						'UX Design : Restructurer l\'architecture du site, articuler et vulgariser le discours technique avec des illustrations',
						'Développement : Création d\'un thème Wordpress sur mesure et personnalisable, Responsive design, Intégration du contenu, Optimisation des performances',
					],
				},
			},
		},
		{
			id: 'allohouston',
			company: { en: 'AlloHouston', fr: 'AlloHouston' },
			role: { en: 'Frontend Developer', fr: 'Développeuse Front End' },
			type: { en: 'Freelance', fr: 'Freelance' },
			period: { en: '2024', fr: '2024' },
			description: {
				en: 'Frontend development on various web applications.',
				fr: 'Développement front end sur des applications web.',
			},
			techs: ['React JS', 'Meteor.JS', 'Figma'],
			details: {
				context: {
					en: 'Web Agency working on diverse projects including Olympic Games 2024 tailored solutions.',
					fr: 'Agence Web travaillant sur divers projets dont des solutions pour les JO 2024.',
				},
				env: {
					en: 'React JS / Meteor.JS / Figma',
					fr: 'React JS / Meteor.JS / Figma',
				},
				tasks: {
					en: [
						'cirQliz: QR Code generation for blue zone access during 2024 Olympics',
						'Interlud: Greening assistance for vehicle fleets',
						'Starzdata: Data integration and algorithm training',
					],
					fr: [
						'cirQliz : Génération du QR Code pour entrer en zone bleue pendant les JO 2024',
						'Interlud - Verdissement : Aide à la transition écologique sur une flotte de véhicules',
						'Starzdata : Intégration de données et entraînement d\'algorithmes',
					],
				},
			},
		},
		{
			id: 'id-protect',
			company: { en: 'ID Protect', fr: 'ID Protect' },
			role: { en: 'Fullstack Developer & Designer', fr: 'Développeuse Fullstack & Designer' },
			type: { en: 'Freelance', fr: 'Freelance' },
			period: { en: 'Feb 2023 - Present', fr: 'Fév 2023 - Aujourd\'hui' },
			description: {
				en: 'Identity theft protection services. Creation of showcase site and web app.',
				fr: 'Lutte contre l\'usurpation d\'identité. Réalisation du site vitrine et de l\'application web.',
			},
			techs: ['React JS', 'TypeScript', 'WordPress', 'Figma'],
			details: {
				context: {
					en: 'End-to-end realization of digital products for a security startup.',
					fr: 'Réalisation de bout en bout des produits numériques pour une startup de sécurité.',
				},
				env: {
					en: 'React JS / TypeScript / WordPress / Figma',
					fr: 'React JS / TypeScript / WordPress / Figma',
				},
				tasks: {
					en: [
						'Realization of showcase site and web application (2024)',
						'UI Design: Interactive prototype on Figma, creation of illustrations and icons',
						'Creation of a custom WordPress theme',
						'Web app redesign, new features and Front End development in React.JS',
					],
					fr: [
						'Réalisation du site vitrine et de l\'application web (2024)',
						'Réalisation de la maquette et du prototype interactif sur Figma, création des illustrations et icônes',
						'Création d\'un thème WordPress sur mesure',
						'Refonte de l\'app web, ajout de nouvelles fonctionnalités et développement Front End en React.JS',
					],
				},
			},
		},
		{
			id: 'esiee-it',
			company: { en: 'ESIEE IT - Coding Factory', fr: 'ESIEE IT - Coding Factory' },
			role: { en: 'Trainer', fr: 'Formatrice' },
			type: { en: 'Freelance', fr: 'Freelance' },
			period: { en: '2022 - Present', fr: '2022 - Aujourd\'hui' },
			description: {
				en: 'Trainer in coding school for retraining classes, Bachelor and Master.',
				fr: 'Formatrice en école de code pour des classes de reconversion, Bachelor et Master.',
			},
			techs: ['JavaScript', 'React JS', 'TypeScript'],
			details: {
				context: {
					en: 'Coding school for retraining and higher education.',
					fr: 'École de code pour reconversion et études supérieures.',
				},
				env: {
					en: 'JavaScript / React JS / TypeScript',
					fr: 'JavaScript / React JS / TypeScript',
				},
				tasks: {
					en: ['Taught modules: Javascript, React JS, Typescript'],
					fr: ['Modules enseignés : Javascript, React JS, Typescript'],
				},
			},
		},
		{
			id: 'vestack',
			company: { en: 'Vestack', fr: 'Vestack' },
			role: { en: 'Frontend Developer & UX/UI', fr: 'Développeuse Front End & UX/UI' },
			type: { en: 'Freelance', fr: 'Freelance' },
			period: { en: 'Nov 2022 - May 2023', fr: 'Nov 2022 - Mai 2023' },
			description: {
				en: 'Bio-sourced modular buildings. Client area redesign.',
				fr: 'Bâtiments modulaires biosourcés. Refonte de l\'espace client.',
			},
			techs: ['React JS', 'Firebase', 'Figma'],
			details: {
				context: {
					en: 'Bio-sourced modular building company.',
					fr: 'Entreprise de bâtiments modulaires biosourcés.',
				},
				env: {
					en: 'React JS / Firebase / Figma',
					fr: 'React JS / Firebase / Figma',
				},
				tasks: {
					en: [
						'Redesign of the client area',
						'Realization of the mockup and interactive prototype on Figma, realization of the design system',
						'Development of the client area under React.Js + Firebase',
					],
					fr: [
						'Refonte de l\'espace client',
						'Réalisation de la maquette et du prototype interactif sur Figma, réalisation du design system',
						'Développement de l\'espace client sous React.Js + Firebase',
					],
				},
			},
		},
		{
			id: 'myconnectedcompany',
			company: { en: 'myConnectedCompany', fr: 'myConnectedCompany' },
			role: { en: 'Frontend Developer & UX/UI Designer', fr: 'Développeuse Front End & UX/UI Designer' },
			type: { en: 'Employee', fr: 'Salarié' },
			period: { en: '2019 - 2022', fr: '2019 - 2022' },
			description: {
				en: 'Digital transformation services and products.',
				fr: 'ESN de services et produits pour la transformation digitale des entreprises.',
			},
			techs: ['React JS', 'React Native', 'Swift', 'PHP', 'WordPress', 'SCSS'],
			details: {
				context: {
					en: 'Digital transformation services company.',
					fr: 'ESN de services pour la transformation digitale.',
				},
				env: {
					en: 'React JS / React Native / Swift / PHP / WordPress / SCSS',
					fr: 'React JS / React Native / Swift / PHP / WordPress / SCSS',
				},
				tasks: {
					en: [
						'Frontend development on web and mobile projects',
						'Design and ergonomics of web and mobile products, brand design redesign, UX tests of product prototypes',
					],
					fr: [
						'Développement front end sur les projets web et mobile',
						'Design et ergonomie des produits web et mobiles, refonte design de la marque, tests UX des prototypes produit',
					],
				},
			},
		},
		{
			id: 'thatmuch',
			company: { en: 'THATMUCH', fr: 'THATMUCH' },
			role: { en: 'Co-founder | Frontend Dev & Designer', fr: 'Co-fondatrice | Dev Front End + UI/UX' },
			type: { en: 'Co-founder', fr: 'Co-fondatrice' },
			period: { en: 'Apr 2018 - Present', fr: 'Avr 2018 - Aujourd\'hui' },
			isHighlighted: true,
			description: {
				en: 'Web Agency and Training.',
				fr: 'Agence Web et Formation.',
			},
			techs: ['React JS', 'WordPress', 'SCSS'],
			details: {
				context: {
					en: 'Web Agency and Training center.',
					fr: 'Agence Web et centre de formation.',
				},
				env: {
					en: 'React JS / WordPress / SCSS',
					fr: 'React JS / WordPress / SCSS',
				},
				tasks: {
					en: [
						'Frontend development on web projects',
						'UX/UI Design',
						'Audit and consulting, Front Development and Design Training',
					],
					fr: [
						'Développement front end sur les projets web',
						'UX/UI Design',
						'Audit et conseil, Formations Développement Front et Design',
					],
				},
			},
		},
		{
			id: 'headsup',
			company: { en: 'HeadsUp', fr: 'HeadsUp' },
			role: { en: 'Frontend Developer & UX/UI Designer', fr: 'Développeuse Front End & UX/UI Designer' },
			type: { en: 'Employee', fr: 'Salarié' },
			period: { en: '2017 - 2019', fr: '2017 - 2019' },
			description: {
				en: 'B2B Software Development.',
				fr: 'Développement de logiciels B2B.',
			},
			techs: ['Angular', 'TypeScript', 'SCSS', 'WordPress', 'PHP'],
			details: {
				context: {
					en: 'B2B Software Development Company.',
					fr: 'Entreprise de développement de logiciels B2B.',
				},
				env: {
					en: 'Angular / TypeScript / SCSS / WordPress / PHP',
					fr: 'Angular / TypeScript / SCSS / WordPress / PHP',
				},
				tasks: {
					en: [
						'UX/UI redesign of SalesUp CRM and Frontend Development',
						'Development of the company WordPress site, Design and integration of emails',
					],
					fr: [
						'Refonte UX/UI du CRM SalesUp et Développement Front End du CRM',
						'Développement du site Wordpress de l\'entreprise, Design et intégration des mails',
					],
				},
			},
		},
		{
			id: 'ministry-education',
			company: { en: 'Ministry of National Education', fr: 'Ministère de l\'éducation nationale' },
			role: { en: 'Graphic Designer', fr: 'Graphiste' },
			type: { en: 'Internship/Contract', fr: 'Stage/CDD' }, // Assuming short term
			period: { en: '2017', fr: '2017' },
			description: {
				en: 'Integration and layout of educational resources for Eduscol.fr.',
				fr: 'Intégration et mise en page des ressources pédagogiques pour Eduscol.fr.',
			},
			techs: ['InDesign'],
			details: {
				context: {
					en: 'French Ministry of National Education.',
					fr: 'Ministère de l\'éducation nationale.',
				},
				env: {
					en: 'InDesign',
					fr: 'InDesign',
				},
				tasks: {
					en: ['Integration and layout of educational resources'],
					fr: ['Intégration et mise en page des ressources pédagogiques'],
				},
			},
		},
	],

	// ===== PROJECTS =====
	projects: [],

	// ===== EDUCATION =====
	education: [
		{
			school: { en: 'Coding Factory - ESIEE IT', fr: 'Coding Factory - ESIEE IT' },
			degree: { en: 'Manager Ingénierie Informatique Lead Dev', fr: 'Manager Ingénierie Informatique Lead Dev' },
			period: '2022',
		},
		{
			school: { en: 'Coding Factory - ESIEE IT', fr: 'Coding Factory - ESIEE IT' },
			degree: { en: 'Bachelor Développeur web mobile', fr: 'Bachelor Développeur web mobile' },
			period: '2020',
		},
		{
			school: { en: 'WebForce3', fr: 'WebForce3' },
			degree: { en: 'Web Developer Certification', fr: 'Certification développeur web' },
			period: '2016',
		},
		{
			school: { en: 'Lignes et Formation', fr: 'Lignes et Formation' },
			degree: { en: 'BTS Graphic Design', fr: 'BTS Design Graphique' },
			period: '2015',
		},
		{
			school: { en: 'ESAD Amiens', fr: 'ESAD Amiens' },
			degree: { en: 'DNAP Graphic Design', fr: 'DNAP Graphisme' },
			period: '2012',
		},
		{
			school: { en: 'Prépart', fr: 'Prépart' },
			degree: { en: 'Preparation for Art Schools', fr: 'Préparation aux concours des grandes écoles d\'art' },
			period: '2010',
		},
		{
			school: { en: 'Lycée Romain Rolland', fr: 'Lycée Romain Rolland' },
			degree: { en: 'Baccalaureate Arts Plastiques', fr: 'BACL-Arts Plastiques' },
			period: '2009',
		},
	],

	// ===== HOBBIES =====
	hobbies: [
		{
			title: { en: 'Music', fr: 'Musique' },
			details: [
				{
					en: 'Guitar, Concerts, Festivals, Indie Rock (Foals, Paramore, Two Door Cinema Club, Taylor Swift, Vinyl)',
					fr: 'Guitare, Concerts, Festivals, Indie Rock (Foals, Paramore, Two Door Cinema Club, Taylor Swift, Vinyl)'
				},
			],
		},
		{
			title: { en: 'Travel', fr: 'Voyages' },
			details: [
				{
					en: 'Netherlands, Italy, Brazil, London, Japan, Cuba, New York, Spain, Oslo',
					fr: 'Pays-Bas, Italie, Brésil, Londres, Japon, Cuba, New York, Espagne, Oslo'
				},
			],
		},
		{
			title: { en: 'Art', fr: 'Art' },
			details: [
				{
					en: 'Painting, Drawing, Mucha, Klimt, Van Gogh, Toulouse Lautrec, Museums',
					fr: 'Peinture, Dessin, Mucha, Klimt, Van Gogh, Toulouse Lautrec, Musées'
				},
			],
		},
	],

	// ===== UI LABELS =====
	labels: {
		sections: {
			contact: { en: 'CONTACT', fr: 'CONTACT' },
			skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
			experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
			education: { en: 'EDUCATION', fr: 'FORMATION' },
			projects: { en: 'PROJECTS', fr: 'PROJETS' },
			hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
		},
		experience: {
			mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
			moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
			training: { en: 'Training:', fr: 'Formations :' },
			techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
			technologies: { en: 'Technologies', fr: 'Technologies' },
		},
		actions: {
			clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
			switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
			downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
		},
	},

	// ===== THEME =====
	theme: {
		preset: 'warm',
	},
}
