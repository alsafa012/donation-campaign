import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

const Banner = ({ category }) => {
     console.log(category);
     // const data = useLoaderData()
     // console.log(data)
     // const {id} = useParams()
     // console.log(id)
     const [allCategory, setAllCategory] = useState('');
     console.log(allCategory)
     useEffect(() => {
          const myData = category.filter(item=>item.price)
          // console.log(item.id)
          setAllCategory(myData);
          // console.log(myData);
     }, [category]);
     // console.log(allCategory);

     // console.log(category);
     //  const handleClickBtn = ()=>{
     //      console.log('hello world')
     const handleSubmit = (e) => {
          e.preventDefault();
          // console.log(e.target.name.value);
     };
     //  }
     return (
          <div>
               <div className="">
                    <div className="h-[50vh] md:h-[60vh] relative bg-[url('https://i.ibb.co/Wvc1LjN/Rectangle-4281.png')] bg-cover bg-no-repeat object-center md:object-fill opacity-5"></div>
                    <div className="absolute top-[30%] md:top-[35%] right-0 left-0 w-full mx-auto text-center">
                         <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                              I Grow By Helping People In Need
                         </h2>
                         <div className="mt-2 md:mt-5">
                              <form onSubmit={handleSubmit}>
                                   <input
                                        // onSubmit={handleSubmit}
                                        // onChange={}
                                        type="text"
                                        name="name"
                                        placeholder="Search here...."
                                        className="input border-none w-3/5 md:w-[30%] rounded-l-md px-2 py-3 md:px-4 md:py-4"
                                   />
                                   <button className="rounded-r-md absolute right-[20%] md:right-[35%] bg-[#FF444A] text-[#FFFFFF] font-semibold px-2 py-3 md:px-3 md:py-3">
                                        Search
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
