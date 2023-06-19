import axios from 'axios';
import useSWR from 'swr';

export async function fetchWord([url, word]) {
  try {
    const { data } = await axios.get(`${url}${word}`);

    if (data) {
      const definitions = Object.values(data).map(
        ({ word, meanings, phonetic, phonetics, sourceUrls }) => {
          const validPhoneticAudio = phonetics.find((phonetic) => phonetic.audio).audio;
          const sourceUrl = sourceUrls.length > 0 ? sourceUrls[0] : null;

          return {
            word,
            meanings,
            phonetic,
            validPhoneticAudio,
            sourceUrl,
          };
        }
      );

      return definitions[0];
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
