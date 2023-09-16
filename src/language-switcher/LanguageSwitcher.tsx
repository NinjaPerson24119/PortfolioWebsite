import { Switch, Box, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext, LanguageContextProps } from './language-context';

export function LanguageSwitcher() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const languageContext = useContext<LanguageContextProps>(LanguageContext);
  const switchLanguage = () => {
    if (languageContext.language === 'english') {
      languageContext.setLanguage('french');
      void i18n.changeLanguage('fr');
    } else {
      languageContext.setLanguage('english');
      void i18n.changeLanguage('en');
    }
  };
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ color: theme.palette.tertiary.main }}>
        {t('LANGUAGES.FRENCH')}
      </Typography>
      <Switch
        checked={languageContext.language === 'english'}
        onClick={switchLanguage}
        color="secondary"
      ></Switch>
      <Typography variant="body2" sx={{ color: theme.palette.tertiary.main }}>
        {t('LANGUAGES.ENGLISH')}
      </Typography>
    </Box>
  );
}
