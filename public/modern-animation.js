// Modern Animation Script for Enhanced User Experience
(function() {
    'use strict';

    // Utility function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Enhanced intersection observer for animations
    function createAnimationObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add stagger effect for grouped elements
                    const siblings = entry.target.parentElement?.querySelectorAll('.animated-element');
                    if (siblings && siblings.length > 1) {
                        siblings.forEach((sibling, index) => {
                            if (sibling === entry.target) return;
                            setTimeout(() => {
                                sibling.classList.add('visible');
                            }, index * 100);
                        });
                    }
                }
            });
        }, options);

        // Observe all animated elements
        document.querySelectorAll('.animated-element').forEach(el => {
            observer.observe(el);
        });

        return observer;
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Parallax effect for background elements
    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * (element.dataset.parallax || 0.5);
                element.style.transform = `translateY(${rate}px)`;
            });
        }

        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', updateParallax, { passive: true });
        }
    }

    // Enhanced hover effects
    function initHoverEffects() {
        // Card hover effects
        document.querySelectorAll('.modern-card, .hover-lift').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.15)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
        });

        // Button magnetic effect
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }

    // Floating animation for background elements
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('.animate-float');
        
        floatingElements.forEach((element, index) => {
            const duration = 3000 + (index * 500); // Stagger durations
            const amplitude = 20 + (index * 5); // Different amplitudes
            
            function float() {
                element.style.transition = `transform ${duration}ms ease-in-out`;
                element.style.transform = `translateY(-${amplitude}px)`;
                
                setTimeout(() => {
                    element.style.transform = `translateY(${amplitude}px)`;
                }, duration / 2);
            }
            
            // Start floating with different delays
            setTimeout(() => {
                float();
                setInterval(float, duration);
            }, index * 200);
        });
    }

    // Gradient animation
    function initGradientAnimations() {
        const gradientElements = document.querySelectorAll('.animate-gradient');
        
        gradientElements.forEach(element => {
            element.style.backgroundSize = '200% 200%';
            element.style.animation = 'gradient-shift 4s ease infinite';
        });
    }

    // Loading animation
    function initLoadingAnimations() {
        // Fade in page content
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
            
            // Trigger initial animations
            setTimeout(() => {
                document.querySelectorAll('.animated-element').forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, index * 100);
                });
            }, 200);
        });
    }

    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                
                // Animate menu items
                const menuItems = mobileMenu.querySelectorAll('a');
                menuItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'all 0.3s ease-out';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 50);
                });
            });
        }
    }

    // Scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #10b981, #059669);
            z-index: 9999;
            transition: width 0.1s ease-out;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = scrolled + '%';
        }, { passive: true });
    }

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Initialize all animations when DOM is ready
    function init() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            createAnimationObserver();
            initFloatingElements();
            initGradientAnimations();
            initParallax();
            initScrollProgress();
        }
        
        // Always initialize these for functionality
        initSmoothScroll();
        initHoverEffects();
        initMobileMenu();
        initLoadingAnimations();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
