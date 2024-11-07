import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentTable from "./StudentTable";

import CreateStudentTable from "./CreateStudentTable";
import UpdateStudentTable from "./UpdateStudentTable";
import { ViewStudentTable } from "./ViewStudentTable";
import { EditStudent } from "./EditStudent";

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/update" element={<UpdateStudentTable />} />
        <Route path="/create" element={<CreateStudentTable />} />
        <Route path="/view/:id" element={<ViewStudentTable />} />
        <Route path="/edit/:idParams" element={<EditStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
