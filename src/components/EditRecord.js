import { useEffect, useState } from "react";



function EditRecord({ setIndexRecordToEdit, record,indexRecordToEdit,records,setRecords }) {
    const [inputs, setInput] = useState({
        name: record.name,
        lastName: record.lastName,
        email: record.email
    })

    const recordUpdated = () => {
        records[indexRecordToEdit]=inputs
        setRecords(records)
        setIndexRecordToEdit(null)

    }

    const inputChange = (e) => {
        let newInputs = {
            ...inputs,
            [e.target.name]: e.target.value
        }
        setInput(newInputs)
    }
    
    return (
        <form className="d-flex w-100  needs-validation" onSubmit={recordUpdated}>
            <div className="w-25">
                <label className="form-label">Modifica Nome</label>
                <div className="input-group">
                    <input  onChange={inputChange} type="text" className="form-control" id="validationDefaultLastName" aria-describedby="inputGroupPrepend2" name="name" value={inputs.name} required />
                </div>
            </div>
            <div className="w-25">
            <label className="form-label">Modifica Nome</label>
                <div className="input-group">
                    <input onChange={inputChange} type="text" className="form-control" id="validationDefaultLastName" aria-describedby="inputGroupPrepend2" name="lastName" value={inputs.lastName} required />
                </div>
            </div>
            <div className="w-25">
            <label className="form-label">Modifica Nome</label>
                <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                    <input onChange={inputChange} type="email" className="form-control" id="validationDefaultEmail" aria-describedby="inputGroupPrepend2" name="email" value={inputs.email} required />
                </div>
            </div>
            <div className="w-25 d-flex  justify-content-center">
                <button className="btn btn-primary bg-success" type="submit" >Confirm</button>
            </div>
        </form>
    );
}

export default EditRecord;