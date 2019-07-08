const btnExpand = document.querySelector('.btn-expand');
const navMenu = document.querySelector('.nav-links');

btnExpand.addEventListener('click', () => {
  if (btnExpand.classList.contains('crossed')) {
    // Suvažiuoja
    btnExpand.classList.remove('crossed');
    navMenu.classList.remove('show');
    setTimeout(() => navMenu.classList.add('d-none'), 300);
  } else {
    // Išvažiuoja
    btnExpand.classList.add('crossed');
    navMenu.classList.remove('d-none');
    setTimeout(() => navMenu.classList.add('show'), 0);
  }
})