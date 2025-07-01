export default function Header() {

    
    return (
        <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex justify-between items-center px-4 gap-[0.3rem]">
                <img src="/logoGnRm2.png" alt="Sysjini Logo" className="h-[3rem]" style={{height: '3rem'}} />
                <a href="/" className="text-2xl font-bold text-forest-green animate-fade-in delay-100">Sysjini</a>
            </div>

            <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-forest-green transition duration-300 animate-fade-in delay-200">Home</a>
                <a href="/services" className="text-gray-700 hover:text-forest-green transition duration-300 animate-fade-in delay-300">Services</a>
                <a href="/about" className="text-gray-700 hover:text-forest-green transition duration-300 animate-fade-in delay-400">About Us</a>
                <a href="/blogs" className="text-gray-700 hover:text-forest-green transition duration-300 animate-fade-in delay-500">Blogs</a>
                <a href="/glossary" className="text-gray-700 hover:text-forest-green transition duration-300 animate-fade-in delay-600">Glossary</a>
                <a href="/contact" className="text-gray-700 hover:text-forest-green transition duration-300 animate-fade-in delay-700">Contact</a>
            </nav>

            <button id="mobile-menu-button" className="md:hidden text-gray-700 focus:outline-none animate-fade-in delay-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div id="mobile-menu" className="hidden md:hidden bg-white mt-2 py-2 shadow-lg rounded-lg mx-4">
            <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
            <a href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</a>
            <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
            <a href="/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blogs</a>
            <a href="/glossary" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Glossary</a>
            <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
    </header>
    );
};
