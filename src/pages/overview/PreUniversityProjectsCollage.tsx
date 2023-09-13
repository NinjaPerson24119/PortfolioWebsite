import { ImageList, ImageListItem } from '@mui/material';

interface ImageListItemData {
  src: string;
  title: string;
}

export function PreUniversityProjectsCollage() {
  const imageListItemData: ImageListItemData[] = [
    {
      src: '/pre-university-projects/c++-meteors.webp',
      title: 'C++ Meteors Clone',
    },
    {
      src: '/pre-university-projects/c++-snake-opengl.webp',
      title: 'C++ Snake Clone OpenGL',
    },
    {
      src: '/pre-university-projects/c++-streak-space-invaders-clone.webp',
      title: 'C++ Streak Space Invaders Clone',
    },
    {
      src: '/pre-university-projects/csharp-forms-space-invaders.webp',
      title: 'C# Forms Space Invaders Clone',
    },
    {
      src: '/pre-university-projects/c++-molten-miner.png',
      title: 'C++ Molten Miner',
    },
    {
      src: '/pre-university-projects/csharp-snake-ascii.webp',
      title: 'C# Snake Clone ASCII',
    },
  ];

  return (
    <ImageList
      sx={{ width: 500, height: 505 }}
      cols={3}
      rowHeight={250}
      variant="masonry"
    >
      {imageListItemData.map((item) => (
        <ImageListItem key={item.src}>
          <img
            src={`${item.src}?w=250&fit=crop&auto=format`}
            srcSet={`${item.src}?w=250&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
