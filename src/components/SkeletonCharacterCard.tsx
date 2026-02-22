const SkeletonCharacterCard = () => {
  return (
    <div className='w-60 border-4 border-gray-300 rounded-2xl overflow-hidden animate-pulse'>
      
      <div className='bg-gray-300 w-full h-60' />

      <div className='p-4 space-y-4'>
 
        <div className='h-6 bg-gray-300 rounded-md w-3/4' />

        <div className='space-y-2'>
          <div className='h-4 bg-gray-200 rounded-md w-1/2' />
          <div className='h-4 bg-gray-200 rounded-md w-5/6' />
        </div>

        <div className='h-8 bg-gray-200 rounded-xl w-full mt-2' />
      </div>
    </div>
  );
};

export default SkeletonCharacterCard;
