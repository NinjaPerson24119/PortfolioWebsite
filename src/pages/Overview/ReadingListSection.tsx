import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DoneIcon from '@mui/icons-material/Done';
import { Typography, Link, Paper, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const middleDot = '\u00B7';

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
      title: 'Math 417: Honours Real Variables I',
      url: 'https://www.math.ualberta.ca/~bowman/m417/m417.pdf',
      status: 'finished',
    },
    {
      title: 'Abstract Algebra',
      url: 'https://www.amazon.ca/Abstract-Algebra-David-S-Dummit/dp/0471433349',
      status: 'reading',
    },
    {
      title: 'Math 117/118: Honours Calculus',
      url: 'https://www.math.ualberta.ca/~bowman/m117/m117.pdf',
      status: 'finished',
    },
    {
      title: 'Game Engine Architecture',
      url: 'https://www.amazon.ca/Engine-Architecture-Third-Jason-Gregory/dp/1138035459',
      status: 'reading',
    },
  ];

  function BookReadingStatusIcon(status: BookReadingStatus): React.ReactNode {
    switch (status) {
      case 'reading':
        return (
          <>
            <AutoStoriesIcon color="secondary" />
            <Typography variant="body1" sx={{ color: theme.palette.text.link }}>
              {t('OVERVIEW.READING_LIST.BOOK_READING_STATUS.READING')}
            </Typography>
          </>
        );
      case 'finished':
        return (
          <>
            <DoneIcon color="secondary" />
            <Typography variant="body1" sx={{ color: theme.palette.text.link }}>
              {t('OVERVIEW.READING_LIST.BOOK_READING_STATUS.FINISHED')}
            </Typography>
          </>
        );
      case 'to-read':
        return (
          <>
            <BookmarkIcon color="secondary" />
            <Typography variant="body1" sx={{ color: theme.palette.text.link }}>
              {t('OVERVIEW.READING_LIST.BOOK_READING_STATUS.TO_READ')}
            </Typography>
          </>
        );
    }
  }

  return (
    <>
      <Typography variant="h2">{t('OVERVIEW.READING_LIST.HEADER')}</Typography>
      <Paper sx={{ padding: '8px' }}>
        {books.map((book, index) => (
          <Link
            key={index}
            href={book.url}
            sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            {BookReadingStatusIcon(book.status)}
            <Typography
              variant="body1"
              sx={{ color: theme.palette.text.link }}
            >{` ${middleDot} ${book.title}`}</Typography>
          </Link>
        ))}
      </Paper>
    </>
  );
}
