import { useVideoContext } from '../contexts/VideoContext';
import { videoData } from '../data/playlists';

export function useVideoPlayer() {
    const context = useVideoContext();
    
    const setCurrentVideo = (playlist) => {
        const index = videoData.findIndex(video => video.url === playlist.url);
        if (index !== -1) {
            context.setVideoByIndex(index);
        }
    };

    return {
        currentVideo: context.currentVideo,
        setCurrentVideo,
        nextVideo: context.nextVideo,
        previousVideo: context.previousVideo
    };
} 