import React from "react";
import { Layout } from 'antd';

import PersonalInfo from '../pages/personalInfo';
import Skills from '../pages/skills';

const { Content } = Layout;

const content = () => {
    return (
        <div className="content">
            <Content>
                <PersonalInfo />
                <Skills />
            </Content>
        </div>
    );
}

export default content;