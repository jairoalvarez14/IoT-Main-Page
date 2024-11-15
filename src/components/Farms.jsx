import farms from "./Farms";
import PopupFarm from "./PopupFarm";

// Component that renders a board of farms
const Board = ({ farms }) => {
  return (
    // Container for farm display grid with responsive layout
    <div className="farm h-5/6 p-5">
      {/* Maps over each farm and renders a DisplayedFarm component */}
      {farms.map((farm, index) => {
        return (
          <DisplayedFarm key={index} img={farm.img}>
            {farm.name}
          </DisplayedFarm>
        );
      })}
    </div>
  );
};

// Component to display each farm with styling and click event
const DisplayedFarm = ({ children, img }) => {
  // Event handler for click events on farm elements TODO
  const togglePopup = () => {
    document.getElementById("popup-1").classList.toggle("active");
  };

  return (
    <>
      <div
        className={`flex bg-cover p-6 rounded-2xl justify-center items-center text-3xl 
          shadow-md shadow-black font-bold cursor-pointer min-h-[12vw] hover:bg-black/60 
          transition-all duration-300 hover:scale-105`}
        // Setting background image dynamically for each farm
        onClick={togglePopup}
        style={{ backgroundImage: `url(${img}` }}
      >
        <span className="bg-black/60 text-[#f9f7f3] rounded-lg shadow-inner p-4">
          {children}
        </span>
      </div>
    </>
  );
};

// Main Farms section containing header, Board component, and description
const Farms = () => {
  return (
    <section
      className="flex flex-col items-center max-w-full min-h-screen bg-[#f9f7f3] relative py-[50px]"
      id="farms"
    >
      {/* Section header */}
      <header className="w-full h-full text-center ">
        <h1 className="text-[100px] font-bold font-Merriweather">Farms</h1>
      </header>
      {/* Main content area with backdrop styling */}
      <div className="flex flex-col justify-center h-full w-11/12 p-10 m-14 bg-[#cdc7ba]/50 brightness-60 backdrop-blur-sm rounded-3xl">
        <Board farms={farms}></Board>
      </div>
      {/* Descriptive text area */}
      <div className="m-8">
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed px-[20px] sm:px-[50px] text-justify font-Poppins">
          The Farms section presents a curated list of farms in a responsive
          grid layout, allowing users to easily browse through the available
          farms. Each farm is displayed with a simple, clean design that
          highlights its name, ensuring a clear and accessible presentation. The
          grid dynamically adjusts to different screen sizes, ensuring the
          layout remains balanced and visually appealing whether there are just
          a few farms or a larger selection. The responsive design ensures that
          the content is always displayed optimally, providing a seamless
          browsing experience.
        </p>
      </div>
      <div className="w-full h-full text-center font-bold">
        <PopupFarm></PopupFarm>
      </div>{" "}
      {/*TODO*/}
    </section>
  );
};

export default Farms;
