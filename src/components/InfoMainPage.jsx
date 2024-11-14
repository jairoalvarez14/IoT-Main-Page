import { HiArrowLongDown } from "react-icons/hi2";

import React from "react";

const InfoMainPage = () => {
  return (
    <>
      <div className="w-full h-full py-[100px] bg-[#f9f7f3]">
        <div className="w-full h-full flex items-center justify-center md:p-[50px]">
          <div className=" md:flex max-w-[1200px] justify-center items-center relative">
            <div className="max-w-[600px] w-full relative">
              <h2 className="font-Yellowtail text-[20px] sm:text-[35px] md:text-[50px] text-[#255f12] absolute top-[-10px] left-[-10px] sm:top-[-16px] sm:left-[-10px] md:top-[-25px] md:left-[-20px] px-10 md:p-[0px]">
                Nosotros...
              </h2>
              <h2 className="poppins-regular text-[30px] sm:text-[45px] md:text-[60px] px-10 md:p-[0px]">
                ¿Qué es lo que hacemos?
              </h2>
              <div className="px-10 md:p-[0px]">
                <button className="p-2 text-[14px] md:text-[18px] md:p-4 border-[#255f12] border-[2px]">
                  Saber más
                </button>
              </div>
            </div>
            <br />
            <div className="max-w-[600px] w-full text-justify px-10 md:p-[0px]">
              <p className="font-bold text-[12px] sm:text-[14px] md:text-[16px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos, magni ex culpa recusandae tempora eveniet deserunt
                obcaecati neque at fugiat!
              </p>
              <br />
              <p className="text-[12px] sm:text-[14px] md:text-[16px]">
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
            <div className="w-full h-full hidden md:flex justify-end items-end mt-[360px] absolute">
              <button className="flex justify-center items-center py-6 px-4 bg-[#255f12] text-[#f9f7f3] font-Poppins text-[30px] rounded-xl">
                <HiArrowLongDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMainPage;
