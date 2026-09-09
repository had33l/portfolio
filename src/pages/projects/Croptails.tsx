import { Sparkles, Package, Moon, Save, MessageSquare, Music } from 'lucide-react';
import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';
import { socialLinks } from '../../config/socialLinks';
import { comingSoon } from '../../assets';

const Croptails = () => {
  const features = [
    { icon: Sparkles, title: 'Player State Machines', description: 'Tool states and animation driven by a finite state machine' },
    { icon: Package, title: 'Inventory & Crops', description: 'Full inventory management and crop cultivation systems' },
    { icon: Moon, title: 'Day/Night Cycle', description: 'Time-of-day system driving gameplay and visuals' },
    { icon: Save, title: 'Save System', description: 'Data serialization for persistent save/load' },
    { icon: MessageSquare, title: 'Dialogue UI', description: 'NPC dialogue interface with navigation agents' },
    { icon: Music, title: 'Audio Integration', description: 'Ambient and interaction audio throughout the game' },
  ];

  return (
    <ProjectLayout>
      <ProjectHeader
        icon={comingSoon}
        title="Croptails"
        subtitle="A 2D farming simulation game built in Godot"
        githubUrl={socialLinks.repositories.projectOne}
        features={features}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            "Croptails is a 2D farming simulation game built in Godot Engine using GDScript, developed with a test-scene-first prototyping methodology so that each core mechanic is built and validated in isolation before integration.",
            "The project covers the full loop of a farming sim: player movement and tool states, crop planting and cultivation, day/night cycles, an inventory system, NPCs with navigation agents, dialogue UI, and persistent save data via serialization.",
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Player state machine driving movement, tool usage, and animation transitions',
            'Y-sorting rendering so sprites layer correctly across the dynamic tilemap',
            'Dynamic tilemap system supporting tillable, plantable farmland',
            'NPC navigation agents for pathfinding around the farm',
            'Data serialization layer for saving and loading game state',
            'Dialogue UI and audio systems layered on top of the core simulation loop',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack technologies={['Godot Engine', 'GDScript']} />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Croptails;
