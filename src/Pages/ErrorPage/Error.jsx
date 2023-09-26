import { Link, NavLink } from "react-router-dom";

const Error = () => {
     return (
          <div className="text-5xl text-center mt-32 space-y-5">
               <p>ERROR...!</p>
               <p>THIS PAGE DOES NOT EXISTS..</p>
               <div>
                    <Link to="./">
                         <button className="btn btn-primary bg-red-400">
                              Go To Home Page
                         </button>
                    </Link>
               </div>
          </div>
     );
};

export default Error;
