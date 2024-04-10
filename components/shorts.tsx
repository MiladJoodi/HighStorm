import YouTube from "react-youtube";
import { Separator } from "./ui/separator";

const Shorts = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
    width: "480",
    height: "270",
    className: "rounded-xl",
  };

  return (
    <div className="text-center">
      <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">
        Videos I've Edited
      </h1>

      <div className="flex items-center justify-center">
        <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
      </div>

      <div className="flex justify-center">
        <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
          {/* <YouTube videoId="Qy0C0_Ip-wo" opts={videoOptions} /> */}
          {/* <YouTube videoId="edgrM0Y-Cuk" opts={videoOptions} /> */}
          {/* <YouTube videoId="SJsC0OHejWM" opts={videoOptions} /> */}
          {/* <YouTube videoId="2mP9Id0NfrA" opts={videoOptions} /> */}
        </div>
      </div>
    </div>
  );
};

export default Shorts;
