const Banner = () => {
     return (
          <div>
               <div className="">
                    <div className=" h-[60vh] w-full relative text-center bg-[url('https://i.ibb.co/Wvc1LjN/Rectangle-4281.png')] mx-auto object-fill opacity-5"></div>
                    <div className="absolute top-[30%] md:top-[35%] right-0 left-0 w-full mx-auto text-center">
                         <h2 className="text-lg md:text-3xl lg:text-5xl font-medium md:font-bold">
                              I Grow By Helping People In Need
                         </h2>
                         <div className="mt-2 md:mt-5">
                              <input
                                   className="rounded-l-md md:px-3 md:py-2"
                                   placeholder="Search here...."
                                   type="text"
                              />
                              <input
                                   className="rounded-r-md bg-[#FF444A] text-[#FFFFFF] font-semibold md:px-3 md:py-2"
                                   type="submit"
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
