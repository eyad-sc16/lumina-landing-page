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
const scrollIntoMethod = function (eventElement, clickedBtnClass) {
  eventElement.addEventListener('click', function (e) {
    e.preventDefault()

    const clicked = e.target.closest(clickedBtnClass)

    // Garde clause
    if (!clicked) return

    document.querySelector(clicked.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
  })
};

// handling defult links
const handlingDefultLinks = function (eventElement) {
  eventElement.addEventListener('click', function (e) {
    e.preventDefault()
  });
}

// handling scroll to learn more btn 
scrollIntoMethod(learnMoreBtn, 'a')

// handling brand scroll 
scrollIntoMethod(brandHeaderLink, 'a')
scrollIntoMethod(footerBrandlink, 'a')

// handling the smooth navigaton of the nav links
scrollIntoMethod(siteNav, 'a')

// handling funtionality of header actons part
scrollIntoMethod(headerActionEle, 'a')

// handling the scroll functionality for the the hero secton links
scrollIntoMethod(heroLinks, 'a')

// handling the links on the product grid div
scrollIntoMethod(productGrid, '.btn--link')

// implementing the smooth scroll to the links in the cases grid container
scrollIntoMethod(caseStudyGrid, '.btn--link')

// implelmenting smooth scroll to the book a demp btn
scrollIntoMethod(cetaBannerSection, '.btn--dark')

// implementing smooth scroll to conpany name in the footer
scrollIntoMethod(footerColProducts, '.footer-link')
scrollIntoMethod(footerColResources, '.footer-link')
scrollIntoMethod(footerColCompany, '.footer-link')

// handling linkd with no target links
handlingDefultLinks(footerColLegal)
handlingDefultLinks(footerLangFirstLink)
handlingDefultLinks(footerLangLastLink)
