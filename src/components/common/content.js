import React from "react";
import { Layout } from 'antd';

import PersonalInfo from '../pages/personalInfo';
import Skills from '../pages/skills';
import WorkHistory from '../pages/workHistory';
import About from '../pages/about';
import Contact from '../pages/contact';

const { Content } = Layout;

const content = () => {
    return (
        <div className="content">
            <Content>
                <PersonalInfo />
                <About />
                <Skills />
                <WorkHistory />
                <Contact />
            </Content>
        </div>
    );
}

export default content;