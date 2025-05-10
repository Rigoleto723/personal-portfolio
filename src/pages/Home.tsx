import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from '@/components/about/Hero';
import TechnologyGrid from '@/components/skills/TechnologyGrid';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { siteConfig } from '@/constants/config';
import { technologies, projects } from '@/constants';
import avatar from '@/assets/images/avatar.png';
import { useEffect, useState } from 'react';

const Home = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transformar el progreso del scroll en valores de opacidad para cada sección
    const heroOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.25],
        [1, 0.5, 0]
    );

    const aboutOpacity = useTransform(
        scrollYProgress,
        [0.2, 0.25, 0.45, 0.5],
        [0, 1, 1, 0]
    );

    const skillsOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.7, 0.75],
        [0, 1, 1, 0]
    );

    const projectsOpacity = useTransform(
        scrollYProgress,
        [0.7, 0.75, 1],
        [0, 1, 1]
    );

    // Estado para saber cuál sección es la activa
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const unsub = [heroOpacity, aboutOpacity, skillsOpacity, projectsOpacity].map((opacity) =>
            opacity.on('change', () => {
                const values = [heroOpacity.get(), aboutOpacity.get(), skillsOpacity.get(), projectsOpacity.get()];
                const max = Math.max(...values);
                const sections = ['hero', 'about', 'skills', 'projects'];
                const index = values.findIndex(v => v === max);
                setActiveSection(sections[index]);
            })
        );
        // Limpieza
        return () => { unsub.forEach(u => u()); };
    }, []);

    const getPointerEvents = (section: string) => (activeSection === section ? 'auto' : 'none');

    return (
        <div ref={containerRef} className="relative">
            {/* Hero Section */}
            <motion.div
                id="hero"
                style={{
                    opacity: heroOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    pointerEvents: getPointerEvents('hero'),
                }}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Hero
                        name={siteConfig.name}
                        title={t('hero.title')}
                        githubUrl={siteConfig.links.github}
                        linkedinUrl={siteConfig.links.linkedin}
                        email={siteConfig.links.email}
                        avatarUrl={avatar}
                    />
                </div>
            </motion.div>

            {/* About Section */}
            <motion.div
                id="about"
                style={{
                    opacity: aboutOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    pointerEvents: getPointerEvents('about'),
                }}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">{t('about.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-300 whitespace-pre-line">
                                {t('about.content')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                id="skills"
                style={{
                    opacity: skillsOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 3,
                    pointerEvents: getPointerEvents('skills'),
                }}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">{t('skills.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TechnologyGrid technologies={technologies} />
                        </CardContent>
                    </Card>
                </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
                id="projects"
                style={{
                    opacity: projectsOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 4,
                    pointerEvents: getPointerEvents('projects'),
                }}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
                        <CardHeader>
                            <CardTitle className="text-white">{t('projects.title')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="Full Stack">
                                <TabsList className="flex w-full bg-gray-700 rounded-lg p-1 items-stretch h-auto gap-1">
                                    {projects.map((category) => (
                                        <TabsTrigger
                                            key={category.category}
                                            value={category.category}
                                            className="bg-gray-900 text-gray-400 w-full h-auto flex justify-center items-center whitespace-normal break-words data-[state=active]:bg-teal-600 data-[state=active]:text-white transition-all duration-300"
                                        >
                                            {t(`projects.categories.${category.category}`)}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                                {projects.map((category) => (
                                    <TabsContent key={category.category} value={category.category}>
                                        <div className="grid gap-6 mt-6 md:grid-cols-2">
                                            {category.items.map((project, index) => (
                                                <ProjectDetail key={index} project={project} />
                                            ))}
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </motion.div>

            {/* Spacer para permitir el scroll */}
            <div className="h-[400vh] pb-20" />
        </div>
    );
};

export default Home; 