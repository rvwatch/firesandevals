const addSwornMembersReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SWORN_MEMBERS':
    return [...action.sworn];

  default:
    return state;
  }
};

export default addSwornMembersReducer;
