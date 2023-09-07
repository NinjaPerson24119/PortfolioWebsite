import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import styles from './CenteredBanner.module.scss';

interface CenteredBannerProps {
  hero: React.ReactNode;
  header: string;
  subheader?: string;
}

function CenteredBanner({ ...props }: CenteredBannerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <SentimentVeryDissatisfiedIcon />
        <h1>{props.header}</h1>
        {props.subheader && <h2>{props.subheader}</h2>}
      </div>
    </div>
  );
}

export { CenteredBanner };
