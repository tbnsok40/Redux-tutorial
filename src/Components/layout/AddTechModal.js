import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({html: 'please enter the first and last name'})
        } else {
            console.log(firstName, lastName)
            // clear fields
            setFirstName('');
            setLastName('');
        }

    }
    return (
        <div id="add-tech-modal" className="modal bottom-sheet">

            <div className="modal-content">
                <h4>New technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="firstName" className='active'>First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="lastName" className='active'>Last Name</label>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit}
                   className="modal-close waves-effect waves-blue waves-green btn">Enter</a>
            </div>

        </div>

    );
};



export default AddTechModal;