import React from "react";
import { Layout, Menu } from 'antd';

const header = () => {

    // const items = [
    //     {
    //         key: 1,
    //         label: 'Home'
    //     },
    //     {
    //         key: 2,
    //         label: 'About'
    //     },
    //     {
    //         key: 3,
    //         label: 'Skills'
    //     }
    // ]

    const { Header } = Layout;

    return (
        <div className="header">
            <Header>
                <div className="logo"><h1>Randolf Santiago</h1></div>
                <Menu
                 theme="dark"
                 mode="horizontal"
                 defaultSelectedKeys={['1']}
                 style={{justifyContent:'right'}}
                 items={[
                    {
                        key: '/',
                        label: 'Home'
                    },
                    {
                        key: '2',
                        label: 'About'
                    },
                    {
                        key: '3',
                        label: 'Skills'
                    },
                    {
                        key: '/workHistory',
                        label: 'Work History'
                    }
                 ]}
                 onClick={(key)=>{
                    console.log (key)
                    if (key==='1') {
                        console.log ('yes')
                    }
                 }}
               />
            </Header>
        </div>
    );
    
}

export default header;
