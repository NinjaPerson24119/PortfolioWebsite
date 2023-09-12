import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Chip, Typography, useTheme, Box, Card } from '@mui/material';
import styles from './ExperienceCard.module.scss';

const middleDot = '\u00B7';

export interface ExperienceGroup {
  organization: string;
  positions: ExperiencePosition[];
  url: string;
  skills: string[];
}

export interface ExperiencePosition {
  title: string;
  dateRange: string;
  description: string;
}

export interface ExperienceCardProps {
  group: ExperienceGroup;
  position: ExperiencePosition;
}

export function ExperienceCard({ ...props }: ExperienceCardProps) {
  const theme = useTheme();
  const header = `${props.group.organization} ${middleDot} ${props.position.title}`;

  return (
    <Card className={styles.container} sx={{ padding: '8px' }}>
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        <Typography variant="body1">{props.position.dateRange}</Typography>
        <OpenInNewIcon
          sx={{ color: theme.palette.text.link, alignSelf: 'flex-end' }}
        />
      </Box>
      <Typography
        variant="h3"
        sx={{
          color: theme.palette.text.link,
        }}
      >
        {header}
      </Typography>
      <Typography variant="body1" sx={{ padding: '8px' }}>
        {props.position.description}
      </Typography>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        {props.group.skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            color="secondary"
            variant="outlined"
          />
        ))}
      </Box>
    </Card>
  );
}
