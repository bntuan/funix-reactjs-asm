import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = { 
        }
    }

    render() {

        const stafflist = this.props.staffs.map((staff) => {
            return (
                <Card key={staff.id} className="col-md-6 col-lg-4 mt-5">
                    <CardBody>
                        <CardTitle>{staff.name}</CardTitle>
                    </CardBody>
                </Card>  
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {stafflist}
                </div>
            </div>
        );
    }
}

export default StaffList;