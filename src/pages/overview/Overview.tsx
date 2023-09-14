import { ARVPSection } from './ARVPSection';
import { ContactForm } from './ContactForm';
import { ExperienceSection } from './ExperienceSection';
import { HeroSection } from './HeroSection';
import styles from './Overview.module.scss';
import { ProjectsSection } from './ProjectsSection';
import { ReadingListSection } from './ReadingListSection';

function Overview() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <ARVPSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactForm />
      <ReadingListSection />
    </div>
  );
}

export { Overview };
