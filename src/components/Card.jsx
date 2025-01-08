import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"

function Card({ data,refrence }) {
  return (
    <motion.div drag  dragConstraints={refrence} className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/50 text-white px-8 py-10 overflow-hidden">
      <FaRegFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between mb-3 py-3  px-8">
          <h5>{data.size}</h5>
          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#000" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full p-4  flex items-center justify-center ${data.tag.tagColor}`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
