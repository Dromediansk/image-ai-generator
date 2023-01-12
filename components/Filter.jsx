import Dropdown from "../lib/Dropdown";
import { IMAGE_SIZES } from "../utils/constants";
import NumberInput from "../lib/NumberInput";

const Filter = ({ formState, onChange }) => {
  return (
    <div className="pb-4 grid lg:grid-cols-3 grid-cols-none bg-slate-300">
      <div />
      <div className="flex items-center h-12">
        <div className="grid grid-cols-2">
          <Dropdown
            value={formState.size}
            name="size"
            title="Size"
            options={Object.values(IMAGE_SIZES)}
            onChange={onChange}
          />
          <NumberInput
            name="count"
            title="Count"
            value={formState.count}
            onChange={onChange}
            min="1"
            max="10"
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Filter;
