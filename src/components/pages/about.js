import React from "react";
import { Descriptions } from "antd";

const about = () => {
    return (
        <div 
          id='about' 
          className="about" 
          style={{
            minWidth:'350px', 
            maxWidth:'700px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            paddingTop: '80px'
          }}
        >
            <div style={{
                textAlign: 'center'
            }}>
            </div>
            <Descriptions title='About me' bordered >
                <Descriptions.Item
                    style={{
                        textAlign: 'justify'
                    }}
                >
                    <p>Hi!, I am Randolf Laza Santiago, a web developer enthusiast.
                       
                    </p>
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default about;