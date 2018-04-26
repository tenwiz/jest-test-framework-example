import configureStore from 'redux-mock-store'

import * as toDosActions from '../../actions/toDos'

import { mock_todo } from '../../store/mock_data'

import toDOs from '../toDos'

const middlewares = []
const mockStore = configureStore( middlewares )

const initialState = {}
const store = mockStore( initialState )

beforeEach( () => {
  store.clearActions();
} );

test( 'Select toDOs reducer', () => {
  const { username } = mock_todo
  const action = toDosActions.createUser( username )

  expect( toDOs( undefined, action ) ).toMatchSnapshot();
} );
