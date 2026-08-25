'use strict'

////////////////DOM Elements///////////////////

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
const footerBrandlink = document.querySelector('.footer-brand');
const footerColResources = footer.querySelector('.footer-col-resources')
const footerColProducts = footer.querySelector('.footer-col-products')
const footerColCompany = footer.querySelector('.footer-col-company')
const footerColLegal = footer.querySelector('.footer-col-legal')
const footerLangFirstLink = footer.querySelector('.footer-lang').firstElementChild
const footerLangLastLink = footer.querySelector('.footer-lang').lastElementChild
const stateGrid = document.querySelector('.stats-grid')
const randomalyNumsContianers = document.querySelectorAll('.randomaly-containers')
const allGeneralFadeelements = document.querySelectorAll('.general-fade-up-elements')
const allH2 = document.querySelectorAll('.fade-up-effect-title')
const allSecrionsLede = document.querySelectorAll('.section-lede')
const allCardFeatures = document.querySelectorAll('.card--feature')
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

let conter = 20
const randomDisplayFuncionality = function (enties, observe) {
  enties.forEach(entry => {

    if (!entry.isIntersecting) return;

    const originalElements = document.querySelectorAll('.randomaly-nums-effects')

    console.log(originalElements);

    const originalContentsArr = []

    originalElements.forEach((ele) => {
      originalContentsArr.push(ele.textContent)
    });
    // console.log(originalElements);
    console.log(originalContentsArr);

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


// implementing the fade up effects on sections titles (h2) on scroll
const interObservAPIFuncionality = function (enties, observer) {
  enties.forEach(entry => {
    if (!entry.isIntersecting) return

    entry.target.classList.remove(this)
    observer.unobserve(entry.target)
  });
};


const h2Observer = new IntersectionObserver(interObservAPIFuncionality.bind('fade-up-sections-titles'), { root: null, threshold: 0, rootMargin: '20px' })
allH2.forEach(h2 => {
  h2Observer.observe(h2)
  h2.classList.add('fade-up-sections-titles')
});

// implementing the fade up effect on general-fade-up-elements
const sectionEyebrowObserver = new IntersectionObserver(interObservAPIFuncionality.bind('fade-up'), { root: null, threshold: 0.12 })
allGeneralFadeelements.forEach(eyebrow => {
  sectionEyebrowObserver.observe(eyebrow)
  eyebrow.classList.add('fade-up')
});


// implementing the fade up effect on sections lede text

const ledeObserver = new IntersectionObserver(interObservAPIFuncionality.bind('fade-up-section-lede'), { root: null, threshold: 0, rootMargin: '-20px' })
allSecrionsLede.forEach(lede => {
  ledeObserver.observe(lede)
  lede.classList.add('fade-up-section-lede')
});

// implementing the fade up effect on sections lede text

const cardFeaturesObserver = new IntersectionObserver(interObservAPIFuncionality.bind('card-blur-effect'), { root: null, threshold: 0.33 })
allCardFeatures.forEach(card => {
  cardFeaturesObserver.observe(card)
  card.classList.add('card-blur-effect')
});

