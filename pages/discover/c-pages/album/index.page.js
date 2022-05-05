import React, { memo } from 'react';

import BeiHotAlbum from './c-cpns/hot-album/index.page';
import BeiTopAlbum from './c-cpns/top-album/index.page';
import {
  AblumWrapper
} from './style';

export default memo(function BeiAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <BeiHotAlbum/>
      <BeiTopAlbum/>
    </AblumWrapper>
  )
})
