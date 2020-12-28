import React from 'react';
import EditRole from '../../../components/Roles/editRole';
import RenderWithRedux from '../../shared/renderWithRedux';
import { fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers, rest } from '../../__apiMocks__/rolesHandlers';
import { BACKEND_URL } from '../../../helpers/url';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Editing A Role', () => {
  const props = { role: 'test', roleId: '123' };
  it('It should render the Edit role modal', async () => {
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getByText('Edit'));
    expect(getByText('Edit role')).toBeInTheDocument();
    expect(getByTestId('form')).toBeInTheDocument();
  });

  it('it should display an error message when the input role is a number', async () => {
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getByText('Edit'));
    const role = getByTestId('role');
    fireEvent.change(role, {
      target: {
        value: '2',
      },
    });
    fireEvent.submit(getByTestId('form'));
    await waitFor(() => {
      expect(getByText('Numbers cannot be roles')).toBeInTheDocument();
    });
  });

  it('it should display an error message when the input is short', async () => {
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getByText('Edit'));
    const role = getByTestId('role');
    fireEvent.change(role, {
      target: {
        value: 'ab',
      },
    });
    fireEvent.submit(getByTestId('form'));
    await waitFor(() => {
      expect(getByText('That cannot be a role')).toBeInTheDocument();
    });
  });
  it('it should display success message on editing a role', async () => {
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getByText('Edit'));
    const role = getByTestId('role');
    fireEvent.change(role, {
      target: {
        value: 'testrole',
      },
    });
    fireEvent.submit(getByTestId('form'));
    await waitFor(() => {
      expect(getByText('Role updated successfully')).toBeInTheDocument();
    });
  });
  it('it should display an error message when editing a role', async () => {
    server.use(
      rest.patch(
        `${BACKEND_URL}/api/roles/${props.roleId}`,
        (req, res, context) => {
          return res(context.status(400));
        },
      ),
    );
    const { getByText, getByTestId } = RenderWithRedux(
      <EditRole role={props.role} roleId={props.roleId} />,
    );
    fireEvent.click(getByText('Edit'));
    const role = getByTestId('role');
    fireEvent.change(role, {
      target: {
        value: 'testrole',
      },
    });
    fireEvent.submit(getByTestId('form'));
    await waitFor(() => {
      expect(getByText('There was an error while editing')).toBeInTheDocument();
    });
  });
});
