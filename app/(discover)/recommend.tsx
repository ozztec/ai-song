import { getTrending } from "@/actions";
import { AlbumArtwork } from "@/components/album-artwork";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Recommend = async () => {
  const trending = await getTrending();
  return (
    <div className="flex flex-col">
      <ScrollArea>
        <div className="flex space-x-4 pb-4">
          {trending.slice(0, 5).map((item) => {
            return (
              <AlbumArtwork
                key={item.id}
                album={item}
                className="w-[250px]"
                aspectRatio="portrait"
                width={250}
                height={300}
              />
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Recommend;
