import { useState } from "react";

const ToggleSwitch = ({ isChecked = false }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleToggle = () => setChecked((prevChecked) => !prevChecked);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={handleToggle}
      />
      <div
        className={`relative w-11 h-6 rounded-full transition-colors ${checked ? "bg-violet-300" : "bg-gray-200"}`}
      >
        <span
          className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-transform transform ${checked ? "translate-x-full" : ""} border border-gray-300`}
        ></span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
