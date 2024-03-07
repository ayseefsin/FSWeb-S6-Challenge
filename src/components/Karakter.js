import { useState } from "react";

// Karakter bileşeniniz buraya gelecek
export const Karakter = ({ char, movies }) => {
  const [open, SetOpen] = useState(false);
  return (
    <div
      className={`flex flex-col border-2 border-white text-[rgb(255,255,255)] shadow-md bg-[black] mx-[25vw] px-[3vw] rounded max-h-[2.5vw] overflow-hidden ${
        open ? "max-h-[30vw] my-[2vw] shadow-xl " : "my-[1vw] "
      }`}
    >
      <div
        className="flex justify-between "
        onClick={() => {
          SetOpen(!open);
        }}
      >
        <h2 className="font-bold text-3xl flex justify-self-start  ">
          {char.name}
        </h2>
        <div
          className={` text-3xl ${
            open ? "rotate-[270deg]" : "rotate-[90deg]"
          } `}
        >{`>`}</div>
      </div>

      <div className="flex transition-duration: 15000ms   flex-col items-center text-[1.5vw] ">
        <ul className="flex flex-col items-start">
          <li>gender: {char.gender}</li>
          <li>height: {char.height}</li>
          <li>mass: {char.mass} </li>
          <li>birth year: {char.birth_year}</li>
          <li>eye color: {char.eye_color}</li>
          <li>appear in {char.films.length} films</li>
          <li className="flex flex-col items-start">
            movies :{" "}
            {char.films.map((film, i) => (
              <div key={i}>
                {movies.find((m) => m.title === film)?.title}-
                {movies.find((m) => m.title === film)?.director}
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};
