import {bootstrap } from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './app';
bootstrap(App, [HTTP_PROVIDERS]);