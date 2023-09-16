import { CircularProgress, useTheme, Box } from '@mui/material';

export function Loading() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex',
        alignItems: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress
        sx={{ color: theme.palette.tertiary.main }}
        size="large"
      />
    </Box>
  );
}
