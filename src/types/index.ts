export interface Technology {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
    name: string;
    description: string;
    tech: string[];
    repo: string;
    demo: string;
}

export interface ProjectCategory {
    category: string;
    items: Project[];
} 