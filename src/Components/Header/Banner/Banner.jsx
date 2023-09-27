

const Banner = ({ handleClickBtn }) => {
     return (
          <div>
               <div className="">
                    <div className="h-[50vh] md:h-[60vh] relative bg-[url('https://i.ibb.co/Wvc1LjN/Rectangle-4281.png')] bg-cover bg-no-repeat object-center md:object-fill opacity-5"></div>
                    <div className="absolute top-[30%] md:top-[35%] right-0 left-0 w-full mx-auto text-center">
                         <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">
                              I Grow By Helping People In Need
                         </h2>
                         <div className="mt-4 md:mt-5">
                             
                              <input
                                   
                                   id="inputField"
                                   type="text"
                                   name="name"
                                   placeholder="Search here...."
                                   className="input border-none w-3/5 md:w-[30%] rounded-l-md px-2 py-3 md:px-4 md:py-4"
                              />
                              <button
                                   onClick={handleClickBtn}
                                   className="rounded-r-md absolute right-[20%] md:right-[35%] bg-[#FF444A] text-[#FFFFFF] font-semibold px-2 py-3 md:px-3 md:py-3"
                              >
                                   {/* <button className="rounded-r-md absolute right-[20%] md:right-[35%] bg-[#FF444A] text-[#FFFFFF] font-semibold px-2 py-3 md:px-3 md:py-3"> */}
                                   Search
                              </button>
                             
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
