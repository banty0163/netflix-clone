import React, { useEffect, useState } from 'react'
import search_icon from "../../assets/search_icon.svg"
import netflix_favicon from "../../assets/netflix_favicon.ico"
// import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const TvShows = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNjYTJiYTEzYmI0YzhhNDg1OGIyMzBkNzlkZTgyNiIsIm5iZiI6MTc1Nzc4OTg2Ni4zMDcwMDAyLCJzdWIiOiI2OGM1YmVhYWNjYzUwZmNkMWMwZDhhMmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tCMa1mYDfrFTmrQe17x0O7dFAD2cb05k2F9zN7aE1mI'
        }
    }

    // Fetch default shows
    const resetToDefault = async () => {
        try {
            setLoading(true)
            const res = await fetch(
                'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
                options
            )
            const result = await res.json()
            setData(result.results || [])
        } catch (error) {
            toast.error("Failed to load popular shows!")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        resetToDefault()
    }, [])

    // Search handler
    const searchMovies = async () => {
        if (search.trim() === "") {
            toast.info("Please enter a search term")
            return
        }
        try {
            setLoading(true)
            const res = await fetch(
                `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(search)}&language=en-US&page=1`,
                options
            )
            const result = await res.json()
            if (!result.results || result.results.length === 0) {
                setData([])
                toast.warn("No results found!")
            } else {
                setData(result.results)
            }
        } catch (error) {
            toast.error("Error searching TV shows")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <ToastContainer position="top-center" autoClose={2000} />

            <div className="flex mx-4  items-center">
                <Link to={'/'}>
                    <img src={netflix_favicon} alt="" className="h-13  mt-3 " />
                    <h1 className=" bg-black/20 flex  text-xs mt-3 font-[600] md:text-4xl text-center mr-9 ">Tv Shows</h1>
                </Link>

                <div className="flex items-center">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search TV shows..."
                        className="w-full m-4 rounded border border-gray-300 px-2 py-1"
                    />
                    <img
                        src={search_icon}
                        alt=""
                        className="size-4 cursor-pointer"
                        onClick={searchMovies}
                    />
                </div>
            </div>

            {/* Loader */}
            {loading && (
                <div className="text-center text-gray-300 mt-10">Loading...</div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4 rounded-[10px]">
                {/* If no data */}
                {!loading && data.length === 0 && (
                    <div className="col-span-full text-center text-gray-400">
                        <p className="mb-3">No results found</p>
                        <button
                            onClick={() => {
                                setSearch("")
                                resetToDefault()
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                            Back to Popular Shows
                        </button>
                    </div>
                )}

                {/* Show results */}
                {data.map((card, index) => (
                    <Link
                        key={index}
                        className="bg-white/10 mx-1 flex flex-col justify-between items-center gap-2 max-w-md "
                        to={`/player/${card.id}`}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original${card.backdrop_path}`}
                            alt=""
                            className="mb-3 mt-2  w-full object-cover overflow-hidden p-1"
                        />
                        <div className="flex gap-4 items-center w-full justify-between">
                            <p className=" max-w-[120px] text-xs">{card.name}</p>
                            <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition">
                                Play
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default TvShows
