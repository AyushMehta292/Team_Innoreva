"use client";
import { client } from "@/Helper/context";
import { builder } from "@/Helper/context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card, CardContent } from "@/Components/ui/card";
import { useEffect, useState } from "react";

const Members = () => {
  const [membersData, setmembersData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "members"]').then((res) => {
      const data = res;
      data.sort((a, b) => a.id - b.id);
      // console.log("response ", data);
      setmembersData(data);
    });
  }, []);

  // console.log("sortedData ", membersData);
  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <>
      <Carousel
        className="self-center md:mt-auto md:mb-12 w-[80%] mt-8"
        opts={{
          align: "start",
          loop: true,
          // active: false,
          // axis: 'y',
          duration: 25,
          
        }}
      >
        <CarouselContent>
          {membersData &&
            membersData.map((data, idx) => (
              <CarouselItem
                key={data.por}
                className="md:basis-1/3 lg:basis-1/4 basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-[1/1.7] items-center justify-start p-1">
                      <div className=" border w-full h-[70%] rounded-lg overflow-hidden">
                        <img
                          src={urlFor(membersData[`${data.id - 1}`].image)
                            .width(400)
                            .url()}
                          alt=""
                          className="object-contain w-full"
                        />
                      </div>
                      <div className=" font-bold text-[2.5vw] md:text-[1rem] text-nowrap overflow-hidden">
                        {data.name}
                      </div>
                      <div className="font-bold text-[3vw] md:text-[1.3rem] text-slate-400 text-nowrap overflow-hidden">
                        {data.por}
                      </div>
                      <a
                        href={data.linkedin}
                        className=" text-[2vw] md:text-2xl border p-1 rounded-lg no-underline
                      hover:scale-[1.2] text-nowrap overflow-hidden"
                      >
                        <div className="">Know More</div>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default Members;

// <div className="bg-white flex justify-center items-center rounded-t-xl">
//   <img
//     src={urlFor(membersData[`${data.id-1}`].image).width(400).url()}
//     alt=""
//     className="rounded-full object-cover flex items-center justify-center"
//   />
// </div>

// <div className="flex flex-col items-center justify-center gap-[0.8vw]">
//   <p className=" text-[1.25vw] [font-family:'Archivo-SemiBold',Helvetica]">
//     {data.name}
//   </p>
//   <p className="text-center text-[1.08vw] [font-family:'Archivo-SemiBold',Helvetica] font-medium">
//     {data.por}
//   </p>
//   <button className="bg-[#050816] text-[0.9vw] text-white px-[1.5vw] py-[0.5vw] rounded-xl">
//     <a href={data.linkedin}>Know More</a>
//   </button>
// </div>
