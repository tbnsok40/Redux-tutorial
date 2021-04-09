import React, {} from 'react';
import axios from "axios";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: null
        }
    }


    componentDidMount() {
        const res = axios.get('localhost:4000/posts')
            .then()
            .catch((Error) => {console.log(Error)})

        console.log(res)
    }

    // getPosts = async () => {
    //     return await axios.get('localhost:4000/posts').then(r => {
    //         this.setState({res: r.data})
    //     });
    // }

    render() {
        return (
            <div>
                {/*{this.res.map(p => {*/}
                {/*    return (*/}
                {/*        <h1>*/}
                {/*            {p.title}*/}
                {/*        </h1>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        );
    }
}

export default Navbar;