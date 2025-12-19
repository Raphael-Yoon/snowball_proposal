// Obfuscated Config
const _d = (s) => new TextDecoder().decode(Uint8Array.from(atob(s), c => c.charCodeAt(0)));
const _c = {
  s: { m: 'MzAw66eMIOybkA==', y: 'Myw2MDDrp4wg7JuQ' },
  p: { m: 'NDAw66eMIOybkA==', y: 'NCw4MDDrp4wg7JuQ' },
  e: { m: '67OE64+EIO2YkeydmA==', y: '67OE64+EIO2YkeydmA==' }
};

// UI Interaction Logic
let isPriceRevealed = false;

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle (Full-screen overlay)
  const menuButton = document.getElementById('mobile-menu-button');
  const menuClose = document.getElementById('mobile-menu-close');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  function openMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('hidden');
    menuOverlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('flex');
    menuOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  menuButton?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);

  // Smooth scroll and mobile menu close
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const target = document.querySelector(href);

      if (target) {
        if (menuOverlay && !menuOverlay.classList.contains('hidden')) {
          closeMenu();
        }
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Cookie Consent Banner Logic
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  if (!localStorage.getItem('cookieAccepted')) {
    cookieBanner?.classList.remove('hidden');
  }

  acceptCookiesButton?.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookieBanner?.classList.add('hidden');
  });

  // Price Modal Interaction
  const priceElements = document.querySelectorAll('.secret-price');
  const passwordInput = document.getElementById('price-password');

  priceElements.forEach(el => {
    el.addEventListener('click', () => { 
      if (!isPriceRevealed) openPriceModal(); 
    });
    el.classList.add('cursor-pointer', 'decoration-dotted', 'underline', 'underline-offset-4', 'decoration-slate-400', 'hover:text-blue-600', 'transition-colors');
    el.setAttribute('title', '상세 정보 확인 (클릭)');
  });

  // Carousel Pagination Dots Sync
  document.querySelectorAll('.sb-carousel').forEach(carousel => {
    carousel.addEventListener('scroll', () => {
      const firstChild = carousel.querySelector('div');
      if (!firstChild) return;
      const cardWidth = firstChild.offsetWidth + 16;
      const index = Math.round(carousel.scrollLeft / cardWidth);
      const dotsContainer = carousel.nextElementSibling;
      if (dotsContainer && dotsContainer.classList.contains('justify-center')) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
    });
  });

  // Consultation Form Handling
  const consultationForm = document.getElementById('consultation-form');
  const formFields = document.getElementById('form-fields');
  const successMessage = document.getElementById('success-message');
  const submitBtn = document.getElementById('submit-btn');

  consultationForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(consultationForm);

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">↻</span> 전송 중...';
    }

    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        formFields?.classList.add('hidden');
        successMessage?.classList.remove('hidden');
        consultationForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch((error) => {
        alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        console.error('Form submission error:', error);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '전문가와 가벼운 상담 시작하기';
        }
      });
  });

  // Intersection Observer for Scroll Reveal
  const revealCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
});

// Global functions (called by inline onclick handlers)
function openPriceModal() {
  const priceModal = document.getElementById('price-modal');
  const passwordInput = document.getElementById('price-password');
  if (priceModal) {
    priceModal.classList.remove('hidden');
    priceModal.classList.add('flex');
    if (passwordInput) setTimeout(() => passwordInput.focus(), 100);
  }
}

function closePriceModal() {
  const priceModal = document.getElementById('price-modal');
  const passwordInput = document.getElementById('price-password');
  if (priceModal) {
    priceModal.classList.add('hidden');
    priceModal.classList.remove('flex');
    if (passwordInput) passwordInput.value = '';
  }
}

function checkPricePassword() {
  const passwordInput = document.getElementById('price-password');
  if (!passwordInput) return;
  if (btoa(passwordInput.value) === 'MTU2Ng==') {
    _r();
    closePriceModal();
  } else {
    alert('코드가 일치하지 않습니다.');
    passwordInput.value = '';
    passwordInput.focus();
  }
}

