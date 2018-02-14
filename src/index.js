import codes from './codes'
import express from 'express'

const app = express()
app.use(codes)

app.get('/', async (req, res) => {
  try {
    // return res.ok({ foo: 'bar' })
    // return res.noContent({ foo: 'bar' })
    // return res.movedPermanently({ foo: 'bar' })
    // return res.badRequest({ foo: 'bar' })
    // return res.unauthorized({ foo: 'bar' })
    // return res.forbidden({ foo: 'bar' })
    // return res.notFound({ foo: 'bar' })
    // return res.unsupportedAction({ foo: 'bar' })
    return res.teapot({ foo: 'bar' })
    // return res.validationFailed({ foo: 'bar' })
    // return res.serverError({ foo: 'bar' })
  } catch (e) {
    return res.json({ error: e.message })
  }
})

const port = process.env.PORT || 3000

app.listen(port, err => {
  if (err) {
    console.error(err)
  }

  if (__DEV__) {
    // webpack flags!
    console.log('> in development')
  }

  console.log(`> listening on port ${port}`)
})
