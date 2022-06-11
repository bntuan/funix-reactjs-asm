import React, {useState} from "react";
import Header from "./Header";
import StaffList from "./StaffList";
import StaffDetail from "./StaffDetail";
import Footer from "./Footer";
import { Switch, Route } from 'react-router-dom';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import Department from "./Department";

function Main() {
    const [nhanvien, setNhanVien] = useState({
        staffs: STAFFS,
        departments: DEPARTMENTS
    });

    const StaffWithId = ({ match }) => {
        return (
            <StaffDetail
                nv={
                    nhanvien.staffs.filter
                        ((item) => item.id === parseInt(match.params.nhanvienId, 10)
                    )[0]
                }
            />
        )
    }
    return (
        <div>
            <Header />
            <Switch>
                <Route
                    exact
                    path='/nhanvien'
                    component={() => <StaffList staffs={nhanvien.staffs} />}
                />
                <Route
                    path='/nhanvien/:nhanvienId'
                    component={StaffWithId}
                />
                <Route
                    path='/phongban'
                    component={() => <Department dept={nhanvien.departments} />}
                />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;