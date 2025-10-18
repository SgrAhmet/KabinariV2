import React from "react";

const Row = ({
  kat,
  tip,
  mahalNo,
  mahal,
  en,
  boy,
  dk,
  kanat,
  kasa,
  barel,
  kilit,
  cumba,
  kol,
  index,
  setRows,
  rows,
  yon,
  itmelik,
  menfez,
  hidrolik,
  lumboz,
  yangınaD,
  tekmelik,
  deleteRow,
}) => {
  return (
    <div className="flex gap-1">
      <input
        placeholder="Kat"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={kat}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, kat: e.target.value } : row
            )
          )
        }
      />
      <input
        placeholder="Tip"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={tip}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, tip: e.target.value } : row
            )
          )
        }
      />
      <input
        placeholder="Mahal No"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24 placeholder:text-[10px]"
        value={mahalNo}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, mahalNo: e.target.value } : row
            )
          )
        }
      />
      <input
        placeholder="Mahal"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={mahal}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, mahal: e.target.value } : row
            )
          )
        }
      />

      <input
        placeholder="En"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={en}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, en: e.target.value } : row
            )
          )
        }
      />

      <input
        placeholder="Boy"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={boy}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, boy: e.target.value } : row
            )
          )
        }
      />

      <input
        placeholder="DK"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={dk}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, dk: e.target.value } : row
            )
          )
        }
      />

      <select
        name="yon"
        id=""
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={yon}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, yon: e.target.value } : row
            )
          )
        }
      >
        <option value="">Yön</option>
        <option value="Sağ">Sağ</option>
        <option value="Sol">Sol</option>
      </select>

      <input
        placeholder="Kanat"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={kanat}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, kanat: e.target.value } : row
            )
          )
        }
      />
      <input
        placeholder="Kasa"
        type="text"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={kasa}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, kasa: e.target.value } : row
            )
          )
        }
      />

      <select
        name="barel"
        id=""
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={barel}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, barel: e.target.value } : row
            )
          )
        }
      >
        <option value="">Barel</option>
        <option value="?1">?1</option>
        <option value="?2">?2</option>
      </select>

      <input
        type="text"
        placeholder="Kilit"
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={kilit}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, kilit: e.target.value } : row
            )
          )
        }
      />

      <select
        name="cumba"
        id=""
        className="border border-blue-800 rounded px-4 py-2 w-20"
        value={cumba}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, cumba: e.target.value } : row
            )
          )
        }
      >
        <option value="">Cumba</option>
        <option value="PVC">PVC</option>
        <option value="U">U</option>
      </select>

      <select
        name="kol"
        id=""
        className="border border-blue-800 rounded px-4 py-2 w-24"
        value={kol}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, kol: e.target.value } : row
            )
          )
        }
      >
        <option value="">Kol</option>
        <option value="Baston">Baston</option>
        <option value="Boru">Boru</option>
      </select>

      <input
        title="Tekmelik"
        type="checkbox"
        checked={tekmelik}
        className="border border-blue-800 rounded px-4 py-2 w-6"
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, tekmelik: e.target.checked } : row
            )
          )
        }
      />
      <input
        title="Itmelik"
        type="checkbox"
        className="border border-blue-800 rounded px-4 py-2 w-6"
        checked={itmelik}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, itmelik: e.target.checked } : row
            )
          )
        }
      />
      <input
        title="Menfez"
        type="checkbox"
        className="border border-blue-800 rounded px-4 py-2 w-6"
        checked={menfez}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, menfez: e.target.checked } : row
            )
          )
        }
      />

      <input
        title="Hidrolik"
        type="checkbox"
        className="border border-blue-800 rounded px-4 py-2 w-6"
        checked={hidrolik}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, hidrolik: e.target.checked } : row
            )
          )
        }
      />

      <input
        title="Lumboz"
        type="checkbox"
        className="border border-blue-800 rounded px-4 py-2 w-6"
        checked={lumboz}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, lumboz: e.target.checked } : row
            )
          )
        }
      />

      <input
        title="Yangına D"
        type="checkbox"
        className="border border-blue-800 rounded px-4 py-2 w-6"
        checked={yangınaD}
        onChange={(e) =>
          setRows(
            rows.map((row, i) =>
              i === index ? { ...row, yangınaD: e.target.checked } : row
            )
          )
        }
      />
      <button
        type="button"
        onClick={() => deleteRow(index)}
        className="bg-red-500 border border-red-800 text-white px-4 py-2 rounded hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer"
      >
        X
      </button>
    </div>
  );
};

export default Row;
