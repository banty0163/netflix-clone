
import React, { useEffect, useState } from 'react'
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useParams, useNavigate } from 'react-router-dom'

const Player = () => {
    const [ytData, setYtData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    })

    const { id } = useParams();
    const navigate = useNavigate()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzNjYTJiYTEzYmI0YzhhNDg1OGIyMzBkNzlkZTgyNiIsIm5iZiI6MTc1Nzc4OTg2Ni4zMDcwMDAyLCJzdWIiOiI2OGM1YmVhYWNjYzUwZmNkMWMwZDhhMmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tCMa1mYDfrFTmrQe17x0O7dFAD2cb05k2F9zN7aE1mI'
        }
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                if (res.results && res.results.length > 0) {
                    setYtData(res.results[0]) // pick first video
                }
            })
            .catch(err => console.error(err))
    }, [id])

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-black">
            {/* Back Button */}
            <img
                src={back_arrow_icon}
                alt="back"
                className="absolute top-5 left-5 w-10 cursor-pointer"
                onClick={() => navigate(-1)}
            />

            {/* YouTube Video */}
            {ytData.key ? (
                <iframe
                    src={`https://www.youtube.com/embed/${ytData.key}`}
                    title={"YouTube video player"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-screen w-full p-10"
                />
            ) : (
                <></>
            )}

            {/* Video Info */}
            <div className="flex items-center justify-between w-[90%] mt-4 text-white">
                <h1>{ytData.published_at ? ytData.published_at.slice(0, 10) : <></>}</h1>
                <h1>{ytData.name}</h1>
                <h1>{ytData.type}</h1>
            </div>
        </div>
    )
}

export default Player
