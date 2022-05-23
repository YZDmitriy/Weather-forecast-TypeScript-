import React from 'react';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss'

interface Props { }


function Header(props: Props) {


  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className="logo"><GlobalSvgSelector id='header-logo' /></div>
      </div>
      <div className="title">Weather forecast</div>
      <div className={s.wrapper}>
        <div className={s.change_theme} >
          <GlobalSvgSelector id="change-theme" />
        </div>
      </div>
    </header>
  );
}

export default Header;
