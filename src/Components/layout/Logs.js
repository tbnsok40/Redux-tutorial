import React, {useState, useEffect} from 'react';
import LogItem from "./LogItem";
import {connect} from 'react-redux'; // reducer와 연결하기 위해 필요한 connect
import PropTypes from 'prop-types';
import {getLogs} from "../../actions/logActions";

// 여기 log는 root reducer(index.js)에서 정의됐다. 여기 괄호는 props의 자리
const Logs = ({log: {logs, loading}, getLogs}) => {
    // const [logs, setLogs] = useState([]);
    // const [loading, setLoading] = useState(false);
    useEffect(() => {
        getLogs();
    }, [])

    // reducer에서 호출하기에 app level에선 필요없다. 주석처리
    // const getPosts = async () => {
    //     setLoading(true);
    //     const res = await fetch('/posts', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }); // proxy 설정을 해두기 때문에 full url 작성하지 않아도 돼.
    //     const data = await res.json();
    //
    //     setLogs(data);
    //     setLoading(false);
    // }
    if (logs === null){
        // wow... 이게 없어서, 비동기 처리가 안되어 본 return문이 동작 안됐던 거임(logs가 아직 null인 상태였기에 당연히 length를 가질리 없어 미리 터진것.)
        // 여기서 logs가 null 일 때를 미리 분기처리하고, 그 후에 null 탈피하면 아래 return 문을 탄다.
        return <h1>it s loading</h1>
    }


    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center"> No logs to show...</p>) :
                (logs.map(log => <LogItem log={log} key={log.id}/>))
            }
        </ul>
    );
};


//bringing in as prop
Logs.propType = {
    log: PropTypes.object.isRequired,
}

// state 다음에 ()괄호 못 찾아서 에러 터짐
// const mapStateToProps = state => {
//     state.log // this is from rootreducer (index.js)     // state.log is whole log state
// }

const mapStateToProps = state => ({
    // this first log is prop
    log: state.log // this is from rootreducer (index.js)
})


// export default Logs;
export default connect(mapStateToProps, {getLogs})(Logs);

// action 역시 props 형태로 들어오기 때문에, 상단에서 처리해준다.
// npm i moment react-moment


