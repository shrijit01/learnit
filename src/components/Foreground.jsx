import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
            size : ".9mb",
            close :false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"bg-blue-600"},
        },
        {
            desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
            size : ".9mb",
            close :false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"bg-green-600"},
        },
        {
            desc :"Lorem ipsum dolor sit amet consectetur adipisicing.",
            size : ".9mb",
            close :true,
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"bg-green-600"},
        }
    ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full  flex gap-10 flex-wrap p-5">
        {data.map((item,index)=> (
            <Card key={index} data={item} refrence={ref}/>
        ))}
    </div>
  );
}

export default Foreground;
