import { HiArrowLongDown } from "react-icons/hi2";

import React from "react";

const InfoMainPage = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-[#f9f7f3]">
        <div className="w-full h-full flex items-center justify-center p-[50px]">
          <div className="flex max-w-[1200px] justify-center items-center">
            <div className="max-w-[600px] w-full relative">
              <h2 className="font-Yellowtail text-[50px] text-[#255f12] absolute top-[-25px] left-[-20px]">
                Nosotros...
              </h2>
              <h2 className="poppins-regular text-[60px]">
                ¿Qué es lo que hacemos?
              </h2>
              <button className="p-4 border-[#255f12] border-[2px] ">
                Saber más
              </button>
            </div>
            <div className="max-w-[600px] w-full text-justify">
              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos, magni ex culpa recusandae tempora eveniet deserunt
                obcaecati neque at fugiat!
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aspernatur numquam quis accusamus ad praesentium
                eligendi blanditiis modi quasi id enim fugiat cupiditate, quo
                placeat tempora, suscipit laboriosam? Veritatis dolorem,
                delectus totam officia voluptate ea dolor aliquam, nisi
                consequuntur necessitatibus illum deleniti fuga exercitationem
                natus placeat qui? Natus eum vero perferendis odio sit aliquam
                iusto corporis itaque. Ut nemo quae cupiditate a doloremque?
                Voluptates laborum nihil atque, officiis molestiae consectetur
                quia. Dolor quia temporibus optio vitae eligendi architecto
                possimus blanditiis.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex justify-end items-end mt-[30px] mr-[10%] absolute">
            <button className="flex justify-center items-center py-6 px-4 bg-[#255f12] text-[#f9f7f3] font-Poppins text-[30px] rounded-xl">
              <HiArrowLongDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMainPage;
