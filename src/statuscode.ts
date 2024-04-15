export function isStatusCode(value: number): boolean {
  return value >= 100 && value <= 599
}

export function isInformational(value: number): boolean {
  return value >= 100 && value <= 199
}

export function isSuccessful(value: number): boolean {
  return value >= 200 && value <= 299
}

export function isRedirection(value: number): boolean {
  return value >= 300 && value <= 399
}

export function isClientError(value: number): boolean {
  return value >= 400 && value <= 499
}

export function isServerError(value: number): boolean {
  return value >= 500 && value <= 599
}

export function reasonPhraseForStatusCode(value: number): string | undefined {
  switch (value) {
    case 100:
      return 'Continue'
    case 101:
      return 'Switching Protocols'
    case 200:
      return 'OK'
    case 201:
      return 'Created'
    case 202:
      return 'Accepted'
    case 203:
      return 'Non-Authoritative Information '
    case 204:
      return 'No Content'
    case 205:
      return 'Reset Content'
    case 206:
      return 'Partial Content'
    case 300:
      return 'Multiple Choices'
    case 301:
      return 'Moved Permanently'
    case 302:
      return 'Found'
    case 303:
      return 'See Other'
    case 304:
      return 'Not Modified'
    case 305:
      return 'Use Proxy'
    case 307:
      return 'Temporary Redirect'
    case 400:
      return 'Bad Request'
    case 401:
      return 'Unauthorized'
    case 402:
      return 'Payment Required'
    case 403:
      return 'Forbidden'
    case 404:
      return 'Not Found'
    case 405:
      return 'Method Not Allowed'
    case 406:
      return 'Not Acceptable'
    case 407:
      return 'Proxy Authentication Required '
    case 408:
      return 'Request Timeout'
    case 409:
      return 'Conflict'
    case 410:
      return 'Gone'
    case 411:
      return 'Length Required'
    case 412:
      return 'Precondition Failed'
    case 413:
      return 'Payload Too Large'
    case 414:
      return 'URI Too Long'
    case 415:
      return 'Unsupported Media Type'
    case 416:
      return 'Range Not Satisfiable'
    case 417:
      return 'Expectation Failed'
    case 426:
      return 'Upgrade Required'
    case 500:
      return 'Internal Server Error'
    case 501:
      return 'Not Implemented'
    case 502:
      return 'Bad Gateway'
    case 503:
      return 'Service Unavailable'
    case 504:
      return 'Gateway Timeout'
    case 505:
      return 'HTTP Version Not Supported'
  }
  return undefined
}
