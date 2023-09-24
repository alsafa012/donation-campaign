const Banner = () => {
     return (
          <div>
               <div>
                    <div className=" h-[60vh] text-center bg-[url('https://i.ibb.co/Kjj6J29/Clothing.png')] bg-no-repeat bg-cover">
                         <div className="pt-10 md:pt-24">
                         <h2 className="text-lg md:text-3xl lg:text-5xl font-medium md:font-bold">I Grow By Helping People In Need</h2>
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

               {/* <div
                    className="hero min-h-screen"
                    style={{
                         backgroundImage:
                              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                    }}
               >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div>
                         <input className="px-3 py-2" placeholder="Search here...." type="text" />
                         <input className="bg-[#FF444A] text-[#FFFFFF] font-semibold px-3 py-2" type="submit" />
                    </div>
                    </div>
               </div> */}
          </div>
     );
};

export default Banner;
