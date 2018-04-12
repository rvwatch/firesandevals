export const swornData = async (members) => {

  const swornList = members.map( sworn => {
    
    const swornPromises = sworn.urls.map(async (clean) => {
      const ready  = clean.split('/');
      try{
      const response = await fetch(`http://localhost:3001/api/v1/character/${ready[5]}`);
      const returnedMember = await response.json();
      return {name: returnedMember.name, died: returnedMember.died, house: sworn.name};
      } catch (errs) {
        throw errs.message;
      }
    });
    return Promise.all(swornPromises);
  });
  return Promise.all(swornList);
};
