import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationInfoCard from "./DonationInfoCard";
// import DonationInfoCard from "./DonationInfoCard";

const DonateSection = () => {
     const [myCategory, setMyCategory] = useState({});
     const categories = useLoaderData();
     const { categoryId } = useParams();
     useEffect(() => {
          const findCategory = categories.find(
               (category) => category.id === categoryId
          );
          setMyCategory(findCategory);
     }, [categories, categoryId]);

     return (
          <div>
               <DonationInfoCard myCategory={myCategory}></DonationInfoCard>
          </div>
     );
};

export default DonateSection;
