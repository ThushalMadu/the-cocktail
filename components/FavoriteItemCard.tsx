import { APP_TEXTS } from "@/lib/constants";
import Image from "next/image";

type ItemCardProps = {
   title: string;
   description: string;
   imageUrl: string;
   details?: string[];
   onClickRemoveFavorite: () => void;
};

export default function ItemCard({
   title,
   description,
   imageUrl,
   onClickRemoveFavorite,
}: ItemCardProps) {
   return (
      <div className="overflow-hidden rounded-2xl shadow-lg bg-white h-[500px] flex flex-col">
         <div className="h-48 w-full relative overflow-hidden">
            <Image
               src={imageUrl}
               alt={title}
               fill
               className="object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
         </div>
         <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
               {title}
            </h3>
            <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-4 overflow-hidden">
               {description}
            </p>
            <button
               onClick={onClickRemoveFavorite}
               className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg"
            >
               {APP_TEXTS.REMOVE_FROM_FAVORITE}
            </button>
         </div>
      </div>
   );
}
