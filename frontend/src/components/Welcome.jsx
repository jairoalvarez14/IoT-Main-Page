import React, { useState, useEffect } from "react";

const Welcome = () => {
  const info = [
    {
      img: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg",
      title: "Welcome",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veritatis harum aliquid rem fugit odio a sint, consectetur, sunt nihil omnis ex accusamus delectus repellat nesciunt, eius officia! Temporibus, eum!",
    },
    {
      img: "https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Welcome",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, molestias laudantium officia odit enim porro, libero, eos recusandae voluptates adipisci veritatis dolore nemo ipsa. Architecto amet error doloribus eaque asperiores eum, molestiae officia reiciendis voluptatem veniam esse commodi possimus deleniti!",
    },
    {
      img: "https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Welcome",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, laborum voluptate delectus accusamus aspernatur consequatur.",
    },
  ];

  const [currentInfo, setCurrentInfo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfo((prevIndex) => (prevIndex + 1) % info.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [info.length]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${info[currentInfo].img})` }}
        className="max-w-full h-[100vh] flex bg-cover bg-center"
      >
        <div className="h-full w-full flex justify-center items-center backdrop-blur-sm bg-black/30">
          <div className="max-w-[1200px] w-full p-10">
            <h1 className="text-[110px] sm:text-[150px] md:text-[200px] text-[#f9f7f3] font-Yellowtail">
              {info[currentInfo].title}
            </h1>
            <p className="text-[#f9f7f3] text-[12px] text-justify font-Merriweather">
              {info[currentInfo].description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
