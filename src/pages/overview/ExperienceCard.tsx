import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Chip,
  Typography,
  useTheme,
  Box,
  Card,
  CardHeader,
  CardContent,
  Link,
} from '@mui/material';
import React from 'react';
import styles from './ExperienceCard.module.scss';

export interface ExperienceGroup {
  organization: string;
  positions: ExperiencePosition[];
  url: string;
  skills: string[];
}

export interface ExperiencePosition {
  title: string;
  dateRange: string;
  description: React.JSX.Element;
}

export interface ExperienceCardProps {
  group: ExperienceGroup;
}

export function ExperienceCard({ ...props }: ExperienceCardProps) {
  const theme = useTheme();

  function PositionSection({ position }: { position: ExperiencePosition }) {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1">{position.dateRange}</Typography>
        </Box>
        <Typography variant="h3">{position.title}</Typography>
        <Box className={styles.positionDescription}>{position.description}</Box>
      </>
    );
  }

  return (
    <Link href={props.group.url} target="_blank">
      <Card
        variant="outlined"
        sx={{
          '& .MuiCardHeader-root': { paddingBottom: 0 },
        }}
      >
        <CardHeader
          titleTypographyProps={{ variant: 'h2' }}
          title={props.group.organization}
          action={<OpenInNewIcon sx={{ color: theme.palette.text.link }} />}
        ></CardHeader>
        <CardContent>
          {props.group.positions.map((position, index) => (
            <PositionSection key={index} position={position} />
          ))}
          <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {props.group.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                color="secondary"
                variant="outlined"
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
