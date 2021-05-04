import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPatients} from "../../../actions/patientActions";
import CurrentPagePatients from './CurrentPagePatients'

const AllPatients = ({patient: {patient}, getPatients}) => {
    useEffect(() => {
        getPatients();
    }, [])
    return (
        <div style={{background: "none", marginTop: "20px", height: "800px"}}>
            <table style={{background: "none", textAlign: "center"}}>
                <tr style={{background: "none"}}>
                    <th style={{background: "none", width: "20px", }}>환자번호</th>
                    <td style={{background: "none", width: "20px"}}>이름</td>
                    <td style={{background: "none", width: "20px"}}>생년월일</td>
                    <td style={{background: "none", width: "20px"}}>코드</td>
                    {/*<td style={{background: "none", width: "30px"}}>수정 / 삭제</td>*/}
                </tr>
                <CurrentPagePatients/>

            </table>
        </div>
    )
}
const mapStateToProps = (state) => ({
    patient: state.patient
})

export default connect(mapStateToProps, {getPatients})(AllPatients);
