import 'reflect-metadata';
import AppComponent from 'src/app/app.component';

export class Startup {
    static init() {
        new AppComponent(); // eslint-disable-line no-new
    }
}