function _r() {
  isPriceRevealed = true;
  const priceElements = document.querySelectorAll('.secret-price');
  priceElements.forEach(el => {
    const tier = el.dataset.tier;
    const type = el.dataset.type;
    const key = tier === 'standard' ? 's' : (tier === 'premium' ? 'p' : 'e');
    const mode = type === 'monthly' ? 'm' : 'y';

    if (_c[key] && _c[key][mode]) {
      const val = _d(_c[key][mode]);
      el.style.opacity = '0';
      setTimeout(() => {
        el.innerHTML = `<span class="font-bold text-blue-600">${val}</span>`;
        el.classList.remove('decoration-dotted', 'underline');
        el.style.opacity = '1';
      }, 200);
    }
  });
}

function switchTrack(track) {
  const tabBtnA = document.getElementById('tab-btn-a');
  const tabBtnB = document.getElementById('tab-btn-b');
  const contentA = document.getElementById('track-a-content');
  const contentB = document.getElementById('track-b-content');

  if (track === 'a') {
    if (tabBtnA) {
      tabBtnA.className = 'track-tab flex-1 min-w-0 shrink-0 py-3 px-0.5 md:py-4 md:px-6 rounded-xl transition-all bg-[#2c5265] text-white shadow-md text-center';
      tabBtnA.innerHTML = '<div class="flex flex-col items-center justify-center"><span class="text-[11px] opacity-80 uppercase tracking-widest mb-0.5">Track A</span><span class="text-[13px] sm:text-base md:text-lg font-bold break-keep whitespace-normal">전문가 컨설팅</span></div>';
    }
    if (tabBtnB) {
      tabBtnB.className = 'track-tab flex-1 min-w-0 shrink-0 py-3 px-0.5 md:py-4 md:px-6 rounded-xl transition-all text-slate-500 hover:bg-slate-50 text-center';
      tabBtnB.innerHTML = '<div class="flex flex-col items-center justify-center"><span class="text-[11px] opacity-80 uppercase tracking-widest mb-0.5">Track B</span><span class="text-[13px] sm:text-base md:text-lg font-bold break-keep whitespace-normal">시스템 도입</span></div>';
    }
    contentA?.classList.remove('hidden');
    contentB?.classList.add('hidden');
  } else {
    if (tabBtnB) {
      tabBtnB.className = 'track-tab flex-1 min-w-0 shrink-0 py-3 px-0.5 md:py-4 md:px-6 rounded-xl transition-all bg-emerald-600 text-white shadow-md text-center';
      tabBtnB.innerHTML = '<div class="flex flex-col items-center justify-center"><span class="text-[11px] opacity-80 uppercase tracking-widest mb-0.5">Track B</span><span class="text-[13px] sm:text-base md:text-lg font-bold break-keep whitespace-normal">시스템 도입</span></div>';
    }
    if (tabBtnA) {
      tabBtnA.className = 'track-tab flex-1 min-w-0 shrink-0 py-3 px-0.5 md:py-4 md:px-6 rounded-xl transition-all text-slate-500 hover:bg-slate-50 text-center';
      tabBtnA.innerHTML = '<div class="flex flex-col items-center justify-center"><span class="text-[11px] opacity-80 uppercase tracking-widest mb-0.5">Track A</span><span class="text-[13px] sm:text-base md:text-lg font-bold break-keep whitespace-normal">전문가 컨설팅</span></div>';
    }
    contentB?.classList.remove('hidden');
    contentA?.classList.add('hidden');
  }

  // Smooth scroll to top of solutions section
  const targetSection = document.getElementById('solutions');
  if (targetSection) {
    const navbarHeight = window.innerWidth >= 768 ? 80 : 64;
    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function toggleFaqCategory(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.faq-category-icon');
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
}

function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon');
  if (content && icon) {
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
}
