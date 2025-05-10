import { Technology } from '@/types';

interface TechnologyGridProps {
    technologies: Technology[];
}

const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                    <tech.icon className="w-12 h-12 text-teal-400" />
                    <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
                </div>
            ))}
        </div>
    );
};

export default TechnologyGrid; 