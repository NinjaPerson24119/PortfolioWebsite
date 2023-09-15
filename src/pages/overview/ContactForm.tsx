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
import { API_PREFIX, EMAIL_SECTION_ID } from '../../constants';

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

    const formData: Record<string, string> = {
      name:
        (event.currentTarget.elements.namedItem('name') as HTMLInputElement)
          ?.value || '',
      email:
        (event.currentTarget.elements.namedItem('email') as HTMLInputElement)
          ?.value || '',
      message:
        (event.currentTarget.elements.namedItem('message') as HTMLInputElement)
          ?.value || '',
    };

    const formBody = Object.keys(formData)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]),
      )
      .join('&');

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
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
    <Box sx={{ marginBottom: '32px' }} id={EMAIL_SECTION_ID}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '24px',
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
          margin: '0 16px',
          borderColor: theme.palette.secondary.main,
          filter: `drop-shadow(1px 2px 16px ${theme.palette.secondary.main})`,
        }}
      >
        {submitted !== SubmissionState.SUBMITTED && (
          <Box component="form" onSubmit={handleSubmit}>
            <StyledTextField
              name="name"
              label={t('CONTACT.NAME_LABEL')}
              variant="outlined"
              required
              type="text"
              fullWidth
              disabled={formDisabled}
            />
            <StyledTextField
              name="email"
              label={t('CONTACT.EMAIL_LABEL')}
              variant="outlined"
              required
              type="email"
              fullWidth
              disabled={formDisabled}
            />
            <StyledTextField
              name="message"
              label={t('CONTACT.MESSAGE_LABEL')}
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
    </Box>
  );
}
