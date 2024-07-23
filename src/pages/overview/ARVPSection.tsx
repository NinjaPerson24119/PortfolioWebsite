import SailingIcon from '@mui/icons-material/Sailing';
import { Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { ProgressiveImage } from '../../ProgressiveImage/ProgressiveImage';
import { ROUTES } from '../../routing';
import styles from './ARVPSection.module.scss';
import yolactAnimation from '/arvp/yolactAnimation.webp';
import yolactAnimationPoster from '/arvp/yolactAnimationPoster.webp';

export function ARVPSection() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={{ margin: '4px' }}>
        <ProgressiveImage
          src={yolactAnimationPoster}
          nextSrc={yolactAnimation}
          alt="YOLACT image segmentation model detecting pool props"
          width="100%"
          height="auto"
        />
      </Box>
      <Typography
        component="h2"
        variant="h3"
        color="secondary"
        sx={{ textAlign: 'center' }}
      >
        <span className={`${styles.avoidwrap} ${styles.retainspaces}`}>
          {t('OVERVIEW.ARVP.HEADER.LINE_1')}{' '}
        </span>
        <span className={styles.avoidwrap}>
          {t('OVERVIEW.ARVP.HEADER.LINE_2')}
        </span>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to={ROUTES.ARVP}
          startIcon={<SailingIcon />}
          sx={{ margin: '4px' }}
        >
          {t('OVERVIEW.ARVP.LEARN_MORE')}
        </Button>
      </Box>
    </Box>
  );
}
