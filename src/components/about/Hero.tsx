import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

interface HeroProps {
    name: string;
    title: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
    avatarUrl: string;
}

const Hero = ({ name, title, githubUrl, linkedinUrl, email, avatarUrl }: HeroProps) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center text-white py-12 px-4 relative z-[60]">
            <div className="text-center md:text-left md:mr-8">
                <h1 className="text-5xl font-bold text-white mb-2 flex justify-center">{name}</h1>
                <p className="text-xl text-gray-300 flex justify-center">{title}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="GitHub"
                    >
                        <SiGithub className="w-6 h-6" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin className="w-6 h-6" />
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Email"
                    >
                        <SiGmail className="w-6 h-6" />
                    </a>
                </div>
            </div>
            <img
                src={avatarUrl}
                alt={`${name} Avatar`}
                className="w-64 h-64 md:w-96 md:h-96 rounded-full" />
        </div>
    );
};

export default Hero; 