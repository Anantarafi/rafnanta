// ==========================================
// SCRIPT.JS - BRUTE FORCE FIX
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("✅ Script utama berjalan...");

    // 1. NAVBAR MOBILE
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('top-[72px]');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('w-full');
            navMenu.classList.toggle('bg-[#EFECE6]');
            navMenu.classList.toggle('border-b-[3px]');
            navMenu.classList.toggle('border-black');
            navMenu.classList.toggle('p-6');
            navMenu.classList.toggle('shadow-[0px_10px_0px_0px_rgba(0,0,0,1)]');
            navToggle.classList.toggle('bg-[#FFDB58]');
        });
    }

    // 2. FILTER & CARI PROYEK (ANTI MACET)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectSearch = document.getElementById('project-search');
    const noResults = document.getElementById('no-results');

    function runFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filterVal = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const searchVal = projectSearch ? projectSearch.value.toLowerCase() : '';
        let visibleCount = 0;

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category') || '';
            // Mengambil semua teks mentah di dalam card untuk fitur cari
            const rawText = card.innerText.toLowerCase(); 
            
            const matchCategory = (filterVal === 'all' || category === filterVal);
            const matchSearch = (!searchVal || rawText.includes(searchVal));

            if (matchCategory && matchSearch) {
                card.style.display = 'flex'; // Paksa tampil
                visibleCount++;
            } else {
                card.style.display = 'none'; // Paksa sembunyi
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                // Reset warna
                filterBtns.forEach(b => {
                    b.classList.remove('bg-[#FFDB58]', 'active');
                    b.classList.add('bg-white');
                });
                // Set warna kuning ke tombol aktif
                this.classList.remove('bg-white');
                this.classList.add('bg-[#FFDB58]', 'active');
                
                runFilter();
            });
        });
    }

    if (projectSearch) {
        // Hapus delay, buat pencarian real-time instan
        projectSearch.addEventListener('input', runFilter); 
    }

    // 3. MODAL POPUP
    const modal = document.getElementById('project-modal');
    const modalClose = document.getElementById('modal-close');
    const closeModalBtn = document.getElementById('close-modal');
    const viewProjectBtn = document.getElementById('view-project');
    let currentProjectLink = '';

    function openModal(card) {
        if (!modal) return;
        
        currentProjectLink = card.getAttribute('data-link') || '#';
        const imgSrc = card.querySelector('img')?.src || '';
        const title = card.querySelector('h3')?.textContent || '';
        const description = card.querySelector('p')?.textContent || '';
        const category = card.getAttribute('data-category') || '';
        
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const modalTech = document.getElementById('modal-tech');
        const modalCategory = document.getElementById('modal-category');

        if (modalImage) { modalImage.src = imgSrc; modalImage.alt = title; }
        if (modalTitle) modalTitle.textContent = title;
        if (modalDescription) modalDescription.textContent = description;

        if (modalTech) {
            modalTech.innerHTML = '';
            // Ambil semua tag teknologi dari card
            card.querySelectorAll('span[data-translate^="tech-"], .project-tech span').forEach(span => {
                const techTag = document.createElement('span');
                techTag.className = 'border border-black bg-white text-[10px] font-bold uppercase px-2 py-1 shadow-[2px_2px_0px_0px_#000]';
                techTag.textContent = span.textContent;
                modalTech.appendChild(techTag);
            });
        }

        if (modalCategory) {
            const catMap = { 'ui-ux': 'UI/UX Design', 'web': 'Web Development', 'design': 'Graphic Design' };
            modalCategory.textContent = catMap[category] || category;
        }

        modal.style.display = 'flex'; // Paksa Modal Tampil
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.style.display = 'none'; // Paksa Modal Sembunyi
        document.body.style.overflow = '';
    }

    projectCards.forEach(card => {
        const btn = card.querySelector('.project-btn'); 
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation(); openModal(card);
            });
        }
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.project-btn')) openModal(card);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') closeModal();
    });

    if (viewProjectBtn) {
        viewProjectBtn.addEventListener('click', () => {
            if (currentProjectLink && currentProjectLink !== '#') {
                window.open(currentProjectLink, '_blank');
            } else {
                alert('Link project belum tersedia');
            }
        });
    }

    // Eksekusi filter awal agar semua card ter-render dengan benar
    runFilter();

    // Otomatis menyuntikkan efek hover lift brutalist ke seluruh kartu
    projectCards.forEach(card => {
        card.classList.add(
            'transition-all', 
            'duration-200', 
            'ease-in-out', 
            'hover:-translate-x-1.5', 
            'hover:-translate-y-1.5', 
            'hover:shadow-[12px_12px_0px_0px_#000]'
        );
    });
});