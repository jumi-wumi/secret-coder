'use strict';

const scrollBtn = document.getElementById('scroll-top');

scrollBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
