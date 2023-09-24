
import Cards from './Cards';

const CardSection = ({category}) => {
     // console.log(category);
     return (
        <div>

            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto my-20'>

             {
               category.map(item => <Cards key={item.id} category={item}></Cards>)
             }
          </div>
        </div>
     );
};

export default CardSection;