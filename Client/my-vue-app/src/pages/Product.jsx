import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setproduct] = useState([]);

  const getProductdata = async () => {
    try {
      let responce = await fetch("http://localhost:8080/product", {
        method: "GET",
        headers: {
          "Conetnt-Type": "application/json",
        },
      });
      responce = await responce.json();
      setproduct(responce.data);
      console.log(responce.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProductdata();
  }, []);

  return (
    <div className="flex w-full">
      <div
        className="w-[80%] text-center grid gap-[2rem]"
        style={{ border: "1px solid black" }}
      >
        <h2>mens</h2>
        <h2>mens</h2>
        <h2>mens</h2>
        <h2>mens</h2>
        <h2>mens</h2>
        <h2>mens</h2>
        <h2>mens</h2>
      </div>

      <div style={{ borderTop: "2px solid black" }}>
        <br />
        <br />
        <h2 className="text-center text-[1.2rem] font-[500]">
          D E S I G N E R &nbsp; &nbsp; C L O T H I N G
        </h2>
        <br />
        <br />
        <div className="grid ml-[2%] gap-[1.2rem]  sm:grid-cols-4 md:grid-cols-5  lg:grid-cols-6">
          {product.map((ele) => {
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
    </div>
  );
};

export default Product;
