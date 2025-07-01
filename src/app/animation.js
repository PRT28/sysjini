// Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex', 'flex-col');
            } else {
                mobileMenu.classList.remove('flex', 'flex-col');
                mobileMenu.classList.add('hidden');
            }
        });

        // Intersection Observer for animations
        const animateOnScroll = (elements) => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(entry.target.dataset.animationClass || 'animate-fade-in-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1 // Trigger when 10% of the element is visible
            });

            elements.forEach(element => {
                element.classList.add('animated-element'); // Mark as animated for initial opacity 0
                observer.observe(element);
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            const elementsToAnimate = document.querySelectorAll('.animated-element');
            animateOnScroll(elementsToAnimate);
            const headerElements = document.querySelectorAll('header .animate-fade-in');
            headerElements.forEach(el => {
                el.style.opacity = 0; // Ensure they start hidden
                el.classList.add('animate-fade-in');
            });
        });