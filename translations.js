// ==========================================
// TRANSLATIONS.JS - BRUTE FORCE FIX
// ==========================================

const translations = {
    id: {
        'page-title': 'Portofolio - Irsyada Rafi Ananta',
        'meta-description': 'Portfolio Irsyada Rafi Ananta',
        'nav-home': 'Beranda',
        'nav-about': 'Tentang',
        'nav-skills': 'Keahlian',
        'nav-projects': 'Proyek',
        'nav-contact': 'Kontak',
        'hero-greeting': 'Halo, Saya',
        'hero-role': 'Graphic Design & UI/UX Designer',
        'hero-description': 'Saya adalah desainer visual yang menjembatani keindahan estetika dengan fungsionalitas teknologi. Berbekal latar belakang teknis, saya menciptakan antarmuka digital yang tidak hanya memanjakan mata, tetapi juga intuitif dan siap diimplementasikan.',
        'btn-view-projects': 'Lihat Proyek',
        'btn-contact-me': 'Hubungi Saya',
        'about-title': 'Tentang Saya',
        'about-description': 'Sebagai lulusan Teknik Informatika dengan pengalaman sebagai Fullstack Developer intern, saya membawa perspektif unik ke dalam dunia desain produk digital. Saya tidak hanya merancang antarmuka visual yang modern di Figma, melainkan memahami bagaimana struktur kode di baliknya bekerja menggunakan PHP, CodeIgniter, dan JavaScript. Kombinasi ini memungkinkan saya berkolaborasi secara efisien dengan tim pengembang serta melahirkan solusi UI/UX yang fungsional, adaptif, dan berorientasi pada kebutuhan pengguna.',
        'skills-title': 'Keahlian',
        'projects-title': 'Proyek Saya',
        'filter-all': 'Semua',
        'filter-ui-ux': 'UI/UX',
        'filter-web': 'Website',
        'filter-design': 'Desain',
        'search-placeholder': 'Cari proyek...',
        'search-no-results': 'Tidak ada proyek yang ditemukan.',
        'search-try-different': 'Coba kata kunci yang berbeda atau pilih kategori lain.',
        'btn-view-details': 'Lihat Detail',
        
        // --- MASUKKAN SISA TEKS PROYEK & TEKNOLOGI ID ANDA DI SINI ---
        'tech-canva': 'Canva',
        'tech-figma': 'Figma',
        'tech-codeigniter': 'CodeIgniter',
        'tech-php': 'PHP',
        'tech-javascript': 'JavaScript',
        'tech-mysql': 'MySQL',
        'tech-photoshop': 'Adobe Photoshop',
        
        'project-description-title': 'Deskripsi Proyek',
        'project-technologies': 'Teknologi',
        'project-category': 'Kategori',
        'contact-title': 'Hubungi Saya',
        'contact-description': 'Saya selalu tertarik dengan proyek-proyek menarik. Mari diskusikan bagaimana kita bisa bekerja sama.'
    },
    
    en: {
        'page-title': 'Portfolio - Irsyada Rafi Ananta',
        'meta-description': 'Portfolio of Irsyada Rafi Ananta',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'hero-greeting': 'Hello, I\'m',
        'hero-role': 'Graphic Design & UI/UX Designer',
        'hero-description': 'I am a visual designer bridging the gap between aesthetic beauty and technical functionality. Equipped with a strong technical background, I craft digital interfaces that are not only visually striking but deeply intuitive and production-ready.',
        'btn-view-projects': 'View Projects',
        'btn-contact-me': 'Contact Me',
        'about-title': 'About Me',
        'about-description': 'As an Informatics Engineering graduate with hands-on experience as a Fullstack Developer intern, I bring a distinct edge to digital product design. I do not just design modern user interfaces in Figma; I deeply understand the underlying code structures driven by PHP, CodeIgniter, and JavaScript. This dual expertise enables me to collaborate seamlessly with development teams and deliver UI/UX solutions that are highly functional, scalable, and user centric.',
        'skills-title': 'My Skills',
        'projects-title': 'My Projects',
        'filter-all': 'All',
        'filter-ui-ux': 'UI/UX',
        'filter-web': 'Website',
        'filter-design': 'Design',
        'search-placeholder': 'Search projects...',
        'search-no-results': 'No projects found.',
        'search-try-different': 'Try different keywords or select another category.',
        'btn-view-details': 'View Details',
        
        // --- MASUKKAN SISA TEKS PROYEK & TEKNOLOGI EN ANDA DI SINI ---
        'tech-canva': 'Canva',
        'tech-figma': 'Figma',
        'tech-codeigniter': 'CodeIgniter',
        'tech-php': 'PHP',
        'tech-javascript': 'JavaScript',
        'tech-mysql': 'MySQL',
        'tech-photoshop': 'Adobe Photoshop',
        
        'project-description-title': 'Project Description',
        'project-technologies': 'Technologies',
        'project-category': 'Category',
        'contact-title': 'Contact Me',
        'contact-description': 'I\'m always interested in exciting projects. Let\'s discuss how we can work together.'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Translasi berjalan...");
    
    let currentLang = localStorage.getItem('preferred-language') || 'id';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        document.documentElement.lang = lang;

        // Mengubah semua teks di HTML yang punya atribut data-translate
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            const translationText = translations[lang][key];
            
            if (translationText) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translationText;
                } else {
                    el.textContent = translationText;
                }
            }
        });

        // Update indikator bahasa di tombol
        const btn = document.getElementById('language-toggle');
        if (btn) {
            btn.innerHTML = lang === 'id' ? '<span>🇮🇩</span><span>ID</span>' : '<span>🇺🇸</span><span>EN</span>';
        }
    }

    // Pasang aksi klik ke tombol Toggle
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const nextLang = currentLang === 'id' ? 'en' : 'id';
            setLanguage(nextLang);
        });
    }

    // Set bahasa awal saat web dibuka
    setLanguage(currentLang);
});
