import axios from 'axios';
import useSWR from 'swr';

export async function fetchWord([url, word]) {
  try {
    const { data } = await axios.get(`${url}${word}`);

    if (data) {
      const definitions = Object.values(data).map((definition) => {
        return definition;
      });

      return definitions;
    }

    throw new Error('Could not retrieve events');
  } catch (e) {
    throw e;
  }
}

function useWord(shouldFetch, word) {
  const { data, error, isLoading } = useSWR(
    shouldFetch ? ['https://api.dictionaryapi.dev/api/v2/entries/en/', word] : null,
    fetchWord
  );

  return {
    data,
    isLoading,
    error,
  };
}

export default useWord;
