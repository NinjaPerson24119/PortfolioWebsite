import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Typography,
  Box,
  Button,
  Paper,
  useTheme,
  Link,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import yolactAnimation from '../assets/images/arvp/yolact.webp';
import { Header } from '../header/Header';
import { ROUTES } from '../routing';
import styles from './Overview.module.scss';

interface Project {
  rootKey:
    | 'SHAPE_MATCHER'
    | 'FINANCE_AGGREGATOR'
    | 'ARVP_ONBOARDING_2019'
    | 'YEET_MIND'
    | 'PRE_UNIVERSITY_PROJECTS';
  url: string;
}

function Overview() {
  const { t } = useTranslation();
  const theme = useTheme();

  const projects: Project[] = [
    {
      rootKey: 'FINANCE_AGGREGATOR',
      url: 'https://github.com/NinjaPerson24119/FinanceAggregator',
    },
    {
      rootKey: 'SHAPE_MATCHER',
      url: 'https://github.com/NinjaPerson24119/shape_matcher',
    },
    {
      rootKey: 'ARVP_ONBOARDING_2019',
      url: 'https://github.com/NinjaPerson24119/Onboarding2019',
    },
    {
      rootKey: 'YEET_MIND',
      url: 'https://github.com/NinjaPerson24119/neuro-car',
    },
    {
      rootKey: 'PRE_UNIVERSITY_PROJECTS',
      url: 'https://github.com/NinjaPerson24119/Pre-University-Projects',
    },
  ];

  return (
    <Box className={styles.container}>
      <Header></Header>
      <Typography variant="body1">{t('OVERVIEW.ABOUT_ME')}</Typography>

      <img src={yolactAnimation} />
      <Typography variant="h2" color="secondary" sx={{ textAlign: 'center' }}>
        {t('OVERVIEW.ARVP.HEADER')}
      </Typography>
      <Button variant="contained" color="secondary" href={ROUTES.ARVP}>
        {t('OVERVIEW.ARVP.LEARN_MORE')}
      </Button>

      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {t('EXPERIENCE.HEADER')}
      </Typography>

      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {t('OTHER_PROJECTS.HEADER')}
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
                  variant="outlined"
                  elevation={8}
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
                      {t(`OTHER_PROJECTS.${project.rootKey}.HEADER`)}
                    </Typography>
                    <OpenInNewIcon
                      fontSize="small"
                      sx={{ color: theme.palette.text.link }}
                    />
                  </Box>
                  <Typography variant="body2">
                    {t(`OTHER_PROJECTS.${project.rootKey}.DESCRIPTION`)}
                  </Typography>
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
