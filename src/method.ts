export type Method = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE'

export const Methods: Record<Lowercase<Method>, Method> = {
  get: 'GET',
  head: 'HEAD',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  connect: 'CONNECT',
  options: 'OPTIONS',
  trace: 'TRACE'
}

export function isMethod(value: unknown): value is Method {
  return typeof value === 'string' && (Object.values(Methods) as string[]).includes(value)
}
