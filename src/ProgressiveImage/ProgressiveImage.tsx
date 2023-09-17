import { useEffect, useState } from 'react';

interface ProgressiveImageProps extends React.ComponentProps<'img'> {
  nextSrc: string;
}

export function ProgressiveImage({ nextSrc, ...props }: ProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState(props.src);

  useEffect(() => {
    const img = new Image();
    img.src = nextSrc;
    img.onload = () => setImgSrc(nextSrc);
  }, [nextSrc]);

  return <img {...props} src={imgSrc}></img>;
}
