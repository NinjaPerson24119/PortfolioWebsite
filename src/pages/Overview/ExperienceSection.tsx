import { Typography, Paper, Tabs, Tab, Box, useTheme } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ExperienceCard, ExperienceCardProps } from './ExperienceCard';

export function ExperienceSection() {
  const { t } = useTranslation();
  const theme = useTheme();
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
    <>
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
    </>
  );
}
