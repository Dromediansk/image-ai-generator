export const SearchInput = ({ formState, onChange, onSubmit, loading }) => {
  const count = parseInt(formState.count);
  const isCountMatching = count && count > 0 && count <= 10;

  return (
    <div className="grid lg:grid-cols-3 grid-cols-none bg-slate-300">
      <div />
      <form>
        <div className="flex">
          <input
            className="flex-1 shadow appearance-none border rounded py-3 px-3 text-gray-700 leading-tight focus:outline-slate-400"
            type="text"
            placeholder="What's on your mind? Be creative."
            onChange={onChange}
            value={formState.query}
            name="query"
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:bg-blue-500 disabled:opacity-50"
            disabled={!formState.query || !isCountMatching || loading}
          >
            Generate
          </button>
        </div>
      </form>
      <div />
    </div>
  );
};
