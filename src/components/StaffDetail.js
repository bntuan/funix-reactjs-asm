import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';


function StaffDetail(props) {
    if (props.nv != null) {
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        {/* <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem> */}
                        <BreadcrumbItem><Link to='/staff'>Nhan Vien</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.nv.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.nv.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row mb-3">
                    <RenderStaff staff={props.nv} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }

    function RenderStaff({ staff }) {
        if (staff != null) {
            return (
                <div className="col-12">
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-12'>
                            <CardImg width='100%' src={staff.image} alt={staff.name} />
                        </div>
                        <div className='col-lg-9 col-md-8 col-sm-12'>
                            <CardTitle><b>Họ và tên: {staff.name}</b></CardTitle>
                            <CardText>
                                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>
                                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                            </CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default StaffDetail;

