import { APP_TEXTS } from "@/lib/constants";
import RandomCockTail from "./RandomCockTail";

export default function Home() {
   return (
      <main className="flex flex-col gap-8 row-start-2 items-center justify-start pt-4">
         <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
               {APP_TEXTS.WELCOME_TITLE}
            </h1>
            <p className="text-lg text-white max-w-2xl mx-auto">
               {APP_TEXTS.WELCOME_DESCRIPTION}
            </p>
         </div>
         <RandomCockTail />
      </main>
   );
}
