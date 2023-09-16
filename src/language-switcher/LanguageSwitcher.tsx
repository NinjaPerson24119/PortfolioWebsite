import { Switch, Box, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const languageSwitchOn = useMemo(() => {
    return i18n.language === 'en';
  }, [i18n.language]);
  const switchLanguage = () => {
    if (i18n.language === 'en') {
      //languageContext.setLanguage('french');
      void i18n.changeLanguage('fr');
    } else {
      //languageContext.setLanguage('english');
      void i18n.changeLanguage('en');
    }
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ color: theme.palette.tertiary.main }}>
        {t('LANGUAGES.FRENCH')}
      </Typography>
      <Switch
        checked={languageSwitchOn}
        onClick={switchLanguage}
        color="secondary"
      ></Switch>
      <Typography variant="body2" sx={{ color: theme.palette.tertiary.main }}>
        {t('LANGUAGES.ENGLISH')}
      </Typography>
    </Box>
  );
}
