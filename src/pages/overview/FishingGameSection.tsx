import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '../../routing';
import styles from './FishingGameSection.module.scss';
import fishingGamePoster from '/fishing_game/pushing_chest.webp';

export function FishingGameSection() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box className={styles.poster_container}>
        <img
          src={fishingGamePoster}
          alt="Fishing Game Prototype"
          className={styles.poster}
        />
      </Box>
      <Typography
        component="h2"
        variant="h3"
        color="secondary"
        sx={{ textAlign: 'center' }}
      >
        <span>{t('OVERVIEW.FISHING_GAME.HEADER')}</span>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to={ROUTES.FISHING_GAME}
          startIcon={<VideogameAssetIcon />}
          sx={{ margin: '4px' }}
        >
          {t('OVERVIEW.FISHING_GAME.LEARN_MORE')}
        </Button>
      </Box>
    </Box>
  );
}
