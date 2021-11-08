import { useState } from "react";

function Form({ setRecords, records }) {
    const [inputs, setInputs] = useState({
        name: "",
        lastName: "",
        email: "",
    })

    const inputChange = (e) => {
        let newInputs = {
            ...inputs,
            [e.target.name]: e.target.value
        }
        setInputs(newInputs)
    }


    const resetInput = () => {        
        setInputs({
            name: "",
            lastName: "",
            email: "",
        })
    }

    const submitInputs = (e) => {
        e.preventDefault()
        setRecords([inputs, ...records])
        setInputs({
            name: "",
            lastName: "",
            email: "",
        })
    }

    return (

        <form className="row g-3  needs-validation" onSubmit={submitInputs} >
            <div className="col-md-3">
                <label className="form-label">Name</label>
                <div className="input-group">
                    <input type="text" className="form-control" id="validationDefaultName" aria-describedby="inputGroupPrepend2" name="name" value={inputs.name} onChange={inputChange} required />
                </div>
            </div>
            <div className="col-md-3">
                <label className="form-label">Last Name</label>
                <div className="input-group">
                    <input type="text" className="form-control" id="validationDefaultLastName" aria-describedby="inputGroupPrepend2" name="lastName" value={inputs.lastName} onChange={inputChange} required />
                </div>
            </div>
            <div className="col-md-3">
                <label className="form-label">Email</label>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="email" className="form-control" id="validationDefaultEmail" aria-describedby="inputGroupPrepend2" name="email" value={inputs.email} onChange={inputChange} required />
                </div>
            </div>
            <div className="col-3 d-flex align-items-end justify-content-around">
                <button className="btn btn-primary" type="submit" >Submit</button>
                <button className="btn btn-primary" type="submit" onClick={resetInput}>Reset</button>
            </div>
        </form>

    );
}

export default Form;
