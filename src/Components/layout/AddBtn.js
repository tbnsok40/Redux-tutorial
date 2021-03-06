import React from 'react';

const AddBtn = () => {

    // const blueBtn2 = blueBtn
    const Event = {
        Hover: function (target) {
            // const blueBtn = document.getElementById("add")
            // const icon = document.querySelector("i")
            target.classList.value = ''
            target.style.fontSize = "4px"
            target.innerHTML = "Docs"
        },
        Leave: function (target) {
            target.classList.value = 'large material-icons'
            target.style.fontSize = "30px"
            target.innerHTML = "add"
        }
    }

    return (
        <div className="fixed-action-btn">
            <a href="#add-title-modal"
               className="btn-floating btn-large black darken-2 modal-trigger"
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
                    <a href="#add-patient-modal" className="btn-floating black modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AddBtn;