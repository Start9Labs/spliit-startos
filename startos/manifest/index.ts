import { setupManifest } from '@start9labs/start-sdk'
import { short, long, alertUninstall } from './i18n'

export const manifest = setupManifest({
  id: 'spliit',
  title: 'Spliit',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/spliit-startos',
  upstreamRepo: 'https://github.com/spliit-app/spliit',
  supportSite: 'https://github.com/spliit-app/spliit/issues',
  marketingSite: 'https://spliit.app/',
  donationUrl: 'https://donate.stripe.com/28o3eh96G7hH8k89Ba',
  docsUrl: 'https://github.com/spliit-app/spliit#readme',
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: {
        dockerBuild: {
          workdir: './spliit',
        },
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
  alerts: {
    install: null,
    update: null,
    uninstall: alertUninstall,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
