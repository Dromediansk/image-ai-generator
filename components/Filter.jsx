import { useState } from "react";
import Dropdown from "../lib/Dropdown";
import { IMAGE_SIZES } from "../utils/constants";

const Filter = ({ formState, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-none">
      <div />
      <div className="flex items-center h-12">
        <button
          type="button"
          className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded"
          onClick={() => {
            setIsVisible((prevState) => !prevState);
          }}
        >
          Filter
        </button>

        {isVisible && (
          <div className="grid grid-cols-2">
            <Dropdown
              value={formState.size}
              name="size"
              options={Object.values(IMAGE_SIZES)}
              onChange={onChange}
            />
          </div>
        )}
      </div>
      <div />
    </div>
  );
};

export default Filter;
