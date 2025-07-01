import styles from './Footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Sysjini. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
                </div>
            </div>
        </footer>
    )
}