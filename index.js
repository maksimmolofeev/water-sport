const burger = document.querySelector('.content-burger');
const burgerBtn = document.querySelector('.content__burger-btn')
const content = document.querySelector('.content');
const footerNav = document.querySelector('.content__footer-nav');
const blockInfo = document.querySelector('.content__info__block');
const blockOnlineStore = document.querySelector('.content__online-store__block');
const criteriaBlock = document.querySelector('.content__search__options');
const criteria = document.querySelectorAll('.content__search__criteria');
const inputSearch = document.querySelector('.content__search__input');
const banner = document.querySelectorAll('.content__banner_img');
const contentBanner = document.querySelector('.content__banner');

// Открыть бургер-меню

burgerBtn.addEventListener('click', () => {
    content.style.opacity = '0.6';
    burger.classList.add('active-burger');
})

// Закрыть бургер-меню

burger.addEventListener('click', (e) => {
    burger.classList.remove('active-burger');
    content.style.opacity = '1';
})


// Аккордеоны внизу странцы, блок инфо

footerNav.addEventListener('click', (e) => {
    const { target } = e;
    if (target.id === 'info') {
        blockInfo.classList.toggle('active')
    }

    if (target.id === 'online-store') {
        blockOnlineStore.classList.toggle('active')
    }
})

// Критерии поиска

let index = 0;

function activeCriteria (i) {
    for (elem of criteria) {
        elem.classList.remove('criteria-active');
    }
    criteria[i].classList.add('criteria-active')
    inputSearch.placeholder = `Введите ${criteria[i].title}`
}

function nextCriteria () {
    if (index === criteria.length - 1) {
        index = 0;
        activeCriteria(index)
    } else {
        index++;
        activeCriteria(index)
    }
}

function prevCriteria () {
    if (index === 0) {
        index = criteria.length - 1;
        activeCriteria(index)
    } else {
        index--;
        activeCriteria(index)
    }
}

criteriaBlock.addEventListener('click', (e) => {
    const { target } = e;
    if (target.id === 'next') {
        nextCriteria()
    }

    if (target.id === 'previous') {
        prevCriteria()
    }

})

// Банер - слайдер

let indexBanner = 0;

function activeBanner (i) {
    for (elem of banner) {
        elem.classList.remove('active-banner');
    }
    banner[i].classList.add('active-banner')
};

function nextBanner () {
    if (indexBanner === banner.length - 1) {
        indexBanner = 0;
        activeBanner(indexBanner);
    } else {
        indexBanner++;
        activeBanner(indexBanner);
    }
}

setInterval(nextBanner, 2000);

// Высота слайдера

function init () {
    let imagesWidth = document.querySelector('.active-banner')
    let height = `${Math.floor(imagesWidth.width * 0.46)}px`
    contentBanner.style.height = height;
};


window.addEventListener('resize', init)
init()