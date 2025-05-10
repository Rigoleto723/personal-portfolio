export const routes = {
    home: '/',
    about: '/about',
    skills: '/skills',
    projects: '/projects',
    contact: '/contact'
} as const;

export const navigation = [
    { name: 'Inicio', href: routes.home },
    { name: 'Sobre Mí', href: routes.about },
    { name: 'Habilidades', href: routes.skills },
    { name: 'Proyectos', href: routes.projects },
    { name: 'Contacto', href: routes.contact }
] as const; 