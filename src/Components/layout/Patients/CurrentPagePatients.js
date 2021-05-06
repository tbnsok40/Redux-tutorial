import React from "react";

const AllPatients = ({posts}) => {

    return (
        <table style={{background: "white", textAlign: "center"}}>
            <tr style={{background: "none"}}>
                <th style={{background: "none", width: "20px",}}>환자번호</th>
                <td style={{background: "none", width: "20px"}}>이름</td>
                <td style={{background: "none", width: "20px"}}>생년월일</td>
                <td style={{background: "none", width: "20px"}}>코드</td>
                {/*<td style={{background: "none", width: "30px"}}>수정 / 삭제</td>*/}
            </tr>
            {posts.map(p => (
                <tr style={{background: "none"}} key={p.id}>
                    <th style={{background: "none", width: "50px"}}>{p.id}</th>
                    <td style={{background: "none"}}>{p.name}</td>
                    <td style={{background: "none"}}>{p.birth}</td>
                    <td style={{background: "none"}}>{p.code}</td>
                    {/*<td style={{background: "none", width: "30px"}}>*/}
                    {/*    <button>EDIT</button>*/}
<<<<<<< HEAD
                    {/*<button>DELETE</button>*/}
=======
                        {/*<button>DELETE</button>*/}
>>>>>>> fd8f87b85ef2fd187b126fa6e8ffdf44342ff9bf
                    {/*</td>*/}
                </tr>
            ))}
        </table>
    )
}
export default AllPatients;
