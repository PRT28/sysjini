// Advanced Timeline Animations for Enhanced User Experience
(function() {
    'use strict';

    // Timeline Animation Controller
    class TimelineController {
        constructor() {
            this.steps = [];
            this.currentStep = 0;
            this.isAnimating = false;
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
            this.setupInteractiveElements();
            this.setupProgressAnimation();
            this.setupHoverEffects();
        }

        setupIntersectionObserver() {
            const options = {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateStep(entry.target);
                    }
                });
            }, options);

            // Observe all timeline steps
            document.querySelectorAll('.timeline-step').forEach((step, index) => {
                this.steps.push(step);
                observer.observe(step);
                
                // Add sequential delay for staggered animation
                step.style.animationDelay = `${index * 0.2}s`;
            });
        }

        animateStep(stepElement) {
            if (stepElement.classList.contains('visible')) return;
            
            stepElement.classList.add('visible');
            
            // Animate step number with bounce effect
            const stepNumber = stepElement.querySelector('.step-number');
            if (stepNumber) {
                setTimeout(() => {
                    stepNumber.classList.add('animate-number-bounce');
                }, 300);
            }

            // Animate progress line
            this.animateProgressLine(stepElement);
            
            // Add particle effects
            this.addParticleEffect(stepElement);
        }

        animateProgressLine(stepElement) {
            // Progress line is now handled by scroll-based animation
            // This method can be used for additional step-specific animations
            const stepIndex = Array.from(this.steps).indexOf(stepElement);

            // Add glow effect to the current step number
            const stepNumber = stepElement.querySelector('.step-number');
            if (stepNumber) {
                stepNumber.classList.add('animate-glow-pulse');
            }
        }

        addParticleEffect(stepElement) {
            const stepNumber = stepElement.querySelector('.step-number');
            if (!stepNumber) return;

            // Create floating particles
            for (let i = 0; i < 6; i++) {
                const particle = document.createElement('div');
                particle.className = 'timeline-particle';
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: linear-gradient(45deg, #10b981, #059669);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 1000;
                `;
                
                stepNumber.appendChild(particle);
                
                // Animate particle
                this.animateParticle(particle, i);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 2000);
            }
        }

        animateParticle(particle, index) {
            const angle = (index * 60) * (Math.PI / 180); // 60 degrees apart
            const distance = 50 + Math.random() * 30;
            const duration = 1500 + Math.random() * 500;
            
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            particle.animate([
                {
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${endX}px, ${endY}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
        }

        setupInteractiveElements() {
            // Add click interactions to step numbers
            document.querySelectorAll('.step-number').forEach((stepNumber, index) => {
                stepNumber.addEventListener('click', () => {
                    this.highlightStep(index);
                });
                
                stepNumber.addEventListener('mouseenter', () => {
                    this.previewStep(index);
                });
                
                stepNumber.addEventListener('mouseleave', () => {
                    this.resetPreview(index);
                });
            });
        }

        highlightStep(index) {
            // Remove previous highlights
            document.querySelectorAll('.timeline-step').forEach(step => {
                step.classList.remove('highlighted');
            });
            
            // Add highlight to selected step
            if (this.steps[index]) {
                this.steps[index].classList.add('highlighted');
                this.createRippleEffect(this.steps[index]);
            }
        }

        previewStep(index) {
            if (this.steps[index]) {
                this.steps[index].style.transform = 'scale(1.05)';
                this.steps[index].style.zIndex = '10';
            }
        }

        resetPreview(index) {
            if (this.steps[index]) {
                this.steps[index].style.transform = '';
                this.steps[index].style.zIndex = '';
            }
        }

        createRippleEffect(stepElement) {
            const ripple = document.createElement('div');
            ripple.className = 'timeline-ripple';
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 0;
            `;
            
            stepElement.appendChild(ripple);
            
            // Animate ripple
            ripple.animate([
                { width: '0px', height: '0px', opacity: 1 },
                { width: '300px', height: '300px', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            };
        }

        setupProgressAnimation() {
            // Setup scroll-based timeline progress animation
            this.setupScrollBasedProgress();

            // Also setup intersection-based animation as fallback
            const timelineLine = document.querySelector('.timeline-line');
            if (timelineLine) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.startScrollProgressTracking();
                        }
                    });
                }, { threshold: 0.1 });

                observer.observe(timelineLine);
            }
        }

        setupScrollBasedProgress() {
            const timelineContainer = document.querySelector('.timeline-container');
            const timelineProgress = document.querySelector('#timeline-progress');

            if (!timelineContainer || !timelineProgress) return;

            // Get all step numbers for calculating positions
            const stepNumbers = Array.from(document.querySelectorAll('.timeline-step-number'));

            const updateProgress = () => {
                const containerRect = timelineContainer.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const viewportCenter = windowHeight / 2;

                // Calculate which steps are active based on scroll position
                let activeSteps = 0;
                let currentStepProgress = 0;

                stepNumbers.forEach((stepNumber, index) => {
                    const stepRect = stepNumber.getBoundingClientRect();
                    const stepCenter = stepRect.top + stepRect.height / 2;

                    if (stepCenter <= viewportCenter) {
                        activeSteps = index + 1;

                        // Calculate progress within current step
                        const nextStepNumber = stepNumbers[index + 1];
                        if (nextStepNumber) {
                            const nextStepRect = nextStepNumber.getBoundingClientRect();
                            const nextStepCenter = nextStepRect.top + nextStepRect.height / 2;
                            const stepDistance = nextStepCenter - stepCenter;
                            const progressInStep = Math.max(0, Math.min(1, (viewportCenter - stepCenter) / stepDistance));
                            currentStepProgress = progressInStep;
                        } else {
                            currentStepProgress = 1;
                        }
                    }
                });

                // Calculate total progress
                const totalProgress = Math.max(0, Math.min(1, (activeSteps - 1 + currentStepProgress) / stepNumbers.length));

                // Apply smooth easing
                const easedProgress = this.easeInOutCubic(totalProgress);

                // Update line height to connect through step numbers
                const lineHeight = this.calculateLineHeight(easedProgress, stepNumbers, timelineContainer);
                timelineProgress.style.height = `${lineHeight}%`;

                // Update step animations and highlights
                this.updateStepAnimations(totalProgress, activeSteps);
            };

            // Throttled scroll handler for performance
            let ticking = false;
            const scrollHandler = () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        updateProgress();
                        ticking = false;
                    });
                    ticking = true;
                }
            };

            window.addEventListener('scroll', scrollHandler, { passive: true });
            window.addEventListener('resize', scrollHandler, { passive: true });

            // Initial call
            updateProgress();
        }

        calculateLineHeight(progress, stepNumbers, container) {
            if (stepNumbers.length === 0) return 0;

            const containerRect = container.getBoundingClientRect();
            const containerHeight = containerRect.height;

            // Calculate the position of the last active step
            const lastStepIndex = Math.floor(progress * stepNumbers.length);
            const progressInStep = (progress * stepNumbers.length) % 1;

            if (lastStepIndex >= stepNumbers.length) {
                return 100; // Full height
            }

            // Get the position of the current step relative to container
            const currentStep = stepNumbers[lastStepIndex];
            const currentStepRect = currentStep.getBoundingClientRect();
            const currentStepPosition = currentStepRect.top - containerRect.top + currentStepRect.height / 2;

            // If there's a next step, interpolate between current and next
            if (lastStepIndex < stepNumbers.length - 1 && progressInStep > 0) {
                const nextStep = stepNumbers[lastStepIndex + 1];
                const nextStepRect = nextStep.getBoundingClientRect();
                const nextStepPosition = nextStepRect.top - containerRect.top + nextStepRect.height / 2;

                const interpolatedPosition = currentStepPosition + (nextStepPosition - currentStepPosition) * progressInStep;
                return Math.max(0, Math.min(100, (interpolatedPosition / containerHeight) * 100));
            }

            return Math.max(0, Math.min(100, (currentStepPosition / containerHeight) * 100));
        }

        startScrollProgressTracking() {
            // This method is called when timeline enters viewport
            // Additional setup can be added here if needed
        }

        updateStepAnimations(progress, activeSteps) {
            // Animate steps based on overall progress
            this.steps.forEach((step, index) => {
                const stepNumber = step.querySelector('.step-number');

                if (index < activeSteps) {
                    // Step is active
                    if (!step.classList.contains('visible')) {
                        setTimeout(() => {
                            this.animateStep(step);
                        }, index * 150);
                    }

                    // Add active glow to step number
                    if (stepNumber) {
                        stepNumber.classList.add('animate-glow-pulse');
                    }
                } else {
                    // Step is not yet active
                    if (stepNumber) {
                        stepNumber.classList.remove('animate-glow-pulse');
                    }
                }

                // Highlight current step
                if (index === activeSteps - 1) {
                    step.classList.add('current-step');
                } else {
                    step.classList.remove('current-step');
                }
            });
        }

        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }

        setupHoverEffects() {
            // Enhanced hover effects for timeline cards
            document.querySelectorAll('.timeline-step .modern-card').forEach(card => {
                card.addEventListener('mouseenter', (e) => {
                    this.createHoverGlow(e.target);
                });
                
                card.addEventListener('mousemove', (e) => {
                    this.updateCardTilt(e);
                });
                
                card.addEventListener('mouseleave', (e) => {
                    this.resetCardTilt(e.target);
                });
            });
        }

        createHoverGlow(card) {
            // Add dynamic glow effect
            card.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(16, 185, 129, 0.1)';
        }

        updateCardTilt(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / (rect.width / 2);
            const deltaY = (e.clientY - centerY) / (rect.height / 2);
            
            const tiltX = deltaY * 5; // Max 5 degrees
            const tiltY = deltaX * -5; // Max 5 degrees
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        }

        resetCardTilt(card) {
            card.style.transform = '';
            card.style.boxShadow = '';
        }
    }

    // Auto-scroll timeline navigation
    function setupTimelineNavigation() {
        const steps = document.querySelectorAll('.timeline-step');
        let currentIndex = 0;
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && currentIndex < steps.length - 1) {
                currentIndex++;
                scrollToStep(currentIndex);
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                scrollToStep(currentIndex);
            }
        });
        
        function scrollToStep(index) {
            if (steps[index]) {
                steps[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    }

    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                new TimelineController();
                setupTimelineNavigation();
            });
        } else {
            new TimelineController();
            setupTimelineNavigation();
        }
    }

    init();

})();
