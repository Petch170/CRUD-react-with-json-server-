import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudentTable() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [place, setplace] = useState("");
  const [phone, setPhone] = useState("");
  const [validation, setValidation] = useState(false); //สำหรับเช็คว่ามีการกรอกข้อมูลไหม โดยเช็ดกับ onmousedown

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log({ id, name, place, phone });
    const studentData = { id, name, place, phone };
    // console.log(studentData);

    // fetch("http://localhost:8000/students")
    //   .then((res) => res.json())
    //   .catch((err) => console.log(err.message));
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await axios.post(
        "http://localhost:8000/students",
        studentData //ระวัง อย่าเอาstudentData ไปใส่{ รวมกับ header เพราะจะเกิดการสร้างid ซ้ำ}
        //   {
        //   id,
        //   name,
        //   place,
        //   phone,
        // }

        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );

      alert("เพิ่มข้อมูลเรียบร้อย");
      navigate("/");

      // console.log(res.data);
    } catch (error) {
      console.log("Error:", (error as Error).message);
    }
  };

  return (
    <div className="container">
      <h2>Add New Student</h2>
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
            placeholder="Input your phone"
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
            Save
          </Button>
          <Button type="button" variant="contained" color="error" href="/">
            Back
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateStudentTable;
