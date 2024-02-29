"use client"

import React, { useEffect, useState } from "react";

import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";

const Mainbar = () => {

  const [project, setProject] = useState([]);
  const [page, setPage] = useState(0);
  // console.log("page",page);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    if (project.length !== 0) {
      const left = document.querySelector("#leftClick");
  
      left.addEventListener("click", () => {
        if (page > 0) {
          setPage(page - 1);
        }
      });
    }
  }, [page, project]);
  useEffect(() => {
    client.fetch('*[_type == "projects"]').then((data) => {
      const project = data;
      project.sort((a, b) => a.id - b.id);
      setProject(project);
    }
    );

  }, []);
  
  useEffect(() => {
    if(project.length !== 0){
      const right = document.querySelector("#rightClick");
      const clickHandler = () => {
        if (page < project.length - 1) {
          setPage(page + 1);
        }
      };
      right.addEventListener("click", clickHandler);
    }
  },
  [page, project]);

  return (
    
    <div className="md:min-h-dvh h-screen w-full flex flex-col items-center justify-start text-white gap-2 border">
    {project.length !==0 && (
      <>
      <div className=" w-3/5 aspect-square mt-4 overflow-hidden border">
        <img
          src={urlFor(project[`${page}`].image).width(800).url()}
          alt=""
          className=" h-full w-full object-center object-contain"
        />
      </div>
      <div className=" w-full h-fit text-center uppercase font-[Archivo] font-bold text-2xl mt-3">
        {project[`${page}`].title}
      </div>
      <div className=" w-4/5 h-fit text-justify text-sm">
        {project[`${page}`].description}
      </div>
      <div className=" w-full flex items-center justify-between rounded-xl mt-auto mb-8">
        <div className="text-4xl font-bold justify-items-start ml-5">
          {page + 1}/{project.length}
        </div>
        <div className=" w-[75%] border-2 rounded-md"></div>
        <div className=" flex mr-5">
        <img src="/Left.svg" alt="" id="leftClick" className=" w-20" />
        <img src="/Right.svg" alt="" id="rightClick" className=" w-20" />
        </div>
      </div>
      </>
      )
    }
    </div>
  );
};

export default Mainbar;

// export async function getData(context) {
//   const projects = await client.fetch('*[_type == "projects"]');
//   return projects;
// }
