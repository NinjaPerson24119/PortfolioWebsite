import { Button, Typography } from '@mui/material';
import styles from './ErrorPageTemplate.module.scss';

export interface RedirectInfo {
  route: string;
  text: string;
}

export interface IconProps {
  className: string;
}

export interface ErrorPageTemplateProps {
  icon: React.FunctionComponent<IconProps>;
  header: string;
  subheader?: string;

  // display button to redirect
  redirectInfo?: RedirectInfo;
}

export function ErrorPageTemplate({ ...props }: ErrorPageTemplateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {props.icon({ className: styles.icon })}
        <Typography variant="h1" className={styles.centeredText}>
          {props.header}
        </Typography>
        {props.subheader && (
          <Typography variant="h2" className={styles.centeredText}>
            {props.subheader}
          </Typography>
        )}
        {props.redirectInfo && (
          <Button
            variant="contained"
            color="secondary"
            href={props.redirectInfo.route}
          >
            {props.redirectInfo.text}
          </Button>
        )}
      </div>
    </div>
  );
}
