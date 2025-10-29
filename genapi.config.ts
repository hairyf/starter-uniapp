import { defineConfig } from '@genapi/core'
// create an API pipeline generator using the pipeline provided by genapi
// each pipeline exposes corresponding methods, which can be reused and reorganized
// import pipeline from '@genapi/pipeline'
import { uni } from '@genapi/presets'

const config = defineConfig({
  input: 'https://petstore.swagger.io/v2/swagger.json',
  pipeline: uni.ts,
  import: { http: './index.instance' },
  output: {
    main: 'src/apis/index.ts',
    type: 'src/apis/index.type.ts',
  },
})

export default config
