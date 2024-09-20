const Button = () => {
  return (
    <>
      <div>
        <form className="m-1">
          <fieldset className="px-4 py-2 bg-slate-400 rounded-lg shadow-lg">
            <legend className="font-semibold text-[22px] text-black">
              Add camps
            </legend>
            <label className="flex rounded-lg px-1 mb-2">Add new camp:</label>
            <input
              type="text"
              placeholder="Insert the new camp name"
              className="flex rounded-lg p-1 mt-1 border-[1px] mb-2 w-[200px] focus:ring-slate-400-200 text-gray-600"
              required
            />
            <label className="flex rounded-lg px-1 mb-2">
              How it is measured?
            </label>
            <select>
              <option value="select">Select a measure method</option>
              <option value="degrees">°</option>
              <option value="percentage">%</option>
            </select>

            <input
              type="submit"
              value="Submit"
              className="mt-1 bg-slate-300 rounded-lg p-2 w-[200px] text-slate-600 font-semibold hover:bg-slate-500 hover:text-slate-200 transition-colors items-center"
            />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Button;
