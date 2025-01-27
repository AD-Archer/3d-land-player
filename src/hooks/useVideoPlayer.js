import { useState } from 'react';
import { videoData } from '../data/playlists';

export function useVideoPlayer() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoData.length);
    };

    const previousVideo = () => {
        setCurrentVideoIndex((prev) => 
            (prev - 1 + videoData.length) % videoData.length
        );
    };

    const setVideoByIndex = (index) => {
        if (index >= 0 && index < videoData.length) {
            setCurrentVideoIndex(index);
        }
    };

    return {
        currentVideo: videoData[currentVideoIndex],
        currentVideoIndex,
        nextVideo,
        previousVideo,
        setVideoByIndex
    };
} 