import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import './CenteredBanner.scss';

interface CenteredBannerProps {
  hero: React.ReactNode;
  header: string;
  subheader?: string;
}

function CenteredBanner({ ...props }: CenteredBannerProps) {
  return (
    <div className="container">
      <div className="column">
        <SentimentVeryDissatisfiedIcon />
        <h1>{props.header}</h1>
        {props.subheader && <h2>{props.subheader}</h2>}
      </div>
    </div>
  );
}

export { CenteredBanner };
