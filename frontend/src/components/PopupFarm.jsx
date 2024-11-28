const PopupFarm = ({ farms }) => {
  //TODO I need to do this with an array of my farms n-times
  return (
    <>
      {
        farms.map((farm, index) => {
          return <IndividualPopup key={index} id={farm.id} name={farm.name} link={farm.link} paragraph={farm.paragraph}></IndividualPopup>
        })
      }
    </>
  );
};

const IndividualPopup = ({ id, name, link, paragraph }) => {
  return (
    <>
      <div className="popup" id={`popup-farm-${id}`}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black/70 z-[1] opacity-0 pointer-events-none backdrop-blur-sm">
          <div className="content absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-0 bg-[#f9f7f3] w-[60vw] h-[50vh] overflow-auto z-[2] text-center p-5 box-border opacity-0 pointer-events-none rounded-xl">
            <div
              className="absolute right-5 top-5 w-7 h-7 text-[25px] font-semibold leading-7 text-center rounded-[50%] cursor-pointer"
              onClick={() => {document.getElementById(`popup-farm-${id}`).classList.remove("active")}}
            >
              &times;
            </div>
            <h1 className="font-Poppins text-lg">{name}</h1>
            <br />
            <p className="font-thin">
              {paragraph}
            </p>
            <a onClick={() => window.open(link)} className="cursor-pointer hover:underline hover:text-blue-500 transition-colors duration-300 ease-in-out active:text-purple-600">Farm 1</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupFarm;
