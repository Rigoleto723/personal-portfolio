import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail } from 'lucide-react'
import {
  SiPython, SiDjango, SiReact, SiTypescript, SiTailwindcss,
  SiPostgresql, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiOpenai, SiJavascript, SiHtml5, SiCss3, SiGit, SiPytorch
} from 'react-icons/si'

function App() {
  const technologies = [
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
  ]

  const projects = [
    {
      category: "Full Stack",
      items: [
        {
          name: "E-commerce Platform",
          description: "Developed a full-stack e-commerce platform with user authentication, product management, and order processing.",
          tech: ["React", "Django", "PostgreSQL", "Redux"],
          repo: "https://github.com/yourusername/ecommerce-platform"
        },
        {
          name: "Task Management App",
          description: "Built a collaborative task management application with real-time updates and team features.",
          tech: ["React", "Node.js", "MongoDB", "Socket.io"],
          repo: "https://github.com/yourusername/task-manager"
        }
      ]
    },
    {
      category: "Computer Vision",
      items: [
        {
          name: "Object Detection System",
          description: "Implemented a real-time object detection system using YOLO for security camera feeds.",
          tech: ["Python", "YOLO", "OpenCV", "TensorFlow"],
          repo: "https://github.com/yourusername/object-detection"
        },
        {
          name: "Facial Recognition App",
          description: "Developed a facial recognition application for automated attendance systems.",
          tech: ["Python", "dlib", "face_recognition", "OpenCV"],
          repo: "https://github.com/yourusername/facial-recognition"
        }
      ]
    },
    {
      category: "Data Analysis",
      items: [
        {
          name: "Customer Segmentation Tool",
          description: "Created a tool for customer segmentation using machine learning algorithms.",
          tech: ["Python", "scikit-learn", "pandas", "Matplotlib"],
          repo: "https://github.com/yourusername/customer-segmentation"
        },
        {
          name: "Stock Market Predictor",
          description: "Developed a machine learning model to predict stock market trends.",
          tech: ["Python", "TensorFlow", "pandas", "yfinance"],
          repo: "https://github.com/yourusername/stock-predictor"
        }
      ]
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Ivan Vargas Carmona</h1>
            <p className="text-xl text-gray-300">Full Stack Developer & Machine Learning Engineer</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </header>

          <section className="mb-12">
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Professional Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  I am a Full Stack Developer and Machine Learning Engineer with extensive experience in web development,
                  artificial intelligence, and data analysis. My experience ranges from creating robust web applications to implementing
                  computer vision solutions and advanced data analysis. I am passionate about combining my full stack development skills
                  with my experience in machine learning to create innovative and efficient solutions.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <tech.icon className="w-12 h-12 text-teal-400" />
                      <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Full Stack">
                  <TabsList className="flex w-full bg-gray-700 rounded-lg p-1 items-stretch h-auto gap-1">
                    {projects.map((category) => (
                      <TabsTrigger
                        key={category.category}
                        value={category.category}
                        className="text-gray-300 w-full h-auto flex justify-center items-center whitespace-normal break-words data-[state=active]:bg-teal-600 data-[state=active]:text-white transition-all duration-300"
                      >
                        {category.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {projects.map((category) => (
                    <TabsContent key={category.category} value={category.category}>
                      <div className="grid gap-6 mt-6 md:grid-cols-2">
                        {category.items.map((project, index) => (
                          <Card key={index} className="bg-gray-700 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-600">
                            <CardHeader>
                              <CardTitle className="text-white">{project.name}</CardTitle>
                              <CardDescription className="text-gray-300">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {project.tech.map((tech, techIndex) => (
                                  <Badge key={techIndex} variant="secondary" className="bg-teal-800 text-teal-100">{tech}</Badge>
                                ))}
                              </div>
                              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                                View Repository
                              </a>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}

export default App