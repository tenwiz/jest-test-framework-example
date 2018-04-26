import configureStore from 'redux-mock-store'

import * as toDosActions from '../toDos'

import { mock_todo } from '../../store/mock_data'

const middlewares = []
const mockStore = configureStore( middlewares )

const initialState = {}
const store = mockStore( initialState )

beforeEach( () => {
  store.clearActions();
} );

afterEach( () => {
  expect( store.getActions() ).toMatchSnapshot();
} )

test( 'Dispatch createUser action', () => {
  const { username } = mock_todo

  store.dispatch( toDosActions.createUser( username ) );
} );
