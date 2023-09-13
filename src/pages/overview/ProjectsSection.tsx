import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Typography, Box, Grid, Link, Paper, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './ProjectsSection.module.scss';

interface Project {
  header: string;
  description: string;
  url: string;
}

export function ProjectsSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const projects: Project[] = [
    {
      header: t('OVERVIEW.OTHER_PROJECTS.FINANCE_AGGREGATOR.HEADER'),
      description: t('OVERVIEW.OTHER_PROJECTS.FINANCE_AGGREGATOR.DESCRIPTION'),
      url: 'https://github.com/NinjaPerson24119/FinanceAggregator',
    },
    {
      header: t('OVERVIEW.OTHER_PROJECTS.SHAPE_MATCHER.HEADER'),
      description: t('OVERVIEW.OTHER_PROJECTS.SHAPE_MATCHER.DESCRIPTION'),
      url: 'https://github.com/NinjaPerson24119/shape_matcher',
    },
    {
      header: t('OVERVIEW.OTHER_PROJECTS.ARVP_ONBOARDING_2019.HEADER'),
      description: t(
        'OVERVIEW.OTHER_PROJECTS.ARVP_ONBOARDING_2019.DESCRIPTION',
      ),
      url: 'https://github.com/NinjaPerson24119/Onboarding2019',
    },
    {
      header: t('OVERVIEW.OTHER_PROJECTS.YEET_MIND.HEADER'),
      description: t('OVERVIEW.OTHER_PROJECTS.YEET_MIND.DESCRIPTION'),
      url: 'https://github.com/NinjaPerson24119/neuro-car',
    },
    {
      header: t('OVERVIEW.OTHER_PROJECTS.PRE_UNIVERSITY_PROJECTS.HEADER'),
      description: t(
        'OVERVIEW.OTHER_PROJECTS.PRE_UNIVERSITY_PROJECTS.DESCRIPTION',
      ),
      url: 'https://github.com/NinjaPerson24119/Pre-University-Projects',
    },
  ];

  return (
    <>
      <Typography variant="h2">
        {t('OVERVIEW.OTHER_PROJECTS.HEADER')}
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Link
                href={project.url}
                sx={{ textDecoration: 'none' }}
                target="_blank"
              >
                <Paper className={styles.projectCard} elevation={3}>
                  <Box className={styles.projectCardHeader}>
                    <Typography
                      variant="h3"
                      sx={{ color: theme.palette.text.link }}
                    >
                      {project.header}
                    </Typography>
                    <OpenInNewIcon
                      fontSize="small"
                      sx={{ color: theme.palette.text.link }}
                    />
                  </Box>
                  <Typography variant="body2">{project.description}</Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
