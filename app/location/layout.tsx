import { ItemSelectorDropdown } from '@/src/components/ItemSelectorDropdown';
import { getLocations } from '@/src/lib/api';

const LocationLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const loctionListFromAPI = await getLocations();
  const locations = loctionListFromAPI || [];
  const locaitonList = locations.map((location) => {
    return (
      {
        id: location.id,
        name: location.name,
      }
    );
  });

  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full gap-6 p-4'>
      <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
        <ItemSelectorDropdown
          itemList={locaitonList}
          routerDirection='location'
          paramName='locationId'
          label='select location'
        />
      </aside>

      <div className='mx-auto'>{children}</div>
    </div>
  );
};

export default LocationLayout;
