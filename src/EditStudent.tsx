import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditStudent = () => {
  const { idParams } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setplace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false);
  // const [studentDatas, setStudentDatas] = useState(null);
  const navigate = useNavigate();

  // console.log("idParams", idParams);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/students/" + idParams
        );

        setId(res.data.id);
        setName(res.data.name);
        setplace(res.data.place);
        setPhone(res.data.phone);
        // console.log("res", res.data);
      } catch (error) {
        console.log((error as Error).message);
      }
    })();
  }, [idParams]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const studentData = { id, name, place, phone };
      const res = await axios.put(
        `http://localhost:8000/students/${idParams}`,
        studentData
      );
      alert("แก้ไขข้อมูลเรียบร้อย");
      navigate("/");
      // console.log("res", res.data);
      // setStudentDatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2>Edit Student</h2>
      <form
        className="grid grid-cols-1 border items-center "
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            name="id"
            className="border w-full h-8 p-3 rounded-lg border-gray-400"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {id.length === 0 && validation && (
            <span className="text-red-500 text-sm"> * กรุณากรอกข้อมูล</span>
          )}
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="input ypur name"
            className="border w-full h-8 p-3 rounded-lg border-gray-400 "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {name.length === 0 && validation && (
            <span className="text-red-500 text-sm"> * กรุณากรอกข้อมูล</span>
          )}
        </div>
        <div>
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            placeholder="Input your place"
            className="border w-full h-8 p-3 rounded-lg border-gray-400 "
            required
            value={place}
            onChange={(e) => setplace(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {place.length === 0 && validation && (
            <span className="text-red-500 text-sm"> * กรุณากรอกข้อมูล</span>
          )}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Input your phone "
            className="border w-full h-8 p-3 rounded-lg border-gray-400 "
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onMouseDown={() => setValidation(true)}
          />
          {phone.length === 0 && validation && (
            <span className="text-red-500 text-sm"> * กรุณากรอกข้อมูล</span>
          )}
        </div>
        <div className="flex gap-3 py-5">
          <Button type="submit" variant="contained" color="success">
            Update
          </Button>
          <Button type="button" variant="contained" color="error" href="/">
            Back
          </Button>
        </div>
      </form>
    </div>
  );
};
