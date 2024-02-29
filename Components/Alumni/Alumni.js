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

const Alumni = () => {
  const [membersData, setmembersData] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "alumni"]').then((res) => {
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
      <div className="w-full h-full flex justify-center items-center ">
        <Carousel className=" w-[70%] ">
          <CarouselContent>
            {membersData &&
              membersData.map((data, idx) => (
                <CarouselItem
                  key={data.id}
                  className="md:basis-1/3 lg:basis-1/4 basis-1/2"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-[1/3] 4xl:aspect-[1/2.2] 5xl:aspect-[1/1.8] lg:aspect-[1/2.9] md:aspect-[1/2.9] 5xs:aspect-[1/2.3] 4xs:aspect-[1/1.9] xl:aspect-[1/2.5] 3xl:aspect-[1/2.25] items-center justify-start bg-slate-200">
                        <div className=" border w-full aspect-square rounded-full overflow-hidden scale-110 ">
                          <img
                            src={urlFor(membersData[`${data.id - 1}`].image)
                              .width(400)
                              .url()}
                            alt=""
                            className="object-contain w-full"
                          />
                        </div>
                        <div className="font-bold text-[2.4vw] md:text-[1rem] text-nowrap overflow-hidden mt-2">
                          {data.name}
                        </div>
                        <div className=" font-bold text-[2.7vw] md:text-[1.3rem] text-slate-400 text-wrap overflow-hidden">
                          {data.occupation}
                        </div>
                        <div className=" text-xs w-full text-center mt-1">
                          "{data.testimonial}"
                        </div>
                        <div className="font-bold text-xs text-slate-400">
                          {data.por}
                        </div>
                        <a
                          href={data.linkedin}
                          className=" text-[2vw] md:text-2xl border p-1 rounded-lg no-underline
                      hover:scale-[1.2] text-nowrap overflow-hidden mt-auto "
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
      </div>
    </>
  );
};

export default Alumni;
