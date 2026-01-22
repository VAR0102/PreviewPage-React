"use client";

import { useEffect, useRef, useState } from "react";
import { VideoTranslation } from "@/app/_mocks/VideoTranslation";
import { videoLayoutData } from "@/app/_mocks/VideoLayoutData";

type Lang = "en" | "pt";
type VideoKey = "autopilot" | "synergy" | "ask" | "crm";

export function VideoPageLogic() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeTab, setActiveTab] = useState<VideoKey>("autopilot");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const layout = videoLayoutData[activeTab];

  const videoKeys: VideoKey[] = ["autopilot", "synergy", "ask", "crm"];

  useEffect(() => {
    const savedLang = localStorage.getItem("video-lang") as Lang | null;
    const savedVideo = localStorage.getItem("video-active") as VideoKey | null;
    if (savedLang) {
      setLang(savedLang);
    }
    if (savedVideo) {
      setActiveTab(savedVideo);
    }
  }, []);

  const changeLanguage = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("video-lang", newLang);
    setIsPlaying(false);
  };

  const changeVideo = (key: VideoKey) => {
    setActiveTab(key);
    localStorage.setItem("video-active", key);
    setIsPlaying(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  const content = VideoTranslation[activeTab][lang];

  return {
    lang,
    activeTab,
    isPlaying,
    videoRef,
    layout,
    content,
    videoKeys,
    isLoading,
    handleEnded,
    handleLoadedData,
    changeLanguage,
    changeVideo,
    handleTogglePlay,
  };
}
