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
          <div>
               <div className="card bg-base-100 shadow-xl">
                    <figure>
                         <img
                              src={picture}
                              alt="Categories"
                         />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title text-sm font-medium">
                              {category_name}
                              
                         </h2>
                         <p className="font-semibold text-xl">{title}</p>
                         {/* <div className="card-actions justify-end">
                              <div className="badge badge-outline">Fashion</div>
                              <div className="badge badge-outline">
                                   Products
                              </div>
                         </div> */}
                    </div>
               </div>
          </div>
     );
};

export default Cards;
