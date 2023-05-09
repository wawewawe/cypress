import type playwright from 'playwright-webkit'
import { domainMatch } from 'tough-cookie'

type ResourceType = 'document' | 'fetch' | 'xhr' | 'websocket' | 'stylesheet' | 'script' | 'image' | 'font' | 'cspviolationreport' | 'ping' | 'manifest' | 'other'

export type CyCookie = Pick<chrome.cookies.Cookie, 'name' | 'value' | 'expirationDate' | 'hostOnly' | 'domain' | 'path' | 'secure' | 'httpOnly'> & {
  // use `undefined` instead of `unspecified`
  sameSite?: 'no_restriction' | 'lax' | 'strict'
}

// Cypress uses the webextension-style filtering
// https://developer.chrome.com/extensions/cookies#method-getAll
export type CyCookieFilter = chrome.cookies.GetAllDetails

export const cookieMatches = (cookie: CyCookie | playwright.Cookie, filter: CyCookieFilter) => {
  if (filter.domain && !domainMatch(filter.domain, cookie.domain)) {
    return false
  }

  if (filter.path && filter.path !== cookie.path) {
    return false
  }

  if (filter.name && filter.name !== cookie.name) {
    return false
  }

  return true
}

// the intersection of what's valid in CDP and what's valid in FFCDP
// Firefox: https://searchfox.org/mozilla-central/rev/98a9257ca2847fad9a19631ac76199474516b31e/remote/cdp/domains/parent/Network.jsm#22
// CDP: https://chromedevtools.github.io/devtools-protocol/tot/Network/#type-ResourceType
const validResourceTypes: ResourceType[] = ['document', 'fetch', 'xhr', 'websocket', 'stylesheet', 'script', 'image', 'font', 'cspviolationreport', 'ping', 'manifest', 'other']
const ffToStandardResourceTypeMap: { [ff: string]: ResourceType } = {
  'img': 'image',
  'csp': 'cspviolationreport',
  'webmanifest': 'manifest',
  'xmlhttprequest': 'xhr',
  'main_frame': 'document',
  'sub_frame': 'document',
}

export const normalizeResourceType = (resourceType: string | undefined): ResourceType => {
  resourceType = resourceType ? resourceType.toLowerCase() : 'unknown'
  if (validResourceTypes.includes(resourceType as ResourceType)) {
    return resourceType as ResourceType
  }

  // TODO: do we need this line?
  // if (resourceType === 'img') {
  //   return 'image'
  // }

  return ffToStandardResourceTypeMap[resourceType] || 'other'
}
