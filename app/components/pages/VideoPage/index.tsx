"use client";
import  { useRef, useState } from "react";
import Image from "next/image";
import SmallPlayIcon from "@/public/assets/icon/SmallPlayIcon";
import { LangSwitcher } from "../../shared/ui/LangSwitcher";
import StarIcon from "@/public/assets/icon/StarIcon";
import PlayIcon from "@/public/assets/icon/PlayIcon";

const BorderStyle = {
  backgroundImage: `linear-gradient(white, white), linear-gradient(92.35deg, #a59fc3 -94.27%, #542b81 -42.42%, #dc379f 29.93%, #f3a199 81.78%, #faf6e8 127.6%)`,
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",
};
const videoData = {
  autopilot: {
    title: "Autopilot",
    video:
      "https://pub-b944cbd61027465d8855762e66f17d15.r2.dev/chat-videos-updated/English/Symbiotic%20Broker.mov",
    cardTitle: "Advanced Negotiation Engine",
    cardText:
      "Never type again - Let AI handle client conversation automatically",
    gradientText: "Smart Suggestion Engine",
    image: "/assets/image/brain.png",
    stat: "Up to 90%",
  },
  synergy: {
    title: "Synergy 75x5",
    video:
      "https://pub-b944cbd61027465d8855762e66f17d15.r2.dev/chat-videos-updated/English/Synergy%2075x5%E2%84%A2.mov",
    cardTitle: "Real-Time Suggestion Model",
    cardText:
      "Adapts to price, emotion, and context — helping realtors close faster.",
    gradientText: "75 Paths Engine",
    image: "/assets/image/light.png",
    stat: "Up to 3X",
  },

  ask: {
    title: "Ask ORACIA",
    create: "Create your AI extension",
    image: "/assets/image/question.png",
    cardTitle: "Remove Any Doubt",
    cardText:
      "Instant answers on listings, prices, or property details — right when you need them.",
    gradient: "Deep Context",
    smallTitle:
      "Identifies tone, urgency, and emotion — developing a humanized understanding.",
    highlight: "Privacy First",
    bigTitle: "End-to-End",
    description: "Your workspace, your control",
  },
  crm: {
    title: "Smart-CRM",
    create: "Create your AI extension",
    image: "/assets/image/smart.png",
    cardTitle: "Smart CRM",
    cardText: "Automatic updating in your sales funnel, lead status and notes",
    gradient: "Automatic Updatest",
    smallTitle: "“Conversations — contacts, deals, notes—instantly.“",
    highlight: "Performance",
    bigTitle: "Up to 12 x",
    description: "More agility and precision in data filling",
  },
};

export default function VideoPage() {
  const [activeTab, setActiveTab] = useState<"autopilot" | "synergy">(
    "autopilot",
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const content = videoData[activeTab];

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
          <h2 className="text-[28px]  font-normal">{content.title}</h2>
          <div className="inline-flex justify-center items-center p-1 pb-0 shrink rounded-full gap-2 mt-[15px] mb-[5px]">
            <LangSwitcher
              lang={"en"}
              setLang={function (lang: "en" | "pt"): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>

        <div
          className="relative w-full aspect-[16/8.5] max-h-[1300px] rounded-xl 
shadow-[0_8px_25px_rgba(0,0,0,0.25)] cursor-pointer overflow-hidden"
          onClick={handleTogglePlay}
        >
          <video
            ref={videoRef}
            key={content.video}
            className="w-full h-full object-cover block"
            playsInline
            src={content.video}
            onEnded={() => setIsPlaying(false)}
          />

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center  z-10">
              <div className="opacity-85 transition-all duration-200 hover:scale-110 hover:opacity-100">
                <PlayIcon />
              </div>
            </div>
          )}
        </div>

        <section className="flex justify-between items-center mt-[15px] mb-[15px] gap-[15px] w-full">
          {Object.keys(videoData).map((key) => {
            const isActive = activeTab === key;
            return (
              <div
                key={key}
                onClick={() => setActiveTab(key as "autopilot" | "synergy")}
                className="relative cursor-pointer flex-1 min-w-0 group"
              >
                <div
                  className={`transition-all duration-300  ${
                    isActive ? "p-[1.5px]" : ""
                  }`}
                  style={isActive ? BorderStyle : {}}
                >
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/assets/image/new.png"
                      alt={key}
                      fill
                      className="object-cover w-full"
                      priority
                    />

                    <div className="absolute inset-0 flex items-center justify-center  hover:bg-transparent transition-colors z-10">
                      <div className="transition-all duration-200 hover:scale-110">
                        <SmallPlayIcon />
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[12px] font-normal text-[#3a3a3a] mt-1 pl-[2%] capitalize">
                  {key === "crm" ? "Smart-CRM" : key}
                </p>
              </div>
            );
          })}
        </section>
      </div>

      <div className="w-px bg-[#d3b3d3]" />

      <div className="w-[600px] px-[30px] py-[20px] flex flex-col gap-6">
        <div className="flex flex-col items-center flex-1 gap-4 overflow-hidden">
          <Image
            src="/assets/image/name.png"
            alt="logo"
            className=" object-contain"
            width={200}
            height={200}
          />

          <div className="w-[90%] bg-[#f9e7e7] border border-white rounded-[20px] flex justify-center ">
            <Image
              src="/assets/image/qr.png"
              alt="QR"
              className=" w-[220px] h-[200px]"
              width={300}
              height={200}
            />
          </div>

          <h3 className="text-[30px] color-[#3d3d3d] font-light text-center">
            Create your AI extension
          </h3>

          <div className="w-[90%] flex justify-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="row-span-2 w-[240px] h-[330px] rounded-lg bg-[#f9e7e7] relative border border-white px-[15px] py-[15px] flex flex-col justify-between items-center shadow-sm">
                <h2
                  className="text-center font-semibold text-[18px]"
                  style={textGradient}
                >
                  {content.cardTitle}
                </h2>
                <Image
                  src={content.image}
                  width={200}
                  height={200}
                  alt="brain"
                  className="w-[65%] object-contain py-4"
                />
                <p className="text-[11px] text-center text-[#545961]">
                  {content.cardText}
                </p>
              </div>

              <div className="bg-[#f9e7e7] relative border border-white rounded-lg px-[15px] py-[10px] w-[235px] h-[200px] flex flex-col justify-between shadow-sm">
                <h4
                  className="text-[14px] font-bold text-center mt-[5px] mb-[10px] leading-tight"
                  style={textGradient}
                >
                  {content.gradientText}
                </h4>
                <div className="flex justify-center">
                  <StarIcon />
                </div>
                <p className="text-[11px] text-center text-[#545961]">
                  Predictive property suggestion based on client intent
                </p>
              </div>

              <div className="bg-[#f9e7e7] border border-white rounded-lg relative px-[15px] py-[10px] flex flex-col justify-center items-center gap-[17px] w-[230px] h-[120px] shadow-sm">
                <p className="text-[14px] text-[#3d3d3d]">Performance</p>
                <h4 className="text-[18px] font-bold" style={textGradient}>
                  {content.stat}
                </h4>
                <p className="text-[11px] text-[#545961]">
                  Faster response time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
