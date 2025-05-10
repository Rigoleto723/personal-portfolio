import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Cambiar idioma"
        >
            <Globe className="w-5 h-5" />
            <span className="uppercase text-sm font-medium">
                {i18n.language === 'es' ? 'EN' : 'ES'}
            </span>
        </button>
    );
};

export default LanguageToggle; 