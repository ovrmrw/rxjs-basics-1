import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Observable } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('*'.repeat(10), 'Observable.of');

  Observable.of(1, 2, 3)
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(of complete)'));


  console.log('*'.repeat(10), 'Observable.from');

  Observable.from([1, 2, 3])
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(from complete)'));


  console.log('*'.repeat(10), 'Observable.range');

  Observable.range(1, 3)
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(range complete)'));

});
