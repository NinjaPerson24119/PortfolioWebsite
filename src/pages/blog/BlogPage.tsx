import { Box } from '@mui/material';
import React from 'react';
import styles from './BlogPage.module.scss';

export function BlogPage({ ...props }: { children?: React.ReactNode }) {
  return <Box className={styles.container}>{props.children}</Box>;
}
