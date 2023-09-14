import {
  TextField,
  Button,
  Paper,
  Typography,
  Alert,
  FormLabel,
  Snackbar,
} from '@mui/material';
import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { API_PREFIX } from '../../constants';
import styles from './ContactForm.module.scss';

enum SubmissionState {
  NOT_SUBMITTED,
  SUBMITTED,
  SUBMISSION_ERROR,
}

export function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(SubmissionState.NOT_SUBMITTED);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const apiUrl = `${API_PREFIX}/contact`;
    const requestBody = {
      key1: 'value1',
      key2: 'value2',
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Message submission failed.');
        }
        return response.json();
      })
      .then(() => {
        setSubmitted(SubmissionState.SUBMITTED);
      })
      .catch(() => {
        setSubmitted(SubmissionState.SUBMISSION_ERROR);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Typography variant="h2" color="secondary" sx={{ textAlign: 'center' }}>
        {t('CONTACT.HEADER')}
      </Typography>
      <Paper className={styles.formContainer}>
        {(submitted === SubmissionState.NOT_SUBMITTED || loading) && (
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <FormLabel color="secondary">{t('CONTACT.FORM_LABEL')}</FormLabel>
            <TextField
              label={t('CONTACT.NAME_LABEL')}
              variant="outlined"
              required
              type="text"
              fullWidth
              color="secondary"
            />
            <TextField
              label="Email"
              variant="outlined"
              required
              type="email"
              fullWidth
              color="secondary"
            />
            <TextField
              label={t('CONTACT.EMAIL_LABEL')}
              variant="outlined"
              required
              multiline
              minRows={4}
              fullWidth
              color="secondary"
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              disabled={loading}
            >
              {t('CONTACT.SEND_MESSAGE')}
            </Button>
          </form>
        )}
        {submitted === SubmissionState.SUBMITTED && (
          <>
            <Typography variant="h2">
              {t('CONTACT.SUBMITTED_HEADER')}
            </Typography>
            <Alert severity="success">{t('CONTACT.SUBMITTED_DETAILS')}</Alert>
          </>
        )}
      </Paper>
      <Snackbar
        open={submitted === SubmissionState.SUBMISSION_ERROR}
        autoHideDuration={6000}
        onClose={() => setSubmitted(SubmissionState.NOT_SUBMITTED)}
      >
        <Alert severity="error">{t('CONTACT.SUBMITTED_ERROR')}</Alert>
      </Snackbar>
    </>
  );
}
