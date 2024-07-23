import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Loading } from '../../Loading';
import { ARVPSection } from './ARVPSection';
import { ContactForm } from './ContactForm';
import { ExperienceSection } from './ExperienceSection';
import { FishingGameSection } from './FishingGameSection';
import { HeroSection } from './HeroSection';
import styles from './OverviewPage.module.scss';
import { ProjectsSection } from './ProjectsSection';
import { ReadingListSection } from './ReadingListSection';

export default function OverviewPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <HeroSection />
        <Box className={styles.hook_sections}>
          <ARVPSection />
          <FishingGameSection />
        </Box>
        <ExperienceSection />
        <ProjectsSection />
        <ContactForm />
        <ReadingListSection />
      </div>
    </Suspense>
  );
}
