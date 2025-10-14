import React from "react";

const Row = ({ deleteRow, name, surname, phone, email, address, index,setRows,rows,yon,tekmelik }) => {
  return (
    <div className="flex gap-2">
      <input
        placeholder="Ad"
        type="text"
        className="border border-blue-800 rounded px-4 py-2"
        value={name}
        onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, name: e.target.value} : row))}
      />
      <input
        placeholder="Soyad"
        type="text"
        className="border border-blue-800 rounded px-4 py-2"
        value={surname}
        onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, surname: e.target.value} : row))}
      />
      <input
        placeholder="Telefon"
        type="text"
        className="border border-blue-800 rounded px-4 py-2"
        value={phone}
        onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, phone: e.target.value} : row))}    
          />    
      <input
        placeholder="E-posta"
        type="text"
        className="border border-blue-800 rounded px-4 py-2"
        value={email}
        onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, email: e.target.value} : row))}
      />
      <input
        placeholder="Adres"
        type="text"
        className="border border-blue-800 rounded px-4 py-2"
        value={address}
        onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, address: e.target.value} : row))}
      />

      {/* <input
        placeholder="Yön"
        type="select"
        className="border border-blue-800 rounded px-4 py-2"
        value={yon}
        onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, yon: e.target.value} : row))}
      /> */}
      <select name="yon" id="" value={yon} onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, yon: e.target.value} : row))}>
        <option value="">Yön</option>
        <option value="Sağ">Sağ</option>
        <option value="Sol">Sol</option>
      </select>

      <input title="Tekmelik" type="checkbox" checked={tekmelik} onChange={(e) => setRows(rows.map((row, i) => i === index ? {...row, tekmelik: e.target.checked} : row))} />
      <button type="button" onClick={() => deleteRow(index)} className="bg-red-500 border border-red-800 text-white px-4 py-2 rounded hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">
        X
      </button>
    </div>
  );
};

export default Row;
