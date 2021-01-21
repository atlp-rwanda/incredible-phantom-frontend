import { rest } from 'msw';

const handlers = [
    rest.get('https://incredible-phantom.herokuapp.com/api/users/', (req, res, context) => {
        return res(
          context.status(200),
          context.json({
            success: true,
            message: 'Users fetched successfully.',
            data: [
              {
                id: 2,
                firstName: "Driver",
                lastName: "Check",
                busId: null,

              },
            ],
          }),
        );
      }),
]

export {handlers,rest}