"use client";
import FavoriteItemCard from "@/components/FavoriteItemCard";
import { useCocktailStore } from "@/lib/store";
import { SimpleCocktail } from "@/types/cockTailType";

export default function FavouriteCockTails() {
   const { favorites, removeFavorite } = useCocktailStore();

   const onClickRemoveFavorite = (item: SimpleCocktail) => {
      removeFavorite(item.id);
   };

   return (
      <div className="gap-8 flex flex-col items-center w-full">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl px-4">
            {favorites.map((item) => (
               <FavoriteItemCard
                  key={item.id}
                  title={item.name}
                  description={item.instructions}
                  imageUrl={item.image}
                  details={item.category ? [item.category] : undefined}
                  onClickRemoveFavorite={() => onClickRemoveFavorite(item)}
               />
            ))}
         </div>
      </div>
   );
}
