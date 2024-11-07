import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

interface Student {
  id: number;
  name: string;
  phone: number;
  place: string;
}
function StudentTable() {
  const [students, setStudents] = useState<Student[] | null>([]);

  //  สามารใช้ได้2 แบบในbutton แบบแรกคือใส่ path+id ที่button เลย  แบบ2 คือสร้าง navigate และfunction เพื่อใส่path
  const navigate = useNavigate();

  const EditDetail = (ididParams: number) => {
    // console.log("DisplayDetail", id);
    navigate(`/edit/${ididParams}`);
    // navigate("/edit/" + id);
  };

  const deleteStudent = (id: number) => {
    if (window.confirm("คุณต้องการลบข้อมูลนี้ใช่ไหม?")) {
      axios.delete(`http://localhost:8000/students/${id}`);
      alert("ลบข้อมูลเรียบร้อย");
      window.location.reload();
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:8000/students");
        // console.log(res.data);
        setStudents(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/students")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err.message));
  // }, []);

  return (
    <div className="max-w-[1620px] flex flex-col justify-center items-center  mx-auto">
      {/* <div className="container "> */}
      <h2 className="text-2xl font-bold my-5">StudentTable</h2>
      <div className="my-3">
        <Button variant="contained" color="info" href="/create">
          Add new Student
        </Button>
      </div>
      {/* <a href="#">Add new Student</a> */}
      <div className="w-full px-3 flex items-center text-center ">
        <table className="table table-striped w-full ">
          <thead>
            <tr className="table-dark border bg-green-300 w-full ">
              {/* <th>Id</th> */}
              <th>No</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-dark border bg-green-300 w-full">
            {students &&
              students.map((student, i) => (
                <tr key={student.id}>
                  <td>{i + 1}</td>
                  {/* <td>{student.id}</td> */}
                  <td>{student.name}</td>
                  <td>{student.place}</td>
                  <td>{student.phone}</td>
                  <td className="px-3 flex items-center gap-2 justify-center">
                    <Button
                      variant="contained"
                      color="info"
                      component={Link}
                      to={`/view/${student.id}`}
                    >
                      View
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => EditDetail(student.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteStudent(student.id)}
                      variant="outlined"
                      color="warning"
                      sx={{ backgroundColor: "#f44250", color: "white" }}
                      href="#"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            {/* <tr>
              <td>1</td>
              <td>John</td>
              <td>New York</td>
              <td>000000088</td>
              <td className="px-3 flex items-center gap-2">
                <Button variant="contained" color="info" href="/view/:id">
                  View
                </Button>
                <Button variant="contained" color="secondary" href="/edit">
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="warning"
                  sx={{ backgroundColor: "#f44250", color: "white" }}
                  href="#"
                >
                  Delete
                </Button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;
