import Image from "next/image";
import Link from "next/link";

export default function Header() {
   return (
      <header className="flex flex-row items-center justify-between h-[100px] w-full px-6">
         <div>
            <Link href="/">
               <Image
                  src="/cocktail.png"
                  alt="Cocktail Image"
                  width={75}
                  height={75}
                  priority
               />
            </Link>
         </div>
         <div className="flex flex-row gap-8 items-center sm:items-start">
            <button className="flex flex-row gap-2 items-center border-1 p-2 rounded-3xl transition-all duration-300 transform hover:-translate-y-1">
               <Image
                  src="/favorite.png"
                  alt="favorite Image"
                  width={25}
                  height={25}
                  priority
               />
               <span className="text-[16px] font-normal">
                  <Link href="/favourites">Favourites</Link>
               </span>
            </button>
         </div>
      </header>
   );
}
