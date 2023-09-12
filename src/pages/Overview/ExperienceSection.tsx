import { Typography, Paper, Tabs, Tab, Box, useTheme } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaQueryIsDesktop } from '../../theme/Theme';
import { ExperienceCard, ExperienceGroup } from './ExperienceCard';

export function ExperienceSection() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDesktop = MediaQueryIsDesktop(theme);

  const [experienceTab, setExperienceTab] = useState(0);
  const experienceGroups: ExperienceGroup[] = [
    {
      organization: t('OVERVIEW.EXPERIENCE.VENDASTA.ORGANIZATION'),
      positions: [
        {
          title: 'Software Developer II',
          dateRange: 'Sep 2022 - Aug 2023',
          description: t('OVERVIEW.EXPERIENCE.VENDASTA.DESCRIPTION'),
        },
        {
          title: 'Software Developer Intern / I',
          dateRange: 'Sep 2020 - May 2021',
          description: t('OVERVIEW.EXPERIENCE.VENDASTA.DESCRIPTION'),
        },
      ],
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
      positions: [
        {
          title: 'Software Developer',
          dateRange: 'May 2018 - Sep 2018',
          description: t('OVERVIEW.EXPERIENCE.WCB_ALBERTA.DESCRIPTION'),
        },
      ],
      url: 'https://www.wcb.ab.ca/',
      skills: ['C#', 'React', 'ASP.NET'],
    },
  ];

  return (
    <>
      <Typography variant="h2">{t('OVERVIEW.EXPERIENCE.HEADER')}</Typography>
      <div>
        <Paper
          sx={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column' }}
        >
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={experienceTab}
            onChange={(_, value: number) => setExperienceTab(value)}
            centered
            orientation={isDesktop ? 'vertical' : 'horizontal'}
            sx={{
              '& .MuiTab-root:not(.Mui-selected)': {
                color: theme.palette.text.primary,
              },
            }}
          >
            {experienceGroups.map((group, index) => (
              <Tab key={index} label={group.organization} />
            ))}
          </Tabs>
        </Paper>
      </div>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        {experienceGroups.map((group, index1) => {
          return group.positions.map((position, index2) => (
            <ExperienceCard
              key={`${index1}-${index2}`}
              group={group}
              position={position}
            />
          ));
        })}
      </Box>
    </>
  );
}
