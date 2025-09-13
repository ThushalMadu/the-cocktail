import RandomCockTail from "./RandomCockTail";

export default function Home() {
   return (
      <main className="flex flex-col gap-8 row-start-2 items-center justify-start pt-4">
         <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
               Welcome to TheCocktailDB
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
               An open, crowd-sourced database of drinks and cocktails from
               around the world. We also offer a free cocktail API for anyone
               wanting to use it.
            </p>
         </div>
         <RandomCockTail />
      </main>
   );
}
