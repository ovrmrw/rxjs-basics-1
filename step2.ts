import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import * as lodash from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('map');

  Observable.of(1, 2, 3)
    .map(value => value * 10)
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(map complete)'));


  console.log('*'.repeat(10), 'filter');

  Observable.of(1, 2, 3)
    .filter(value => value % 2 === 0)
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(filter complete)'));


  console.log('*'.repeat(10), 'scan');

  Observable.of(1, 2, 3)
    .scan((p, value) => p + value)
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(scan complete)'));


  console.log('*'.repeat(10), 'reduce');

  Observable.of(1, 2, 3)
    .reduce((p, value) => p + value)
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(reduce complete)'));

});
