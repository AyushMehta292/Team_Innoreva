import React, { useState } from "react";
import { client } from "@/Helper/context";
const Contact = () => {
  const [formData, setFormData] = useState({
    _id: "contact_us",
    _type: "contact_us",
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    client.createOrReplace(formData).then((res) => {
      console.log(`Bike was created, document ID is ${res._id}`);
    });
    setFormData({
      _id: "contact_us",
      _type: "contact_us",
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="text-white w-full h-screen flex flex-col md:flex-row justify-start items-center ">
        <div className="flex flex-col h-full justify-between items-center md:items-start md:w-1/2 w-full  md:pl-14">
          <div className="mx-8">
            <div className="text-6xl capitalize text-nowrap font-bold mt-16">
              Contact us
            </div>
            <div className="mt-5 text-justify pr-3">
              If you have any questions related to our club or work or
              experiencing any technical difficulties, please do not hesitate to
              contact us.
            </div>
          </div>
          <div className="flex flex-col mb-auto mt-auto w-full  gap-7 px-3">
            <div className="flex flex-col justify-start items-start gap-4 text-sm mt-3 md:mt-0 pl-5">
              <div className="flex justify-center items-center ">
                <a href="#" className="flex justify-center items-center">
                  <span>
                    <img alt="Vector" src="/Vector.svg" className="pr-4" />
                  </span>
                  <div className="">team_innoreva_nitjsr</div>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="flex justify-center items-center">
                  <span>
                    <img alt="Vector" src="/facebook2.svg" className="pr-4" />
                  </span>
                  <div className="">Team Innoreva, NIT Jamshedpur</div>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="flex justify-center items-center">
                  <span>
                    <img alt="Vector" src="/email.svg" className="pr-4" />
                  </span>
                  <div className="">teaminnoreva@nitjsr.ac.in</div>
                </a>
              </div>
              <div className="flex justify-center items-center">
                <a href="#" className="flex justify-center items-center">
                  <span>
                    <img alt="Vector" src="/phone.svg" className="pr-4" />
                  </span>
                  <div className="">0000000000</div>
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <form className="flex flex-col">
                <label
                  htmlFor="name"
                  className=" mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white text-[1.2rem] pb-6 md:mt-16"
                >
                  Name
                </label>
                <input
                  id="name"
                  className="text-[1.6vw] md:w-[35vw] rounded-md h-[2.5rem] p-2.5 bg-[#9b9b9b]"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    console.log(formData);
                  }}
                />

                <label
                  htmlFor="email"
                  className=" mt-[1.2vw] mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white md:text-[1.2rem] pb-6"
                >
                  Email
                </label>
                <input
                  id="email"
                  className="text-[1.6vw] md:w-[35vw] rounded-md h-[2.5rem] p-2.5 bg-[#9b9b9b]"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    console.log(formData);
                  }}
                />

                <label
                  htmlFor="message"
                  className=" mt-[1.2vw] mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white md:text-[1.2rem] pb-6"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="text-[1.6vw]  text md:w-[35vw] rounded-md h-[11vw] p-2.5 bg-[#9b9b9b]"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    console.log(formData);
                  }}
                />
                <br />
                <button
                  className="w-28  font-medium text-white md:text-[1.2rem] px-3 py-1 hover:bg-[#9b9b9b] hover:cursor-pointer border border-white rounded-md"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col pl-6 justify-start gap-4 items-center">
          <form className="flex flex-col">
            <label
              htmlFor="name"
              className=" mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white text-[1.2rem] pb-6 md:mt-16"
            >
              Name
            </label>
            <input
              id="name"
              className="text-[1.6vw] md:w-[35vw] rounded-md h-[2.5rem] p-2.5 bg-[#9b9b9b]"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                console.log(formData);
              }}
            />

            <label
              htmlFor="email"
              className=" mt-[1.2vw] mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white md:text-[1.2rem] pb-6"
            >
              Email
            </label>
            <input
              id="email"
              className="text-[1.6vw] md:w-[35vw] rounded-md h-[2.5rem] p-2.5 bg-[#9b9b9b]"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                console.log(formData);
              }}
            />

            <label
              htmlFor="message"
              className=" mt-[1.2vw] mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white md:text-[1.2rem] pb-6"
            >
              Message
            </label>
            <textarea
              id="message"
              className="text-[1.6vw]  text md:w-[35vw] rounded-md h-[11vw] p-2.5 bg-[#9b9b9b]"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                console.log(formData);
              }}
            />
            <br />
            <button
              className="w-28  font-medium text-white md:text-[1.2rem] px-3 py-1 hover:bg-[#9b9b9b] hover:cursor-pointer border border-white rounded-md"
              type="submit"
              onClick={handleSubmit}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

