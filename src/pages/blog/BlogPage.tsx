import { Box } from '@mui/material';
import React, { Suspense } from 'react';
import { Loading } from '../../Loading';
import styles from './BlogPage.module.scss';

export function BlogPage({ ...props }: { children?: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <Box className={styles.container}>{props.children}</Box>
    </Suspense>
  );
}
