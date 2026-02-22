import { getLocationInfo, getMultipleCharactersByIds } from '@/src/lib/api';
import CharacterCard from '@/src/components/CharacterCard';

const LocationPage = async ({ params }: {params: Promise<{ locationId: string }>}) => {
  const { locationId } = await params;
  const selectedLocation = await getLocationInfo(Number(locationId));

  const residentIds = selectedLocation?.residents
    .map((resident) => resident.split('/').pop()) || [];
  const residentsData = await getMultipleCharactersByIds(residentIds.join(','));

  const locationResidents = residentsData ? (
    Array.isArray(residentsData) ? residentsData : [residentsData]
  ) : [];

  if (!selectedLocation) {
    return (
      <div>Error location</div>
    );
  }

  return (
    <section>
      <div className='sticky top-4 bg-white py-4'>
        <h2 className='
          md: flex flex-row
          text-3xl
          font-semibold
          tracking-wider
          justify-center
        '>Location: <div className='text-blue-500'>{` ${selectedLocation.name}`}</div></h2>
        <p className='text-xl flex justify-center'>Dimention: {selectedLocation.dimension}</p>
        <p className='pb-4 flex justify-center'>Type: {selectedLocation.type}</p>
      </div>

      <div 
        className='
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 
          gap-6
          m-auto
        '>
        {
          locationResidents.map((resident) => {
            return (
              <div className='hover:-translate-y-2'>
                <CharacterCard key={resident.id} chatacter={resident}/>
              </div>
            );
          })
        }
      </div>
    </section>
  );
};

export default LocationPage;
