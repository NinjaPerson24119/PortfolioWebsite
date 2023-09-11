import { ARVPSection } from './ARVPSection';
import { ExperienceSection } from './ExperienceSection';
import { HeroSection } from './HeroSection';
import styles from './Overview.module.scss';
import { ProjectsSection } from './ProjectsSection';

function Overview() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ARVPSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export { Overview };
