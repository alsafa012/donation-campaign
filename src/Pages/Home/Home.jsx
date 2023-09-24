import { useLoaderData } from "react-router-dom";
import CardSection from "../../Components/CardSection/CardSection";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

     const category = useLoaderData()
     console.log(category)

     return (
          <div>
               <Banner></Banner>
               <CardSection category={category}></CardSection>
          </div>
     );
};

export default Home;