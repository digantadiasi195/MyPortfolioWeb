// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.education-item, .skill-category, .interest-item, .project-item');
    
    // Initial check for elements in viewport
    checkReveal();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkReveal);
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    }
    
    // Skill hover effect
    const skillItems = document.querySelectorAll('.skill-list li');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });
    
    // Project item hover effect
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const heading = this.querySelector('h3');
            if (heading) {
                heading.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary');
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const heading = this.querySelector('h3');
            if (heading) {
                heading.style.color = '';
            }
        });
    });
    
    // Smooth scrolling for navigation (if you add navigation later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a subtle parallax effect to the header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition < 600) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
});