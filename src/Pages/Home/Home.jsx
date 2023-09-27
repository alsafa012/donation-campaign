import { useLoaderData } from "react-router-dom";
import CardSection from "../../Components/CardSection/CardSection";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
     const category = useLoaderData();

     const [allCategory, setAllCategory] = useState(category);
     const [searchData, setSearchData] = useState(category);
     const handleClickBtn = (e) => {
          console.log("btn clicked");
          const search = document.getElementById("inputField").value;
          e.preventDefault();
          console.log(search);
          if (search.length) {
               const filterCampaigns = allCategory.filter(
                    (campaign) => campaign.category_name.toLowerCase() === search.toLowerCase()
               );
               console.log(filterCampaigns);
               if (filterCampaigns) {
                    setSearchData(filterCampaigns);
               }
          } else {
               setSearchData(allCategory);
          }
     };

     return (
          <div>
               <Banner handleClickBtn={handleClickBtn}></Banner>


               <CardSection searchData={searchData}></CardSection>


               {/* <CardSection category={category}></CardSection> */}
          </div>
     );
};

export default Home;
