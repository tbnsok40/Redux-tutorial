import React, {useState, useEffect} from 'react';
import LogItem from "./LogItem";

import TechItem from "./TechItem";
const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line
        getTechs();
    }, [])


    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs'); // proxy 설정을 해두기 때문에 full url 작성하지 않아도 돼.
        const data = await res.json();

        setTechs(data);
        setLoading(false);

    }

    return (

        <div id="tech-list-modal" className="modal">

            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech =>(
                        <TechItem tech = {tech} key={tech.id}/>
                        )
                    )}
                </ul>
            </div>
        </div>

    );
};

export default TechListModal;

// npm i moment react-moment