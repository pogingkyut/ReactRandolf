import React from "react";
import { Descriptions, Space } from "antd";

const data = [
    {
        id: 1,
        Company: 'KPI ELEVATORS INC',
        Position: 'Repair Technician (Elevator/Escalator)',
        Job_Description: 'Conducts major repair for elevator and escalator',
        From: 'September 2019',
        To: 'Present'
    },
    {
        id: 2,
        Company: 'TRANSITIONS OPTICAL PHILIPPINES INC',
        Position: 'Equipment Reliability Engineering/ ERE Technician',
        Job_Description: 'Performs Production Machinery Preventive Maintenance',
        From: 'July 2017',
        To: 'September 2019'
    },
    {
        id: 3,
        Company: 'AHMAD AL TAZI ROCKWOOL FACTORY',
        Position: 'Lead Maintenance Technician',
        Job_Description: 'Performs Line troubleshooting and maintenance of rockwool equipment',
        From: 'March 2016',
        To: 'March 2017'
    },
    {
        id: 4,
        Company: 'MATTEX DUBAI LLC',
        Position: 'Mechanical Maintenance Technician',
        Job_Description: 'Overall incharge in plant equipments and facilities',
        From: 'April 2012',
        To: 'October 2014'
    },
    {
        id: 5,
        Company: 'UNICHARM GULF HYGIENIC INDUSTRIES',
        Position: 'Mechanic Operator',
        Job_Description: 'Maintenance and Line Leader Tango 8 Diaper Assembly Machine',
        From: 'December 2008',
        To: 'October 2010'
    },
    {
        id: 6,
        Company: 'TERUMO PHILIPPINES CORPORATION',
        Position: 'Assembly Maintenance Technician',
        Job_Description: 'Preventive maintenance of syringe assembly machineries',
        From: 'April 2005',
        To: 'December 2008'
    }
]


const workHistory = () => {
    return (
        <div id='workHistory' className="workHistory" style={{minWidth:'350px', maxWidth:'700px', 
          marginLeft: 'auto', marginRight: 'auto'}}>            
            <div>
                <h3>Work History</h3>
                {data.map((d) => {
                    return (
                        <Descriptions bordered key={d.id}>
                            <Descriptions.Item label='Company' span={3}>{d.Company}</Descriptions.Item>
                            <Descriptions.Item label='Position' span={3}>{d.Position}</Descriptions.Item>
                            <Descriptions.Item label='Job Description' span={3}>{d.Job_Description}</Descriptions.Item>
                            <Descriptions.Item label='From' span={3}>{d.From}</Descriptions.Item>
                            <Descriptions.Item label='To' span={3}>{d.To}</Descriptions.Item>
                            <Space span={3}/>
                        </Descriptions>
                    );
                })}
            </div>
        </div>
    );
}

export default workHistory;