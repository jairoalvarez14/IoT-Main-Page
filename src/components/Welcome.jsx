const Welcome = () => {
  const fetchedUrl =
    "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg";

  return (
    <>
      <section
        style={{ backgroundImage: `url(${fetchedUrl})` }}
        className="max-w-[100%] h-[100vh] flex bg-cover bg-center"
      >
        <div className="h-[100%] w-[100%] flex justify-center items-center backdrop-blur-sm bg-black/30">
          <h1 className="text-[100px] text-white font-bold">Welcome!</h1>
        </div>
      </section>
    </>
  );
};

export default Welcome;
