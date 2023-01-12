export const SearchInput = ({ formState, onChange, onSubmit, loading }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-none">
      <div />
      <form>
        <div className="flex">
          <input
            className="flex-1 shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-slate-400"
            type="text"
            placeholder="Generate image"
            onChange={onChange}
            value={formState.query}
            name="query"
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:bg-blue-500 disabled:opacity-50"
            disabled={!formState.query || loading}
          >
            Generate
          </button>
        </div>
      </form>
      <div />
    </div>
  );
};