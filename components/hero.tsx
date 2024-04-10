import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Particles } from "./particles";

const Hero = () => {
  return (
    <div className=" pt-20">

{/* particles */}
<Particles className="absolute inset-0 -z-10" />
{/* particles */}

      <div className="text-center px-8">

        <div className="mb-6" data-aos="fade-down">
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              href="https://www.linkedin.com/in/MiladJoodi"
              className=" px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-100 ease-out w-full group border-slate-100/40"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                My Social{" "}
                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>

        <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500" data-aos="fade-down">Edits Made Easy</h1>
        
        <p className="mb-8 text-lg text-zinc-300/40 font-medium" data-aos="fade-down" data-aos-delay="200">Transform you videos with retention base editing</p>

        <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:justify-center sm:flex-row sm:inline-flex">
            <Link href="#calendly" className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group" data-aos="fade-down" data-aos-delay="400">
            Book a free call {" "}
            <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 " />
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;
