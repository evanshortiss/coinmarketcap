/* global fetch */
import * as querystring from 'querystring'

export async function ticker (opts?: { limit?: number, convert?: string }): Object {
  const query = querystring.stringify(opts)
  const res = await fetch(`https://api.coinmarketcap.com/v1/ticker/?${query}`)
  return res.json()
}

export async function global (opts?: { convert?: string }): Object {
  const query = querystring.stringify(opts)
  const res = await fetch(`https://api.coinmarketcap.com/v1/global/?${query}`)
  return res.json()
}