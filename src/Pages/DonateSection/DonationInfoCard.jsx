import { Link } from "react-router-dom";

const DonationInfoCard = ({ myCategory }) => {
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
          banner_picture
     } = myCategory;




     return (
          <div className="container mx-auto"> 
               <div>
                   <div className="mt-10"> 
                   <img className="w-full h-[400px]" src={picture} alt="" />
                   {/* <img className="w-full h-[400px]" src={banner_picture} alt="" /> */}
                   </div>
                    <div className="h-[96px] bg-[#0B0B0B80] relative bottom-24">
                         <div className="absolute top-[30%] left-10">
                             <Link>
                             <button
                              onClick={handleDonateBtn}
                                   style={{ backgroundColor:text_button_bg}}
                                   className="p-2 rounded-xl text-white font-semibold"
                              >
                                   Donate ${price}
                              </button>
                             </Link>
                         </div>
                    </div>
               </div>
               <div className="-mt-16 mb-10 space-y-2">
               <p className="font-bold text-4xl">{title}</p>
               <p className="text-[#0B0B0BB2]">{description}</p>
               </div>
          </div>
     );
};

export default DonationInfoCard;
