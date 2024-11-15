const PopupFarm = () => {
  //TODO I need to do this with an array of my farms n-times
  const removeClass = () => {
    document.getElementById("popup-1").classList.remove("active");
  };

  return (
    <>
      <div className="popup" id="popup-1">
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black/70 z-[1] hidden"></div>
        <div className="content absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-0 bg-[#f9f7f3] w-[450px] h-[350px] overflow-scroll z-[2] text-center p-5 box-border">
          <div
            className="absolute right-5 top-5 w-7 h-7 text-[25px] font-semibold leading-7 text-center rounded-[50%] cursor-pointer"
            onClick={removeClass}
          >
            &times;
          </div>
          <h1 className="font-Poppins text-lg">Title</h1>
          <br />
          <p className="font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet porttitor leo. Fusce hendrerit mollis neque, a malesuada
            ante accumsan at. Pellentesque sit amet dolor quis ex consequat
            venenatis eu at ante. Nulla ut egestas risus. Nulla vitae cursus
            nulla, ac maximus neque. Aliquam id felis metus. Suspendisse aliquam
            consectetur cursus. Integer posuere risus nec nunc euismod sagittis.
            Suspendisse luctus volutpat lorem. Nunc quam nisl, mollis nec
            vulputate eu, malesuada sed magna.
          </p>
        </div>
      </div>
    </>
  );
};

export default PopupFarm;
