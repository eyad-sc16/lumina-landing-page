'use strict'

////////////////////// functionality ///////////////////
const randomInt = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const scrollIntoMethod = function (e) {
  e.preventDefault()
  const clicked = e.target.closest(this)
  if (!clicked) return
  document.querySelector(clicked.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
};

// handling mobile nav toggle
const initMobileNav = function () {
  const navToggle = document.querySelector('.nav-toggle')
  const siteHeader = document.getElementById('site-header');
  const siteNav = document.getElementById('site-nav');

  navToggle.addEventListener('click', function () {
    const isOpen = siteHeader.classList.toggle('is-open');
    this.setAttribute('aria-expanded', isOpen);
  });

  siteNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      siteHeader.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
};
initMobileNav();

// handling navigation & links

const initTheme = function () {
  const themeTogel = document.getElementById('theme-toggle')
  
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark__theme')
  }

  themeTogel.addEventListener('click', function (e) {
    document.body.classList.toggle('dark__theme')
    if (document.body.classList.contains('dark__theme')) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
  })
}
initTheme()
const initNavigation = function () {
  const learnMoreBtn = document.querySelector('.learn-more-btn')
  const brandHeaderLink = document.querySelector('.brand')
  const siteNav = document.getElementById('site-nav');
  const headerActionEle = document.querySelector('.header-actions')
  const heroLinks = document.querySelector('.hero-actions')
  const productGrid = document.querySelector('.products-grid')
  const caseStudyGrid = document.querySelector('.cases-grid')
  const cetaBannerSection = document.querySelector('.cta-banner__actions')
  const footer = document.querySelector('footer')
  const footerBrandlink = document.querySelector('.footer-brand .brand');
  const footerColResources = footer.querySelector('.footer-col-resources')
  const footerColProducts = footer.querySelector('.footer-col-products')
  const footerColCompany = footer.querySelector('.footer-col-company')
  const footerColLegal = footer.querySelector('.footer-col-legal')
  const footerLangFirstLink = footer.querySelector('.footer-lang').firstElementChild
  const footerLangLastLink = footer.querySelector('.footer-lang').lastElementChild

  learnMoreBtn.addEventListener('click', scrollIntoMethod.bind('a'))
  brandHeaderLink.addEventListener('click', scrollIntoMethod.bind('a'))
  footerBrandlink.addEventListener('click', scrollIntoMethod.bind('a'))
  siteNav.addEventListener('click', scrollIntoMethod.bind('a'))
  headerActionEle.addEventListener('click', scrollIntoMethod.bind('a'))
  heroLinks.addEventListener('click', scrollIntoMethod.bind('a'))
  productGrid.addEventListener('click', scrollIntoMethod.bind('.btn--link'))
  caseStudyGrid.addEventListener('click', scrollIntoMethod.bind('.btn--link'))
  cetaBannerSection.addEventListener('click', scrollIntoMethod.bind('.btn--dark'))
  footerColProducts.addEventListener('click', scrollIntoMethod.bind('.footer-link'))
  footerColResources.addEventListener('click', scrollIntoMethod.bind('.footer-link'))
  footerColCompany.addEventListener('click', scrollIntoMethod.bind('.footer-link'))

  footerColLegal.addEventListener('click', function (e) { e.preventDefault() })
  footerLangFirstLink.addEventListener('click', function (e) { e.preventDefault() })
  footerLangLastLink.addEventListener('click', function (e) { e.preventDefault() })
};
initNavigation();

// Implement link color changing functionality
const initNavLinkHover = function () {
  const nav = document.querySelector('.header-inner')
  const handlingColor = function (e) {
    const link = e.target.closest('.nav-link');
    if (!link) return
    const sibilings = link.closest('.header-inner').querySelectorAll('.nav-link');

    sibilings.forEach(s => {
      if (s !== link) {
        s.style.color = `var(${this})`
      }
    })
  };
  nav.addEventListener('mouseover', handlingColor.bind('--sunshine-800'));
  nav.addEventListener('mouseout', handlingColor.bind('--slate'))
};
initNavLinkHover();

///////////////Scroll Events funcionality ////////////////
// implementing dynamic year  (date formate functionality )
const initDynamicYear = function () {
  const year = document.querySelector('.year')
  const dateFormating = function (date) {
    return new Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(date);
  };
  year.textContent = dateFormating(new Date());
};
initDynamicYear();

const initRandomNumbersEffect = function () {
  const randomalyNumsContianers = document.querySelectorAll('.randomaly-containers')
  let conter = 20
  const randomDisplayFuncionality = function (enties, observe) {
    enties.forEach(entry => {

      if (!entry.isIntersecting) return;

      const originalElements = document.querySelectorAll('.randomaly-nums-effects')


      const originalContentsArr = []

      originalElements.forEach((ele) => {
        originalContentsArr.push(ele.textContent)
      });
      // console.log(originalElements);

      const timer = setInterval(() => {
        const randomalyNums = document.querySelectorAll('.randomaly-nums-effects')
        randomalyNums.forEach(numContent => numContent.textContent = randomInt(20, 1))

        conter--
        if (conter === 0) {
          clearInterval(timer)
          randomalyNums.forEach((numContent, i) => numContent.textContent = originalContentsArr[i])
          conter = 20
        }
      }, 40)

      observe.unobserve(entry.target)
    })
  };

  const randomObserver = new IntersectionObserver(randomDisplayFuncionality, { root: null, threshold: 0.2 })
  randomalyNumsContianers.forEach(randomContainer => randomObserver.observe(randomContainer))
};
initRandomNumbersEffect();

const initScrollAnimations = function () {
  const allScrollElements = document.querySelectorAll('.fade-up-effect-title, .general-fade-up-elements, .section-lede, .card--feature');

  const interObservAPIFuncionality = function (enties, observer) {
    enties.forEach(entry => {
      if (!entry.isIntersecting) return

      if (entry.target.classList.contains('general-fade-up-elements'))
        entry.target.classList.remove('fade-up')

      if (entry.target.classList.contains('section-lede'))
        entry.target.classList.remove('fade-up-section-lede')


      if (entry.target.classList.contains('card--feature'))
        entry.target.classList.remove('card-blur-effect')


      if (entry.target.classList.contains('fade-up-effect-title'))
        entry.target.classList.remove('fade-up')

      observer.unobserve(entry.target)

    });
  };

  const ScrollElementsObserver = new IntersectionObserver(interObservAPIFuncionality, { root: null, threshold: 0.15 })
  allScrollElements.forEach(scrollEle => {
    ScrollElementsObserver.observe(scrollEle)


    if (scrollEle.classList.contains('general-fade-up-elements'))
      scrollEle.classList.add('fade-up')


    if (scrollEle.classList.contains('section-lede'))
      scrollEle.classList.add('fade-up-section-lede')


    if (scrollEle.classList.contains('card--feature'))
      scrollEle.classList.add('card-blur-effect')
  })
};
initScrollAnimations();

// implementing lazy loading for imges
const initLazyLoading = function () {
  const caseStudyImges = document.querySelector('.case-studies').querySelectorAll('img')
  // console.log(caseStudyImges);

  const lazyLoading = function (enties, observer) {
    enties.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.src = entry.target.dataset.src
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('blur-img')
        observer.unobserve(entry.target)

      })
    })

  }
  const caseImgesObserber = new IntersectionObserver(lazyLoading, { root: null, threshold: 0, rootMargin: '250px' })
  caseStudyImges.forEach(img => {
    caseImgesObserber.observe(img)
    img.classList.add('blur-img')
  })
};
initLazyLoading();
