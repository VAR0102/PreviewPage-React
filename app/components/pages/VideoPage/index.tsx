"use client";
import Image from "next/image";
import SmallPlayIcon from "@/public/assets/icon/SmallPlayIcon";
import { LangSwitcher } from "../../shared/ui/LangSwitcher";
import PlayIcon from "@/public/assets/icon/PlayIcon";
import { videoLayoutData } from "@/app/_mocks/VideoLayoutData";
import StarIcon from "@/public/assets/icon/StarIcon";
import { VideoPageLogic } from "../../shared/ui/VideoLogic";
import MainIcon from "@/public/assets/icon/MainIcon";

const BorderStyle = {
  backgroundImage: `linear-gradient(white, white), linear-gradient(92.35deg, #a59fc3 -94.27%, #542b81 -42.42%, #dc379f 29.93%, #f3a199 81.78%, #faf6e8 127.6%)`,
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};
const bigCardIconStyle = {
  autopilot: " absolute mt-[-35%] left-[75%]",
  synergy: "absolute  left-[25%]",
  ask: "absolute mt-[-10%] left-[80%]",
  crm: "absolute mt-[-20%] ml-[-30%] ",
};

export default function VideoPage() {
  const {
    lang,
    activeTab,
    isPlaying,
    videoRef,
    content,
    layout,
    videoKeys,
    changeLanguage,
    isLoading,
    handleEnded,
    handleLoadedData,
    changeVideo,
    handleTogglePlay,
  } = VideoPageLogic();

  const textGradient = {
    background: "linear-gradient(95deg, #a59fc3, #542b81, #dc379f, #f3a199)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div
      className="flex w-full min-h-screen font-sans bg-center bg-cover bg-fixed text-[#3d3d3d]"
      style={{ backgroundImage: "url('/assets/image/bgImage.png')" }}
    >
      <div className="flex-1 px-[30px] py-[20px] flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="text-[28px] font-normal">{content.title}</h2>
          <div className="mt-[15px] mb-[5px]">
            <LangSwitcher lang={lang} setLang={changeLanguage} />
          </div>
        </div>
        <div
          className="relative w-full aspect-[16/8.5] rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] cursor-pointer overflow-hidden bg-black/10"
          onClick={handleTogglePlay}
        >
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
              <div className="flex justify-center items-center gap-2">
                <div className="w-12 h-12 rounded-full border-4 border-white/30 border-t-pink-500 border-r-orange-300 animate-spin" />
                <p className="text-white text-sm">Loading video...</p>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            key={`${activeTab}-${lang}`}
            className="w-full h-full object-cover block"
            playsInline
            src={content.video}
            onLoadedData={handleLoadedData}
            onEnded={handleEnded}
          />
          {!isPlaying && !isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="transition-all duration-200 hover:scale-110">
                <PlayIcon />
              </div>
            </div>
          )}
        </div>
        <section className="flex justify-between items-center mt-[5px] mb-[15px] gap-[15px] w-full">
          {videoKeys.map((key) => {
            const isActive = key === activeTab;
            return (
              <div
                key={key}
                onClick={() => changeVideo(key)}
                className="flex-1 cursor-pointer"
              >
                <div
                  className={`transition-all duration-300 rounded-sm  ${isActive ? "p-[1.5px]" : ""}`}
                  style={isActive ? BorderStyle : {}}
                >
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden">
                    <Image
                      src={videoLayoutData[key].thumb}
                      alt={key}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="transition-all duration-200 hover:scale-110">
                        <SmallPlayIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[12px] font-normal text-[#3a3a3a] mt-1 pl-[2%]">
                  {key === "crm" ? "Smart-CRM" : key}
                </p>
              </div>
            );
          })}
        </section>
      </div>

      <div className="w-px bg-[#d3b3d3]" />
      <div className="w-[600px] px-[30px] py-[20px] flex flex-col gap-6">
        <div className="flex flex-col items-center flex-1 gap-4">
          <Image
            src="/assets/image/name.png"
            alt="logo"
            width={200}
            height={50}
            className="object-contain"
          />

          <div className="w-[90%] bg-[#f9e7e7] border border-white rounded-[20px] flex justify-center">
            <Image
              src={
                lang === "pt"
                  ? "/assets/image/QrCode.png"
                  : "/assets/image/qr.png"
              }
              alt="QR"
              width={200}
              height={190}
            />
          </div>

          <h3 className="text-[30px] text-[#3d3d3d] font-light text-center">
            {content.create}
          </h3>

          <div className="w-[90%] flex justify-center">
            <div className="grid grid-cols-2  gap-3">
              <div
                className={`row-span-2 w-[240px] h-[330px] rounded-lg bg-[#f9e7e7] border border-white px-[15px] py-[15px] flex flex-col justify-between items-center shadow-sm ${
                  activeTab === "crm" || activeTab === "ask"
                    ? "order-2"
                    : "order-1"
                }`}
              >
                <h2
                  className="text-center font-semibold text-[18px] leading-tight"
                  style={textGradient}
                >
                  {content.cardTitle}
                </h2>

                <div className="relative">
                  <MainIcon className={bigCardIconStyle[activeTab]} />

                  <Image
                    src={layout.image}
                    width={140}
                    height={140}
                    alt="icon"
                  />
                </div>

                <p className="text-[11px] text-center text-[#545961]">
                  {content.cardText}
                </p>
              </div>
              <div
                className={`bg-[#f9e7e7] border border-white rounded-lg px-[20px] py-[10px] w-[235px] h-[200px] flex flex-col justify-between shadow-sm ${
                  activeTab === "crm" || activeTab === "ask"
                    ? "order-1"
                    : "order-2"
                }`}
              >
                <h4
                  className="text-[14px] font-bold text-center mt-[5px] mb-[10px] leading-tight"
                  style={textGradient}
                >
                  {content.gradient || content.gradient}
                </h4>
                <div className="flex justify-center">
                  <StarIcon />
                </div>
                <p className="text-[11px] text-center text-[#545961]">
                  {content.smallTitle}
                </p>
              </div>
              <div
                className={`bg-[#f9e7e7] border border-white rounded-lg px-[15px] py-[10px] flex flex-col justify-center items-center gap-[15px] w-[230px] h-[120px] shadow-sm ${
                  activeTab === "crm" || activeTab === "ask"
                    ? "order-3"
                    : "order-3"
                }`}
              >
                <p className="text-[14px] text-[#3d3d3d]">
                  {content.highlight || "Performance"}
                </p>
                <h4 className="text-[18px] font-bold" style={textGradient}>
                  {content.bigTitle}
                </h4>
                <p className="text-[11px] text-[#545961] text-center leading-tight">
                  {content.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
