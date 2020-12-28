import { rest } from 'msw';
import { BACKEND_URL } from '../../helpers/url';

const handlers = [
  rest.get(`${BACKEND_URL}/api/roles`, (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        success: true,
        message: 'Successfully got All roles',
        data: [
          {
            id: 518,
            role: 'test',
            createdAt: '2021-02-07T00:28:05.258Z',
            updatedAt: '2021-02-07T00:28:05.258Z',
          },
        ],
      }),
    );
  }),
  rest.post(`${BACKEND_URL}/api/roles`, (req, res, context) => {
    return res(
      context.status(201),
      context.json({
        success: true,
        message: 'Role created successfully',
        data: {
          id: 524,
          role: 'testrole',
          updatedAt: '2021-02-07T01:08:16.678Z',
          createdAt: '2021-02-07T01:08:16.678Z',
        },
      }),
    );
  }),
  rest.delete(`${BACKEND_URL}/api/roles/123`, (req, res, context) => {
    return res(
      context.status(200),
      context.json({
        success: true,
        message: 'Role deleted successfully',
        data: null,
      }),
    );
  }),
];

export { handlers, rest };
