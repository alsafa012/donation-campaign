import { useLoaderData } from "react-router-dom";
import CardSection from "../../Components/CardSection/CardSection";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
     const category = useLoaderData();
     return (
          <div>
               <Banner></Banner>
               <CardSection category={category}></CardSection>
          </div>
     );
};

export default Home;
