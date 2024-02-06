import React, { useEffect, useState } from "react";

const Trendingdata = () => {
  const [trendingdata, setTrendingdata] = useState([]);

  const getTrendingdata = async () => {
    try {
      let responce = await fetch("http://localhost:8080/trending", {
        method: "GET",
        headers: {
          "Conetnt-Type": "application/json",
        },
      });
      responce = await responce.json();
      setTrendingdata(responce.data);
      console.log(responce.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTrendingdata();
  }, []);
  return (
    <div style={{ borderTop: "2px solid black" }}>
      <br />
      <br />
      <h2 className="text-center text-[1.2rem] font-[500]">
        S H O P &nbsp; B Y &nbsp; C A T E G O R Y
      </h2>
      <br />
      <br />
      <div className="grid ml-[2%] gap-[1.2rem]  sm:grid-cols-4 md:grid-cols-5  lg:grid-cols-6">
        {trendingdata.map((ele) => {
          return (
            <div key={ele._id}>
              <img
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                src={ele.imgurl}
                alt=""
                className="w-full"
              />
              <br />
              <h2 className="text-[1.2rem]">{ele.title}</h2>
              <br />
              <p className="text-[1.2rem] font-[500]">{ele.price}</p>
              <h2 className="text-[1.2rem]">★★★★☆</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trendingdata;
