import { useCallback, useEffect, useState } from 'react';
import { Courses } from './interfaces/courses';

export interface UseCourse {
  data?: Courses[];
  loading: boolean;
  searchVal: string;
  search: (searchText: string) => void;
  removeElem: (removeID: string) => void;
}

export const useCourse = (): UseCourse => {
  const [data, setData] = useState<Courses[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchVal, setSearchVal] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/mock/courses.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json.data as Courses[]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Cache a function definition between re-renders (useCallback)
  const search = useCallback((searchText: string) => {
    setSearchVal(searchText);
  }, []);

  const filteredData =
    data?.filter((course) =>
      course.title.toLowerCase().includes(searchVal.toLowerCase()),
    ) || [];
  const removeElem = useCallback((removeID: string) => {
    setData((prevState) => prevState?.filter((item) => item.id !== removeID));
  }, []);

  return {
    data: searchVal === '' ? data : filteredData,
    loading,
    searchVal,
    search,
    removeElem,
  };
};
