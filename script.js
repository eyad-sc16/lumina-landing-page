'use strict'

////////////////DOM Elements///////////////////
const navToggle = document.querySelector('.nav-toggle')
const year = document.querySelector('.year')
const learnMoreBtn = document.querySelector('.learn-more-btn')
const brandHeaderLink = document.querySelector('.brand')
const nav = document.querySelector('.header-inner')
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
const stateGrid = document.querySelector('.stats-grid')
const randomalyNumsContianers = document.querySelectorAll('.randomaly-containers')
const originalShowCases = document.querySelector('.showcase-stats').querySelectorAll('.showcase-num')


////////////////////// functionality ///////////////////
const randomInt = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

const scrollIntoMethod = function (e) {

  e.preventDefault()

  const clicked = e.target.closest(this)

  // Garde clause
  if (!clicked) return
  document.querySelector(clicked.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
};

// handling defult links

// handling mobile nav toggle
const siteHeader = document.getElementById('site-header');
navToggle.addEventListener('click', function () {
  const isOpen = siteHeader.classList.toggle('is-open');
  this.setAttribute('aria-expanded', isOpen);
});

// close mobile menu when a link is clicked
siteNav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    siteHeader.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// handling scroll to learn more btn 
learnMoreBtn.addEventListener('click', scrollIntoMethod.bind('a'))

// handling brand scroll 
brandHeaderLink.addEventListener('click', scrollIntoMethod.bind('a'))
footerBrandlink.addEventListener('click', scrollIntoMethod.bind('a'))

// handling the smooth navigaton of the nav links
siteNav.addEventListener('click', scrollIntoMethod.bind('a'))

// handling funtionality of header actons part
headerActionEle.addEventListener('click', scrollIntoMethod.bind('a'))

// handling the scroll functionality for the the hero secton links
heroLinks.addEventListener('click', scrollIntoMethod.bind('a'))

// handling the links on the product grid div
productGrid.addEventListener('click', scrollIntoMethod.bind('.btn--link'))

// implementing the smooth scroll to the links in the cases grid container
caseStudyGrid.addEventListener('click', scrollIntoMethod.bind('.btn--link'))

// implelmenting smooth scroll to the book a demp btn
cetaBannerSection.addEventListener('click', scrollIntoMethod.bind('.btn--dark'))

// implementing smooth scroll to conpany name in the footer
footerColProducts.addEventListener('click', scrollIntoMethod.bind('.footer-link'))
footerColResources.addEventListener('click', scrollIntoMethod.bind('.footer-link'))
footerColCompany.addEventListener('click', scrollIntoMethod.bind('.footer-link'))

// handling linkd with no target links
footerColLegal.addEventListener('click', function (e) { e.preventDefault() })

footerLangFirstLink.addEventListener('click', function (e) {
  e.preventDefault()
})
footerLangLastLink.addEventListener('click', function (e) {
  e.preventDefault()
})

// Implement link color changing functionality
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

///////////////Scroll Events funcionality ////////////////
// implementing dynamic year  (date formate functionality )
const dateFormating = function (date) {
  return new Intl.DateTimeFormat(navigator.language, { year: 'numeric' }).format(date);
};
year.textContent = dateFormating(new Date());


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

// implementing lazy loading for imges

const caseStudyImges = document.querySelector('.case-studies').querySelectorAll('img')
console.log(caseStudyImges);

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



