import {
    SiPython, SiDjango, SiReact, SiTypescript, SiTailwindcss,
    SiPostgresql, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
    SiOpenai, SiJavascript, SiHtml5, SiCss3, SiGit, SiPytorch
} from 'react-icons/si';
import { Technology, ProjectCategory } from '../types';

export const technologies: Technology[] = [
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "scikit-learn", icon: SiScikitlearn },
    { name: "pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "OpenAI", icon: SiOpenai },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Git", icon: SiGit },
    { name: "PyTorch", icon: SiPytorch }
];

export const projects: ProjectCategory[] = [
    {
        category: "Full Stack",
        items: [
            {
                name: "Bee Optima",
                description: "projects.fullStack.beeOptima.description",
                tech: ["React", "Django", "PostgreSQL", "Redux"],
                repo: "https://github.com/Rigoleto723/beeOptima",
                demo: "https://bee-optima.vercel.app"
            },
            {
                name: "Task Management App",
                description: "projects.fullStack.taskManagement.description",
                tech: ["React", "Node.js", "MongoDB", "Socket.io"],
                repo: "https://github.com/yourusername/task-manager",
                demo: "https://task-manager-demo.vercel.app"
            }
        ]
    },
    {
        category: "Computer Vision",
        items: [
            {
                name: "Object Detection System",
                description: "projects.computerVision.objectDetection.description",
                tech: ["Python", "YOLO", "OpenCV", "TensorFlow"],
                repo: "https://github.com/yourusername/object-detection",
                demo: "https://object-detection-demo.vercel.app"
            },
            {
                name: "Facial Recognition App",
                description: "projects.computerVision.facialRecognition.description",
                tech: ["Python", "dlib", "face_recognition", "OpenCV"],
                repo: "https://github.com/yourusername/facial-recognition",
                demo: "https://facial-recognition-demo.vercel.app"
            }
        ]
    },
    {
        category: "Data Analysis",
        items: [
            {
                name: "Customer Segmentation Tool",
                description: "projects.dataAnalysis.customerSegmentation.description",
                tech: ["Python", "scikit-learn", "pandas", "Matplotlib"],
                repo: "https://github.com/yourusername/customer-segmentation",
                demo: "https://customer-segmentation-demo.vercel.app"
            },
            {
                name: "Stock Market Predictor",
                description: "projects.dataAnalysis.stockPredictor.description",
                tech: ["Python", "TensorFlow", "pandas", "yfinance"],
                repo: "https://github.com/yourusername/stock-predictor",
                demo: "https://stock-predictor-demo.vercel.app"
            }
        ]
    }
]; 