import Image from 'next/image';

import { CharacterType } from '@/src/types/CharacterType';

type Props = {
  character: CharacterType,
};

const CharacterCard: React.FC<Props> = ({ character }) => {
  const altValue = character.name + ' image';
  const statusStyles = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500',
  };

  return (
    <div className='w-60 border-4 border-blue-500 rounded-2xl object-cover overflow-hidden'>
      <Image 
        className='max-w-full h-auto rounded-t-xl'
        src={character.image} alt={altValue}
        height={250}
        width={250}
      />
      <div className={`${statusStyles[character.status]} flex justify-center text-white font-bold mb-2`}>
        {character.status}
      </div>

      <div className='text-xl font-bold mb-3 ml-2'>
        {character.name}
      </div>

      <div className='ml-2'>
        Last Location:
      </div>
      <div className='text-lg font-medium mb-2 ml-2'>
        {character.location.name}
      </div>
    </div>
  );
};

export default CharacterCard;
