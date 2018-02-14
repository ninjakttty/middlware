## Install it and run:

```bash
npm install
npm run dev
```

## How to use

```js
res.ok({ foo: 'bar' }) // code 200
res.noContent({ foo: 'bar' }) // code 201
res.movedPermanently({ foo: 'bar' }) // code 301
res.badRequest({ foo: 'bar' }) // code 400
res.unauthorized({ foo: 'bar' }) // code 401
res.forbidden({ foo: 'bar' }) // code 403
res.notFound({ foo: 'bar' }) // code 404
res.unsupportedAction({ foo: 'bar' }) // code 405
res.teapot({ foo: 'bar' }) // code 418
res.validationFailed({ foo: 'bar' }) // code 422
res.serverError({ foo: 'bar' }) // code 500
```
