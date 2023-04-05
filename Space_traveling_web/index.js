const nav = document.querySelector('.primary-navigation');
const open_close_icon = document.querySelector('.mobile-toggler-icon');


open_close_icon.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-visible');

    if (isOpen === 'false') {
        nav.setAttribute('data-visible', true);
        open_close_icon.setAttribute('aria-expanded', true);
    }

    else {
        nav.setAttribute('data-visible', false);
        open_close_icon.setAttribute('aria-expanded', false);
    }


})