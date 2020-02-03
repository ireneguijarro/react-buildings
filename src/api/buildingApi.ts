import { BuildingEntity } from '../model/building';

export const getBuildingsCollection = (): Promise<BuildingEntity[]> => {
  const promise = new Promise<BuildingEntity[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Building 1',
          city: 'Sant Vicent del Raspeig',
          price: 102000
        },
        {
          id: 2,
          title: 'Flat 2',
          city: 'Sant Vicent del Raspeig',
          price: 98000
        },
        {
          id: 3,
          title: 'Building 3',
          city: 'Alicante',
          price: 120000
        }
      ]);
    }, 500);
  });

  return promise;
};
