"use client";
import PlayIcon from "@/public/assets/icon/PlayIcon";
import Image from "next/image";
import { MainPageLogic } from "@/app/components/shared/ui/MainPageLogic";
import { LangSwitcher } from "@/app/components/shared/ui/LangSwitcher";
import { useRouter } from "next/navigation";

export default function PreviewPage() {
  const router = useRouter();
  const { lang, setLang,  handleSetLang, change, videoCards } = MainPageLogic();

  const handleSelection = (id: string) => {
    localStorage.setItem("video-active", id);
    router.push("/pages/VideoPage");
  };

  return (
    <div
      className="flex w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-[#3d3d3d] font-poppins"
      style={{ backgroundImage: "url('/assets/image/bgImage.png')" }}
    >
      <div className="flex flex-1 flex-col px-8 py-8 overflow-hidden min-w-0">
        <h2
          className={`text-[28px] font-light mb-5 text-left ${lang === "pt" ? "text-[24px]" : ""}`}
        >
          <span
            style={{
              background:
                "linear-gradient(93deg, #a59fc3 -82.63%, #542b81 -36.76%, #dc379f 27.24%, #f3a199 73.1%, #faf6e8 113.63%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="font-normal"
          >

            
            {change.gradient}
          </span>
          <span>{change.title}</span>
        </h2>

        <div className="grid grid-cols-2 gap-5 w-[98%] flex-1 overflow-hidden content-start max-w-300">
          {videoCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleSelection(card.id)}
              className="flex flex-col gap-2.5 cursor-pointer group h-fit"
            >
              <div className="relative w-full rounded-[10px] shadow-md aspect-video overflow-hidden">
                <Image
                  src="/assets/image/previewImage.png"
                  alt="Preview"
                  fill
                  style={{
                    backgroundImage: `linear-gradient(white, white), linear-gradient(92.35deg, #a59fc3 -94.27%, #542b81 -42.42%, #dc379f 29.93%, #f3a199 81.78%, #faf6e8 127.6%)`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                  className="object-cover rounded-[10px] border border-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-transparent transition-all z-10">
                  <div className="opacity-85 hover:scale-110 hover:opacity-100 transition-all duration-200">
                    <PlayIcon />
                  </div>
                </div>
              </div>

              <p className="text-[#3d3d3d] text-lg font-light leading-[1.2]">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-px bg-[#d3b3d3] h-full" />

      <div className="flex flex-col items-center text-center justify-start p-8 shrink-0">
        <Image
          src="/assets/image/name.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
        />

        <div className="flex flex-col gap-5 w-[85%] my-7.5 shrink-0">
          <div className="flex items-center justify-center w-full px-22.5 py-2.5 rounded-[20px] border border-white bg-[#f9e7e7] shadow-lg">
            <Image
              src={change.qrCode}
              alt="QR code"
              width={250}
              height={250}
              className="max-w-62.5 h-62.5 object-contain"
            />
          </div>
        </div>

        <h3 className="text-3xl text-[#3d3d3d] font-normal mb-8 leading-normal">
          {change.create}
        </h3>

        <div className="flex p-2 gap-2 rounded-full  shrink-0">
          <LangSwitcher lang={lang} setLang={handleSetLang} />
        </div>
      </div>
    </div>
  );
}
