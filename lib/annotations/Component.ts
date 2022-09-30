import { ComponentRenderer } from 'lib/shadow/ComponentRenderer';
import { ConstructorType } from 'lib/types/ConstructorType';
import { singleton } from 'tsyringe';

export type ComponentConfig = {
    selector: string;
    template: string;
};

export function Component(config: ComponentConfig) {
    return <T>(target: ConstructorType<T>) => {
        singleton()(target);

        const componentRenderer = new ComponentRenderer(config, target);
        componentRenderer.register();

        return target;
    };
}
