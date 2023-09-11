import { Box } from '@mui/material';
import React from 'react';
import ARVPContent from '../../assets/content/arvp.mdx';

export function ARVP() {
  React.createElement(ARVPContent);
  return (
    <Box sx={{ padding: '16px 0' }}>
      <ARVPContent />
    </Box>
  );
}
