import React from "react";

const ProductDetails = () => {
  return (
    <main className="h-full w-full grid grid-cols-2">
      <main>
        <div>L ProductDetails</div>
      </main>
      <main className="p-2">
        <section className="flex items-center justify-between">
          {/* <Image /> */}
          <div className="flex items-center">
            <div className="w-9 h-9 bg-red-200 rounded-full"></div>
            <div className="ml-2">Reebok Company</div>
          </div>
          <div>Unique ID</div>
        </section>
      </main>
    </main>
  );
};

export default ProductDetails;
