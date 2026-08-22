'use strict'

////////////////DOM Elements///////////////////

const learnMoreBtn = document.querySelector('.learn-more-btn')
const brandHeaderLink = document.querySelector('.brand')
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


////////////////////// functionality ///////////////////
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