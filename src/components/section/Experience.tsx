import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const experiences = [
    {
      title: "Bioinformatics R&D Intern",
      company: "WebGraphique",
      location: "Sfax, Tunisia",
      period: "Jun 2026 - Aug 2026",
      description: [
        "Developed an AI-based bioinformatics framework for variant interpretation and genomic data analysis",
        "Designed computational pipelines to process complex genomic data and support automated variant classification with high attention to detail",
      ]
    },
    {
      title: "Software Engineering Research Intern",
      company: "Georgia State University",
      location: "Remote",
      period: "Jun 2025 - Aug 2025",
      description: [
        "Collaborated in a team under Professor Saeed Motevali to design system architecture and gather requirements for a real estate platform",
        "Evaluated third-party API providers including Zillow alternatives, Bridge Interactive, and RentCast",
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Dracodes",
      location: "Tunis, Tunisia",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Developed full-stack features using React and PostgreSQL in a collaborative team environment",
        "Implemented frontend components with React and optimized database queries using PostgreSQL",
      ]
    },
    {
      title: "Mobile Developer Intern",
      company: "WebGraphique",
      location: "Sfax, Tunisia",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Developed a mobile application using Flutter with a focus on code quality and user experience",
        "Worked both independently and within a team environment with high attention to detail",
      ]
    },
    {
      title: "Vice President",
      company: "IEEE Computer Society Club, SMU",
      location: "Tunis, Tunisia",
      period: "2024",
      description: [
        "Led team initiatives and coordinated technical events and workshops for the student community",
      ]
    },
    {
      title: "Private Tutor",
      company: "South Mediterranean University (SMU)",
      location: "Tunis, Tunisia",
      period: "2024",
      description: [
        "Provided personalized tutoring and student assistance in various academic subjects",
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Experience</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;