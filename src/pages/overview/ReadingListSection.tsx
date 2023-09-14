import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DoneIcon from '@mui/icons-material/Done';
import { Typography, Paper, useTheme, Box, Divider, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

type BookReadingStatus = 'reading' | 'finished' | 'to-read';

interface Book {
  title: string;
  url: string;
  status: BookReadingStatus;
}

export function ReadingListSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const books: Book[] = [
    {
      title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      url: 'https://www.amazon.ca/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8',
      status: 'reading',
    },
    {
      title: 'Head First Design Patterns: A Brain-Friendly Guide',
      url: 'https://www.amazon.ca/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124',
      status: 'reading',
    },
    {
      title: 'Abstract Algebra',
      url: 'https://www.amazon.ca/Abstract-Algebra-David-S-Dummit/dp/0471433349',
      status: 'finished',
    },
    {
      title: 'Math 417: Honours Real Variables I',
      url: 'https://www.math.ualberta.ca/~bowman/m417/m417.pdf',
      status: 'finished',
    },
    {
      title: 'Math 117/118: Honours Calculus',
      url: 'https://www.math.ualberta.ca/~bowman/m117/m117.pdf',
      status: 'finished',
    },
    {
      title: 'Game Engine Architecture',
      url: 'https://www.amazon.ca/Engine-Architecture-Third-Jason-Gregory/dp/1138035459',
      status: 'finished',
    },
    {
      title: 'Mythical Man-Month, The: Essays on Software Engineering',
      url: 'https://www.amazon.ca/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959',
      status: 'to-read',
    },
  ];

  function BookReadingStatusIcon(status: BookReadingStatus): React.ReactNode {
    function innerComponent(s: BookReadingStatus) {
      switch (s) {
        case 'reading':
          return (
            <>
              <AutoStoriesIcon color="secondary" />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.link }}
              >
                {t('OVERVIEW.READING_LIST.BOOK_READING_STATUS.READING')}
              </Typography>
            </>
          );
        case 'finished':
          return (
            <>
              <DoneIcon color="secondary" />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.link }}
              >
                {t('OVERVIEW.READING_LIST.BOOK_READING_STATUS.FINISHED')}
              </Typography>
            </>
          );
        case 'to-read':
          return (
            <>
              <BookmarkIcon color="secondary" />
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.link }}
              >
                {t('OVERVIEW.READING_LIST.BOOK_READING_STATUS.TO_READ')}
              </Typography>
            </>
          );
      }
    }
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '8px 0',
          gap: '4px',
        }}
      >
        {innerComponent(status)}
      </Box>
    );
  }

  const bookStatuses: BookReadingStatus[] = ['reading', 'finished', 'to-read'];
  return (
    <>
      <Typography variant="h2">{t('OVERVIEW.READING_LIST.HEADER')}</Typography>
      <Paper sx={{ padding: '8px' }}>
        {bookStatuses.map((status, bookStatusIndex) => (
          <div key={bookStatusIndex}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {BookReadingStatusIcon(status)}
            </Box>
            <Divider
              variant="middle"
              sx={{ borderColor: theme.palette.secondary.main }}
            ></Divider>
            <Box sx={{ padding: '16px' }}>
              {books
                .filter((book) => book.status === status)
                .map((book, bookIndex) => (
                  <Chip
                    key={`${bookStatusIndex}-${bookIndex}`}
                    label={book.title}
                    color="default"
                    variant="outlined"
                    component="a"
                    href={book.url}
                    target="_blank"
                    sx={{
                      margin: '4px',
                      height: 'auto',
                      '& .MuiChip-label': {
                        display: 'block',
                        whiteSpace: 'normal',
                      },
                      fontSize: '1rem',
                    }}
                  />
                ))}
            </Box>
          </div>
        ))}
      </Paper>
    </>
  );
}