// <div className="flex flex-col w-full items-center overflow-hidden">
//   <div className="flex md:flex-row flex-col p-[4vw]">
//     <div className="flex flex-col justify-center items-center md:items-start">
//       <div className="hidden sm:block md:w-[50vw] h-[9vw] mb-10 md:mb-0 font-bold text-white xl:text-8xl md:text-6xl text-5xl text-center tracking-[0] leading-[normal]">
//         Contact Us
//       </div>
//       <div>
//         <p className=" mt-2 md:w-[40vw] md:h-[3vh] font-normal lg:pl-14 text-white text-center tracking-[0] leading-[normal] text-base">
// If you have any questions related to our club or work or
// experiencing any technical difficulties, please do not hesitate to
// contact us.
//         </p>
//       </div>
//       <div className="mt-[7vw] flex flex-col gap-y-10 lg:pl-14">
//         <div className="flex font-semibold text-white text-lg">
//           <img alt="Vector" src="/Vector.svg" />
//           <p className="ml-[2vw] text-lg">team_innoreva_nitjsr</p>
//         </div>

//         <div className=" flex font-semibold text-white text-lg">
//           <img alt="Facebook" src="/facebook2.svg" />
//           <p className="ml-[2vw] text-lg">
//             Team Innoreva, NIT Jamshedpur
//           </p>
//         </div>

//         <div className=" flex font-semibold text-white text-lg">
//           <img alt="Email" src="/email.svg" />
//           <p className="ml-[2vw] text-lg">teaminnoreva@nitjsr.ac.in</p>
//         </div>
//         <div className=" flex font-semibold text-white text-lg">
//           <img alt="Phone" src="/phone.svg" />
//           <p className="ml-[2vw] text-lg">0000000000</p>
//         </div>
//       </div>
//     </div>
//     <div className="flex flex-col mt-[8vw]">
// <form className="flex flex-col">
//   <label
//     htmlFor="name"
//     className=" mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white text-[1.2rem] pb-6"
//   >
//     Name
//   </label>
//   <input
//     id="name"
//     className="text-[1.6vw] md:w-[35vw] rounded-md h-[2.5rem] p-2.5 bg-[#9b9b9b]"
//     type="text"
//     value={formData.name}
//     onChange={(e) =>
//       {setFormData({ ...formData, name: e.target.value })
//       console.log(formData)}
//     }
//   />

//   <label
//     htmlFor="email"
//     className=" mt-[1.2vw] mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white md:text-[1.2rem] pb-6"
//   >
//     Email
//   </label>
//   <input
//     id="email"
//     className="text-[1.6vw] md:w-[35vw] rounded-md h-[2.5rem] p-2.5 bg-[#9b9b9b]"
//     type="email"
//     value={formData.email}
//     onChange={(e) =>
//       {setFormData({ ...formData, email: e.target.value })
//       console.log(formData)}
//     }
//   />

//   <label
//     htmlFor="message"
//     className=" mt-[1.2vw] mb-2 md:mb-0 w-[8vw] h-[3vw] font-medium text-white md:text-[1.2rem] pb-6"
//   >
//     Message
//   </label>
//   <textarea
//     id="message"
//     className="text-[1.6vw]  text md:w-[35vw] rounded-md h-[11vw] p-2.5 bg-[#9b9b9b]"
//     value={formData.message}
//     onChange={(e) =>
//       {setFormData({ ...formData, message: e.target.value })
//       console.log(formData)}
//     }
//   />
//   <br />
//   <button
//     className="w-28  font-medium text-white md:text-[1.2rem] px-3 py-1 hover:bg-[#9b9b9b] hover:cursor-pointer border border-white rounded-md"
//     type="submit"
//     onClick={handleSubmit}
//   >
//     Send
//   </button>
// </form>
//     </div>
//   </div>
//   <div className="w-full">

//   </div>
// </div>
