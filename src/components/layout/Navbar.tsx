import { useTranslation } from 'react-i18next';
import logo from '@/assets/images/logo.svg';
import LanguageToggle from '@/components/ui/LanguageToggle';

const Navbar = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const sectionPositions = {
            hero: 0,
            about: window.innerHeight,
            skills: window.innerHeight * 2,
            projects: window.innerHeight * 3
        };

        // Desactivar temporalmente el comportamiento de scroll suave
        document.documentElement.style.scrollBehavior = 'auto';

        // Realizar el scroll
        window.scrollTo({
            top: sectionPositions[sectionId as keyof typeof sectionPositions],
            behavior: 'auto'
        });

        // Reactivar el comportamiento de scroll suave después de un breve delay
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 100);
    };

    return (
        <header className="fixed top-0 left-0 w-full text-white z-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                <button onClick={() => scrollToSection('hero')} className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </button>
                <div className="flex items-center space-x-6">
                    <nav>
                        <ul className="flex space-x-6 text-lg">
                            <li>
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {t('nav.home')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {t('nav.about')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('skills')}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {t('nav.skills')}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {t('nav.projects')}
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <LanguageToggle />
                </div>
            </div>
        </header>
    );
};

export default Navbar; 