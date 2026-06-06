'use client'

import { useRef, useState, useEffect } from 'react'
import founder1 from '../../src/components/assets/S1.png'
import founder2 from '../../src/components/assets/S2.png'
import founder3 from '../../src/components/assets/S3.png'

export default function VideoSlider({ video }) {


    const videos = [
        {
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
            poster: founder1.src,
        },
        {
            video: 'https://www.w3schools.com/html/movie.mp4',
            poster: founder2.src,
        },
        {
            video: 'https://www.w3schools.com/html/movie.mp4',
            poster: founder3.src,
        },
    ]


    // const [videos, setVideos] = useState(video?.videoSlider?.videos);
    const [current, setCurrent] = useState(0)
    const [playing, setPlaying] = useState(false)

    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
            setPlaying(false)
        }
    }, [current])

    const playVideo = async () => {
        if (videoRef.current) {
            try {
                await videoRef.current.play()
                setPlaying(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const nextSlide = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }

        setCurrent((prev) => (prev + 1) % videos.length)
    }

    const prevSlide = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }

        setCurrent((prev) => (prev - 1 + videos.length) % videos.length)
    }

    const goToSlide = (index) => {
        if (videoRef.current) {
            videoRef.current.pause()
        }

        setCurrent(index)
    }

    return (
        <section className="relative w-full h-[85vh] mt-25">

            {/* Video */}
            <video
                ref={videoRef}
                poster={videos[current].poster}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            >
                <source
                    src={videos[current].video}
                    type="video/mp4"
                />
                Your browser does not support HTML5 video.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Custom Play Button */}
            {!playing && (
                <button
                    onClick={playVideo}
                    className="absolute inset-0 flex items-center justify-center z-20"
                    aria-label="Play Video"
                >
                    <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300">
                        <svg
                            width="42"
                            height="42"
                            viewBox="0 0 24 24"
                            fill="black"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </button>
            )}

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 text-white text-4xl md:text-6xl hover:scale-125 transition-all duration-300"
                style={{ cursor: 'pointer' }}
                aria-label="Previous Video"
            >
                ←
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 text-white text-4xl md:text-6xl hover:scale-125 transition-all duration-300"
                style={{ cursor: 'pointer' }}
                aria-label="Next Video"
            >
                →
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${current === index
                            ? 'w-10 h-3 rounded-full bg-white'
                            : 'w-3 h-3 rounded-full bg-white/50 hover:bg-white'
                            }`}
                        style={{ cursor: 'pointer' }}
                        aria-label={`Go to video ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}