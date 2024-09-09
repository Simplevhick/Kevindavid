import ReactPlayer from "react-player";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[38px] h-[38px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-[#74bfc622]">
            <Image src="/assets/play.svg" width={22} height={22} alt="" />
          </button>
          <span className="text-lg font-[#22e232]">Watch Video</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={"https://www.youtube.com/watch?v=i_YITJHpa_g"}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
