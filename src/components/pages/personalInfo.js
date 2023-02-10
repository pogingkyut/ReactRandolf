import React from "react";
import { Descriptions, Image } from "antd";

import image from '../../assets/images/photo.jpg';


const personalInfo = () => {
    return (
        <div 
          id='personalInfo' 
          className="personalInfo" 
          style={{
            minWidth:'350px', 
            maxWidth:'700px', 
            marginLeft: 'auto', 
            marginRight: 'auto'
            // paddingTop: '80px'
          }}
        >
            <div style={{
                textAlign: 'center'
            }}>
            <Image src={image} style={{
                objectFit: 'contain',
            }}></Image>
            </div>
            <Descriptions title='Basic Information' bordered >
                <Descriptions.Item label='Full Name' span={3}>Randolf Laza Santiago</Descriptions.Item>
                <Descriptions.Item label='Birthdate' span={3}>August 5, 1985</Descriptions.Item>
                <Descriptions.Item label='Age' span={3}>37</Descriptions.Item>
                <Descriptions.Item label='Address' span={3}>B5 L8 Buena Rosa 10, Tagapo, Santa Rosa City, Laguna 4026</Descriptions.Item>
                <Descriptions.Item label='Mobile Number' span={3}>+63 956 542 4488</Descriptions.Item>
                <Descriptions.Item label='LinkedIn' span={3}><a href="https://www.linkedin.com/in/randolf-santiago-019a8932/" target='_blank' rel="noreferrer">https://www.linkedin.com/in/randolf-santiago-019a8932/</a></Descriptions.Item>
                <Descriptions.Item label='Github' span={3}><a href="https://github.com/pogingkyut"  target='_blank' rel="noreferrer">https://github.com/pogingkyut</a></Descriptions.Item>
                <Descriptions.Item label='Email' span={3}>
                    {/* <a href='#' target='_blank'>randolf_santiago85@yahoo.com</a> */}
                    randolf_santiago85@yahoo.com
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default personalInfo;