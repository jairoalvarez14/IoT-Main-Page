import React from "react";
import AeroponiaBG from "../assets/img/AeroponiaBG.png";
import { Link } from "react-router-dom";

const HowPlantsGrow = () => {
  return (
    <>
      <div
        className="w-full min-h-screen py-[100px] bg-cover bg-white"
        style={{ backgroundImage: `url(${AeroponiaBG})` }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="max-w-[1200px] w-full relative">
            {/* Title */}
            <div className="flex">
              <h2 className="text-[50px] font-Yellowtail absolute left-[40px]">
                How we grow plants?
              </h2>
              <h2 className="text-[100px] font-Poppins">
                <span className="bg-gradient-to-r from-[#2f84ae] to-[#62b2da] bg-clip-text text-transparent">
                  Aeroponía
                </span>
              </h2>
            </div>
            {/* Aeroponía information */}
            <div className="text-justify font-Roboto">
              <p>
                La aeroponía es una técnica avanzada de cultivo hidropónico que
                se distingue por no emplear ningún tipo de sustrato sólido para
                sostener las plantas. En este sistema, las plantas se suspenden
                en el aire y sus raíces quedan expuestas, lo que permite que
                reciban agua y nutrientes mediante un sistema de rociadores o
                nebulizadores. Este método garantiza que las plantas obtengan
                los elementos esenciales directamente en forma de una fina
                niebla o aerosol. Una de las principales ventajas de la
                aeroponía es que las raíces tienen acceso al 100% de oxígeno en
                todo momento. Esto crea un entorno altamente oxigenado que
                estimula el metabolismo de las plantas, resultando en un
                crecimiento más rápido y vigoroso en comparación con otros
                métodos de cultivo, como la hidroponía tradicional o el cultivo
                en suelo.
              </p>
              <br />
              <p>
                Además, este sistema permite un control absoluto de los
                nutrientes y del entorno de las plantas, lo que reduce la
                aparición de enfermedades y plagas asociadas con el suelo. Este
                control también optimiza el uso de recursos como el agua y los
                fertilizantes, haciéndolo un método más eficiente y sostenible.
                La aeroponía no solo mejora la productividad, sino que también
                permite cultivar una amplia variedad de especies. Entre los
                cultivos más destacados se encuentran vegetales de alto valor
                comercial, como lechugas, espinacas y hierbas aromáticas.
                Incluso, se pueden desarrollar cultivos innovadores, como
                verduras que poseen sabores similares a frutas, abriendo nuevas
                posibilidades en el ámbito gastronómico y agrícola.
              </p>
              <br />
              <p>
                Otra ventaja importante es la capacidad de utilizar la aeroponía
                en espacios reducidos, lo que la convierte en una excelente
                opción para la agricultura urbana y vertical. Gracias a su
                diseño compacto y versátil, puede implementarse en áreas con
                recursos limitados o donde las condiciones del suelo no son
                óptimas para el cultivo tradicional.
              </p>
            </div>
            {/* Saber más button */}
            <div className="mt-[100px] p-4 border-[#2f84ae] border-[1px] flex justify-center items-center hover:bg-[#2f84ae] hover:text-white transition-all">
              <Link to="/pages/how-plants-grow-info">
                <button>Saber más</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowPlantsGrow;
