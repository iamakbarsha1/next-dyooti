"use client";
import React, { useState } from "react";

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <main className="p-5 md:px-7 md:py-5 lg:px-10 lg:py-6 bg-primary">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between">
        <section className="mb-3 md:mb-0 md:mr-10 xl:mr-20 text-base md:text-xl lg:text-3xl font-bold text-white">
          Subscribe to our newsletter
        </section>
        <section className="pl-1 pr-3 py-1 flex items-center justify-center flex-grow bg-white rounded-full overflow-hidden">
          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="px-4 lg:px-6 py-4 lg:py-5 flex-grow bg-white outline-none"
          />
          <div className="px-4 py-2 text-white bg-primary rounded-full">
            Subscribe
          </div>
        </section>
      </section>
    </main>
  );
};

export default NewsLetter;
