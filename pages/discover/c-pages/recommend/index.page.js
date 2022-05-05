import React, { memo } from 'react'
import BeiHotRadio from './c-cpns/hot-radio/index.page';
// import BeiHotAnchor from './c-cpns/hot-anchor';
import BeiHotRecommend from './c-cpns/hot-recommend/index.page';
import BeiNewAlbum from './c-cpns/new-album/index.page';
import BeiRecommendRanking from './c-cpns/recommend-ranking/index.page';
import BeiSettleSinger from './c-cpns/settle-singer/index.page';
import BeiTopBanner from './c-cpns/top-banner/index.page';
import BeiUserLogin from './c-cpns/user-login/index.page';

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style';


function BeiRecommend(props) {
    return (
        <RecommendWrapper>
            <BeiTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <BeiHotRecommend />
                    <BeiNewAlbum />
                    <BeiRecommendRanking />
                </RecommendLeft>
                <RecommendRight>
                    <BeiUserLogin />
                    <BeiSettleSinger />
                    <BeiHotRadio />
                </RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}
export default (memo(BeiRecommend));


// function BeiRecommend(props) {
//     const { getBanners } = props;

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>BeiRecommend</h2>
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     topBanners: state.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         // dispatch(getTopBannerAction)
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(BeiRecommend));
