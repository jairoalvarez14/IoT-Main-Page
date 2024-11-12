const farms = [
  { id: "1", name: "Farm 1", link: "", img: "'https://www.securities.io/wp-content/uploads/2023/11/Aeroponics.png'" },
  { id: "2", name: "Farm 2", link: "", img: "'https://agrotonomy.com/wp-content/uploads/2018/03/aeroponic-tower-farm.jpg'" },

];

const Board = ({ farms }) => {
  return (
    //grid-cols-[repeat(auto-fit, repeat(300px, 1fr))] this is the best way
    <div className="farm h-5/6 p-5">
      {farms.map((farm, index) => {
        return <DisplayedFarm key={index} img={farm.img}>{farm.name}</DisplayedFarm>;
      })}
    </div>
  );
};

const DisplayedFarm = ({ children, img }) => {

  const farmClick = () =>{

  }  
  return (
    <div
      onClick={farmClick}
      className={`flex bg-cover p-6 rounded-2xl justify-center items-center text-3xl shadow-md shadow-black font-bold cursor-pointer min-h-[12vw] hover:bg-black/60 transition-all duration-300 hover:scale-105`}
    // style={{backgroundImage: `url(${img}`}}
    >
      {children}
    </div>
  );
}; //TODO I need to complete this before sunday

const Farms = () => {
  return (
    <section className="flex flex-col items-center max-w-full min-h-screen bg-radial-custom" id="farms">
      <header className="w-full text-center ">
        <h1 className="text-[100px] font-bold">Farms</h1>
      </header>

      <div className="flex flex-col justify-center h-full w-11/12 p-10 m-14 bg-white/50 brightness-60 backdrop-blur-sm rounded-3xl">
        <Board farms={farms}></Board>
      </div>
      <div className="m-8">
        <p className="text-[3vh] text-justify">The Farms section presents a curated list of farms
          in a responsive grid layout, allowing users to easily
          browse through the available farms. Each farm is displayed
          with a simple, clean design that highlights its name, ensuring
          a clear and accessible presentation. The grid dynamically adjusts
          to different screen sizes, ensuring the layout remains balanced
          and visually appealing whether there are just a few farms or
          a larger selection. The responsive design ensures that the
          content is always displayed optimally, providing a seamless
          browsing experience.</p>
      </div>
    </section>
  );
};

export default Farms;
