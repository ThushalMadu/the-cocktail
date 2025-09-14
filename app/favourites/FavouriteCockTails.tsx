"use client";
import FavoriteItemCard from "@/components/FavoriteItemCard";
import { APP_TEXTS } from "@/lib/constants";
import { useCocktailStore } from "@/lib/store";
import { SimpleCocktail } from "@/types/cockTailType";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function FavouriteCockTails() {
   const { favorites, removeFavorite } = useCocktailStore();

   const onClickRemoveFavorite = (item: SimpleCocktail) => {
      removeFavorite(item.id);
      toast(APP_TEXTS.SUCCESS_REMOVE_MESSAGE, {
         position: "bottom-right",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: false,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
         transition: Bounce,
      });
   };

   return (
      <div className="gap-8 flex flex-col items-center w-full">
         <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
         />
         {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
               <p className="text-gray-600 text-lg mb-4">
                  {APP_TEXTS.NO_FAVORITES_MESSAGE}
               </p>
            </div>
         ) : (
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
         )}
      </div>
   );
}
