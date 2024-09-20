const App = () => {
  const cardTitle = ["Temperature", "Humidity"];
  const cardDescription = ["30°", "25%"];

  return (
    <>
      <div>
        {cardTitle.length > 0 ? (
          cardTitle.map((key, data) => (
            <>
              <div className="w-[200px] m-[10px]" key={key}>
                <div
                  id="card"
                  className="h-[200px] mt-[10px] p-[20px] rounded-[15px] bg-slate-400"
                >
                  <h5 id="card-title" className="font-bold text-[20px]">
                    {cardTitle[data]}
                  </h5>
                  <p
                    id="card-text"
                    className="mt-[10px] text-slate-300 font-semibold text-[40px]"
                  >
                    {cardDescription[data]}
                  </p>
                </div>
              </div>
            </>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
};

export default App;
