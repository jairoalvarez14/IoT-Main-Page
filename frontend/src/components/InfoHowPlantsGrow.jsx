import React from "react";
import { Link } from "react-router-dom";
import aeroponiaExample from "../assets/img/aeroponiaExample.jpg";
import aeroponiaExample2 from "../assets/img/aeroponiaExample2.png";
import HowPlantsGrowBG1 from "../assets/img/HowPlantsGrowBG1.png";
import HowPlantsGrowBG2 from "../assets/img/HowPlantsGrowBG2.png";

const InfoHowPlantsGrow = () => {
  return (
    <>
      <div className="w-full h-full">
        <div
          className="w-full h-full flex justify-center items-center"
          style={{ backgroundImage: `url(${HowPlantsGrowBG1})` }}
        >
          <div className="max-w-[1200px] w-full relative pb-[100px]">
            {/* Title */}
            <div>
              <h2 className="text-[100px] font-Poppins">
                <span className="bg-gradient-to-r from-[#2f84ae] to-[#62b2da] bg-clip-text text-transparent">
                  Aeroponía
                </span>
              </h2>
              <h2 className="text-[70px] font-Yellowtail absolute right-[580px] top-[70px]">
                ¿Qué es?
              </h2>
            </div>
            {/* Info container */}
            <div className="flex pt-[100px] gap-8 text-justify w-full">
              {/* Left info container */}
              <div className="w-[50%]">
                {/* Aeroponia meaning */}
                <p>
                  Las plantas reciben los nutrientes por una disolución a base
                  de agua que se le da a las raíces por medio de un fino rocío o
                  niebla. Es decir, las plantas tienen la capacidad de absorber
                  los nutrientes a través de la humedad. El objetivo de cultivar
                  plantas con sus raíces expuestas al aire ha existido por más
                  de un siglo. No obstante, los sistemas de aeroponía en la
                  actualidad es el resultado de numerosas investigaciones en una
                  agricultura sostenible y de alta tecnología.
                </p>
                {/* Funcionamineto */}
                <h3 className="py-6 font-Poppins text-[50px]">
                  Funcionamiento
                </h3>
                <ul className="list-inside list-disc">
                  <li>
                    Las plantas en este tipo de cultivo se siembran en macetas
                    de rejilla, se usan en cultivos en aguas profundas que
                    pueden flotar en un sistema rociado.
                  </li>
                  <br />
                  <li>
                    El rocío en las raíces de las plantas es por intervalos
                    activos/inactivos usando una mezcla de agua dura con
                    nutrientes a alta presión.
                  </li>
                  <br />
                  <li>
                    Los intervalos son esenciales para conseguir buenas ventajas
                    en el cultivo aeropónico, ya que ahorra electricidad, reduce
                    la evaporación y desperdicio, además, reduce la probabilidad
                    de enfermedades como la pudrición de la raíz.
                  </li>
                  <br />
                  <li>
                    Los intervalos inactivos les ofrecen a las plantas una pausa
                    para disponer de tiempo para que los nutrientes sea
                    absorbidos por su sistema circulatorio.
                  </li>
                  <br />
                  <li>
                    La aeroponía usa menos agua y menos nutrientes que el resto
                    de los sistemas de cultivo como la hidroponía.
                  </li>
                  <br />
                  <li>
                    Un excelente sistema aeropónico tiene tapas en las macetas
                    de rejilla, esto permite que el tallo solo salga de las
                    tapas lo que reduce la evaporación. Este sistema reduce el
                    riesgo que los nutrientes se concentren rápidamente. De
                    igual manera, se evita una penetración directa de la luz
                    hasta la raíz, esto hace que sea imposible el desarrollo de
                    algas.
                  </li>
                  <br />
                  <li>
                    Es un ambiente libre de enfermedades que permite a las
                    plantas crecer a mayor densidad y es posible cultivar
                    plantas por metro cuadrado.
                  </li>
                </ul>
                <br />
                {/* Aeroponia example 2 */}
                <img src={aeroponiaExample2} alt="" />
              </div>
              {/* Right info container */}
              <div className="w-[50%]">
                {/* First img */}
                <div>
                  <img
                    src={aeroponiaExample}
                    alt=""
                    className="object-cover h-[300px] w-full"
                  />
                </div>
                {/* Beneficios */}
                <h3 className="py-6 font-Poppins text-[50px]">Beneficios</h3>
                <ul>
                  <li>
                    <span className="font-semibold">Crecimiento rápido: </span>
                    Las raíces están expuestas al aire, eliminando la necesidad
                    de preparar el medio, lo que acelera el desarrollo de las
                    plantas.
                  </li>
                  <br />
                  <li>
                    <span className="font-semibold">
                      Sin uso de energía adicional:{" "}
                    </span>
                    No requiere sistemas para mover las raíces a través de
                    medios físicos, simplificando el cultivo.
                  </li>
                  <br />
                  <li>
                    <span className="font-semibold">
                      Alta densidad de siembra:{" "}
                    </span>
                    Permite cultivar muchas plantas en poco espacio, maximizando
                    la productividad en áreas reducidas.
                  </li>
                  <br />
                  <li>
                    <span className="font-semibold">
                      Control eficiente de plagas:{" "}
                    </span>
                    Las plantas en el aire son más fáciles de monitorear,
                    reduciendo enfermedades y mejorando la calidad de las
                    cosechas.
                  </li>
                </ul>
                {/* Desventajas */}
                <h3 className="py-6 font-Poppins text-[50px]">Desventajas</h3>
                <ul>
                  <li>
                    Si en algún momento la energía eléctrica falla por alguna
                    situación, las plantas se marchitarían rápidamente porque el
                    agua no llegaría a sus raíces.
                  </li>
                  <br />
                  <li>
                    Se debe mantener una vigilancia muy estrecha sobre el
                    equipamiento para asegurar que las plantas no se sequen y no
                    aparezcan manchas secas en sitios donde el rocío no logre
                    alcanzar sus raíces, en especial cuando está desarrollándose
                    su sistema radicular.
                  </li>
                </ul>
                {/* Back main page button */}
                <div className="w-full h-[250px] flex justify-center items-center">
                  <Link to="/">
                    <button className="border-[1px] border-[#3d5918] hover:bg-[#3d5918] hover:text-[#f9f7f3] font-Poppins text-xl transition-all p-6">
                      Back to main page
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHowPlantsGrow;
