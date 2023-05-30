(()=>{"use strict";var __webpack_modules__={"./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/()=>{eval("\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var header = document.querySelector('.header');\n  var wrapper = document.querySelector('.wrapper');\n  var headerMenu = document.querySelector('.header__menu');\n  var scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';\n  var burger = document.querySelector('.header__burger');\n  var headerLinks = document.querySelectorAll('.header__link'); //Header\n\n  function headerMenuActions() {\n    if (headerMenu.classList.contains('active')) {\n      document.body.style.paddingRight = scrollWidth;\n      header.style.paddingRight = scrollWidth;\n      document.body.classList.add('hidden');\n    } else {\n      document.body.classList.remove('hidden');\n      document.body.style.paddingRight = '';\n      header.style.paddingRight = '';\n    }\n  }\n\n  function removeClasses() {\n    if (headerMenu.classList.contains('active')) {\n      headerMenu.classList.remove('active');\n    }\n\n    if (burger.classList.contains('active')) {\n      burger.classList.remove('active');\n    }\n  }\n\n  burger.addEventListener('click', function () {\n    burger.classList.toggle('active');\n    headerMenu.classList.toggle('active');\n    headerMenuActions();\n  });\n  headerLinks.forEach(function (link) {\n    link.addEventListener('click', function () {\n      removeClasses();\n      headerMenuActions();\n    });\n  });\n\n  function headerOnScroll() {\n    if (window.scrollY > 0) {\n      header.classList.add('active');\n    } else {\n      header.classList.remove('active');\n    }\n  }\n\n  window.addEventListener('scroll', headerOnScroll);\n  window.addEventListener('load', headerOnScroll); //Range Slider\n\n  var stepSlider = document.querySelector('.slider-form__slider');\n\n  if (stepSlider) {\n    noUiSlider.create(stepSlider, {\n      start: [75],\n      step: 1,\n      range: {\n        'min': [0],\n        'max': [100]\n      }\n    });\n  }\n\n  var sliderValue = document.querySelector('.slider-form__number');\n  stepSlider.noUiSlider.on('update', function (values) {\n    sliderValue.textContent = Math.round(values);\n  }); //Select    \n\n  var select = document.querySelector('.form-order__select');\n  var choices = new Choices(select, {\n    shouldSort: false,\n    position: 'bottom',\n    searchEnabled: false,\n    itemSelectText: ''\n  });\n  var selectList = document.querySelector('.choices__list[aria-expanded]');\n  selectList.setAttribute('data-simplebar', '');\n});\n\n//# sourceURL=webpack://gulpstarter/./src/js/script.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/script.js"]()})();
//# sourceMappingURL=script.js.map
