import React, { useState, useEffect } from "react";
import Row from "./Row";

const DynamicForm = () => {
  const [rows, setRows] = useState([
    { name: "", surname: "", phone: "", email: "", address: ""  , yon: "" , tekmelik: false},
  ]);

  
  useEffect(() => {
    const localData = localStorage.getItem("localData");
    if (localData) {
      setRows(JSON.parse(localData));
    }
  }, []);

  const addRow = () => {
    setRows([
      ...rows,
      { name: "", surname: "", phone: "", email: "", address: "" , yon: "" , tekmelik: false },
    ]);
  };
  const deleteRow = (index) => {
    setRows(rows.filter((row, i) => i !== index));
  };

  const sameRow = () => {
    if (rows.length > 0) {
      setRows([
        ...rows,
        {
          name: rows[rows.length - 1].name,
          surname: rows[rows.length - 1].surname,
          phone: rows[rows.length - 1].phone,
          email: rows[rows.length - 1].email,
          address: rows[rows.length - 1].address,
          yon: rows[rows.length - 1].yon,
          tekmelik: rows[rows.length - 1].tekmelik,
        },
      ]);
    }else{
      setRows([
        ...rows,
        { name: "", surname: "", phone: "", email: "", address: ""  , yon: "" , tekmelik: false },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rows);
  };

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(rows));
  }, [rows]);

  return (
    <div>
      {rows.map((row, index) => (
        <Row
          rows={rows}
          setRows={setRows}
          index={index}
          name={row.name}
          surname={row.surname}
          phone={row.phone}
          email={row.email}
          address={row.address}
          yon={row.yon}
          tekmelik={row.tekmelik}
          key={index}
          deleteRow={deleteRow}
        />
      ))}
      <button
        type="button"
        className="bg-green-500 border border-green-800 text-white px-4 py-2 rounded hover:bg-green-600 hover:border-green-600 transition-all duration-300 cursor-pointer"
        onClick={addRow}
      >
        Add Row
      </button>

      <button
        type="button"
        className="bg-yellow-500 border border-yellow-800 text-white px-4 py-2 rounded hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-300 cursor-pointer"
        onClick={sameRow}
      >
        Same Row
      </button>
      <button
        type="submit"
        className="bg-red-500 border border-red-800 text-white px-4 py-2 rounded hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default DynamicForm;
