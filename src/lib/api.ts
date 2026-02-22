import { APIResponseType, CharacterType, EpisodeType, LocationType } from "../types";

const BASE_API_URL = 'https://rickandmortyapi.com/api';

async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json() as T;
  } catch (error) {
    console.log('API fetch error: ', error);

    return null;
  }
};

export async function getCharacters(
  page = 1, 
  name = '', 
  status = '',
  species = '',
  gender = '',
  ): Promise<APIResponseType<CharacterType> | null> {
  let characterEndpoint = `character/?page=${page}`;

  if (name) {
    characterEndpoint += `&name=${name}`;
  }

  if (status) {
    characterEndpoint += `&status=${status}`;
  }

  if (species) {
    characterEndpoint += `&species=${species}`;
  }

  if (gender) {
    characterEndpoint += `&gender=${gender}`;
  }

  return fetchData<APIResponseType<CharacterType>>(characterEndpoint);
};

export async function getEpisodes(page = 1): Promise<EpisodeType[] | null> {
  let allEpisodes: EpisodeType[] = [];
  let currentPage: number | null = 1;

  while (currentPage !== null) {
    let apiResponse = await fetchData<APIResponseType<EpisodeType>>(`episode/?page=${currentPage}`);

    if (apiResponse && apiResponse.results) {
      allEpisodes = [...allEpisodes, ...apiResponse.results];

      if (apiResponse.info.next) {
        currentPage++;
      } else {
        currentPage = null;
      }
    } else {
      break;
    }
  }

  return allEpisodes.length > 0 ? allEpisodes : null;
};

export async function getLocations(page = 1): Promise<LocationType[] | null> {
  let allLocation: LocationType[] = [];
  let currentPage: number | null = 1;

  while (currentPage !== null) {
    let apiResponse = await fetchData<APIResponseType<LocationType>>(`location/?page=${currentPage}`);

    if (apiResponse && apiResponse.results) {
      allLocation = [...allLocation, ...apiResponse.results];

      if (apiResponse.info.next) {
        currentPage++;
      } else {
        currentPage = null;
      }
    } else {
      break;
    }
  }

  return allLocation.length > 0 ? allLocation : null;
};

export async function getCharacterInfo(id: number): Promise<CharacterType | null> {
  return fetchData<CharacterType>(`character/${id}`);
};

export async function getMultipleCharactersByIds(ids: string):
  Promise<CharacterType[] | CharacterType | null> {
  return fetchData<CharacterType[] | CharacterType>(`character/${ids}`);
};

export async function getEpisodeInfo(id: number): Promise<EpisodeType | null> {
  return fetchData<EpisodeType>(`episode/${id}`);
};

export async function getLocationInfo(id: number): Promise<LocationType | null> {
  return fetchData<LocationType>(`location/${id}`);
};
