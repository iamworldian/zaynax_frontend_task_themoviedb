import React, { useState } from "react";
import { BsPlayFill } from 'react-icons/bs';
import "./style.scss";


import VideoPopup from "@/app/components/VideoPopUp/VideoPopUp";


const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);


    return (
        <div className="md:w-full sm:w-full videosSection pt-5">
                {!loading ? (
                    <div className="md:w-full videos flex flex-col">
                        {data?.results.map((video) => (
                            <div
                                key={video.id}
                                className="md:w-full videoItem"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="md:w-96 sm:w-96 videoThumbnail">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                        
                                    />
                                    <BsPlayFill/>
                                </div>
                                <div className="videoTitle w-full">{video.name.slice(0,15)}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        
                    </div>
                )}
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;