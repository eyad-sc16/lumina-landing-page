'use strict'

////////////////DOM Elements///////////////////

const learnMoreBtn = document.querySelector('.learn-more-btn')
const brandHeaderLink = document.getElementById('brand')
const siteNav = document.getElementById('site-nav');
const headerActionEle = document.querySelector('.header-actions')
const heroLinks = document.querySelector('.hero-actions')
const productGrid = document.querySelector('.products-grid')
const caseStudyGrid = document.querySelector('.cases-grid')

////////////////////// functionality ///////////////////

// handling scroll to learn more btn 
learnMoreBtn.addEventListener('click', function (e) {
  e.preventDefault()
  document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
});

// handling brand scroll 
brandHeaderLink.addEventListener('click', function (e) {
  e.preventDefault()

  if (e.target.classList.contains('inner-brand-element'))
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
});

// handling the smooth navigaton of the nav links
siteNav.addEventListener('click', function (e) {
  e.preventDefault()

  const lifeCollectionArr = [...this.children]

  // matching strategy 
  if (lifeCollectionArr.some(ele => ele === e.target)) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
});

// handling funtionality of header actons part
headerActionEle.addEventListener('click', function (e) {
  e.preventDefault()

  if ([...this.children].some(ele => ele === e.target)) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
});

// handling the scroll functionality for the the hero secton links
heroLinks.addEventListener('click', function (e) {
  e.preventDefault()

  if (e.target.classList.contains('btn')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
  }
});
// handling the links on the product grid div

productGrid.addEventListener('click', function (e) {
  e.preventDefault()

  if (e.target.classList.contains('btn--link')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
  }

});


// implementing the smooth scroll to the links in the cases grid container

caseStudyGrid.addEventListener('click', function (e) {
  e.preventDefault()

  if (e.target.classList.contains('btn--link')) {
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' })
  }
});