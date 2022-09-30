// eslint-disable-next-line max-classes-per-file
import { ComponentConfig } from 'lib/annotations/Component';
import { ConstructorType } from 'lib/types/ConstructorType';
import _ from 'lodash';
import { container } from 'tsyringe';

export class ComponentRenderer<T extends ConstructorType> {
    static templateRegex = /{{([\s\S]+?)}}/g;

    constructor(private config: ComponentConfig, private target: T) {
        _.templateSettings.interpolate = ComponentRenderer.templateRegex;
    }

    private getHTML() {
        const instance = container.resolve(this.target) as object;

        if (!instance) {
            throw new Error(`Cannot resolve dependency for ${this.target.name}.`);
        }

        const template = _.template(this.config.template);
        return template(instance);
    }

    register() {
        const self = this; // eslint-disable-line @typescript-eslint/no-this-alias

        customElements.define(
            this.config.selector,
            class extends HTMLElement {
                constructor() {
                    super();

                    const shadow = this.attachShadow({ mode: 'open' });
                    shadow.innerHTML = self.getHTML();
                }
            }
        );
    }
}
