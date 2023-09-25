const DonationPageCards = ({ card }) => {
     const {
          id,
          title,
          picture,
          category_code,
          category_bg,
          card_bg,
          text_button_bg,
          description,
          price,
          category_name,
     } = card;
     console.log(card);
     return (
          <div>
               <div className="rounded-2xl card-sid bg-base-100 shadow-xl flex gap-3 md:gap-5 items-center">
                    {/* <div> */}
                    {/* <figure> */}
                    <img
                         className="w-[150px] md:w-[200px] h-[150px] md:h-[170px]"
                         src={picture}
                         alt="Category"
                    />
                    {/* </figure> */}
                    {/* </div> */}
                    <div
                         style={{ color: text_button_bg }}
                         // className="card-body"
                         className="space-y-1 md:space-y-2"
                    >
                         <h2 className="">
                              <span
                                   className="text-sm font-normal rounded-md p-1"
                                   style={{ backgroundColor: category_bg }}
                              >
                                   {category_name}
                              </span>
                         </h2>
                         <p className="text-lg md:text-2xl font-medium text-black">
                              {title}
                         </p>
                         <p className="font-semibold">${price}</p>
                         <div className="pt-2">
                              <button
                                   style={{
                                        backgroundColor: text_button_bg,
                                   }}
                                   className="py-1 md:py-2 px-3 md:px-10 rounded-lg text-base font md:font-semibold text-white"
                              >
                                   Watch
                              </button>
                         </div>
                    </div>
               </div>

               {/* <div className="flex gap-5 items-center shadow-2xl">
                    <figure>
                         <img className="w-full h-full" src={picture} alt="Donations" />
                    </figure>
                    <div
                         style={{ color: text_button_bg }}
                         className=" space-y-2"
                    >
                         <p className="flex grow">
                              <span
                                   className="text-sm font-normal rounded-md p-1"
                                   style={{ backgroundColor: category_bg }}
                              >
                                   {category_name}
                              </span>
                         </p>
                         <p className="text-2xl font-medium text-black">{title}</p>
                         <p>${price}</p>
                         <div className="">
                              <button
                                   style={{
                                        backgroundColor: text_button_bg,
                                   }}
                                   className=" px-8 py-3 text-white rounded-xl"
                              >
                                   Watch
                              </button>
                         </div>
                    </div>
               </div>  */}
          </div>
     );
};

export default DonationPageCards;
