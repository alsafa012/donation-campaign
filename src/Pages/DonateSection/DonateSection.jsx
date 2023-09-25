import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationInfoCard from "./DonationInfoCard";


const DonateSection = () => {
     const [myCategory, setMyCategory]=useState({});
     const categories = useLoaderData();
     const {categoryId}=useParams();
     // console.log(categories);
     // console.log(categoryId);
     useEffect(()=>{
          const findCategory = categories.find(category=> category.id === categoryId);
          setMyCategory(findCategory);
          // console.log(findCategory);
     },[categories,categoryId])
// console.log(myCategory);
     return (
          <div>
               <DonationInfoCard myCategory={myCategory}></DonationInfoCard>
          </div>
     );
};

export default DonateSection;