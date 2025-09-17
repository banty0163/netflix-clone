
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
    const cardRef = useRef();
    const [data, setData] = useState([]);

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNjYTJiYTEzYmI0YzhhNDg1OGIyMzBkNzlkZTgyNiIsIm5iZiI6MTc1Nzc4OTg2Ni4zMDcwMDAyLCJzdWIiOiI2OGM1YmVhYWNjYzUwZmNkMWMwZDhhMmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tCMa1mYDfrFTmrQe17x0O7dFAD2cb05k2F9zN7aE1mI",
        },
    };

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"
            }?language=en-US&page=1`,
            options
        )
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => console.error(err));
    }, [category]);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const onWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <div className="mt-4 mb-2 px-3 sm:px-6 md:px-10">
            <h1 className="mb-4 text-lg sm:text-xl md:text-2xl font-bold">
                {title ? title : "Popular on Netflix"}
            </h1>

            <div
                ref={cardRef}
                className="flex gap-3 sm:gap-4 w-full overflow-x-auto scroll-smooth 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {data.map((card, index) => (
                    <Link
                        to={`/player/${card.id}`}
                        key={index}
                        className="relative flex-shrink-0"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original${card.backdrop_path}`}
                            className="w-40 sm:w-52 md:w-60 lg:w-72 h-24 sm:h-32 md:h-36 lg:h-44 
                object-cover cursor-pointer  rounded-md hover:scale-105 transition-transform"
                            alt={card.title}
                        />
                        <p className="absolute bottom-2 left-2 right-2 text-xs sm:text-sm md:text-base font-semibold text-gray-200 truncate">
                            {card.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TitleCards;
