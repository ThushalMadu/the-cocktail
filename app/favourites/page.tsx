import { APP_TEXTS } from "@/lib/constants";
import FavouriteCockTails from "./FavouriteCockTails";

export default function Favourites() {
   return (
      <main className="flex flex-col gap-8 row-start-2 items-center justify-start pt-4">
         <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
               {APP_TEXTS.FAVORITES_PAGE_TITLE}
            </h1>
         </div>
         <FavouriteCockTails />
      </main>
   );
}
