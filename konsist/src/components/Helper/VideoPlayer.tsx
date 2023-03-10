import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type VideoPlayerProps = {
  src: string;
}


function VideoPlayer({ src }:VideoPlayerProps) {
  const videoRef = useRef(null);

  React.useEffect(() => {
    let video:HTMLVideoElement | null = videoRef.current;
    let interval:any;

    const handleTimeUpdate = () => {
      if(video){
        if (video?.currentTime >= video?.duration) {
          video.currentTime = 0;
          video.play();
        }
      }
    };

    const handleIntersection = (entries:any) => {
      entries.forEach((entry:any) => {
        if (entry.target === videoRef.current) {
          if (entry.isIntersecting) {
            video?.play();
            // interval = setInterval(handleTimeUpdate, 100);
          } else {
            video?.pause();
            if(video)
            video.currentTime = 0;
            clearInterval(interval);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 1,
    });

    if(video)
    observer.observe(video);

    return () => {
      if(video){
        observer.unobserve(video);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        clearInterval(interval);
      } 
    };
  }, [src]);

  return (
    <video ref={videoRef} src={src} loop muted />
  );
}

export default VideoPlayer;
