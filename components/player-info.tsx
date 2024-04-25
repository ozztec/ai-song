import { cn } from "@/lib/utils";
import { Music } from "@prisma/client";
import Image from "next/image";

type Props = {
  music: Music;
  className?: string;
};

const PlayerInfo = ({ music, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src={music.coverImage}
        alt="music cover"
        width={60}
        height={60}
        className="rounded-md"
      />
      <div className="flex flex-col h-full justify-around">
        <p className="text-sm font-bold line-clamp-2 tracking-tight">
          {music.name}
        </p>
        <p className="text-sm opacity-50 line-clamp-1">{music.artist}</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
