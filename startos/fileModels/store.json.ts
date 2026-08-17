import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  // Both the app's database credential and the credential backups.ts hands to
  // pg_dump. Moving or regenerating it breaks the backup as well as main.
  postgresPassword: z.string().optional().catch(undefined),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.startos, subpath: 'store.json' },
  shape,
)
