import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExperienceContentARVPProjectCoLead from '../../assets/content/experience/arvp-project-co-lead.mdx';
import ExperienceContentARVPSoftwareCoLead from '../../assets/content/experience/arvp-software-co-lead.mdx';
import ExperienceContentARVPSoftwareMember from '../../assets/content/experience/arvp-software-member.mdx';
import ExperienceContentVendastaDeveloperII from '../../assets/content/experience/vendasta-developer-ii.mdx';
import ExperienceContentVendastaDeveloperIntern from '../../assets/content/experience/vendasta-developer-intern.mdx';
import ExperienceContentWCBAlbertaDeveloper from '../../assets/content/experience/wcb-alberta-developer.mdx';
import { MDXComponentMapping } from '../markdown';
import { ExperienceCard, ExperienceGroup } from './ExperienceCard';

export function ExperienceSection() {
  const { t } = useTranslation();

  const experienceGroups: ExperienceGroup[] = [
    {
      organization: t('OVERVIEW.EXPERIENCE.VENDASTA'),
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
      ],
    },
    {
      organization: t('OVERVIEW.EXPERIENCE.WCB_ALBERTA'),
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
      organization: t('OVERVIEW.EXPERIENCE.ARVP'),
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
      skills: ['C++', 'ROS', 'OpenCV', 'Python'],
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
