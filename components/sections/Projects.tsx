'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Award, TrendingUp, Calendar } from 'lucide-react';

const projects = [
  { 
    title: 'Creata – A Credit-Based Time Bank',
    description:
      'Creata solves the issue of expensive services and underused skills by enabling users to exchange skills using a credit-based system rather than money. Need help with a logo? Offer your writing skills instead. Credits are transferred through an escrow system, secured by dual confirmation. Real-time chat, friend requests, and dispute resolution build a trustworthy community. Perfect for freelancers, students, and skill-based barter communities.',
    image: '/creata.png',
    date: '',
    achievements: [],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    demoUrl: '',
    githubUrl: 'https://github.com/KunjArora23/Creata',
    award: ''
  },
  {
    title: 'Urban Oasis – Hotel Management System',
    description:
      'Urban Oasis solves the operational chaos of hotel management by digitizing everything from room bookings to availability tracking and admin control. It allows customers to view rooms, make bookings, and manage check-ins/check-outs, while the admin dashboard gives hotel staff full control. Ideal for small to mid-sized hotels looking to streamline their operations without costly enterprise software.',
    image: '/urbanoasis.png',
    date: '',
    achievements: [],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    demoUrl: '',
    githubUrl: 'https://github.com/KunjArora23/UrbanOasis',
    award: ''
  },
  {
    title: 'StudyBuddy – Learning Management System',
    description:
      'StudyBuddy addresses the challenge of connecting educators with students by offering a platform where teachers can create and sell courses, and students can securely enroll and access content. It supports secure authentication, dynamic course content, and integrated payment using Razorpay. Ideal for solo educators or small institutions looking for an affordable LMS.',
    image: '/studybudy.png',
    date: '',
    achievements: [],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    demoUrl: '',
    githubUrl: 'https://github.com/KunjArora23/StudyBuddy',
    award: ''
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects across web development and management systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-200 border bg-card">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900 dark:to-teal-900 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </Badge>
                  </div>
                  {project.award && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                        <Award className="w-3 h-3 mr-1" />
                        {project.award}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {/* <h4 className="font-semibold text-sm text-foreground">Key Achievements</h4> */}
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 pt-2">
                    {project.demoUrl && (
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          View Source
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}