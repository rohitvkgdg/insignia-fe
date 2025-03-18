import React from "react";

function Card({
  name,
  price,
  image = "https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif",
}) {
  return (
    <div className="relative flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-4 w-[280px] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      
      {/* Floating Glow Effect */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Card Image (Fixed Size) */}
      <div className="relative overflow-hidden rounded-lg w-full h-[180px]">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-black">{name}</h2>
       
      </div>
    </div>
  );
}

export default Card;
