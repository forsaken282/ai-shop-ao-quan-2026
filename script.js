// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ADD ACTIVE CLASS STYLING
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
        border-bottom: 3px solid var(--primary-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// ============================================
// TOOL CARD ANIMATION ON LOAD
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.tool-card, .solution-card, .intro-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ============================================
// COPY TO CLIPBOARD FUNCTION (for future use)
// ============================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Đã sao chép: ' + text);
    }).catch(err => {
        console.error('Lỗi sao chép:', err);
    });
}

// ============================================
// MOBILE MENU TOGGLE (if needed in future)
// ============================================

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// ============================================
// SEARCH FUNCTIONALITY (for future enhancement)
// ============================================

function searchContent(query) {
    const cards = document.querySelectorAll('.tool-card, .solution-card');
    let results = 0;
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            card.style.display = 'block';
            results++;
        } else {
            card.style.display = 'none';
        }
    });
    
    return results;
}

// ============================================
// PRINT FUNCTIONALITY
// ============================================

function printPage() {
    window.print();
}

// ============================================
// THEME TOGGLE (Light/Dark Mode - Optional)
// ============================================

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑ Lên đầu';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = '#4f46e5';
    scrollToTopBtn.style.transform = 'translateY(-3px)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.backgroundColor = 'var(--primary-color)';
    scrollToTopBtn.style.transform = 'translateY(0)';
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🤖 Hướng Dẫn AI Cho Shop Quần Áo 2026', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cTrang web này được tạo bởi Manus AI', 'color: #ec4899; font-size: 14px;');
console.log('%cNếu bạn có câu hỏi, vui lòng liên hệ với chúng tôi!', 'color: #10b981; font-size: 12px;');
