import EmailIcon from '@mui/icons-material/Email';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Alert,
  Box,
  Snackbar,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, FormEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { API_PREFIX } from '../../constants';

enum SubmissionState {
  NOT_SUBMITTED,
  SUBMITTING,
  SUBMITTED,
  SUBMISSION_ERROR,
}

export function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(SubmissionState.NOT_SUBMITTED);
  const formDisabled = useMemo(
    () =>
      submitted === SubmissionState.SUBMITTING ||
      submitted === SubmissionState.SUBMISSION_ERROR,
    [submitted],
  );
  const theme = useTheme();

  const StyledTextField = styled(TextField)({
    '& label': {
      color: theme.palette.tertiary.main,
    },
    '& label.Mui-focused': {
      color: theme.palette.secondary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.tertiary.main,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.tertiary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main,
      },
    },
    marginTop: '8px',
    marginBottom: '8px',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(SubmissionState.SUBMITTING);
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
        setSubmitted(SubmissionState.SUBMITTED);
      })
      .catch(() => {
        setSubmitted(SubmissionState.SUBMISSION_ERROR);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <EmailIcon color="secondary" />
        <Typography variant="h2" color="secondary" sx={{ textAlign: 'center' }}>
          {t('CONTACT.HEADER')}
        </Typography>
        <EmailIcon color="secondary" />
      </Box>
      <Paper
        sx={{
          borderRadius: '20px',
          border: '2px solid',
          padding: '16px',
          borderColor: theme.palette.secondary.main,
          filter: `drop-shadow(1px 2px 16px ${theme.palette.secondary.main})`,
        }}
      >
        {submitted !== SubmissionState.SUBMITTED && (
          <Box component="form" onSubmit={handleSubmit}>
            <StyledTextField
              label={t('CONTACT.NAME_LABEL')}
              variant="outlined"
              required
              type="text"
              fullWidth
              disabled={formDisabled}
            />
            <StyledTextField
              label="Email"
              variant="outlined"
              required
              type="email"
              fullWidth
              disabled={formDisabled}
            />
            <StyledTextField
              label={t('CONTACT.EMAIL_LABEL')}
              variant="outlined"
              required
              multiline
              minRows={4}
              fullWidth
              disabled={formDisabled}
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              disabled={formDisabled}
              sx={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '16px',
                display: 'block',
              }}
            >
              {t('CONTACT.SEND_MESSAGE')}
            </Button>
          </Box>
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
        autoHideDuration={5000}
        onClose={() => setSubmitted(SubmissionState.NOT_SUBMITTED)}
      >
        <Alert severity="error">{t('CONTACT.SUBMITTED_ERROR')}</Alert>
      </Snackbar>
      <Snackbar
        open={submitted === SubmissionState.SUBMITTED}
        autoHideDuration={5000}
      >
        <Alert severity="success">{t('CONTACT.SUBMITTED_SUCCESS')}</Alert>
      </Snackbar>
    </>
  );
}
