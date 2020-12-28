import React from 'react';
import DeleteRole from '../../../components/Roles/deleteRole';
import RenderWithRedux from '../../shared/renderWithRedux';
import { fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../../__apiMocks__/rolesHandlers';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Deleting a Role', () => {
  const props = { role: 'test', roleId: '123' };
  it('It should render a confirmation modal', async () => {
    const { getByTestId, getAllByText } = RenderWithRedux(
      <DeleteRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getAllByText('Delete')[0]);
    expect(getByTestId('confirm-message')).toBeInTheDocument();
  });

  it('it should display a success message on delete', async () => {
    const { getByText } = RenderWithRedux(
      <DeleteRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getByText('Delete'));
    fireEvent.click(getByText('Yes'));
    await waitFor(() => {
      expect(getByText('Role deleted successfully')).toBeInTheDocument();
    });
  });
});
