import React, { createContext, useState, useContext } from 'react';
import { videoData } from '../data/playlists';

const VideoContext = createContext();

export function VideoProvider({ children }) {
    const [currentVideo, setCurrentVideo] = useState(videoData[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextVideo = () => {
        const nextIndex = (currentIndex + 1) % videoData.length;
        setCurrentIndex(nextIndex);
        setCurrentVideo(videoData[nextIndex]);
    };

    const previousVideo = () => {
        const prevIndex = (currentIndex - 1 + videoData.length) % videoData.length;
        setCurrentIndex(prevIndex);
        setCurrentVideo(videoData[prevIndex]);
    };

    const setVideoByIndex = (index) => {
        setCurrentIndex(index);
        setCurrentVideo(videoData[index]);
    };

    const value = {
        currentVideo,
        setCurrentVideo,
        nextVideo,
        previousVideo,
        setVideoByIndex
    };

    return (
        <VideoContext.Provider value={value}>
            {children}
        </VideoContext.Provider>
    );
}

export function useVideoContext() {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideoContext must be used within a VideoProvider');
    }
    return context;
} 