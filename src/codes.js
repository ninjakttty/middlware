import changeCase from 'change-case'
import httpWell from 'know-your-http-well'

// const statusWell = httpWell.statusPhrasesToCodes
const statusWell = {
  ok: 200,
  noContent: 201,
  movedPermanently: 301,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  unsupportedAction: 405,
  teapot: 418,
  validationFailed: 422,
  serverError: 500,
}

var codes = (req, res, next) => {
  for (const item in statusWell) {
    console.log('item', changeCase.camelCase(item), statusWell[item])
    const key = changeCase.camelCase(item)
    const code = statusWell[item]
    res[key] = data => {
      res.status(code).json(data)
    }
  }

  next()
}

export default codes
