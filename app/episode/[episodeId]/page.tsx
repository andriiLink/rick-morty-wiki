import CharacterCard from '@/src/components/CharacterCard';

import { getEpisodeInfo, getMultipleCharactersByIds } from '@/src/lib/api';
import Link from 'next/link';

const EpisodePage = async ({ params }: { params: Promise<{ episodeId: string }> }) => {
  const { episodeId } = await params;
  const selectedEpisode = await getEpisodeInfo(Number(episodeId));

  const characterIds = selectedEpisode?.characters
    .map((link) => link.split('/').pop()) || [];

  const charactersData = await getMultipleCharactersByIds(characterIds.join(','));
  const episodeCharacters = charactersData ? (
    Array.isArray(charactersData) ? charactersData : [charactersData]
  ) : [];

  if (!selectedEpisode) {
    return (
      <div>Error!</div>
    );
  }

  return (
    <section>
      <div className='sticky top-4 bg-white py-5'>
        <h2 className='
          flex flex-row
          text-3xl
          font-semibold
          tracking-wider
          justify-center
          pb-2
        '>Episode name: <div className='
            text-blue-500
          '>{selectedEpisode.name}</div></h2>
        <div className='text-xl flex justify-center'>
          Air Date: {selectedEpisode.air_date}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 m-auto'>
        {
          episodeCharacters.length > 0 ? (
            episodeCharacters.map((character) => {
              return (
                <Link
                  key={character.id}
                  className='hover:-translate-y-2'
                  href={`/characters/${character.id}`}
                >
                  <CharacterCard character={character} />
                </Link>
              );
            })
          ) : (
            <div>Characters was not found!</div>
          )
        }
      </div>
    </section>
  );
};

export default EpisodePage;
