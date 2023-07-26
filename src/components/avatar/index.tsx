import styles from './style.module.css';

interface AvatarProps {
  search: string;
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, search }: AvatarProps) {
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={search} />
  )
}