import { useLoaderData } from "react-router-dom";
import CardSection from "../../Components/CardSection/CardSection";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
     const category = useLoaderData();

     const [allCategory, setAllCategory] = useState(category);
     const [searchData, setSearchData] = useState(category);
     const [noData, setNoData] = useState("");

     const handleClickBtn = (e) => {
          const search = document.getElementById("inputField").value;
          e.preventDefault();

          if (search.length) {
               const filterCampaigns = allCategory.filter((campaign) =>
                    campaign.category_name
                         .toLowerCase()
                         .includes(search.toLowerCase())
               );

               // if (filterCampaigns) {
               //      setSearchData(filterCampaigns);
               // }
               if (filterCampaigns.length === 0) {
                    setNoData("no data found");
               } else {
                    setNoData("");
                    setSearchData(filterCampaigns);
               }
          } else {
               setNoData("");
               setSearchData(allCategory);
          }
          document.getElementById("inputField").value = "";
     };

     return (
          <div>
               <Banner handleClickBtn={handleClickBtn}></Banner>
               {noData ? (
                    <p className="text-2xl text-center mt-5 font-medium ">
                         No data found
                    </p>
               ) : (
                    <CardSection searchData={searchData}></CardSection>
               )}
               {/* <CardSection searchData={searchData}></CardSection> */}
          </div>
     );
};

export default Home;
