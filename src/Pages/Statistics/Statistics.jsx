import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Legend } from "recharts";
const Statistics = () => {
     const [myDonation, setMyDonation] = useState([]);
     const [totalDonation, setTotalDonation] = useState(0);
     const [remainingDonation, setRemailingDonation] = useState(0);
     const [noDataFound, setNoDataFound] = useState(false);
     const [data, setData] = useState([]);
     useEffect(() => {
          const myDonation = JSON.parse(localStorage.getItem("donation"));
          if (myDonation) {
               setMyDonation(myDonation);

               const totaled = myDonation.length;
               const totalPercent = parseFloat(
                    ((totaled / 12) * 100).toFixed(2)
               );

               console.log("my donation ", totalPercent);

               const remainingDonations = Math.abs(totalPercent - 100);

               console.log("remaining donation ", remainingDonations);

               const myData = [
                    {
                         name: "Your Donation",
                         value: totalPercent,

                         fill: "#00C49F",
                    },
                    {
                         name: "Total Donation",
                         value: remainingDonations,
                         fill: "#FF444A",
                    },
               ];
              
               setTotalDonation(totalPercent);
               setRemailingDonation(remainingDonations);
               setData(myData);
          } else {
               setNoDataFound("no data found");
          }
     }, []);

     return (
          <div>
               {noDataFound ? (
                    <div className="text-center mt-20">
                         <p className=" text-2xl md:text-5xl font-semibold text-[#79C23F]">
                              You haven't made any donation yet..!
                         </p>
                         <p className=" text-2xl md:text-4xl font-semibold mt-3 text-[#0052FF]">
                              Donate First for show PicChart..
                         </p>
                         <Link to="/">
                              <button className="mt-3 btn bg-[#FF444A] text-white">
                                   Click here for donate
                              </button>
                         </Link>
                    </div>
               ) : (
                    <div className="text-center ">
                         <div className=" flex justify-center">
                              <PieChart width={400} height={400}>
                                   <Pie
                                        dataKey="value"
                                        data={data}
                                        cx={200}
                                        cy={200}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label={({ percent }) =>
                                             ` ${(percent * 100).toFixed(2)}%`
                                        }
                                   />
                                   <Legend />
                              </PieChart>
                         </div>
                    </div>
               )}
          </div>
     );
};

export default Statistics;
