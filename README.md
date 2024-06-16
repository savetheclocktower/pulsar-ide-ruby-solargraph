# pulsar-ide-ruby-solargraph package

A fork of [ruby-solargraph](https://web.pulsar-edit.dev/packages/ruby-solargraph) to update and expand the feature set. Adds the following features for Ruby files:

* Autocompletion
* Symbol navigation (local file and project-wide) and jump-to-definition support
* Diagnostics and linting
* Outline view (hierarchical symbols)
* Reference highlighting (view other usages of the symbol under the cursor)
* Datatips and signature help (contextual pop-up documentation)

## Requirements

A binary of `solargraph` should be present somewhere in your path. Consult the [installation instructions](https://solargraph.org/guides/getting-started). Pulsar will typically inherit your shell environment, so the default value of `solargraph` for the “Command Path” setting will usually work; if not, you can specify the absolute path to your `solargraph` executable.

## Customization

Solargraph [can be customized](https://solargraph.org/guides/configuration) via a `.solargraph.yml` file in your project root. If it is missing, Solargraph will use its default configuration.

## What does it do?

Install this package, then install any of the following packages to get special features.

Start with these packages; they’re all builtin, actively maintained, and/or built exclusively for Pulsar:

* [autocomplete-plus](https://web.pulsar-edit.dev/packages/autocomplete-plus) (builtin)
  * See autocompletion options as you type
* [symbols-view](https://web.pulsar-edit.dev/packages/symbols-view) (builtin)
  * View and filter a list of symbols in the current file
  * View and filter a list of symbols across all files in the project
  * Jump to the definition of the symbol under the cursor
* [linter](https://web.pulsar-edit.dev/packages/linter) and [linter-ui-default](https://web.pulsar-edit.dev/packages/linter-ui-default)
  * View diagnostic messages as you type
* [intentions](https://web.pulsar-edit.dev/packages/intentions)
  * Open a menu to view possible code actions for a diagnostic message
  * Open a menu to view possible code actions for the file at large
* [pulsar-outline-view](https://web.pulsar-edit.dev/packages/pulsar-outline-view)
  * View a hierarchical list of the file’s symbols
* [pulsar-find-references](https://web.pulsar-edit.dev/packages/pulsar-find-references)
  * Place the cursor inside of a token to highlight other usages of that token
  * Place the cursor inside of a token, then view a `find-and-replace`-style “results” panel containing all usages of that token across your project

For other features that don’t have equivalents above, the legacy `atom-ide` packages should also work:

* [atom-ide-definitions](https://web.pulsar-edit.dev/packages/atom-ide-definitions)
  * Jump to the definition of the symbol under the cursor
* [atom-ide-outline](https://web.pulsar-edit.dev/packages/atom-ide-outline)
  * View a hierarchical list of the file’s symbols
  * View the call hierarchy for a given file
* [atom-ide-datatip](https://web.pulsar-edit.dev/packages/atom-ide-datatip)
  * Hover over a symbol to see any related documentation, including method signatures
* [atom-ide-signature-help](https://web.pulsar-edit.dev/packages/atom-ide-signature-help)
  * View a function’s parameter signature as you type its arguments
* [atom-ide-code-format](https://web.pulsar-edit.dev/packages/atom-ide-code-format)
  * Invoke on a buffer (or a subset of your buffer) to reformat your code according to the language server’s settings
