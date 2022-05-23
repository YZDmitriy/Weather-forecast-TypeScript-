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

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      // backgroundColor:
      //   theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    // singleValue: (styles: any) => ({
    //   ...styles,
    //   color: theme.theme === Theme.DARK ? '#fff' : '#000',
    // }),
  };

  // function changeTheme() {
  //   theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  // }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}><GlobalSvgSelector id='header-logo' /></div>
      <div className={s.title}>Weather forecast</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} >
          <GlobalSvgSelector id="change-theme" />
        </div>
          <Select 
          styles={colourStyles} 
          options={options}
          defaultValue={options[0]}/>
      </div>
    </header>
  );
}

export default Header;
