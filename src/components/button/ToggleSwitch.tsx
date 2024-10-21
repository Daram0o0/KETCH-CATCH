const ToggleSwitch = ({
  isChecked,
  onToggle,
}: {
  isChecked: boolean;
  onToggle: () => void;
}) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={onToggle}
      />
      <div
        className={`relative w-11 h-6 rounded-full transition-colors ${
          isChecked ? "bg-violet-300" : "bg-gray-200"
        }`}
      >
        <span
          className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-transform transform ${
            isChecked ? "translate-x-full" : ""
          } border border-gray-300`}
        ></span>
      </div>
    </label>
  );
};

export default ToggleSwitch;
