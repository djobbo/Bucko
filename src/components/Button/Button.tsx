import styles from './Button.module.scss';
import Link from 'next/link';

interface Props {
	title: string;
	href: string;
}

export const Button = ({ title, href }: Props) => {
	return (
		<Link href={href}>
			<a className={styles.button}>{title}</a>
		</Link>
	);
};
