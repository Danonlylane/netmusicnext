import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { 
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/actionCreators";

import BeiSongsHeader from "./c-cpns/songs-header/index.page";
import BeiSongsList from './c-cpns/songs-list/index.page';
import {
  SongsWrapper
} from "./style"

export default memo(function BeiSongs() {
  // redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch]);

  // hooks
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <BeiSongsHeader/>
      <BeiSongsList/>
    </SongsWrapper>
  )
})
