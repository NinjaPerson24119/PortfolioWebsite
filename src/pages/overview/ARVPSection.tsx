import SailingIcon from '@mui/icons-material/Sailing';
import { Typography, Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../routing';
import styles from './ARVPSection.module.scss';
import yolactAnimation from '/arvp/yolact.webp';

export function ARVPSection() {
  const { t } = useTranslation();
  return (
    <>
      <img src={yolactAnimation} />
      <Typography variant="h2" color="secondary" sx={{ textAlign: 'center' }}>
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
          href={ROUTES.ARVP}
          startIcon={<SailingIcon />}
        >
          {t('OVERVIEW.ARVP.LEARN_MORE')}
        </Button>
      </Box>
    </>
  );
}
