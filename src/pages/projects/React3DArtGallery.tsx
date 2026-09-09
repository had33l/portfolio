import { Box, Move3d, Image as ImageIcon } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

const React3DArtGallery = () => {
  const features = [
    { icon: Box, title: '3D Rendering', description: 'Advanced 3D rendering built with React' },
    { icon: Move3d, title: 'Immersive Navigation', description: 'VR-style navigation through the gallery space' },
    { icon: ImageIcon, title: 'Gallery Display', description: 'Interactive display of artwork within the 3D scene' },
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="React 3D Art Gallery"
        subtitle="An interactive 3D gallery application with an immersive VR experience"
        githubUrl={socialLinks.repositories.projectThree}
        features={features}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "React 3D Art Gallery is an interactive 3D gallery application built with React and advanced 3D rendering, designed to give visitors an immersive, VR-style experience as they move through and view the displayed artwork.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={['React', 'Three.js']} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default React3DArtGallery;
