import React, { memo, useCallback, useEffect, useRef, useState } from 'react';


import { headerLinks } from '@/common/local-data';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';

export default memo(function BeiAppHeader() {

    // 页面代码
    // 顶栏图标用路由还是a链接
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <a
                    key={item.title}
                    href={item.link}
                    className="header-item"
                    activeclassname="link-active"
                >
                    <em>{item.title}</em>
                    <i className="icon"></i>
                </a>
            );
        } else {
            return (
                <a href={item.link} key={item.title} className="header-item">
                    {item.title}
                </a>
            );
        }
    };


    // 返回jsx
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <h1>
                        <a href="#/" className="logo sprite_01">网易云音乐</a>
                    </h1>
                    <div className="header-group">
                        {headerLinks.map((item, index) => {
                            return showSelectItem(item, index);
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    {/* <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} /> */}
                    <div className="search-wrapper">
                        <Input
                            className="search "
                            placeholder="音乐/歌手"
                            size="large"
                            prefix={<SearchOutlined />}
                        />
                        </div>
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
});
