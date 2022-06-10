import React, {useState} from "react";
import Header from "./Header";
import StaffList from "./StaffList";
import Footer from "./Footer";
import { Switch, Route } from 'react-router-dom';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';

function Main() {
    const [nhanvien, setNhanVien] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS
    });
    return (
        <div>
            <Header />
            <Route
                path='/nhanvien'
                component={() => <StaffList staffs={nhanvien.staffs} />}
            />
            <Footer />
        </div>
    );
}

export default Main;