import { useEffect, useState } from "react";
import Form from "./components/Form";
import RecordsList from "./components/recordsList";



function App() {
    const [records, setRecords] = useState([])
    return (
        <div className="App container-fluid w-75 pt-5">
            <Form setRecords={setRecords} records={records} />
            <div className="mt-5">
                <RecordsList records={records} setRecords={setRecords} />
            </div>
        </div>
    );
}

export default App;
