const menu = document.querySelector('.menu'),
logo = document.querySelector('.logo'),
homeLink = document.querySelector('.home'),
closeBtn = document.querySelector('.close'),
navLinks = document.querySelectorAll('.list li'),
navUl = document.querySelector('.list');

logo.addEventListener('click',()=>{
    homeLink.click();
})

menu.addEventListener('click', ()=>{
    navUl.classList.toggle('none');
    navUl.classList.add('show-menu');
    menu.classList.toggle('none');
    closeBtn.classList.toggle('none');
})

closeBtn.addEventListener('click', ()=>{
    navUl.classList.add('hide-menu');
    navUl.classList.remove('show-menu');
    menu.classList.toggle('none');
    closeBtn.classList.toggle('none');

    setTimeout(()=>{
        navUl.classList.toggle('none');
        navUl.classList.remove('hide-menu');
    }, 2000)
})

navLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
        navUl.classList.add('hide-menu');
        navUl.classList.remove('show-menu');
        menu.classList.toggle('none');
        closeBtn.classList.toggle('none');

        setTimeout(()=>{
            navUl.classList.toggle('none');
            navUl.classList.remove('hide-menu');
        }, 500)
    })
})