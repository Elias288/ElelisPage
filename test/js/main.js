const toggle = document.querySelector('.toggle'),
    topbar = document.querySelector('.topbar'),
    navigation = document.querySelector('.navigation'),
    main = document.querySelector('.main'),
    links = document.querySelectorAll('.navigation ul li a');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('activo');
    topbar.classList.toggle('activo');
    navigation.classList.toggle('activo');
    main.classList.toggle('activo');
});

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', () => {
        toggleMenu();
    });
}

function toggleMenu() {
    const navigation = document.querySelector('.navigation'),
        main = document.querySelector('.main');
    navigation.classList.remove('activo');
    main.classList.remove('activo');
}