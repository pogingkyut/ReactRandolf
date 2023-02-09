import React from "react";
import { Layout, Menu } from 'antd';

// const handleClick = (key) => {

// }

const header = () => {

    const items = [
        {
            key: 1,
            label: 'Home'
        },
        {
            key: 2,
            label: 'About'
        },
        {
            key: 3,
            label: 'Skills'
        }
    ]

    const { Header } = Layout;

    return (
        <div className="header">
            <Header>
                <div className="logo"><h1>Randolf Santiago's Portfolio</h1></div>
                <Menu
                 theme="dark"
                 mode="horizontal"
                 defaultSelectedKeys={['1']}
                 style={{justifyContent:'right'}}
                //  onClick={() => handleClick(key)}
                 items= {items.map((item) => {
                    return {
                        key: item.key,
                        label: item.label
                    }
                 })}
               />
            </Header>
        </div>
    );
}

export default header;
