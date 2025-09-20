// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.classList.add('loading');
    
    // Smooth scroll for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const content = faqItem.querySelector('p');
            
            // Toggle visibility
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                content.style.animation = 'fadeIn 0.3s ease forwards';
            } else {
                content.style.display = 'none';
            }
        });
        
        // Hide all FAQ answers initially except the first one
        const content = item.parentElement.querySelector('p');
        if (item !== faqItems[0]) {
            content.style.display = 'none';
        }
    });
    
    // CTA button functionality
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.toLowerCase();
            
            if (text.includes('fordele')) {
                document.querySelector('#benefits').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else if (text.includes('forskningsresultater') || text.includes('forskning')) {
                document.querySelector('#research').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    });
    
    // Contact form functionality
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#e53e3e';
                } else {
                    input.style.borderColor = '#e2e8f0';
                }
            });
            
            if (isValid) {
                // Simulate form submission
                alert('Tak for din besked! Vi kontakter dig hurtigst muligt.');
                this.reset();
            } else {
                alert('Udfyld venligst alle felter.');
            }
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.benefit-card, .study, .faq-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'linear-gradient(135deg, rgba(44, 90, 160, 0.95), rgba(74, 158, 255, 0.95))';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #2c5aa0, #4a9eff)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Add floating animation to ice cube
    const iceCube = document.querySelector('.ice-cube');
    if (iceCube) {
        iceCube.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        });
    }
    
    // Console message for developers
    console.log('🧊 Frossen Kogt Vand website loaded successfully!');
    console.log('💧 Experience the power of boiled and frozen water!');
});