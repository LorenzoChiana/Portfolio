import React from 'react';
import Anchor from 'components/Anchor';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© 2018-${new Date().getFullYear()} `}
    </span>
    <Anchor className="footer__link" secondary href="/doc/CV_ChianaLorenzo_en.pdf" target="_blank">
      Lorenzo Chiana
    </Anchor>
  </footer>
);

export default Footer;
