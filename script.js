console.log("Tokyo993 Portfolio Loaded");

const translations = {
  en: {
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    hero_role: "BACKEND DEVELOPER",
    hero_desc: "Backend developer with 3+ years of experience building automation systems, APIs, AI integrations and scalable software solutions.",
    btn_github: "GitHub",
    btn_telegram: "Telegram",
    contact_location: "Germany",
    skills_title: "TECHNICAL SKILLS",
    skill_backend: "Backend",
    skill_database: "Database",
    skill_ai: "AI & Automation",
    skill_frontend: "Frontend",
    skill_tools: "Tools",
    skill_other: "Other",
    experience_title: "EXPERIENCE",
    job1_title: "Software Developer",
    job1_desc: "Worked on automation systems, social platforms and data processing solutions.",
    job1_rcranger: "Automated catalog processing, data collection and OpenAI-powered structuring.",
    job1_beamiie: "Developed social platform features including REST API, notifications, AI moderation and database improvements.",
    job1_fluorine: "Improved onboarding, registration, messaging systems and fixed product issues.",
    job2_title: "Freelance Development",
    job2_dates: "2022 - Present",
    job2_desc: "Development of personal software products, automation tools and web applications.",
    projects_title: "MY PROJECTS",
    project1_desc: "Windows utility fixing multi-monitor minimize behavior.",
    project2_desc: "Electron desktop application for batch image compression.",
    project3_desc: "Automation tool for Telegram messaging.",
    project4_desc: "Interactive landing page with GSAP animations.",
    link_github: "GitHub →",
    link_website: "Website →"
  },
  de: {
    nav_skills: "Fähigkeiten",
    nav_experience: "Erfahrung",
    nav_projects: "Projekte",
    hero_role: "BACKEND-ENTWICKLER",
    hero_desc: "Backend-Entwickler mit über 3 Jahren Erfahrung in der Entwicklung von Automatisierungssystemen, APIs, KI-Integrationen und skalierbaren Softwarelösungen.",
    btn_github: "GitHub",
    btn_telegram: "Telegram",
    contact_location: "Deutschland",
    skills_title: "TECHNISCHE FÄHIGKEITEN",
    skill_backend: "Backend",
    skill_database: "Datenbank",
    skill_ai: "KI & Automatisierung",
    skill_frontend: "Frontend",
    skill_tools: "Werkzeuge",
    skill_other: "Sonstiges",
    experience_title: "ERFAHRUNG",
    job1_title: "Softwareentwickler",
    job1_desc: "Arbeit an Automatisierungssystemen, sozialen Plattformen und Datenverarbeitungslösungen.",
    job1_rcranger: "Automatisierte Katalogverarbeitung, Datenerfassung und OpenAI-gestützte Strukturierung.",
    job1_beamiie: "Entwicklung von Social-Plattform-Funktionen wie REST-API, Benachrichtigungen, KI-Moderation und Datenbankverbesserungen.",
    job1_fluorine: "Verbesserung von Onboarding, Registrierung, Messaging-Systemen und Behebung von Produktfehlern.",
    job2_title: "Freiberufliche Entwicklung",
    job2_dates: "2022 - Heute",
    job2_desc: "Entwicklung eigener Softwareprodukte, Automatisierungstools und Webanwendungen.",
    projects_title: "MEINE PROJEKTE",
    project1_desc: "Windows-Dienstprogramm zur Behebung des Minimierungsverhaltens bei mehreren Monitoren.",
    project2_desc: "Electron-Desktop-Anwendung zur Stapelkomprimierung von Bildern.",
    project3_desc: "Automatisierungstool für Telegram-Nachrichten.",
    project4_desc: "Interaktive Landingpage mit GSAP-Animationen.",
    link_github: "GitHub →",
    link_website: "Website →"
  },
  ru: {
    nav_skills: "Навыки",
    nav_experience: "Опыт",
    nav_projects: "Проекты",
    hero_role: "BACKEND-РАЗРАБОТЧИК",
    hero_desc: "Backend-разработчик с опытом более 3 лет: автоматизация процессов, API, интеграции с ИИ и масштабируемые программные решения.",
    btn_github: "GitHub",
    btn_telegram: "Telegram",
    contact_location: "Германия",
    skills_title: "ТЕХНИЧЕСКИЕ НАВЫКИ",
    skill_backend: "Backend",
    skill_database: "База данных",
    skill_ai: "ИИ и автоматизация",
    skill_frontend: "Frontend",
    skill_tools: "Инструменты",
    skill_other: "Другое",
    experience_title: "ОПЫТ РАБОТЫ",
    job1_title: "Software Developer",
    job1_desc: "Работа над системами автоматизации, социальными платформами и обработкой данных.",
    job1_rcranger: "Автоматизация обработки каталогов, сбор данных и структурирование с помощью OpenAI.",
    job1_beamiie: "Разработка функций социальной платформы: REST API, уведомления, ИИ-модерация и улучшения базы данных.",
    job1_fluorine: "Улучшение онбординга, регистрации, систем сообщений и исправление ошибок продукта.",
    job2_title: "Фриланс-разработка",
    job2_dates: "2022 - настоящее время",
    job2_desc: "Разработка собственных программных продуктов, инструментов автоматизации и веб-приложений.",
    projects_title: "МОИ ПРОЕКТЫ",
    project1_desc: "Утилита для Windows, исправляющая поведение сворачивания при нескольких мониторах.",
    project2_desc: "Десктопное приложение на Electron для пакетного сжатия изображений.",
    project3_desc: "Инструмент автоматизации для рассылки сообщений в Telegram.",
    project4_desc: "Интерактивный лендинг с анимациями на GSAP.",
    link_github: "GitHub →",
    link_website: "Сайт →"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
  localStorage.setItem("preferredLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });
});
