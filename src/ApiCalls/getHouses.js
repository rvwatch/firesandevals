import {fetchData} from './fetchData';

export const getHouses = async () => {
  const fetchHouses = await fetchData();
  const newHouseList = [...fetchHouses];
  const houses = newHouseList.map(house => {
    console.log(house);
  })
}