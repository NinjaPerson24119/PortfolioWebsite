import { ARVPSection } from './ARVPSection';
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
      <ReadingListSection />
      <form data-static-form-name="contact">
        <div>
          <label>
            Name
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Message<textarea name="message"></textarea>
          </label>
        </div>
        <button type="submit">Send!</button>
      </form>
    </div>
  );
}

export { Overview };
