import { Box } from '@mui/material';
import React from 'react';
import styles from './Blog.module.scss';

export function Blog({ ...props }: { children?: React.ReactNode }) {
  return <Box className={styles.container}>{props.children}</Box>;
}
