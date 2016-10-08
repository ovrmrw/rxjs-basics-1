import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import * as lodash from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('*'.repeat(10), 'sync');


  setTimeout(() => {
    console.log('setTimeout')
  }, 500);


  Observable.of('')
    .delay(1000)
    .subscribe(() => {
      console.log('delay');
    }, err => { }, () => console.log('(delay complete)'));

});
