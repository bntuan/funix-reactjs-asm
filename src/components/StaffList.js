import React from 'react';
import { Link } from 'react-router-dom';

function StaffList(props) {
    const dsNhanVien = props.staffs.map(nv => {
        return <div key={nv.id}>
            <Link to={`/nhanvien/${nv.id}`} >
                <div className='col-12 m-4'>
                    <img src={nv.image} alt={nv.name} />
                    <p>{nv.name }</p>
                </div>
            </Link>
        </div>
    })
    return (
        <div className='container'>
            <div className='row'>{dsNhanVien}</div>
        </div>  
    );
}

export default StaffList;