import {CREATE_USER} from "../actions/toDos";

const toDos = (state = {}, action) => {
  const { type, username } = action

  switch (type) {
    case CREATE_USER :
      return {
        ...state,
        [username]: {
          username,
          userToDos: []
        }
      }
    default :
      return state
  }
}

export default toDos
