import { Component } from 'lib/annotations/Component';
import template from 'src/app/app.template.html';

@Component({
    selector: 'app-root',
    template,
})
export default class AppComponent {
    state = 'hello world';
}
