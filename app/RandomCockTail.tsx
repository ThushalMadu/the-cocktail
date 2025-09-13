"use client";
import ItemCard from "@/components/ItemCard";
import { useRandomCocktails } from "@/lib/hooks/useRandomCocktails";
import { useCocktailStore } from "@/lib/store";
import { SimpleCocktail } from "@/types/cockTailType";
import Image from "next/image";
import { ToastContainer, toast, Bounce } from "react-toastify";

export default function RandomCockTail() {
   const {
      data: cocktails,
      isFetching,
      error,
      refetch,
      isRefetching,
   } = useRandomCocktails();

   const { favorites, addFavorite, isFavorite } = useCocktailStore();

   const onClickCockTailItem = (item: SimpleCocktail) => {
      addFavorite(item);
      toast("🤩 Sucessfully add your favouoirte cocktail 🍹", {
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
         <div className="flex flex-col justify-end items-end w-full max-w-7xl px-4">
            <button
               onClick={() => refetch()}
               className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
               disabled={isFetching}
            >
               <Image
                  src="/refresh.png"
                  alt="refresh Image"
                  width={25}
                  height={25}
                  priority
               />
               {isRefetching ? "Loading..." : "Refresh"}
            </button>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl px-4">
            {cocktails?.map((item) => (
               <ItemCard
                  key={item.id}
                  isFavorite={isFavorite(item.id)}
                  title={item.name}
                  description={item.instructions}
                  imageUrl={item.image}
                  details={item.category ? [item.category] : undefined}
                  onClickFavorite={() => onClickCockTailItem(item)}
               />
            ))}
         </div>
      </div>
   );
}
