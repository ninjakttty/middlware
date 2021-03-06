const httpWell = require('know-your-http-well')
const changeCase = require('change-case')
const jsonfile = require('jsonfile')

var file = './src/data.json'
// var obj = [{name: 'JPsdf'}]

const code = [ 201, 202, 204, 205, 301, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 413, 415, 500, 501, 502, 503, 511,]
statusWell = httpWell.statusPhrasesToCodes,
phraseWell = httpWell.statusCodesToPhrases;



const arr = code.map(num => ({
  funcName: changeCase.camelCase(phraseWell[num]),
  statusCode: num,
  // message: phraseWell[num]
}));

// console.log(phraseWell[511])
console.log(arr)
jsonfile.writeFile(file, arr, (err) => console.error(err))


const y = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Time-out",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "511": "Network Authentication Required"
}