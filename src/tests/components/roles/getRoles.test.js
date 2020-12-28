import React from 'react';
import Table from '../../../components/Roles/Roles';
import RenderWithRedux from '../../shared/renderWithRedux';
import { waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../../__apiMocks__/rolesHandlers';
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Roles', () => {
  it('It should render the get roles table', async () => {
    const { getByTestId } = RenderWithRedux(<Table />);
    expect(getByTestId('table')).toBeInTheDocument();
  });
  it('It should render the roles data from the API', async () => {
    const { getByTestId } = RenderWithRedux(<Table />);
    await waitFor(() => {
      expect(getByTestId('roles-data')).toBeInTheDocument();
    });
  });
});
