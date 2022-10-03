import styles from './cms.module.css';

/* eslint-disable-next-line */
export interface CmsProps {}

export function LibCms(props: CmsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cms!</h1>
    </div>
  );
}

export default LibCms;
