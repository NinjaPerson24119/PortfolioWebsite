import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SailingIcon from '@mui/icons-material/Sailing';
import {
  Typography,
  Box,
  Button,
  Paper,
  useTheme,
  Link,
  Grid,
  Tabs,
  Tab,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import yolactAnimation from '../../assets/images/arvp/yolact.webp';
import { Header } from '../../header/Header';
import { ROUTES } from '../../routing';
import { ExperienceCard, ExperienceCardProps } from './ExperienceCard';
import styles from './Overview.module.scss';

interface Project {
  header: string;
  description: string;
  url: string;
}

function Overview() {
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

  const [experienceTab, setExperienceTab] = useState(0);
  const experienceCards: ExperienceCardProps[] = [
    {
      organization: t('OVERVIEW.EXPERIENCE.VENDASTA.ORGANIZATION'),
      positions: ['Software Developer II', 'Software Developer Intern / I'],
      dateRanges: ['Sep 2022 - Aug 2023', 'Sep 2020 - May 2021'],
      description: t('OVERVIEW.EXPERIENCE.VENDASTA.DESCRIPTION'),
      url: 'https://www.vendasta.com/',
      skills: [
        'Angular',
        'Go',
        'Python',
        'Google Cloud Platform',
        'ElasticSearch',
      ],
    },
    {
      organization: t('OVERVIEW.EXPERIENCE.WCB_ALBERTA.ORGANIZATION'),
      positions: ['Software Developer'],
      dateRanges: ['May 2018 - Sep 2018'],
      description: t('OVERVIEW.EXPERIENCE.WCB_ALBERTA.DESCRIPTION'),
      url: 'https://www.wcb.ab.ca/',
      skills: ['C#', 'React', 'ASP.NET'],
    },
  ];

  return (
    <Box className={styles.container}>
      <Header></Header>
      <Typography variant="h2" color="secondary">
        {t('OVERVIEW.INTRODUCTION')}
      </Typography>
      <Typography variant="body1">{t('OVERVIEW.ABOUT_ME')}</Typography>

      <img src={yolactAnimation} />
      <Typography variant="h2" color="secondary" sx={{ textAlign: 'center' }}>
        {t('OVERVIEW.ARVP.HEADER')}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          href={ROUTES.ARVP}
          startIcon={<SailingIcon />}
        >
          {t('OVERVIEW.ARVP.LEARN_MORE')}
        </Button>
      </Box>

      <Typography variant="h2">{t('OVERVIEW.EXPERIENCE.HEADER')}</Typography>
      <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          value={experienceTab}
          onChange={(_, value: number) => setExperienceTab(value)}
          centered
          orientation="horizontal"
          sx={{
            '& .MuiTab-root:not(.Mui-selected)': {
              color: theme.palette.text.primary,
            },
          }}
        >
          {experienceCards.map((experienceCard, index) => (
            <Tab key={index} label={experienceCard.organization} />
          ))}
        </Tabs>
        {experienceCards.map((experienceCard, index) => (
          <div key={index} hidden={experienceTab !== index}>
            <Box sx={{ padding: '8px' }}>
              <ExperienceCard {...experienceCard} />
            </Box>
          </div>
        ))}
      </Paper>

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
                <Paper
                  sx={{ padding: '8px', minHeight: '180px' }}
                  elevation={3}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
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
    </Box>
  );
}

export { Overview };
