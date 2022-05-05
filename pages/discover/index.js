import React, { memo } from 'react';


import { discoverMenu } from "@/common/local-data";


import { DiscoverWrapper, TopMenu } from './style';

export default memo(function BeiDiscover(props) {


    return (
        <DiscoverWrapper>
            <div className="top">
                <TopMenu className="wrap-v1">
                    {
                        discoverMenu.map((item, index) => {
                            return (
                                <div className="item" key={item.title}>
                                    <a href={item.link}>{item.title}</a>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
        </DiscoverWrapper>
    )
});
