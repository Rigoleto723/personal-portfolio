import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from '@/types';

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
    const { t } = useTranslation();

    return (
        <Card className="bg-gray-700 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-600">
            <CardHeader>
                <CardTitle className="text-white">{project.name}</CardTitle>
                <CardDescription className="text-gray-300">{t(project.description)}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-teal-800 text-teal-100">{tech}</Badge>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                        {t('projects.links.viewRepo')}
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                        {t('projects.links.viewDemo')}
                    </a>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectDetail; 