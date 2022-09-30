// eslint-disable-next-line max-classes-per-file
import { ComponentConfig } from 'lib/annotations/Component';

export class ComponentRenderer {
    constructor(private config: ComponentConfig) {}

    register() {
        const self = this; // eslint-disable-line @typescript-eslint/no-this-alias

        customElements.define(
            this.config.selector,
            class extends HTMLElement {
                constructor() {
                    super();

                    const shadow = this.attachShadow({ mode: 'open' });
                    shadow.innerHTML = self.config.template;
                }
            }
        );
    }
}
