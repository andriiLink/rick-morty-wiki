import { getCharacterInfo } from '@/src/lib/api';
import Image from 'next/image';

const CharacterInfo = async ({ params }: {params: Promise<{characterId: string}>}) => {
  const { characterId } = await params;
  console.log(characterId);
  const selectedCharacter = await getCharacterInfo(Number(characterId));
  const altText = `${selectedCharacter?.name} picture`;

  if (!selectedCharacter) {
    return (
      <div>Error!</div>
    );
  }

  return (
    <div className='flex items-center justify-center flex-col m-auto mt-6'>
      <div className='text-2xl font-bold mb-2'>{selectedCharacter.name}</div>
 
      <div className='flex flex-col lg:flex-row gap-4'>
        <div>
          <Image
            src={selectedCharacter.image}
            alt={altText}
            height={300}
            width={300}
            className='rounded-t-2xl'
          />
          <div className='bg-green-500 flex justify-center text-white font-bold rounded-b-2xl'>
            {selectedCharacter.status}
          </div>
        </div>
        
        <div>
          <div className='flex flex-row gap-1'>
            <div className='font-semibold'>Gender: </div>
            <div>{selectedCharacter.gender}</div>
          </div>

          <div className='flex flex-row gap-1'>
            <div className='font-semibold'>Location: </div>
            <div>{selectedCharacter.location.name}</div>
          </div>

          <div className='flex flex-row gap-1'>
            <div className='font-semibold'>Origin: </div>
            <div>{selectedCharacter.origin.name}</div>
          </div>

          <div className='flex flex-row gap-1'>
            <div className='font-semibold'>Species: </div>
            <div>{selectedCharacter.species}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
