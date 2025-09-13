import { APP_TEXTS } from "@/lib/constants";

const Loader = ({ showResults }: { showResults: boolean }) => {
   return (
      <div className="col-span-full flex justify-center items-center py-12">
         <div className="flex flex-col items-center gap-4">
            <div className="animate-spin h-8 w-8 border-4 border-orange-500 border-t-transparent rounded-full"></div>
            <p className="text-gray-600">
               {showResults
                  ? APP_TEXTS.SEARCHING_COCKTAILS
                  : APP_TEXTS.LOADING_COCKTAILS}
            </p>
         </div>
      </div>
   );
};

export default Loader;
