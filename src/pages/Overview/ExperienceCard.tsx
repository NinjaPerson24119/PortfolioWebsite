import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Chip, Typography, useTheme } from '@mui/material';
import styles from './ExperienceCard.module.scss';

const middleDot = '\u00B7';

export interface ExperienceCardProps {
  organization: string;
  positions: string[];
  dateRanges: string[];
  description: string;
  url: string;
  skills: string[];
}

export function ExperienceCard({ ...props }: ExperienceCardProps) {
  const theme = useTheme();

  const headerPosition = props.positions.length
    ? `${middleDot}${props.positions[0]}`
    : '';
  const header = `${props.organization} ${headerPosition}`;

  return (
    <div className={styles.container}>
      <div className={styles.dateRangeContainer}>
        {props.dateRanges.map((dateRange, index) => (
          <Typography key={index} variant="body1">
            {dateRange}
          </Typography>
        ))}
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.headerContainer}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.text.link,
            }}
          >
            {header}
          </Typography>
          <OpenInNewIcon
            fontSize="small"
            sx={{ color: theme.palette.text.link }}
          />
        </div>
        {props.positions.slice(1).map((position, index) => (
          <Typography key={index} variant="h3">
            {position}
          </Typography>
        ))}
        <Typography variant="body1" sx={{ padding: '8px' }}>
          {props.description}
        </Typography>
        {props.skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            color="secondary"
            variant="outlined"
          />
        ))}
      </div>
    </div>
  );
}
