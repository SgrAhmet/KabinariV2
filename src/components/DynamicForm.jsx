import React, { useState, useEffect } from "react";
import Row from "./Row";
import DownloadExcel from "./DownloadExcel";

const DynamicForm = () => {
  const [rows, setRows] = useState([
    {
      kat: "",
      tip: "",
      mahalNo: "",
      mahal: "",
      en: "",
      boy: "",
      dk: "",
      kanat: "",
      kasa: "",
      yon: "",
      barel: "",
      kilit: "",
      cumba: "",
      kol: "",
      tekmelik: false,
      itmelik: false,
      menfez: false,
      hidrolik: false,
      lumboz: false,
      yangınaD: false,
    },
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
      {
        kat: "",
        tip: "",
        mahalNo: "",
        mahal: "",
        en: "",
        boy: "",
        dk: "",
        kanat: "",
        kasa: "",
        yon: "",
        barel: "",
        kilit: "",
        cumba: "",
        kol: "",
        tekmelik: false,
        itmelik: false,
        menfez: false,
        hidrolik: false,
        lumboz: false,
        yangınaD: false,
      },
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
          kat: rows[rows.length - 1].kat,
          tip: rows[rows.length - 1].tip,
          mahalNo: rows[rows.length - 1].mahalNo,
          mahal: rows[rows.length - 1].mahal,
          en: rows[rows.length - 1].en,
          boy: rows[rows.length - 1].boy,
          dk: rows[rows.length - 1].dk,
          kanat: rows[rows.length - 1].kanat,
          kasa: rows[rows.length - 1].kasa,
          yon: rows[rows.length - 1].yon,
          barel: rows[rows.length - 1].barel,
          kilit: rows[rows.length - 1].kilit,
          cumba: rows[rows.length - 1].cumba,
          kol: rows[rows.length - 1].kol,
          tekmelik: rows[rows.length - 1].tekmelik,
          itmelik: rows[rows.length - 1].itmelik,
          menfez: rows[rows.length - 1].menfez,
          hidrolik: rows[rows.length - 1].hidrolik,
          lumboz: rows[rows.length - 1].lumboz,
          yangınaD: rows[rows.length - 1].yangınaD,
        },
      ]);
    } else {
      setRows([
        ...rows,
        {
          kat: "",
          tip: "",
          mahalNo: "",
          mahal: "",
          en: "",
          boy: "",
          dk: "",
          kanat: "",
          kasa: "",
          yon: "",
          barel: "",
          kilit: "",
          cumba: "",
          kol: "",
          tekmelik: false,
          itmelik: false,
          menfez: false,
          hidrolik: false,
          lumboz: false,
          yangınaD: false,
        },
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


  const handleExcel = () => {
    DownloadExcel(rows, "Müsteri Ismi");
  };

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => (
        <Row
          rows={rows}
          setRows={setRows}
          index={index}
          kat={row.kat}
          tip={row.tip}
          mahalNo={row.mahalNo}
          mahal={row.mahal}
          en={row.en}
          boy={row.boy}
          dk={row.dk}
          kanat={row.kanat}
          kasa={row.kasa}
          yon={row.yon}
          barel={row.barel}
          kilit={row.kilit}
          cumba={row.cumba}
          kol={row.kol}
          tekmelik={row.tekmelik}
          itmelik={row.itmelik}
          menfez={row.menfez}
          hidrolik={row.hidrolik}
          lumboz={row.lumboz}
          yangınaD={row.yangınaD}
          key={index}
          deleteRow={deleteRow}
        />
      ))}

      <div className="flex gap-2 items-center justify-end p-2">

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
      <button
        type="button"
        className="bg-blue-500 border border-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer"
        onClick={handleExcel}
      >
        Excel
      </button>


      </div>

    </div>
  );
};

export default DynamicForm;
