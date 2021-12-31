// menu toggle
const toggleMenu = (toggleId, menuId) => {
    let toggle = document.getElementById(toggleId);
    let menu = document.getElementById(menuId);

    if(toggle && menu){
        toggle.addEventListener('click',()=> {
            menu.classList.toggle('show');
        })
    }
}
toggleMenu('menuToggle', 'menuItems');

// remove toggle menu by clicking menu link
const menuLink = document.querySelectorAll(".nav-link");
 
function removeLink(){
    let menu = document.getElementById("menuItems");
    menu.classList.remove('show');
}
menuLink.forEach((n) => n.addEventListener('click', removeLink));

// active menu link by scrolling the page
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-items a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav-items a[href*=' + sectionId + ']').classList.remove('active-link');

        }
    })
}
window.addEventListener('scroll', scrollActive)

// header background change by scrolling the page
function changeHeaderBg(){
    const header = document.querySelector('.header');
    if(window.scrollY >= 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
window.addEventListener('scroll', changeHeaderBg);

// scroll top
function scrollShow(){
    const scrollIcon = document.getElementById('scrollTop')
    if(this.scrollY >= 500){
        scrollIcon.classList.add('show-scroll');
    }else{
        scrollIcon.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollShow);

// Dark mode / Light mode theme
const themeButton = document.getElementById('changeTheme');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-toggle-on';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'fa-toggle-off' : 'fa-toggle-on';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme);
    document.body.classList[selectedTheme === 'fa-toggle-off' ? 'add' : 'remove'] (iconTheme);
}
themeButton.addEventListener('click', function(){
    document.body.classList.toggle(darkTheme);
    document.body.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})