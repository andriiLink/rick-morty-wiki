import { ItemSelectorDropdown } from '@/src/components/ItemSelectorDropdown';
import { getEpisodes } from '@/src/lib/api';

const EpisodeLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const episodeListFromAPI = await getEpisodes();
  const episodes = episodeListFromAPI || [];
  const episodeList = episodes.map((episode) => {
    return (
      {
        id: episode.id,
        name: episode.name,
      }
    );
  });

  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full gap-6 p-4'>
      <aside className='w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4'>
        <ItemSelectorDropdown
          itemList={episodeList}
          routerDirection='episode'
          paramName='episodeId'
          label='Select the episode...'
        />
      </aside>

      <div className='mx-auto'>{children}</div>
    </div>
  );
};

export default EpisodeLayout;
