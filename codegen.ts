import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:7000/graphql',
  overwrite: true,
  generates: {
    './gql/': {
      preset: 'client',
      plugins: ['typescript-react-apollo'],
    },
  },
}
export default config
