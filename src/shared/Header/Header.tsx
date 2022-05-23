import React from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss'

interface Props { }


function Header(props: Props) {

  const options = [
    { value: 'city-1', label: 'Санкт-Петербург' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Новгород' },
  ];

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}><GlobalSvgSelector id='header-logo' /></div>
      </div>
      <div className={s.title}>Weather forecast</div>
      <div className={s.wrapper}>
        <div className={s.change_theme} >
          <GlobalSvgSelector id="change-theme" />
        </div>
          <Select options={options}/>
      </div>
    </header>
  );
}

export default Header;
