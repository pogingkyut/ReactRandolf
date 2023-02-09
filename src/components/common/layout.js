import React from 'react';
import 'antd/dist/reset.css';

import { Layout } from 'antd';
import Header from './header';
import Content from './content';
import Footer from './footer';


const layout = () => {
    return (
        <div className='layout'>
            <Layout>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </div>
    );
}

export default layout;