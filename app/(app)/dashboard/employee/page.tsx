import Register from '@/app/components/Register'
import React from 'react'

function Employee() {
    const cols = ['Name', 'Address', 'Age', 'Designation']
    const data: any = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
    ];
    return (
        <div>
            <Register column={cols} data={data} title={'Employee'}/>
        </div>
    )
}

export default Employee