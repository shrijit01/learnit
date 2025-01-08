import React from "react";

function Backgrounds() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="w-full absolute top-[5%] py-10 flex justify-center text-zinc-600 text-xl font-semibold">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Backgrounds;
