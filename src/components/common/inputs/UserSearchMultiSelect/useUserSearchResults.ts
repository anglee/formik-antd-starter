import { useEffect, useState } from 'react';
import { IUser } from '../../../../types/IUser';
// import apiUserSearch from '../mockApi/api';
import apiUserSearch from '../../../../utils/api/githubApi';

interface IResponse {
  searchResults: IUser[];
  isPending: boolean;
}
const useUserSearchResults = (query: string): IResponse => {
  const [searchResults, setSearchResults] = useState<IUser[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setSearchResults(await apiUserSearch.search(query));
      setIsPending(false);
    };
    fetchData();
  }, [query]);

  return {
    searchResults,
    isPending,
  };
};

export default useUserSearchResults;
