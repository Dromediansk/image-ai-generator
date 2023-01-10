export const emptyFormState = { query: "" };

export const Form = ({ formState, onChange, onSubmit, loading }) => {
  return (
    <form className="p-2">
      <div className="text-center p-4">
        <input
          className="shadow appearance-none border rounded w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-slate-400"
          type="text"
          placeholder="Generate image"
          onChange={onChange}
          value={formState.query}
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-500 disabled:opacity-50"
          disabled={!formState.query || loading}
        >
          Generate
        </button>
      </div>
    </form>
  );
};
