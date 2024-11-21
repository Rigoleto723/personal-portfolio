import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail } from 'lucide-react'
import {
  SiPython, SiDjango, SiReact, SiTypescript, SiTailwindcss,
  SiPostgresql, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy,
  SiOpenai, SiJavascript, SiHtml5, SiCss3, SiGit, SiPytorch
} from 'react-icons/si'
import avatar from './assets/images/avatar.png';
import logo from './assets/images/logo.svg';


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
          name: "Bee Optima",
          description: "Developed a full-stack e-commerce platform with user authentication, product management, and order processing.",
          tech: ["React", "Django", "PostgreSQL", "Redux"],
          repo: "https://github.com/Rigoleto723/beeOptima"
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
          <header className="fixed top-0 left-0 w-full text-white z-50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
              <img src={logo} alt="Ivan Vargas Logo" className="w-14 h-14" />
              <nav>
                <ul className="flex space-x-6 text-lg">
                  <li>
                    <a href="#about" className="hover:text-gray-300 transition-colors">
                      About Me
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hover:text-gray-300 transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="hover:text-gray-300 transition-colors">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hover:text-gray-300 transition-colors">
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <section id="about" className="mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center text-white py-12 px-4">
              <div className="text-center md:text-left md:mr-8">
                <h1 className="text-5xl font-bold text-white mb-2 flex justify-center">Ivan Vargas Carmona</h1>
                <p className="text-xl text-gray-300 flex justify-center">Full Stack Developer & Machine Learning Engineer</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://github.com/Rigoleto723" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/ivanvargascarmona/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:ivanvargasc723@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <img
                src={avatar}
                alt="Ivan Vargas Avatar"
                className="w-64 h-64 md:w-96 md:h-96 rounded-full" />
            </div>
            <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  I am Ivan Vargas Carmona, a Full Stack Developer and Machine Learning Engineer with extensive experience in web development, artificial intelligence, and data analysis. Before transitioning into the tech industry, I proudly served as a member of the Colombian Air Force for 15 years, where I developed discipline, leadership, and a passion for solving complex problems.<br /><br />

                  I hold a degree in Electronic Engineering and have specialized in Artificial Intelligence, combining technical expertise with creativity to build innovative and efficient solutions. My journey has taken me from developing robust web applications to implementing computer vision systems and performing advanced data analysis. I am passionate about leveraging my diverse background to create impactful technology solutions.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="skills" className="mb-12">
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

          <section id="projects">
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
                        className="bg-gray-900 text-gray-400 w-full h-auto flex justify-center items-center whitespace-normal break-words data-[state=active]:bg-teal-600 data-[state=active]:text-white transition-all duration-300"
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