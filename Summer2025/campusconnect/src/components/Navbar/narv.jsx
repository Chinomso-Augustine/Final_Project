import React, { useState } from "react";


function Narvbar() {
 
    //State for monitoring when mobile state is on or off
    const [open, setOpen] = useState(false); 

    //Storing Narvbar info in an object to display with loops
    //Object and loop Practice
  const narvItems = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "View Services", href: "#" },
    { label: "View Providers", href: "#" },
  ];


  return (
    <div>
      <nav className="bg-gradient-to-r from-purple-900 to-indigo-800 h-[100px] flex justify-between items-center text-white px-6">
        <div className="text-3xl font-bold">CampusConnect </div>

        <div className="flex items-center space-x-4">
        {/*Loop through array using map and display items as js  */}
          {narvItems.map((items, index) => (
            <a
              key={index}
              href={items.href}
              className="inline-flex items-center justify-center bg-purple-800 w-[130px] h-[45px] text-white text-lg hover:bg-purple-700 transition rounded-2xl"
            >
              {items.label}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow text-lg hover:opacity-90 transition"
          >
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Narvbar;
