import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    currentLang = signal<'en' | 'fr'>('en');

    private translations: any = {
        en: {
            nav: {
                home: 'Home',
                experience: 'Experience',
                education: 'Education',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact'
            },
            seo: {
                defaultTitle: 'Fekhreddine | Fullstack Developer',
                defaultDesc: 'Portfolio of Fekhreddine, a Fullstack Java Angular Developer specialized in high-performance web applications.',
                home: { title: 'Home | Fekhreddine', desc: 'Welcome to my portfolio. Discover my projects and skills as a Fullstack Developer.' },
                experience: { title: 'Experience | Fekhreddine', desc: 'My professional journey in software development, from healthcare to web optimization.' },
                education: { title: 'Education | Fekhreddine', desc: 'My academic background in computer science and application development.' },
                skills: { title: 'Skills | Fekhreddine', desc: 'Technical skills overview: Java, Spring Boot, Angular, Docker, and more.' },
                projects: { title: 'Projects | Fekhreddine', desc: 'Showcase of my key projects: JFIV, AI-Powered OCR, and Website Redesigns.' },
                contact: { title: 'Contact | Fekhreddine', desc: 'Get in touch for collaboration opportunities or inquiries.' },
                notFound: { title: 'Page Not Found', desc: 'Oops! The page you are looking for does not exist.' }
            },
            notFound: {
                title: "You're Lost in Space",
                desc: "The page you are looking for doesn't exist or has been moved.",
                button: 'Go Back Home'
            },
            hero: {
                badge: 'Available for work',
                title: 'Fullstack Java Angular Developer',
                description: 'Fullstack Java Developer experienced in optimizing healthcare software, developing intuitive UIs, and improving system performance. Seeking new challenges to leverage technical skills in a dynamic environment.',
                viewProjects: 'View Projects',
                contactMe: 'Contact Me',
                downloadResume: 'Download Resume'
            },
            about: {
                title: 'About Me',
                p1: "Hello! I'm Fekhreddine. I am a Fullstack Java Angular Developer.",
                p2: "I have contributed to the optimization of software for healthcare professionals by developing intuitive user interfaces and improving system performance. My expertise includes Java, Spring Boot, Angular, and robust system architecture.",
                yearsExp: 'Years Exp.',
                projects: 'Projects'
            },
            experience: {
                title: 'Experience',
                sept: {
                    role: 'Fullstack Developer',
                    desc: [
                        'Contributed to the development of new features for JFIV software aimed at healthcare professionals.',
                        'Simplified administrative tasks related to cryopreservatives through an intuitive and ergonomic interface.',
                        'Implemented a robust and secure architecture to manage rights and permissions within JFIV, ensuring sensitive data protection and compliance.',
                        'Developed and integrated health connectors (HL7) to ensure compatibility between JFIV and existing patient management systems.',
                        'Designed and developed APIs enabling fluid communication between different health systems, optimizing interoperability.',
                        'Ensured continuous performance of GAM connectors and compatibility with existing systems.',
                        'Designed and developed intuitive and ergonomic user interfaces dedicated to gynecologists in JFIV.'
                    ]
                },
                ufc: {
                    role: 'Fullstack Developer',
                    desc: [
                        'Elaborated detailed specifications for website redesign to improve UX and performance.',
                        'Conducted in-depth audit of existing site: Identified weak points and improvement opportunities.',
                        'Designed interface mockups: Created modern UX/UI designs focusing on simplicity and accessibility.',
                        'Implemented an intuitive UI, reducing friction points and increasing conversion rate by 15%.',
                        'Collaborated closely with internal teams to ensure project compliance with security and performance standards.'
                    ]
                },
                genai: {
                    role: 'AI App Developer',
                    desc: [
                        'Designed and developed a Japanese Kanji learning app with Flask backend and Streamlit frontend.',
                        'Integrated MangaOCR for handwritten text recognition to identify Japanese characters.',
                        'Managed practice sessions: Tracked user progress for a personalized experience.',
                        'Connected frontend and backend services via RESTful APIs for fluid communication.'
                    ]
                }
            },
            education: {
                title: 'Education',
                degree1: 'Fullstack Application Developer',
                degree2: 'Web and Mobile Developer'
            },
            skills: {
                title: 'Skills',
                backend: 'Backend',
                frontend: 'Frontend',
                database: 'Database',
                devops: 'DevOps & Tools',
                architecture: 'Architecture',
                methodologies: 'Methodologies'
            },
            projects: {
                title: 'Featured Projects',
                jfiv: {
                    title: 'JFIV Software',
                    desc: 'Contribution to the development of new features for healthcare professionals. Simplified administrative tasks related to cryopreservatives and implemented a robust security architecture.'
                },
                kanji: {
                    title: 'AI-Powered OCR Learning Platform',
                    desc: 'Project: Japanese Learning Application through Written Practice. This interactive web application helps Japanese learners (JLPT N5 level) practice sentence composition independently. It simulates a complete process: generating a sentence to translate, submitting a handwritten response, and providing detailed automated correction.'
                },
                redesign: {
                    title: 'Website Redesign',
                    desc: 'Redesign of a website to improve UX and performance. Conducted in-depth audit, created modern mockups, and increased conversion rate by 15%.'
                }
            },
            contact: {
                subtitle: "What's Next?",
                title: 'Get In Touch',
                text: 'Connect with me on social media or check out my code repositories.',
                sayHello: 'Say Hello',
                successTitle: 'Message Sent!',
                successBody: 'Thanks for reaching out. I\'ll get back to you as soon as possible.',
                sendAgain: 'Send Another Message',
                sending: 'Sending...',
                submit: 'Send Message'
            },
            footer: {
                text: 'Designed & Built by Fekhreddine ARRAG'
            }
        },
        fr: {
            nav: {
                home: 'Accueil',
                experience: 'Expérience',
                education: 'Formation',
                skills: 'Compétences',
                projects: 'Projets',
                contact: 'Contact'
            },
            seo: {
                defaultTitle: 'Fekhreddine | Développeur Fullstack',
                defaultDesc: 'Portfolio de Fekhreddine, Développeur Fullstack Java Angular spécialisé dans les applications web performantes.',
                home: { title: 'Accueil | Fekhreddine', desc: 'Bienvenue sur mon portfolio. Découvrez mes projets et compétences en tant que Développeur Fullstack.' },
                experience: { title: 'Expérience | Fekhreddine', desc: 'Mon parcours professionnel en développement logiciel, de la santé à l\'optimisation web.' },
                education: { title: 'Formation | Fekhreddine', desc: 'Mon parcours académique en informatique et développement d\'applications.' },
                skills: { title: 'Compétences | Fekhreddine', desc: 'Aperçu de mes compétences techniques : Java, Spring Boot, Angular, Docker, etc.' },
                projects: { title: 'Projets | Fekhreddine', desc: 'Présentation de mes projets clés : JFIV, AI-Powered OCR, et Refontes Web.' },
                contact: { title: 'Contact | Fekhreddine', desc: 'Contactez-moi pour toute opportunité de collaboration ou demande d\'information.' },
                notFound: { title: 'Page Non Trouvée', desc: 'Oups ! La page que vous cherchez n\'existe pas.' }
            },
            notFound: {
                title: "Perdu dans l'espace",
                desc: "La page que vous recherchez n'existe pas ou a été déplacée.",
                button: "Retour à l'accueil"
            },
            hero: {
                badge: 'Disponible pour travailler',
                title: 'Développeur Fullstack Java Angular',
                description: "Développeur Fullstack (Java/Spring Boot & Angular) spécialisé dans l'optimisation d'applications pour la santé. J'allie sens de l'interface utilisateur et rigueur back-end pour livrer des systèmes performants. Je cherche désormais à appliquer cette approche à de nouveaux défis techniques complexes.",
                viewProjects: 'Voir Projets',
                contactMe: 'Me Contacter',
                downloadResume: 'Télécharger CV'
            },
            about: {
                title: 'Mon parcours en quelques mots',
                p1: "Je m'appelle Fekhreddine et je suis passionné par le développement d'applications qui allient puissance, fiabilité et simplicité d'utilisation. En tant que Développeur Fullstack, j'évolue aussi bien côté back-end (Java, Spring Boot) que front-end (Angular).",
                p2: "J'ai eu l'opportunité de contribuer à des projets impactants dans le domaine de la santé, où j'ai pu refondre des interfaces pour les rendre plus intuitives et fluides, et optimiser l'architecture pour des gains notables de performance. Mon objectif ? Continuer à construire des solutions techniques élégantes qui répondent précisément aux besoins métiers.",
                yearsExp: "Années d'Exp.",
                projects: 'Projets'
            },
            experience: {
                title: 'Expérience',
                sept: {
                    role: 'Développeur Fullstack',
                    desc: [
                        'Contribution au développement de nouvelles fonctionnalités sur le logiciel JFIV destiné aux professionnels de santé.',
                        'Simplification des tâches administratives liées aux cryoconservants grâce à une interface intuitive et ergonomique.',
                        'Mise en place d’une architecture robuste et sécurisée pour gérer les droits et permissions au sein de JFIV, garantissant la protection des données sensibles et la conformité aux réglementations en vigueur.',
                        'Développement et intégration de connecteurs de santé (notamment HL7) pour assurer la compatibilité entre le logiciel JFIV et les systèmes de gestion des admissions et des patients existants.',
                        'Conception et développement d’API permettant une communication fluide entre les différents systèmes de santé, optimisant ainsi l’interopérabilité.',
                        'Assurance de la performance continue des connecteurs GAM et de leur compatibilité avec les systèmes existants.',
                        'Conception et développement d’interfaces utilisateur intuitives et ergonomiques dédiées aux gynécologues dans le logiciel JFIV.'
                    ]
                },
                ufc: {
                    role: 'Développeur Fullstack',
                    desc: [
                        'Élaboration d\'un cahier des charges détaillé pour la refonte du site web, visant à améliorer l\'expérience utilisateur et optimiser les performances du site.',
                        'Audit approfondi du site existant : Identification des points faibles et des opportunités d’amélioration, notamment en termes de temps de chargement, d’accessibilité et de design.',
                        'Conception de maquettes d’interfaces : Création de designs UX/UI modernes et engageants pour la refonte du site, en mettant l’accent sur la simplicité, l’ergonomie et l’accessibilité.',
                        'Mise en oeuvre d’une interface utilisateur intuitive, réduisant les points de friction pour les utilisateurs et augmentant le taux de conversion de 15 %.',
                        'Collaboration étroite avec les équipes internes pour assurer la conformité du projet avec les attentes du client et les normes en matière de sécurité et de performance.'
                    ]
                },
                genai: {
                    role: 'Développeur App IA',
                    desc: [
                        'Conception et développement d\'une application d\'apprentissage du kanji japonais avec un backend Flask et un frontend Streamlit pour une pratique d\'écriture alimentée par l\'IA.',
                        'Intégration de MangaOCR : Utilisation de la reconnaissance de texte manuscrit pour identifier les caractères japonais écrits à la main.',
                        'Gestion des sessions de pratique : Suivi de la progression des utilisateurs, permettant une expérience personnalisée et évolutive.',
                        'Connexion des services frontend et backend via des API RESTful pour assurer une communication fluide entre les composants de l’application.'
                    ]
                }
            },
            education: {
                title: 'Formation',
                degree1: 'Concepteur développeur d’application fullstack',
                degree2: 'Développeur web et mobile'
            },
            skills: {
                title: 'Compétences',
                backend: 'Backend',
                frontend: 'Frontend',
                database: 'Base de données',
                devops: 'DevOps & Outils',
                architecture: 'Architecture',
                methodologies: 'Méthodologies'
            },
            projects: {
                title: 'Projets Phares',
                jfiv: {
                    title: 'Logiciel JFIV',
                    desc: 'Participation au développement de nouvelles fonctionnalités pour les professionnels de santé. Simplification des tâches administratives et mise en place d’une architecture sécurisée.'
                },
                kanji: {
                    title: 'AI-Powered OCR Learning Platform',
                    desc: 'Projet : Application d\'Apprentissage du Japonais par la Pratique Écrite. Cette application web interactive aide les apprenants en japonais (niveau JLPT N5) à pratiquer la composition de phrases de manière autonome. Elle simule un processus complet : génération d’une phrase à traduire, soumission d’une réponse manuscrite, et correction détaillée automatisée.'
                },
                redesign: {
                    title: 'Refonte de Site Web',
                    desc: 'Refonte d’un site web pour améliorer l’UX et les performances. Audit approfondi, création de maquettes modernes et augmentation du taux de conversion de 15%.'
                }
            },
            contact: {
                subtitle: "Et ensuite ?",
                title: 'Restons en contact',
                text: 'Connectez-vous avec moi sur les réseaux sociaux ou consultez mes dépôts de code.',
                sayHello: 'Dire Bonjour',
                successTitle: 'Message Envoyé !',
                successBody: 'Merci de m\'avoir contacté. Je vous répondrai dès que possible.',
                sendAgain: 'Envoyer un autre message',
                sending: 'Envoi...',
                submit: 'Envoyer'
            },
            footer: {
                text: 'Conçu & Développé par Fekhreddine ARRAG'
            }
        }
    };

    constructor() {
        const savedLang = localStorage.getItem('lang') as 'en' | 'fr';
        if (savedLang) {
            this.currentLang.set(savedLang);
        }
    }

    toggleLang() {
        const newLang = this.currentLang() === 'en' ? 'fr' : 'en';
        this.setLang(newLang);
    }

    setLang(lang: 'en' | 'fr') {
        this.currentLang.set(lang);
        localStorage.setItem('lang', lang);
    }

    get(key: string): any {
        const keys = key.split('.');
        let value = this.translations[this.currentLang()];
        for (const k of keys) {
            value = value[k];
        }
        return value;
    }
}
