import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
   const [debouncedValue, setDebouncedValue] = useState<T>(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedValue(value);
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay]);

   return debouncedValue;
};

export const useSearchDebounce = (searchTerm: string, delay: number = 1000) => {
   //Change this time as per your requirement <delay>
   const [isSearching, setIsSearching] = useState(false);
   const debouncedSearchTerm = useDebounce(searchTerm, delay);

   useEffect(() => {
      if (searchTerm.trim() !== "" && searchTerm !== debouncedSearchTerm) {
         setIsSearching(true);
      } else {
         setIsSearching(false);
      }
   }, [searchTerm, debouncedSearchTerm]);

   return {
      debouncedSearchTerm: searchTerm.trim() === "" ? "" : debouncedSearchTerm,
      isSearching: searchTerm.trim() !== "" && isSearching,
   };
};
