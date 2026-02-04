"use client";

import { useEffect, useRef, useState } from "react";
import { VideoTranslation } from "@/app/_mocks/VideoTranslation";

type Lang = "en" | "pt";
type VideoKey = "autopilot" | "synergy" | "ask" | "crm";

export function VideoPageLogic() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeTab, setActiveTab] = useState<VideoKey>("autopilot");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoKeys: VideoKey[] = ["autopilot", "synergy", "ask", "crm"];
  const videoLabels: string[] = ["Autopilot", "Synergy", "Ask AI", "Smart-CRM"];

  useEffect(() => {
    const savedLang = localStorage.getItem("video-lang") as Lang | null;
    const savedVideo = localStorage.getItem("video-active") as VideoKey | null;
    if (savedLang) setLang(savedLang);
    if (savedVideo) setActiveTab(savedVideo);
    setIsReady(true);
  }, []);

  const changeLanguage = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("video-lang", newLang);
  };

  const changeVideo = (key: VideoKey) => {
    if (key === activeTab) {
      handleTogglePlay();
      return;
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveTab(key);
    localStorage.setItem("video-active", key);
    setIsPlaying(false);
    setIsLoading(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };
  const handleCanPlay = () => {
    setIsLoading(false);
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
    content,
    videoKeys,
    isLoading,
    isReady,
    handleEnded,
    handleLoadedData,
    changeLanguage,
    changeVideo,
    handleCanPlay,
    handleTogglePlay,
    videoLabels,
  };
}
