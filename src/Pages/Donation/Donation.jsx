import { useEffect, useState } from "react";
import DonationPageCards from "../../Components/DonationPageDetails/DonationPageCards";

const Donation = () => {
     const [myDonation, setMyDonation] = useState([]);
     const [noDataFound, setNoDataFound] = useState(false);

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
          setMyDonation([])
          setNoDataFound("no data found");
     }

     return (
          <div>
                {myDonation.length > 0 && (
                    <div className="text-center">
                         <button onClick={handleRemoveAll}  className="btn">Remove All</button>
                    </div>
               )}
               {noDataFound ? (
                    <p className="text-center text-5xl">No Data</p>
               ) : (
                    <div className="container mx-auto my-5 md:mt-10 grid md:grid-cols-2 gap-5">
                         {myDonation.map((item) => (
                              <DonationPageCards
                                   key={item.id}
                                   card={item}
                              ></DonationPageCards>
                         ))}
                    </div>
               )}
               {/* {myDonation.length > 4 && (
                    <div className="text-center">
                         <button  className="btn">See All</button>
                    </div>
               )} */}
          </div>
     );
};

export default Donation;
