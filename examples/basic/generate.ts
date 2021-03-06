import { resolve as r } from 'path'
import { generateMarkdownFile } from '../../src'

// The following script will generate the `./example.md` file

export default () => generateMarkdownFile({
  // Path to apiDoc data directory
  apiDocPath: r(__dirname, '..', '_apiDocData'),
  // Output path
  output: r(__dirname, 'example.md'),
  // Template path
  template: r(__dirname, '..', '..', 'templates', 'default.md'),
  // File to preprend documentation with
  prepend: null,
  // Should the documentation be generated one file per group
  multi: false,
  // Should the path to output path be recursively generated (mkdir -p)
  createPath: false
})
