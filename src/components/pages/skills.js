import React from "react";
import { Descriptions, Image } from "antd";


const skills = () => {
    return (
        <div id='personalInfo' className="personalInfo" style={{width:'30%', 
          marginLeft: 'auto', marginRight: 'auto'}}>
            <Image></Image>
            <Descriptions title='Programming Skills' bordered >
                <Descriptions.Item label='Python' span={1}></Descriptions.Item>
                <Descriptions.Item label='Django' span={1}></Descriptions.Item>
                <Descriptions.Item label='Reactjs' span={1}></Descriptions.Item>
                <Descriptions.Item label='HTML/CSS' span={1}></Descriptions.Item>
                <Descriptions.Item label='Javascript' span={1}></Descriptions.Item>
                <Descriptions.Item label='PHP/MySQL' span={1}></Descriptions.Item>
            </Descriptions>
            <Descriptions title='Computer Skills' bordered >
                <Descriptions.Item label='Microsoft Office' span={1}></Descriptions.Item>
                <Descriptions.Item label='Photoshop' span={1}></Descriptions.Item>
                <Descriptions.Item label='Autocad' span={1}></Descriptions.Item>
                <Descriptions.Item label='Solidworks' span={1}></Descriptions.Item>
                <Descriptions.Item label='PLC Programming' span={1}></Descriptions.Item>
                <Descriptions.Item label='LAN Network setup' span={1}></Descriptions.Item>
            </Descriptions>
            <Descriptions title='Technical Skills' bordered >
                <Descriptions.Item label='Motor Rebuild' span={1}></Descriptions.Item>
                <Descriptions.Item label='Pneumatics' span={1}></Descriptions.Item>
                <Descriptions.Item label='Mechanical/Electrical troubleshooting' span={1}></Descriptions.Item>
                <Descriptions.Item label='Preventive Maintenace' span={1}></Descriptions.Item>
                <Descriptions.Item label='Monitoring/Data Gathering' span={1}></Descriptions.Item>
                <Descriptions.Item label='Forklift driving' span={1}></Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default skills;