import { useEffect, useState } from 'react';

interface ProgressiveImageProps extends React.ComponentProps<'img'> {
  nextSrc: string;
}

export function ProgressiveImage({ ...props }: ProgressiveImageProps) {
  const [imgSrc, setImgSrc] = useState(props.src);

  useEffect(() => {
    const img = new Image();
    img.src = props.nextSrc;
    img.onload = () => setImgSrc(props.nextSrc);
  }, [props.nextSrc]);

  return <img {...props} src={imgSrc}></img>;
}
