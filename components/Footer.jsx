import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center py-6 text-center ">
      <hr />
      <hr />
      <h1 className="text-xl text-cyan-400  font-bold ">
        Made by {""}
        <a
          target="blank"
          href="https://siratul.vercel.app/"
          className="text-black"
        >
          Siratul Islam
        </a>
        <a href={`mailto:islamsiratul@gmail.com`} className="text-cyan-700">
          <p>islamsiratul@gmail.com</p>
        </a>
      </h1>
    </div>
  );
};
