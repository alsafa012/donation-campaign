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
     } = category;
     return (
          <div>
               <div className="card bg-base-100 shadow-xl">
                    <figure>
                         <img
                              src={picture}
                              alt="Shoes"
                         />
                    </figure>
                    <div className="card-body">
                         <h2 className="card-title">
                              {title}
                              <div className="badge badge-secondary">NEW</div>
                         </h2>
                         <p>If a dog chews shoes whose shoes does he choose?</p>
                         <div className="card-actions justify-end">
                              <div className="badge badge-outline">Fashion</div>
                              <div className="badge badge-outline">
                                   Products
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Cards;
