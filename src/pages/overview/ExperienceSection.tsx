import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExperienceContentARVPProjectCoLead from '../../assets/content/experience/arvp-project-co-lead.mdx';
import ExperienceContentARVPSoftwareCoLead from '../../assets/content/experience/arvp-software-co-lead.mdx';
import ExperienceContentARVPSoftwareMember from '../../assets/content/experience/arvp-software-member.mdx';
import ExperienceContentVendastaDeveloperII from '../../assets/content/experience/vendasta-developer-ii.mdx';
import ExperienceContentVendastaDeveloperIntern from '../../assets/content/experience/vendasta-developer-intern.mdx';
import ExperienceContentWCBAlbertaDeveloper from '../../assets/content/experience/wcb-alberta-developer.mdx';
import { MDXComponentMapping } from '../../markdown';
import { ExperienceCard, ExperienceGroup } from './ExperienceCard';

export function ExperienceSection() {
  const { t } = useTranslation();

  const experienceGroups: ExperienceGroup[] = [
    {
      title: t('OVERVIEW.EXPERIENCE.VENDASTA.TITLE'),
      subtitle: t('OVERVIEW.EXPERIENCE.VENDASTA.SUBTITLE'),
      positions: [
        {
          title: 'Software Developer II',
          dateRange: 'Sep 2022 - Aug 2023',
          description: (
            <ExperienceContentVendastaDeveloperII
              components={MDXComponentMapping()}
            />
          ),
        },
        {
          title: 'Software Developer Intern / I',
          dateRange: 'Sep 2020 - May 2021',
          description: (
            <ExperienceContentVendastaDeveloperIntern
              components={MDXComponentMapping()}
            />
          ),
        },
      ],
      url: 'https://www.vendasta.com/',
      skills: [
        'TypeScript',
        'Angular',
        'Go',
        'Python',
        'Google Cloud Platform',
        'ElasticSearch',
        'Cypress',
      ],
    },
    {
      title: t('OVERVIEW.EXPERIENCE.WCB_ALBERTA.TITLE'),
      subtitle: t('OVERVIEW.EXPERIENCE.WCB_ALBERTA.SUBTITLE'),
      positions: [
        {
          title: 'Software Developer',
          dateRange: 'May 2018 - Sep 2018',
          description: (
            <ExperienceContentWCBAlbertaDeveloper
              components={MDXComponentMapping()}
            />
          ),
        },
      ],
      url: 'https://www.wcb.ab.ca/',
      skills: ['C#', 'React', 'Redux', 'ASP.NET', 'Microsoft SQL Server'],
    },
    {
      title: t('OVERVIEW.EXPERIENCE.ARVP.TITLE'),
      subtitle: t('OVERVIEW.EXPERIENCE.ARVP.SUBTITLE'),
      positions: [
        {
          title: 'Project Co-Lead',
          dateRange: '2020 - 2021',
          description: (
            <ExperienceContentARVPProjectCoLead
              components={MDXComponentMapping()}
            />
          ),
        },
        {
          title: 'Software Team Co-Lead',
          dateRange: '2019 - 2020',
          description: (
            <ExperienceContentARVPSoftwareCoLead
              components={MDXComponentMapping()}
            />
          ),
        },
        {
          title: 'Software Team Member',
          dateRange: '2017 - 2019',
          description: (
            <ExperienceContentARVPSoftwareMember
              components={MDXComponentMapping()}
            />
          ),
        },
      ],
      url: 'https://www.arvp.org/',
      skills: ['C', 'C++', 'ROS', 'OpenCV', 'Python'],
    },
  ];

  return (
    <>
      <Typography variant="h2">{t('OVERVIEW.EXPERIENCE.HEADER')}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {experienceGroups.map((group, index) => (
          <ExperienceCard key={index} group={group} />
        ))}
      </Box>
    </>
  );
}
