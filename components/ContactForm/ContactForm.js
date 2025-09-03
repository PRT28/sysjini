'use client'
import { useState, useEffect } from 'react';

const ContactForm = ({ onSuccess, isModal = false }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
    });

    const [formState, setFormState] = useState({
        isSubmitting: false,
        isSubmitted: false,
        errors: [],
        successMessage: ''
    });

    // Initialize component
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear errors when user starts typing
        if (formState.errors.length > 0) {
            setFormState(prev => ({
                ...prev,
                errors: []
            }));
        }
    };

    // Validate form data
    const validateForm = () => {
        const errors = [];
        
        if (!formData.name.trim() || formData.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.push('Please provide a valid email address');
        }
        
        if (!formData.subject.trim() || formData.subject.trim().length < 5) {
            errors.push('Subject must be at least 5 characters long');
        }
        
        if (!formData.message.trim() || formData.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form
        const errors = validateForm();
        if (errors.length > 0) {
            setFormState(prev => ({
                ...prev,
                errors
            }));
            return;
        }
        
        setFormState(prev => ({
            ...prev,
            isSubmitting: true,
            errors: []
        }));
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                setFormState({
                    isSubmitting: false,
                    isSubmitted: true,
                    errors: [],
                    successMessage: result.message
                });
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                
                // Show success for 5 seconds then reset (or close modal)
                setTimeout(() => {
                    setFormState(prev => ({
                        ...prev,
                        isSubmitted: false,
                        successMessage: ''
                    }));

                    // If in modal mode and onSuccess callback provided, close modal
                    if (isModal && onSuccess) {
                        onSuccess();
                    }
                }, isModal ? 2000 : 5000); // Shorter delay for modal
                
            } else {
                setFormState(prev => ({
                    ...prev,
                    isSubmitting: false,
                    errors: result.errors || [result.message]
                }));
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            setFormState(prev => ({
                ...prev,
                isSubmitting: false,
                errors: ['Network error. Please check your connection and try again.']
            }));
        }
    };

    // Show loading state
    if (isLoading) {
        return (
            <div className={`${isModal ? 'p-0' : 'modern-card p-8 rounded-2xl'} flex items-center justify-center min-h-[400px]`}>
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading form...</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`${isModal ? 'p-0' : 'modern-card p-8 rounded-2xl'} ${!isModal ? 'animated-element animate-scale-in delay-200' : ''}`}>
            {/* Success Message */}
            {formState.isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h4 className="text-emerald-800 font-semibold">Message Sent Successfully!</h4>
                            <p className="text-emerald-700 text-sm mt-1">{formState.successMessage}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Messages */}
            {formState.errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-start">
                        <svg className="w-6 h-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h4 className="text-red-800 font-semibold">Please fix the following errors:</h4>
                            <ul className="text-red-700 text-sm mt-1 list-disc list-inside">
                                {formState.errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className={`${isModal ? 'space-y-4' : 'space-y-6'}`}>
                <div className={`grid grid-cols-1 ${isModal ? 'gap-4' : 'md:grid-cols-2 gap-6'}`}>
                    <div>
                        <label htmlFor="name" className={`block text-gray-700 text-sm font-semibold ${isModal ? 'mb-2' : 'mb-3'}`}>
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 ${isModal ? 'py-2.5' : 'py-3'} border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300`}
                            placeholder="Your Name"
                            required
                            disabled={formState.isSubmitting}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className={`block text-gray-700 text-sm font-semibold ${isModal ? 'mb-2' : 'mb-3'}`}>
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 ${isModal ? 'py-2.5' : 'py-3'} border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300`}
                            placeholder="your@example.com"
                            required
                            disabled={formState.isSubmitting}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className={`block text-gray-700 text-sm font-semibold ${isModal ? 'mb-2' : 'mb-3'}`}>
                        Subject *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 ${isModal ? 'py-2.5' : 'py-3'} border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300`}
                        placeholder="Subject of your inquiry"
                        required
                        disabled={formState.isSubmitting}
                    />
                </div>
                <div>
                    <label htmlFor="budget" className={`block text-gray-700 text-sm font-semibold ${isModal ? 'mb-2' : 'mb-3'}`}>
                        Budget Range: ₹20,000 - ₹5,00,000
                    </label>
                    <div className="space-y-4">
                        <input
                            type="range"
                            id="budget"
                            name="budget"
                            min="20000"
                            max="500000"
                            step="5000"
                            defaultValue="100000"
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                                background: 'linear-gradient(to right, #10b981 0%, #10b981 30%, #e5e7eb 30%, #e5e7eb 100%)'
                            }}
                            onInput={(e) => {
                                const value = parseInt(e.target.value);
                                const percentage = ((value - 20000) / (500000 - 20000)) * 100;
                                e.target.style.background = `linear-gradient(to right, #10b981 0%, #10b981 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
                                e.target.nextElementSibling.textContent = `₹${value.toLocaleString('en-IN')}`;

                                // Update form data
                                handleChange({
                                    target: {
                                        name: 'budget',
                                        value: value.toString()
                                    }
                                });
                            }}
                            disabled={formState.isSubmitting}
                        />
                        <div className="text-center text-gray-700 font-semibold text-lg">
                            ₹1,00,000
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className={`block text-gray-700 text-sm font-semibold ${isModal ? 'mb-2' : 'mb-3'}`}>
                        Project Details (Optional)
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={isModal ? "3" : "4"}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 ${isModal ? 'py-2.5' : 'py-3'} border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none`}
                        placeholder="Brief project description (optional)..."
                        disabled={formState.isSubmitting}
                    ></textarea>
                </div>
                
                <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className={`w-full ${isModal ? 'py-3 text-base' : 'py-4 text-lg'} rounded-xl font-semibold shadow-lg transition-all duration-300 transform ${
                        formState.isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-600 to-forest-600 hover:from-emerald-700 hover:to-forest-700 hover:scale-105 hover:shadow-xl'
                    } text-white`}
                >
                    {formState.isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                        </div>
                    ) : (
                        <div className="flex items-center justify-center">
                            Send Message
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
