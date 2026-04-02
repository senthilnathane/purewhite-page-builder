import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  target?: string;
  rel?: string;
};

export default function Button({
  text,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    if (target === '_blank' || href.startsWith('http')) {
      return (
        <a href={href} className={className} target={target} rel={rel}>
          {text}
        </a>
      );
    }
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}