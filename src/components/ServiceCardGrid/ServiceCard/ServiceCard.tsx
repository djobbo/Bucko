import { IService } from '@lib/api/types';
import { RichText } from 'prismic-reactjs';
import styles from './ServiceCard.module.scss';

export const ServiceCard = ({
    title,
    icon,
    content,
}: IService): JSX.Element => {
    return (
        <div className={styles.card}>
            <img src={icon} alt={title} className={styles.icon} />
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>
                <RichText render={content} />
            </p>
        </div>
    );
};
