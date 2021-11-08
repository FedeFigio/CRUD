import { useEffect, useState } from "react";
import EditRecord from "./EditRecord";




function RecordsList({ records, setRecords }) {

    const [indexRecordToEdit, setIndexRecordToEdit] = useState(null)

    const deleteRecord = (i) => {
        let newRecords = records.filter((record, index) => { return index !== i })
        setRecords(newRecords)
    }

    const editRecord = (record, i) => {
        setIndexRecordToEdit(i)
    }

    const renderRecordItem = () => {
        return records.map((record, index) => {
            return (

                <ul key={index} className={`list-group list-group-horizontal mt-3 p-3 ${index === indexRecordToEdit?"border border-success":""}`  }>
                    {index !== indexRecordToEdit ? <>
                        <li className="list-group-item w-25">{record.name}</li>
                        <li className="list-group-item w-25">{record.lastName}</li>
                        <li className="list-group-item w-25">{record.email}</li>
                        <li className="list-group-item w-25 justify-content-around d-flex" ><i className="fas fa-trash text-danger" onClick={() => { deleteRecord(index) }}></i> <i className="fas fa-edit text-primary " onClick={() => { editRecord(record, index) }}></i></li>
                    </> : <>
                        <EditRecord setIndexRecordToEdit={setIndexRecordToEdit} indexRecordToEdit={indexRecordToEdit} record={record } records={records} setRecords={setRecords} />
                    </>}
                </ul>
            )
        })
    }

    return (<>
        <ul className="list-group list-group-horizontal p-3">
            <li className="list-group-item w-25">NAME</li>
            <li className="list-group-item w-25">LAST NAME</li>
            <li className="list-group-item w-25">EMAIL</li>
            <li className="list-group-item w-25">ACTIONS</li>
        </ul>
        {renderRecordItem()}
    </>
    )
}

export default RecordsList;
