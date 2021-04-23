import React from 'react';

const AddBtn = () => {

    // const blueBtn2 = blueBtn
    const Event = {
        Hover: function (target) {
            console.log('tar: ', target)
            // const blueBtn = document.getElementById("add")
            // const icon = document.querySelector("i")
            target.classList.value = ''
            target.style.fontSize = "4px"
            console.log(target.style)
            target.innerHTML = "Docs"
        },
        Leave: function (target) {
            console.log('tar: ', target)
            target.classList.value = 'large material-icons'
            target.style.fontSize = "30px"
            target.innerHTML = "add"
        }
    }

    // const Hover = (target) => {
    //     console.log('tar: ', target)
    //     // const blueBtn = document.getElementById("add")
    //     // const icon = document.querySelector("i")
    //     target.classList.value = ''
    //     target.style = {fontsize: "10px"}
    //     target.innerHTML = "docs"
    // }

    return (
        <div className="fixed-action-btn">
            <a href="#add-title-modal"
               className="btn-floating btn-large blue darken-2 modal-trigger"
               id="add"
               onMouseEnter={e => {
                   Event.Hover(e.target)
               }}
               onMouseLeave={e => {
                   Event.Leave(e.target)
               }}
            >
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#add-patient-modal" className="btn-floating green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    {/*<a href="#add-tech-modal" className="btn-floating red modal-trigger">*/}
                    {/*    <i className="material-icons">person_add</i>*/}
                    {/*</a>*/}
                </li>
            </ul>
        </div>
    );
}

export default AddBtn;