import React from "react";

const Navsection = () => {
  return (
    <nav className="bg-white-800 text-black p-4" id="nav">
      <br />
      <div className="container mx-0">
        <div className="flex items-center justify-between">
          <div
            className="font-bold text-[.7em] w-auto md:text-[2em] sm:text-[1em]"
            id="logo">
            <span className="text-black-500 w-auto">NORDSTROM</span>
          </div>
           <div className=" sm:flex  w-[300em] ml-10 sm:ml-10 lg:ml-40">
            <SearchSection />
          </div>
          <div className="flex  space-x-2 text-[1em] bg-white">
            <NavItem
              label="Sign&nbsp;In&nbsp;>"
              subItems={[
                <button
                  style={{ color: "white", width: "10em", borderRadius: "0px" }}
                >
                  create account
                </button>,
                "Pants",
                "Shoes",
              ]}
            />
            <NavItem
              label="Sign&nbsp;In&nbsp;>"
              subItems={["Shirts", "Pants", "Shoes"]}
            />
            <NavItem
              label="Sign&nbsp;In&nbsp;>"
              subItems={["Shirts", "Pants", "Shoes"]}
            />
          </div>
        </div>
      </div>
      <br />
      <hr style={{ marginBottom: "0" }} />
    </nav>
  );
};

const NavItem = ({ label, subItems }) => {
  return (
    <div className="relative group text-[.5em] sm:text-base md:text-lg lg:text-xl ">
      <div className="cursor-pointer hover:bg-white-800 px-3 py-2 rounded transition duration-300 ">
        {label}
      </div>
      {subItems && (
        <div
          className="hidden group-hover:block absolute left-0 top-full bg-white-800 p-4 rounded shadow-md px-[2.5em] pb-[4em]"
          style={{ backgroundColor: "white" }}
        >
          {subItems.map((item) => (
            <div
              key={item}
              className="text-xs sm:text-sm md:text-base lg:text-lg"
            >
              <br />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchSection = () => {
  return (
    <div className="relative w-[95%] sm:w-[95%] md:w-[80%] lg:w-[85%]">
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-gray-500"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input
        type="text"
        className="bg-white-700 text-gray w-full border pl-10 border-black sm:w-full md:w-full lg:w-full h-[3em] py-2 px-3 focus:border-black-300"
        placeholder="Search for products and brands"
      />
    </div>
  );
};

export default Navsection;
