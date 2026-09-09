import { Brain, LineChart, Layers } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

const MlEmotionDetection = () => {
  const features = [
    { icon: Brain, title: 'Emotion Classification', description: 'Classifies input into distinct emotion categories' },
    { icon: LineChart, title: 'Model Evaluation', description: 'Trained and evaluated using standard ML workflows' },
    { icon: Layers, title: 'Python Pipeline', description: 'Built end-to-end in Python' },
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="ML Emotion Detection"
        subtitle="A machine learning model for emotion detection and classification"
        githubUrl={socialLinks.repositories.projectTwo}
        features={features}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "This project is a machine learning model for emotion detection and classification, built in Python. It applies a supervised learning workflow to classify emotional states from input data.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={['Python', 'Machine Learning']} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default MlEmotionDetection;
