import React, { useState } from 'react';
import { Card, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

const luongCB = 3000000;
const luongGio = 200000 / 8;

function RenderSalary({ salary, colorSalary }) {
    return (
        <Card>
            <CardTitle className='p - 3 bg-white rounded m-2'>{salary.name}</ CardTitle>
            <CardBody>
                <CardText>Ma Nhan Vien: {salary.id}</CardText>
                <CardText>He so nhan vien: {salary.salaryScale}</CardText>
                <CardText>So gio lam them: {salary.overTime}</CardText>
                <CardText className='bg-light p-2 shadow'>
                    Luong: {" "}
                    {(salary.salaryScale * luongCB + salary.overTime * luongGio)
                        .toFixed(0)
                    }
                </CardText>
            </CardBody>
        </Card>
    )
}

const Salary = (props) => {
    const [sortSalary, setSortsalary] = useState(false);
    const salary = props.luong.map((ss) => {
            return (
                <div className='col-12 col-md-6 col-lg-4 mt-2 mb-2' key={ss.id}>
                    <RenderSalary salary={ss} />
                </div>
            );
        });
    return (
        <div className='container'>
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/nhanvien'>Nhan Vien</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bang Luong</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className='row shadow mb-3'>{salary}</div>
        </div>
    );
};

export default Salary;