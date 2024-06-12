import { useState } from 'react';
import { FaBars, FaHome, FaUser, FaFolder, FaBriefcase, FaEnvelope, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-light-background dark:bg-dark-background h-20 flex justify-between items-center relative z-50">
            <div className="ml-6">
                <h4 className='text-4xl text-light-text-87 dark:text-dark-text-87'>Yuri</h4>
            </div>
            <button className="md:hidden text-2xl text-light-text-87 dark:text-dark-text-87 mr-5" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className="hidden md:flex md:flex-row md:items-center gap-5 mr-6 text-lg bg-transparent text-light-text-87 cursor-pointer dark:text-dark-text-87">
                <li><a href="#home"><FaHome className="hover:text-react-color dark:hover:text-dark-primary" title='Home' /></a></li>
                <li><a href="#about"><FaUser className="hover:text-react-color dark:hover:text-dark-primary" title='About' /></a></li>
                <li><a href="#projects"><FaFolder className="hover:text-react-color dark:hover:text-dark-primary" title='Projects' /></a></li>
                <li><a href="#cv"><FaBriefcase className="hover:text-react-color dark:hover:text-dark-primary" title='CV' /></a></li>
                <li><a href="#contact"><FaEnvelope className="hover:text-react-color dark:hover:text-dark-primary" title='Contact' /></a></li>
            </ul>
            <ul className={`md:hidden absolute top-20 left-0 w-full bg-light-background dark:bg-dark-background backdrop-filter backdrop-blur-sm dark:backdrop-filter dark:backdrop-blur-sm text-center text-light-text-87 dark:text-dark-text-87 transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'} pointer-events-${isMenuOpen ? 'auto' : 'none'}`}>
                <li className="my-4 hover:text-light-text-60 dark:hover:text-dark-text-60"><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li className="my-4 hover:text-light-text-60 dark:hover:text-dark-text-60"><a href="#about" onClick={toggleMenu}>About</a></li>
                <li className="my-4 hover:text-light-text-60 dark:hover:text-dark-text-60"><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li className="my-4 hover:text-light-text-60 dark:hover:text-dark-text-60"><a href="#cv" onClick={toggleMenu}>CV</a></li>
                <li className="my-4 hover:text-light-text-60 dark:hover:text-dark-text-60"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
