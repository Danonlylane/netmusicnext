import React, { memo } from 'react';

import BeiRadioCategory from './c-cpns/radio-category/index.page';
import BeiRadioRecommend from './c-cpns/radio-recommend/index.page';
import BeiRadioRanking from './c-cpns/radio-ranking/index.page';
import {
  DjRadioWrapper
} from "./style";

export default memo(function BeiDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <BeiRadioCategory />
      <BeiRadioRecommend />
      <BeiRadioRanking />
    </DjRadioWrapper>
  )
})
