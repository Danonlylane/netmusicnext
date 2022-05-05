import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import BeiTopRanking from "./c-cpns/top-ranking/index.page";
import BeiRankingHeader from './c-cpns/ranking-header/index.page';
import BeiRankingList from './c-cpns/ranking-list/index.page';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function BeiRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <BeiTopRanking/>
      </RankingLeft>
      <RankingRight>
        <BeiRankingHeader/>
        <BeiRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
