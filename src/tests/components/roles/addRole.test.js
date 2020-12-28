import React from 'react';
import AddRole from '../../../components/Roles/addRole';
import RenderWithRedux from '../../shared/renderWithRedux';
import { fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers, rest } from '../../__apiMocks__/rolesHandlers';
import { BACKEND_URL } from '../../../helpers/url';

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('Adding A Role', () => {
  it('It should render the add role modal', async () => {
    const { getByText, getByTestId } = RenderWithRedux(<AddRole />);
    fireEvent.click(getByText('+'));
    expect(getByText('Create Role')).toBeInTheDocument();
    expect(getByTestId('form')).toBeInTheDocument();
  });

  it('it should display an error message when the input role is a number', async () => {
    const { getByText, getByTestId } = RenderWithRedux(<AddRole />);
    fireEvent.click(getByText('+'));
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
    const { getByText, getByTestId } = RenderWithRedux(<AddRole />);
    fireEvent.click(getByText('+'));
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
  it('it should display an error message when the input role already exists', async () => {
    server.use(
      rest.post(`${BACKEND_URL}/api/roles`, (req, res, context) => {
        return res(context.status(400));
      }),
    );
    const { getByText, getByTestId } = RenderWithRedux(<AddRole />);
    fireEvent.click(getByText('+'));
    const role = getByTestId('role');
    fireEvent.change(role, {
      target: {
        value: 'test',
      },
    });
    fireEvent.submit(getByTestId('form'));
    await waitFor(() => {
      expect(getByText('Role already exists')).toBeInTheDocument();
    });
  });
  it('it should display success message after role creation', async () => {
    const { getByText, getByTestId } = RenderWithRedux(<AddRole />);
    fireEvent.click(getByText('+'));
    const role = getByTestId('role');
    fireEvent.change(role, {
      target: {
        value: 'testrole',
      },
    });
    fireEvent.submit(getByTestId('form'));
    await waitFor(() => {
      expect(getByText('Role created successfully')).toBeInTheDocument();
    });
  });
});
