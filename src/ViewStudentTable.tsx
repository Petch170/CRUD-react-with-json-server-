import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface Student {
  id: number;
  name: string;
  phone: number;
  place: string;
}

export const ViewStudentTable = () => {
  // console.log(useParams());

  const { id } = useParams();
  // console.log("id", id);
  const [studentData, setStudentData] = useState<Student | null>(null);

  useEffect(() => {
    (async () => {
      try {
        // const res = await axios.get(`http://localhost:8000/students/${id}`);
        const res = await axios.get("http://localhost:8000/students/" + id);
        setStudentData(res.data);
        // console.log(JSON.stringify(res.data));
      } catch (error) {
        console.log((error as Error).message);
      }
    })();
  }, [id]);

  //แบบfetch จะเห็นข้อมูลในlogไม่ว่าstatus จะเป็นอะไร แต่มนaxiosก็สามารถดุได้โดย log(JSON.stringify(res.data))
  // useEffect(() => {
  //   fetch("http://localhost:8000/students/" + id)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err.message));
  // }, []);
  return (
    <div className="container">
      <h1>View student Detail</h1>
      {studentData ? (
        <div>
          <p>
            <strong>ID:</strong>
            {studentData.id}
          </p>
          <p>
            <strong>Name:</strong>
            {studentData.name}
          </p>
          <p>
            <strong>Place:</strong>
            {studentData.place}
          </p>
          <p>
            <strong>Phone:</strong>
            {studentData.phone}
          </p>
        </div>
      ) : (
        // <p>loading</p>
        <div>
          <p>
            <strong>ID:</strong>
          </p>
          <p>
            <strong>Name:</strong>
          </p>
          <p>
            <strong>Place:</strong>
          </p>
          <p>
            <strong>Phone:</strong>
          </p>
        </div>
      )}

      <Button variant="contained" color="error" href="/">
        Back
      </Button>
      {/* <div>
        <p>
          <strong>ID:</strong>1
        </p>
        <p>
          <strong>Name:</strong>petch
        </p>
        <p>
          <strong>Place:</strong>bangkok
        </p>
        <p>
          <strong>Phone</strong>000 000 0000
        </p>
      </div> */}
    </div>
  );
};
