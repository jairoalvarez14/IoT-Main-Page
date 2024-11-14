// React Icons
import {
  HiChevronDoubleDown,
  HiOutlineChevronDoubleUp,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";

// SVG logos
import {
  MongoDBSVG,
  ExpressSVG,
  ReactSVG,
  NodeSVG,
  ViteSVG,
  TailwindSVG,
} from "../assets/Svg";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const svgs = [
  { name: "MongoDB", svg: MongoDBSVG },
  { name: "Express", svg: ExpressSVG },
  { name: "React", svg: ReactSVG },
  { name: "NodeJS", svg: NodeSVG },
  { name: "Vite", svg: ViteSVG },
  { name: "TailwindCSS", svg: TailwindSVG },
];

const teamMembers = [
  {
    img: "https://images.pexels.com/photos/335464/pexels-photo-335464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Jairo Alvarez",
    occupation: "Software",
    socialMedia: {
      instagram: "",
      github: "",
      x: "",
    },
  },
  {
    img: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Hector Torres",
    occupation: "Software",
    socialMedia: {
      instagram: "",
      github: "",
      x: "",
    },
  },
  {
    img: "https://images.pexels.com/photos/335464/pexels-photo-335464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Erany Fon Bon",
    occupation: "Hardware",
    socialMedia: {
      instagram: "",
      github: "",
      x: "",
    },
  },
  {
    img: "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Josue Morales",
    occupation: "Hardware",
    socialMedia: {
      instagram: "",
      github: "",
      x: "",
    },
  },
  {
    img: "https://images.pexels.com/photos/335464/pexels-photo-335464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Oziel Venegas",
    occupation: "Hardware",
    socialMedia: {
      instagram: "",
      github: "",
      x: "",
    },
  },
];

// Screens up to 640px
const AboutUsSmToUp = () => {
  return (
    <div className="hidden sm:flex">
      <div className="flex h-screen w-full flex-col items-center justify-center p-6" id="about">
        <div className="flex h-[20%] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-[70px] font-bold">About us!</h2>
        </div>
        {/* GRID */}
        <div className="grid grid-cols-5 grid-rows-4 gap-4 h-[80%] w-full">
          <div className="col-span-3 row-span-4 rounded-3xl flex justify-center items-center">
            {/* Info container */}
            <div className="grid grid-cols-6 grid-rows-4 gap-4 h-full w-full flex-col">
              {/* Title */}
              <div
                className="col-span-6 row-span-1 rounded-3xl border-[5px] border-black border-dashed flex justify-center items-center text-[32px] font-Edu_Australia
              xl:text-[80px]
              lg:text-[60px]
              md:text-[50px]
              sm:text-[40px]"
              >
                MongoDB
              </div>
              {/* Info */}
              <div
                className="col-span-6 row-span-2 rounded-3xl flex justify-center items-center font-Source_Code border-black border-dashed border-[3px] p-8 text-[8px]
              xl:text-[14px]
              lg:text-[14px]
              md:text-[12px]
              sm:text-[11px]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                laudantium quas, eveniet reprehenderit ipsam quibusdam eius
                tenetur vitae saepe nisi placeat adipisci explicabo ullam
                maiores eos minima fugit quaerat nostrum excepturi consequatur
                inventore ut dolorum sit quasi? Nulla sint distinctio quaerat
                eum, sit sapiente obcaecati commodi optio odio sed molestias
                unde necessitatibus voluptatum perspiciatis quia, ratione,
                voluptate tenetur aperiam laboriosam numquam repudiandae ullam.
              </div>
              {/* Logos */}
              {svgs.map((tech, index) => (
                <div
                  key={index}
                  className="h-full w-full col-span-1 row-span-1 rounded-3xl flex justify-center items-center
                  xl:h-[80%] xl:w-[80%]
                  2xl:h-[60%] 2xl:w-[60%]
                  sm:col-span-1 sm:row-span-2"
                >
                  {tech.svg}
                </div>
              ))}
            </div>
          </div>
          {/* Software team info */}
          <div className="col-span-1 row-span-3 rounded-3xl flex justify-center items-center">
            <div
              className={`grid grid-cols-1 grid-rows-${softwareTeam.length} h-full w-full`}
            >
              {softwareTeam.map((_, index) => (
                <div
                  key={index}
                  className="grid-cols-1 grid-rows-1 border-black border-[1px] flex justify-center items-center"
                >
                  <div className="h-full w-full grid grid-cols-1 grid-rows-3 relative">
                    <img
                      src={photos[index]}
                      className="desvanecer absolute object-cover h-full w-full"
                      alt=""
                    />
                    <div
                      className="col-span-1 row-span-2 flex justify-center items-center p-4 text-xl font-bold text-[14px]
                    sm:text-[18px]"
                    >
                      {softwareTeam[index]}
                    </div>
                    <div
                      className="col-span-1 row-span-1 flex justify-center items-center p-4 text-[10px]
                    sm:text-[12px]"
                    >
                      Github, Instagram, X
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Hardware team label */}
          <div className="rounded-3xl flex justify-center items-center font-Bebas_Neue">
            <div className="grid grid-cols-1 grid-rows-2">
              <div
                className="col-span-1 row-span-1 flex justify-center items-center text-[20px]
              xl:text-[40px]
              lg:text-[34px]
              md:text-[25px]
              sm:text-[20px]"
              >
                Hardware Team
              </div>
              <div
                className="col-span-1 row-span-1 flex justify-center items-center text-[24px]
              xl:text-[50px]
              lg:text-[36px]
              md:text-[30px]
              sm:text-[25px]"
              >
                <HiChevronDoubleDown />
              </div>
            </div>
          </div>
          {/* Hardware team info */}
          <div className="col-span-1 row-span-3 rounded-3xl flex justify-center items-center">
            <div
              className={`grid grid-cols-1 grid-rows-${hardwareTeam.length} h-full w-full`}
            >
              {hardwareTeam.map((_, index) => (
                <div
                  key={index}
                  className="col-span-1 row-span-1 flex justify-center items-center"
                >
                  <div className="h-full w-full grid grid-cols-1 grid-rows-3 relative">
                    <img
                      src={photos[index]}
                      className="desvanecer absolute object-cover h-full w-full"
                      alt=""
                    />
                    <div
                      className="col-span-1 row-span-2 flex justify-center items-center p-4 text-xl font-bold text-[12px]
                    md:text-[14px]
                    sm:text-[12px]"
                    >
                      {hardwareTeam[index]}
                    </div>
                    <div
                      className="col-span-1 row-span-1 flex justify-center items-center p-4 text-[10px]
                    md:text-[12px]
                    sm:text-[10px]"
                    >
                      Github, Instagram, X
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sotware team label */}
          <div className="col-span-1 row-span-1 rounded-3xl flex justify-center items-center font-Bebas_Neue">
            <div className="grid grid-cols-1 grid-rows-2">
              <div
                className="col-span-1 row-span-1 flex justify-center items-center text-[24px]
              xl:text=[50px]
              lg:text-[36px]
              md:text-[30px]
              sm:text-[25px]"
              >
                <HiOutlineChevronDoubleUp />
              </div>
              <div
                className="sm:col-span-1 sm:row-span-1 flex justify-center items-center text-[20px]
              xl:text-[40px]
              lg:text-[36px]
              md:text-[26px]
              sm:text-[20px]"
              >
                Software Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile screens
const AboutUsMobile = () => {
  return (
    <div className="sm:hidden">
      <div className="w-full h-[100vh]">
        <div className="w-full h-[20%] flex items-center justify-center">
          <h2 className="font-bold text-[50px]">About Us</h2>
        </div>
        <div className="w-full h-[80%]">
          <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-4 p-4">
            {/* Title container */}
            <div className="col-span-6 row-span-1 rounded-3xl flex justify-center items-center border-black border-[2px] border-dashed font-Edu_Australia">
              <h2 className="text-[40px]">MongoDB</h2>
            </div>
            {/* Description container */}
            <div className="col-span-6 row-span-2 rounded-3xl flex justify-center items-center text-justify border-black border-[1px] border-dashed p-4">
              <p className="font-Source_Code">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At id
                expedita esse rerum labore reprehenderit ipsum inventore tenetur
                doloribus repellendus earum eligendi, dolorum optio autem fugiat
                ratione pariatur officiis modi.
              </p>
            </div>
            {/* Logos */}
            <div className="col-span-6 row-span-1 rounded-3xl">
              <div className="h-full w-full grid grid-cols-6 grid-rows-1 gap-4 p-4">
                {svgs.map((tech, index) => (
                  <div
                    key={index}
                    className="h-[80%] w-[80%] col-span-1 row-span-1 rounded-3xl flex justify-center items-center"
                  >
                    {tech.svg}
                  </div>
                ))}
              </div>
            </div>
            {/* Software team img */}
            <div className="col-span-2 row-span-2 rounded-3xl flex justify-center items-center">
              <div
                className={`grid grid-cols-1 grid-rows-${softwareTeam.length} h-full w-full`}
              >
                {softwareTeam.map((_, index) => (
                  <div
                    key={index}
                    className="grid-cols-1 grid-rows-1 border-black border-[1px] flex justify-center items-center"
                  >
                    <div className="h-full w-full grid grid-cols-1 grid-rows-3 relative">
                      <img
                        src={photos[index]}
                        className="desvanecer absolute object-cover h-full w-full"
                        alt=""
                      />
                      <div
                        className="col-span-1 row-span-2 flex justify-center items-center p-4 text-xl font-bold text-[14px]
                    sm:text-[18px]"
                      >
                        {softwareTeam[index]}
                      </div>
                      <div
                        className="col-span-1 row-span-1 flex justify-center items-center p-4 text-[10px]
                    sm:text-[12px]"
                      >
                        Github, Instagram, X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Software team label */}
            <div className="col-span-2 row-span-1 rounded-3xl">
              <div className="h-full w-full grid grid-cols-1 grid-rows-2">
                <div className="h-full w-full col-span-1 row-span-1 flex justify-center items-center">
                  <h2 className="font-Bebas_Neue text-2xl">Software team</h2>
                </div>
                <div className="h-full w-full col-span-1 row-span-2 flex justify-center items-center">
                  <FaAngleDoubleLeft className="text-2xl" />
                </div>
              </div>
            </div>
            {/* Hardware team img */}
            <div className="col-span-2 row-span-2 rounded-3xl flex justify-center items-center">
              <div
                className={`grid grid-cols-1 grid-rows-${hardwareTeam.length} h-full w-full`}
              >
                {hardwareTeam.map((_, index) => (
                  <div
                    key={index}
                    className="grid-cols-1 grid-rows-1 border-black border-[1px] flex justify-center items-center"
                  >
                    <div className="h-full w-full grid grid-cols-1 grid-rows-3 relative">
                      <img
                        src={photos[index]}
                        className="desvanecer absolute object-cover h-full w-full"
                        alt=""
                      />
                      <div
                        className="col-span-1 row-span-2 flex justify-center items-center p-4 text-xl font-bold text-[12px]
                    sm:text-[18px]"
                      >
                        {hardwareTeam[index]}
                      </div>
                      <div
                        className="col-span-1 row-span-1 flex justify-center items-center p-4 text-[8px]
                    sm:text-[12px]"
                      >
                        Github, Instagram, X
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hardware team label */}
            <div className="col-span-2 row-span-1 rounded-3xl">
              <div className="h-full w-full grid grid-cols-1 grid-rows-2">
                <div className="h-full w-full col-span-1 row-span-1 flex justify-center items-center">
                  <h2 className="font-Bebas_Neue text-[22px]">Hardware team</h2>
                </div>
                <div className="h-full w-full col-span-1 row-span-2 flex justify-center items-center">
                  <FaAngleDoubleRight className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewAboutUs = () => {
  return (
    <>
      <div className="w-full h-full bg-[#0b1215]">
        <div className="flex flex-wrap flex-col">
          <h2 className="font-Merriweather text-[40px] sm:text-[60px] md:text-[75px] text-[#f9f7f3] m-[100px_0_100px_50px] sm:m-[100px_0px_100px_50px] md:m-[100px_0px_100px_100px]">
            Our{" "}
            <p className="text-[#2d6b19] font-Yellowtail text-[50px] sm:text-[80px] md:text-[90px] lg:text-[100px] inline-block">
              team
            </p>{" "}
            members
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {teamMembers.map(({ img, name, occupation, socialMedia }, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[300px] rounded-lg"
            >
              <div className="w-full h-[400px]">
                <img
                  src={teamMembers[index].img}
                  alt={`Foto de ${(teamMembers[index], name)}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="text-center mt-4 text-2xl font-bold text-[#f9f7f3]">
                {teamMembers[index].name}
              </div>
              <div className="text-center mt-4 text-xl font-bold text-[#c3c1bd]">
                {teamMembers[index].occupation}
              </div>
              <div className="flex justify-center gap-4 mt-2 text-md text-[#9c9c9c]">
                Social Media
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[200px]"></div>
      </div>
    </>
  );
};

const AboutUs = () => {
  return (
    <>
      {/* <AboutUsSmToUp />
      <AboutUsMobile /> */}
      <NewAboutUs />
    </>
  );
};

export default AboutUs;
