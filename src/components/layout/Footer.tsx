import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { siteConfig } from '@/constants/config';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md text-white py-4 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-300">&copy; {new Date().getFullYear()} {siteConfig.name}. {t('footer.rights')}</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <SiGithub className="w-6 h-6" />
                        </a>
                        <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <SiLinkedin className="w-6 h-6" />
                        </a>
                        <a href={`mailto:${siteConfig.links.email}`} className="text-gray-300 hover:text-white transition-colors">
                            <SiGmail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 