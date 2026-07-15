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
        'hero-description': 'Saya menciptakan pengalaman digital yang menakjubkan dengan desain yang menarik.',
        'btn-view-projects': 'Lihat Proyek',
        'btn-contact-me': 'Hubungi Saya',
        'about-title': 'Tentang Saya',
        'about-description': 'Fresh graduate D3 Teknik Informatika dengan pengalaman magang sebagai Fullstack Developer. Terampil dalam pengembangan aplikasi web end-to-end menggunakan PHP, CodeIgniter, dan JavaScript. Memiliki semangat tinggi dalam merancang antarmuka (UI/UX) yang intuitif dan fungsional menggunakan Figma untuk memberikan pengalaman pengguna terbaik.',
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
        'hero-description': 'I create stunning digital experiences with attractive and functional designs.',
        'btn-view-projects': 'View Projects',
        'btn-contact-me': 'Contact Me',
        'about-title': 'About Me',
        'about-description': 'Fresh graduate of D3 Informatics Engineering with internship experience as a Fullstack Developer. Skilled in end-to-end web application development using PHP, CodeIgniter, and JavaScript. Passionate about designing intuitive and functional UI/UX with Figma to deliver great user experience.',
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