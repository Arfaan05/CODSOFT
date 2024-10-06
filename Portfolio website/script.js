
let lastScrollTop = 0; 
const header = document.querySelector('header'); 


window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

 
    if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)'; 
    } else if (scrollTop < lastScrollTop) {
        header.style.transform = 'translateY(0)'; 
    }

    
    if (scrollTop <= 0) {
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault(); 

        const targetId = anchor.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 

      
        if (targetSection) { 
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
