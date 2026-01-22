"use client";
import { useState } from "react";
import PreviewPage from "./components/pages/PreviewPage";
import VideoPage from "./components/pages/VideoPage";
import "./globals.css";

export default function Home() {
  const [view, setView] = useState<"preview" | "video">("preview");
  return (
    <div>
      {view === "preview" ? (
        <PreviewPage onSelectVideo={() => setView("video")} />
      ) : (
        <VideoPage />
      )}
    </div>
  );
}
