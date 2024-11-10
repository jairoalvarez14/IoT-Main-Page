// React Icons
import {
  HiChevronDoubleUp,
  HiChevronDoubleDown,
  HiOutlineChevronDoubleUp,
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

const svgs = [
  { name: "MongoDB", svg: MongoDBSVG },
  { name: "Express", svg: ExpressSVG },
  { name: "React", svg: ReactSVG },
  { name: "NodeJS", svg: NodeSVG },
  { name: "Vite", svg: ViteSVG },
  { name: "TailwindCSS", svg: TailwindSVG },
];

const softwareTeam = ["Jairo Álvarez", "Héctor Torres"];
const hardwareTeam = ["Erany Fon Bon", "Josué Morales", "Oziel Venegas"];

const photos = [
  "https://images.pexels.com/photos/335464/pexels-photo-335464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/335464/pexels-photo-335464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const AboutUs = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center p-6">
        <div className="flex h-[20%] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-[70px] font-bold">About us!</h2>
        </div>
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
          <div className="col-span-1 row-span-3 rounded-3xl flex justify-center items-center">
            {/* Software team info */}
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
          <div className="col-span-1 row-span-3 rounded-3xl flex justify-center items-center">
            {/* Hardware team info */}
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
                className="col-span-1 row-span-1 flex justify-center items-center text-[20px]
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
    </>
  );
};

export default AboutUs;
