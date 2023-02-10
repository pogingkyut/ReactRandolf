import React from "react";
import { Layout, Menu } from 'antd';

const header = () => {

    const { Header } = Layout;

    return (
        <div className="header" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%'
        }}>
            <Header>
                <div className="logo"><h1>Randolf Santiago</h1></div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{
                        justifyContent: 'right'
                    }}
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key='1'><a href="#personalInfo">Home</a></Menu.Item>
                    <Menu.Item key='2'><a href='#about'>About</a></Menu.Item>
                    <Menu.Item key='3'><a href="#skills">Skills</a></Menu.Item>
                    <Menu.Item key='4'><a href="#workHistory">Work History</a></Menu.Item>
                    <Menu.Item key='5'><a href="#contact">Contact</a></Menu.Item>
                </Menu>
            </Header>
        </div>
    );
    
}

export default header;
