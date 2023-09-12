import { Box } from '@mui/material';
import React from 'react';
import ARVPContent from '../../assets/content/arvp-blog.mdx';
import { MDXComponentMapping } from '../markdown';
import styles from './ARVP.module.scss';

export function ARVP() {
  React.createElement(ARVPContent);
  return (
    <Box className={styles.container}>
      <ARVPContent components={MDXComponentMapping()} />
    </Box>
  );
}
