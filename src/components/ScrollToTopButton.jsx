import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <motion.div
            className={`fixed bottom-4 right-4 z-50 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            animate={{ opacity: isVisible ? 1 : 0 }}
        >
            <button onClick={scrollToTop} className="p-3 bg-react-color dark:bg-dark-primary text-white rounded-full shadow-lg hover:bg-light-primary-70 dark:hover:bg-dark-primary-70 focus:outline-none">
                <FaArrowUp />
            </button>
        </motion.div>
    );
};

export default ScrollToTopButton;
