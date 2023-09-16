import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
  CircularProgress,
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
  // TODO: unrig
  const [submitted, setSubmitted] = useState(SubmissionState.SUBMISSION_ERROR);
  const [successSnackOpen, setSuccessSnackOpen] = useState(false);
  const submissionProcessing = useMemo(
    () => submitted === SubmissionState.SUBMITTING,
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
        console.log(response);
        if (!response.ok) {
          throw new Error('Message submission failed.');
        }
        setSubmitted(SubmissionState.SUBMITTED);
        setSuccessSnackOpen(true);
      })
      .catch((error) => {
        console.log('error submitting message', error);
        setSubmitted(SubmissionState.SUBMISSION_ERROR);
      });
  };

  function Form() {
    return (
      <Box component="form" onSubmit={handleSubmit}>
        <StyledTextField
          name="name"
          label={t('CONTACT.NAME_LABEL')}
          variant="outlined"
          required
          type="text"
          fullWidth
        />
        <StyledTextField
          name="email"
          label={t('CONTACT.EMAIL_LABEL')}
          variant="outlined"
          required
          type="email"
          fullWidth
        />
        <StyledTextField
          name="message"
          label={t('CONTACT.MESSAGE_LABEL')}
          variant="outlined"
          required
          multiline
          minRows={4}
          fullWidth
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '8px',
          }}
        >
          {submissionProcessing ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button type="submit" color="secondary" variant="contained">
              {t('CONTACT.SEND_MESSAGE')}
            </Button>
          )}
        </Box>
      </Box>
    );
  }

  function FormSuccess() {
    return (
      <>
        <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '0' }}>
          {t('CONTACT.SUBMITTED_HEADER')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CheckCircleOutlineIcon color="inherit" sx={{ marginRight: '8px' }} />
          <Typography variant="body1">
            {t('CONTACT.SUBMITTED_DETAILS')}
          </Typography>
        </Box>
      </>
    );
  }

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
        {submitted !== SubmissionState.SUBMITTED && <Form />}
        {submitted === SubmissionState.SUBMITTED && <FormSuccess />}
      </Paper>
      <Snackbar
        open={submitted === SubmissionState.SUBMISSION_ERROR}
        autoHideDuration={5000}
        onClose={() => setSubmitted(SubmissionState.NOT_SUBMITTED)}
      >
        <Alert severity="error">{t('CONTACT.SUBMITTED_ERROR')}</Alert>
      </Snackbar>
      <Snackbar
        open={successSnackOpen}
        autoHideDuration={5000}
        onClose={() => setSuccessSnackOpen(false)}
      >
        <Alert severity="success">{t('CONTACT.SUBMITTED_SUCCESS')}</Alert>
      </Snackbar>
    </Box>
  );
}
