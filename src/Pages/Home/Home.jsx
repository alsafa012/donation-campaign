import { useLoaderData } from "react-router-dom";
import CardSection from "../../Components/CardSection/CardSection";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
     const category = useLoaderData();

     const [allCategory, setAllCategory] = useState(category);
     const [searchData, setSearchData] = useState(category);
     const handleClickBtn = (e) => {
          const search = document.getElementById("inputField").value;
          e.preventDefault();

          if (search.length) {
               const filterCampaigns = allCategory.filter(
                    (campaign) =>
                         campaign.category_name.toLowerCase().includes(search.toLowerCase())
                         
               );

               if (filterCampaigns) {
                    setSearchData(filterCampaigns);
               }
          } else {
               setSearchData(allCategory);
          }
          document.getElementById("inputField").value = "";
     };

     return (
          <div>
               <Banner handleClickBtn={handleClickBtn}></Banner>

               <CardSection searchData={searchData}></CardSection>
          </div>
     );
};

export default Home;
