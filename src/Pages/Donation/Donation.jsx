import { useEffect, useState } from "react";
import DonationPageCards from "../../Components/DonationPageDetails/DonationPageCards";
import { Link } from "react-router-dom";

const Donation = () => {
     const [myDonation, setMyDonation] = useState([]);
     const [noDataFound, setNoDataFound] = useState(false);
     const [dataLength, setDataLength] = useState(4);

     useEffect(() => {
          const myDonation = JSON.parse(localStorage.getItem("donation"));
          if (myDonation) {
               setMyDonation(myDonation);
     
          } else {
               setNoDataFound("no data found");
          }
     }, []);

     const handleRemoveAll = () => {
          localStorage.clear();
          setMyDonation([]);
          setNoDataFound("no data found");
     };

     return (
          <div className="">
               {noDataFound ? (
                    <div className="text-center mt-20">
                         <p className=" text-2xl md:text-5xl font-semibold">
                              You haven't made any donation yet..!
                         </p>
                         <Link to="/">
                              <button className="mt-3 btn bg-[#FF444A] text-white">
                                   Click here for donate
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div className="container mx-auto my-5 md:mt-10 grid md:grid-cols-2 gap-5">
                         {myDonation.slice(0, dataLength).map((item) => (
                              <DonationPageCards
                                   key={item.id}
                                   card={item}
                              ></DonationPageCards>
                         ))}
                    </div>
               )}
               <div className="flex items-center gap-4 w-[300px] mx-auto text-center">
                    {myDonation.length > 0 && (
                         <div className="text-center">
                              <button
                                   onClick={handleRemoveAll}
                                   className="btn bg-[#FF444A] text-white"
                              >
                                   Remove All
                              </button>
                         </div>
                    )}
                    {myDonation.length > 4 && (
                         <div
                              className={
                                   dataLength === myDonation.length && "hidden"
                              }
                         >
                              <button
                                   onClick={() =>
                                        setDataLength(myDonation.length)
                                   }
                                   className="btn bg-[#009444] text-white"
                              >
                                   See All
                              </button>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Donation;
