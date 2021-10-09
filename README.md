# DEPRECATED

This component is being deprecated. The code base has been moved to [amf-components](https://github.com/advanced-rest-client/amf-components) module. This module will be archived when [PR 1](https://github.com/advanced-rest-client/amf-components/pull/1) is merged.

-----
[![Published on NPM](https://img.shields.io/npm/v/@api-components/http-method-label.svg)](https://www.npmjs.com/package/@api-components/http-method-label)

[![Tests and publishing](https://github.com/advanced-rest-client/http-method-label/actions/workflows/deployment.yml/badge.svg)](https://github.com/advanced-rest-client/http-method-label/actions/workflows/deployment.yml)

An HTTP method name display label for lists.

```html
<http-method-label method="get"></http-method-label>
<http-method-label method="POST"></http-method-label>
<http-method-label method="Put"></http-method-label>
<http-method-label method="delete"></http-method-label>
<http-method-label method="patch"></http-method-label>
```

## Usage

### Installation

```sh
npm install @api-components/http-method-label --save
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@api-components/http-method-label/http-method-label.js';
    </script>
  </head>
  <body>
    <http-method-label method="get"></http-method-label>
  </body>
</html>
```

### In a web component element

```js
import { LitElement, html, css } from 'lit-element';
import '@api-components/http-method-label/http-method-label.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <http-method-label method="get"></http-method-label>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/http-method-label
cd http-method-label
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```
