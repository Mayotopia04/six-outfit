import { Link } from 'react-router-dom';
import s from './Footer.module.css';
import 'animate.css';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p>
        Copyright © {new Date().getFullYear()} GoIT. Created by{' '}
        <Link className={s.link + ' animate__shakeY'} to={'/developers'}>
          Team OutFit.
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
