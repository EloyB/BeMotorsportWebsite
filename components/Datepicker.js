import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

export const Datepicker = ({ onChange }) => {
  const [isDate, setIsDate] = useState(true);

  useEffect(() => {
    const input = document.getElementById("input");
    setIsDate(input.type === "date" ? true : false);
  }, []);

  return (
    <div>
      {isDate ? (
        <input
          id="input"
          type="date"
          className="p-4 bg-gray-50 w-full rounded pl-4 outline-none cursor-pointer"
          onChange={(e) => onChange(e.target.value)}
          placeholder="Date (dd-mm-yyyy)"
        />
      ) : (
        <NumberFormat
          format="##-##-####"
          placeholder="dd-mm-yyyy"
          mask={["d", "d", "m", "m", "y", "y", "y", "y"]}
          className="p-2 bg-gray-50 w-full rounded pl-4 outline-none"
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
};
