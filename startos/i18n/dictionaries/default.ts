export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Spliit!': 0,
  Database: 1,
  'Waiting for PostgreSQL to be ready': 2,
  'PostgreSQL is ready': 3,
  'Web Interface': 4,
  'Spliit is ready': 5,
  'Spliit is not ready': 6,

  // interfaces.ts
  'Web UI': 7,
  'The Spliit web interface for managing shared expenses': 8,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
