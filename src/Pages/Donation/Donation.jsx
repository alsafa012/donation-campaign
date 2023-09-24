
// const Donation = () => {
//      return (
//           <div>
//                This is donation page
//           </div>
//      );
// };

// export default Donation;
import React, { useState, useEffect } from "react";

function PhoneList() {
     const [phoneData, setPhoneData] = useState([]); // Your JSON data should be stored here
     const [firstPhoneName, setFirstPhoneName] = useState(""); // To store the first phone's name
     const [defaultTextColor, setDefaultTextColor] = useState("red");// Default text color

     useEffect(() => {
          // Assuming you fetch your JSON data here and set it in the state variable 'phoneData'
          // Replace this with your actual data fetching logic

          // For demonstration purposes, I'll simulate fetching data here
          const simulatedData = [
               {
                    id: "1",
                    image: "https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg",
                    phone_name: "iPhone 14 Pro Max",
                    brand_name: "Apple",
                    price: 799.99,
                    rating: 4.7,
               },
               // Add more phone data here
          ];

          // Set the fetched data into the state
          setPhoneData(simulatedData);
     }, []);

     useEffect(() => {
          // Check if there is at least one phone in the data
          if (phoneData.length > 0) {
               // Get the phone_name of the first phone
               const firstPhone = phoneData[0];
               setFirstPhoneName(firstPhone.phone_name);
          }
     }, [phoneData]);

     return (
          <div>
               {/* Display the first phone's name with the default text color */}
               <div style={{ color: "white", backgroundColor: defaultTextColor }}>
                    <p >{firstPhoneName}</p>
                    <p>helloooooooo</p>

               </div>
          </div>
     );
}

export default PhoneList;