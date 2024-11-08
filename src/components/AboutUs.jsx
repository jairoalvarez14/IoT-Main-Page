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

const AboutUs = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center p-6">
        <div className="flex h-[20%] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-[100px] font-bold">About us!</h2>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 gap-4 h-[80%] w-full">
          <div className="col-span-3 row-span-4 rounded-3xl flex justify-center items-center">
            {/* Info container */}
            <div className="grid grid-cols-6 grid-rows-4 gap-4 h-full w-full flex-col">
              {/* Title */}
              <div className="col-span-6 row-span-1 bg-white rounded-3xl flex justify-center items-center text-[100px] font-Edu_Australia">
                React
              </div>
              {/* Info */}
              <div className="col-span-6 row-span-2 bg-white rounded-3xl flex justify-center items-center font-Source_Code">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                laudantium quas, eveniet reprehenderit ipsam quibusdam eius
                tenetur vitae saepe nisi placeat adipisci explicabo ullam
                maiores eos minima fugit quaerat nostrum excepturi consequatur
                inventore ut dolorum sit quasi? Nulla sint distinctio quaerat
                eum, sit sapiente obcaecati commodi optio odio sed molestias
                unde necessitatibus voluptatum perspiciatis quia, ratione,
                voluptate tenetur aperiam laboriosam numquam repudiandae ullam.
                Dignissimos dolore quibusdam voluptas in dolores corporis veniam
                provident autem ut ipsam, nesciunt, laudantium, commodi nemo est
                reprehenderit ea quas aperiam numquam id deserunt. Nesciunt,
                porro? Expedita dolore doloribus porro quaerat praesentium, amet
                rem mollitia explicabo aspernatur?
              </div>
              {/* Logos */}
              {svgs.map((tech, index) => (
                <div
                  key={index}
                  className="h-[50%] w-[50%] col-span-1 row-span-1 bg-white rounded-3xl flex justify-center items-center"
                >
                  {tech.svg}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 row-span-3 bg-white rounded-3xl flex justify-center items-center">
            {/* Software team container */}
            <div className="grid grid-cols-1 grid-rows-2 h-full w-full">
              <div className="grid-cols-1 grid-rows-1 bg-indigo-200 flex justify-center items-center">
                Jairo's photo
              </div>
              <div className="grid-cols-1 grid-rows-1 bg-indigo-300 flex justify-center items-center">
                Héctor's photo
              </div>
            </div>
          </div>
          <div className="col-span- row-span- bg-white rounded-3xl flex justify-center items-center font-Bebas_Neue text-[50px]">
            Hardware Team
          </div>
          <div className="col-span-1 row-span-3 bg-white rounded-3xl flex justify-center items-center">
            {/* Hardware team info */}
            <div className="grid grid-cols-1 grid-rows-3 h-full w-full">
              <div className="col-span-1 row-span-1 bg-indigo-200 flex justify-center items-center">
                Erany's photo
              </div>
              <div className="col-span-1 row-span-1 bg-indigo-300 flex justify-center items-center">
                Josué's photo
              </div>
              <div className="col-span-1 row-span-1 bg-indigo-400 flex justify-center items-center">
                Oziel's photo
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-1 bg-white rounded-3xl flex justify-center items-center font-Bebas_Neue text-[50px]">
            Software Team
          </div>
        </div>
        ∏
      </div>
    </>
  );
};

export default AboutUs;
