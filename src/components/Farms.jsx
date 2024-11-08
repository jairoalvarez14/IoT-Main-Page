const Board = ({ farms }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {farms.map((farm, index) => {
        return <DisplayedFarm key={index}>{farm.id}</DisplayedFarm>;
      })}
    </section>
  );
};

const DisplayedFarm = ({ children, index }) => {
  return (
    <div className="bg-blue-200 p-6 rounded-lg text-center text-3xl min-w-[200px] max-w-[300px] w-full cursor-pointer">
      {children}
    </div>
  );
}; //TODO I need to complete this before sunday

const Farms = () => {
  const farms = [
    { id: "1", name: "Farm 1", link: "" },
    { id: "2", name: "Farm 2", link: "" },
    { id: "3", name: "Farm 3", link: "" },
    { id: "4", name: "Farm 4", link: "" },
  ];
  return (
    <section className="flex flex-col items-center max-w-full h-screen bg-slate-400">
      <header className="w-full text-center p-8">
        <h1 className="text-[100px] font-bold">Farms</h1>
      </header>

      <div className="flex justify-center w-full h-full overflow-y-auto">
        {/* <Board farms={farms}></Board> */}
      </div>
    </section>
  );
};

export default Farms;
