import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'spliit',
  title: 'Spliit',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/spliit-startos',
  upstreamRepo: 'https://github.com/spliit-app/spliit',
  marketingUrl: 'https://spliit.app/',
  donationUrl: 'https://donate.stripe.com/28o3eh96G7hH8k89Ba',
  description: { short, long },
  volumes: ['startos', 'db'],
  images: {
    main: {
      source: {
        dockerTag: 'ghcr.io/spliit-app/spliit:1.19.0',
      },
      arch: ['x86_64', 'aarch64'],
    },
    postgres: {
      source: {
        dockerTag: 'postgres:16-alpine',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
