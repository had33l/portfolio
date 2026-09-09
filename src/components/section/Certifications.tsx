import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Trophy } from 'lucide-react';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const awards = [
    {
      id: 'it-marathon',
      title: 'IT Marathon — 12th Edition',
      subtitle: 'United Arab Emirates University',
      year: '2022'
    },
    {
      id: 'ibo',
      title: 'International Biology Olympiad',
      subtitle: 'IBO',
      year: '2020'
    },
    {
      id: 'fpspi',
      title: 'Future Problem Solving Program International',
      subtitle: 'FPSPI',
      year: '2019'
    }
  ];

  return (
    <section id="certifications" className="py-8 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>Awards & Honors</h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {awards.map((award) => (
              <div key={award.id} className="flex flex-col items-center group w-48">
                <div
                  className="mb-4 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: isDarkMode ? themeColors.colors.dark[800] : themeColors.colors.pink[50],
                    border: `2px solid ${themeColors.colors.pink[300]}`
                  }}
                >
                  <Trophy
                    className="h-10 w-10"
                    style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}
                  />
                </div>
                <h3 className="text-center text-sm font-medium mb-1" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                  {award.title}
                </h3>
                <p className="text-center text-xs" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                  {award.subtitle} · {award.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom gradient overlay for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
