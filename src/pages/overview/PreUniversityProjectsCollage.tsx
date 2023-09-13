import { ImageList, ImageListItem } from '@mui/material';

interface ImageListItemData {
  src: string;
  title: string;
  width: number;
  height: number;
}

export function PreUniversityProjectsCollage() {
  const s = 1 / 3;
  const imageListItemData: ImageListItemData[] = [
    {
      src: '/pre-university-projects/c++-meteors.gif',
      title: 'C++ Meteors Clone',
      width: 640,
      height: 480,
    },
    {
      src: '/pre-university-projects/c++-snake-opengl.gif',
      title: 'C++ Snake Clone OpenGL',
      width: 640,
      height: 480,
    },
    {
      src: '/pre-university-projects/c++-streak-space-invaders-clone.gif',
      title: 'C++ Streak Space Invaders Clone',
      width: 500,
      height: 500,
    },
    {
      src: '/pre-university-projects/csharp-forms-space-invaders.gif',
      title: 'C# Forms Space Invaders Clone',
      width: 320,
      height: 480,
    },
    {
      src: '/pre-university-projects/c++-molten-miner.png',
      title: 'C++ Molten Miner',
      width: 284,
      height: 461,
    },
    {
      src: '/pre-university-projects/csharp-snake-ascii.gif',
      title: 'C# Snake Clone ASCII',
      width: 197 / 2,
      height: 452 / 2,
    },
  ];

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imageListItemData.map((item) => (
        <ImageListItem key={item.src}>
          <img
            src={`${item.src}?w=${item.width * s}&h=${
              item.height * s
            }&fit=crop&auto=format`}
            srcSet={`${item.src}?w=${item.width * s}&h=${
              item.height * s
            }&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
