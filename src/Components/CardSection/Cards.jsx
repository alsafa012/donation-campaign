import { Link } from "react-router-dom";

const Cards = ({ category }) => {
     const {
          id,
          title,
          picture,
          category_code,
          category_bg,
          card_bg,
          text_button_bg,
          description,
          price,
          category_name,
     } = category;
     return (
          <div className="">
               <Link to={`/category/${id}`}>
                    <div className="flex flex-col">
                         <figure>
                              <img src={picture} alt="Categories" />
                         </figure>
                         <div
                              className="flex flex-col px-3 py-3 space-y-3 rounded-b-md "
                              style={{
                                   background: card_bg,
                                   color: text_button_bg,
                              }}
                         >
                              
                              <p className="flex grow">
                                   <span
                                        className="text-sm font-medium rounded-md p-1"
                                        style={{ backgroundColor: category_bg }}
                                   >
                                        {category_name}
                                   </span>
                              </p>
                             
                              <p className="h-[50px] w-full font-semibold text-xl">{title}</p>
                          
                         </div>
                    </div>
               </Link>
          </div>
     );
};

export default Cards;
