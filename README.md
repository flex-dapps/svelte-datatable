# Svelte Datatable

## Contents

[Information](#information)
[Features](#features)
[Requirements](#requirements)
[Installation](#installation)
[Basic Usage](#basic-usage)
[Advanced Usage](#advanced-usage)


## Information

This project was created by the [Svelte REPL](https://svelte.technology/repl).

Data Table component was converted to Svelte from [MicroDroid/vue-materialize-datatable](https://github.com/MicroDroid/vue-materialize-datatable) project.

Paginate component was converted to Svelte from [https://github.com/lokyoung/vuejs-paginate](https://github.com/lokyoung/vuejs-paginate) project.

[See demo here at Heroku(slow)](https://safe-springs-35306.herokuapp.com/)

## Features
 - Sorting, with numerical sorting
 - Pagination - Client & Server Side
 - Fuzzy searching
 - Excel export
 - Printing
 - Custom topbar buttons
 - Flexible data-from-row extractor
 - Follows the Material Design spec
 - Limited support for IE 11(need Object.assign polyfill)

## Requirements
 - [`materialize-css`](https://www.npmjs.com/package/materialize-css) (and **NOT** any other MD library!)
 - Svelte

## Installation
```bash
yarn add svelte-datatable
# or
npm i svelte-datatable
```

There are currently some known issues with dependencies, so if you run into any problems, install `svelte-datatable` from this git repository with:

```bash
yarn add svelte-datatable@https://github.com/Kiho/svelte-datatable.git
```

## Basic Usage

```javascript
<script>
import { DataTable } from 'svelte-datatable'

// define some columns
let columns = [{
  label: "ID",    // "Pretty" column name
  field: "id",    // Field name from row object
  numeric: true,  // Affects sorting
  html: false     // Escapes output if false.
}, ..., ];

// define some rows of data
let rows = [{
  id: 'SomeValue' // This will match the column above and print a value in it
}, ..., ]
</script>

<!-- Import the materialize css/js here -->

<DataTable
  {columns}
  {rows}
/>
```

## Advanced Usage

This section is under construction - the best place to look for clues about advanced usage for this library is the `src/DataTable.svelte` file, which has a lot of `export let` statements. They should give you an idea about which props are available and what you can use them for.