import Image from 'next/image';

import { CharacterType } from '@/src/types/CharacterType';

type Props = {
  chatacter: CharacterType,
};

const CharacterCard: React.FC<Props> = ({ chatacter }) => {
  const altValue = chatacter.name + ' image';
  const statusStyles = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-500',
  };

  return (
    <div className='w-60 border-4 border-blue-500 rounded-2xl object-cover overflow-hidden'>
      <Image 
        className='max-w-full h-auto rounded-t-xl'
        src={chatacter.image} alt={altValue}
        height={250}
        width={250}
      />
      <div className={`${statusStyles[chatacter.status]} flex justify-center text-white font-bold mb-2`}>
        {chatacter.status}
      </div>

      <div className='text-xl font-bold mb-3 ml-2'>
        {chatacter.name}
      </div>

      <div className='ml-2'>
        Last Location:
      </div>
      <div className='text-lg font-medium mb-2 ml-2'>
        {chatacter.location.name}
      </div>
    </div>
  );
};

export default CharacterCard;
