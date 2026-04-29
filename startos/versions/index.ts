import { VersionGraph } from '@start9labs/start-sdk'
import { v_1_19_0_1 } from './v1.19.0.1'
import { v_1_19_0_2 } from './v1.19.0.2'

export const versionGraph = VersionGraph.of({
  current: v_1_19_0_2,
  other: [v_1_19_0_1],
})
