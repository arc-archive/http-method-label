/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import { LitElement, html, css } from 'lit-element';
import { hostDefaultStyles,
  labelCommon,
  labelGet,
  labelPost,
  labelPut,
  labelDelete,
  labelPatch,
  labelOptions,
  labelHead,
  labelTrace,
  labelConnect } from './http-method-label-common-styles.js';
/* eslint-disable max-len */
/**
 * The element displays a label for the HTTP method. If the method is one of the
 * predefined methods then it will use predefined colors to mark the method.
 *
 * ### Example
 *
 * ```html
 * <http-method-label method="GET"></http-method-label>
 * ```
 *
 * If the method is not one of the predefined methods it can be styled using regular
 * css.
 *
 * ```html
 * <style>
 * http-method-label[method="test"] {
 *    color: white;
 *    background-color: orange;
 * }
 * </style>
 * <http-method-label method="TEST"></http-method-label>
 * ```
 *
 * ### Styling
 * `<http-method-label>` provides the following custom properties and mixins for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--http-method-label` | Mixin applied to the HTTP method | `{}`
 * `--http-method-label-padding` | Padding of the label item | `2px 6px`
 * `--http-method-label-color` | Color of the HTTP method | `rgb(128, 128, 128)`
 * `--http-method-label-background-color` | Background color of the HTTP method | `rgba(128, 128, 128, 0.12)`
 * `--http-method-label-border-radius` | Border radius on the label | `3px`
 * `--http-method-label-font-weigth` | Label font weight | `400`
 * `--http-method-label-get` | Mixin applied to the `GET` HTTP method | `{}`
 * `--http-method-label-get-color` | Color of the `GET` HTTP method | `rgb(0, 128, 0)`
 * `--http-method-label-get-background-color` | Background color of the `GET` HTTP method | `rgba(0, 128, 0, 0.12)`
 * `--http-method-label-post` | Mixin applied to the `POST` HTTP method | `{}`
 * `--http-method-label-post-color` | Color of the `POST` HTTP method | `rgb(33, 150, 243)`
 * `--http-method-label-post-background-color` | Background color of the `POST` HTTP method | `rgba(33, 150, 243, 0.12)`
 * `--http-method-label-put` | Mixin applied to the `PUT` HTTP method | `{}`
 * `--http-method-label-put-color` | Color of the `PUT` HTTP method | `rgb(255, 165, 0)`
 * `--http-method-label-put-background-color` | Background color of the `PUT` HTTP method | `rgba(255, 165, 0, 0.12)`
 * `--http-method-label-delete` | Mixin applied to the `DELETE` HTTP method | `{}`
 * `--http-method-label-delete-color` | Color of the `DELETE` HTTP method | `rgb(244, 67, 54)`
 * `--http-method-label-delete-background-color` | Background color of the `DELETE` HTTP method | `rgba(244, 67, 54, 0.12)`
 * `--http-method-label-patch` | Mixin applied to the `PATCH` HTTP method | `{}`
 * `--http-method-label-patch-color` | Color of the `PATCH` HTTP method | `rgb(156, 39, 176)`
 * `--http-method-label-patch-background-color` | Background color of the `PATCH` HTTP method | `rgba(156, 39, 176, 0.12)`
 * `--http-method-label-options` | Mixin applied to the `OPTIONS` HTTP method | `{}`
 * `--http-method-label-options-color` | Color of the `OPTIONS` HTTP method | `rgb(128, 128, 128)`
 * `--http-method-label-options-background-color` | Background color of the `OPTIONS` HTTP method | `rgba(128, 128, 128, 0.12)`
 * `--http-method-label-head` | Mixin applied to the `HEAD` HTTP method | `{}`
 * `--http-method-label-head-color` | Color of the `HEAD` HTTP method | `rgb(128, 128, 128)`
 * `--http-method-label-head-background-color` | Background color of the `HEAD` HTTP method | `rgba(128, 128, 128, 0.12)`
 * `--http-method-label-trace` | Mixin applied to the `TRACE` HTTP method | `{}`
 * `--http-method-label-trace-color` | Color of the `TRACE` HTTP method | `rgb(128, 128, 128)`
 * `--http-method-label-trace-background-color` | Background color of the `TRACE` HTTP method | `rgba(128, 128, 128, 0.12)`
 * `--http-method-label-connect` | Mixin applied to the `CONNECT` HTTP method | `{}`
 * `--http-method-label-connect-color` | Color of the `CONNECT` HTTP method | `rgb(128, 128, 128)`
 * `--http-method-label-connect-background-color` | Background color of the `CONNECT` HTTP method | `rgba(128, 128, 128, 0.12)`
 * @customElement
 * @memberof UiElements
 * @demo demo/index.html
 */
class HttpMethodLabel extends LitElement {
  get styles() {
    return css`:host {
      ${hostDefaultStyles}
      ${labelCommon}
    }

    :host([method="get"]) {
      ${labelGet}
    }

    :host([method="post"]) {
      ${labelPost}
    }

    :host([method="put"]) {
      ${labelPut}
    }

    :host([method="delete"]) {
      ${labelDelete}
    }

    :host([method="patch"]) {
      ${labelPatch}
    }

    :host([method="options"]) {
      ${labelOptions}
    }

    :host([method="head"]) {
      ${labelHead}
    }

    :host([method="trace"]) {
      ${labelTrace}
    }

    :host([method="connect"]) {
      ${labelConnect}
    }`;
  }

  static get properties() {
    return {
      /**
       * HTTP method name to display
       */
      method: {
        type: String,
        reflect: true
      }
    };
  }

  set method(value) {
    const old = this._method;
    if (old === value) {
      return;
    }
    this._method = value;
    this.requestUpdate('method', old);
    this._updateAccessibility(value);
  }

  get method() {
    return this._method;
  }

  render() {
    return html`<style>${this.styles}</style>${this.method}`;
  }
  /**
   * Updates "title" and `aria-label` atrributes when method changes.
   * @param {String} method Current method
   */
  _updateAccessibility(method) {
    if (!method) {
      this.removeAttribute('title');
      this.removeAttribute('aria-label');
    } else {
      this.setAttribute('title', method);
      this.setAttribute('aria-label', method);
    }
  }
}
window.customElements.define('http-method-label', HttpMethodLabel);
