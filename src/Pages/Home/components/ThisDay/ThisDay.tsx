import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
// import { Weather } from '../../../../store/types/types';
import s from './ThisDay.module.scss';

interface Props {
  
  // weather: Weather;
}

export const ThisDay = ( props: Props) => {

let Data = new Date();
let Hour = Data.getHours();
let Minutes = Data.getMinutes();

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>20°</div>
          {/* <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div> */}
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
        Time: <span>{`${Hour}:${Minutes}`}</span>
        </div>
        <div className={s.this__city}>
          City: <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
};
