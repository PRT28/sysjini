'use client'
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            retryCount: 0,
            isHydrationError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error for debugging
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // Check if it's a hydration error
        const isHydrationError = error.message?.includes('hydration') ||
                                error.message?.includes('Hydration') ||
                                error.message?.includes('server HTML') ||
                                error.message?.includes('client') ||
                                errorInfo.componentStack?.includes('hydration');

        this.setState({
            error,
            errorInfo,
            isHydrationError
        });

        // Auto-retry for hydration errors (up to 2 times)
        if (isHydrationError && this.state.retryCount < 2) {
            setTimeout(() => {
                this.setState({
                    hasError: false,
                    error: null,
                    errorInfo: null,
                    retryCount: this.state.retryCount + 1
                });
            }, 1500);
        }
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return (
                <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-forest-50 flex items-center justify-center p-4">
                    <div className="max-w-md w-full text-center">
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                            <p className="text-gray-600 mb-6">
                                We&apos;re experiencing a temporary issue. Please refresh the page or try again later.
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-gradient-to-r from-emerald-600 to-forest-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-forest-700 transition-all duration-300"
                            >
                                Refresh Page
                            </button>
                            <div className="mt-4 text-sm text-gray-500">
                                <p>If the problem persists, please contact us:</p>
                                <a href="mailto:hello@sysjini.in" className="text-emerald-600 hover:text-emerald-800">
                                    hello@sysjini.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
