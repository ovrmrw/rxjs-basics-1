import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Observable } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('*'.repeat(10), 'map operator');

  Observable.of(1, 2, 3)
    .map(value => value * 10)
    .subscribe(value => {
      console.log(value);
    });


  console.log('*'.repeat(10), 'filter operator');

  Observable.of(1, 2, 3)
    .filter(value => value % 2 === 0)
    .subscribe(value => {
      console.log(value);
    });


  console.log('*'.repeat(10), 'scan operator');

  Observable.of(1, 2, 3)
    .scan((p, value) => p + value)
    .subscribe(value => {
      console.log(value);
    });


  console.log('*'.repeat(10), 'reduce operator');

  Observable.of(1, 2, 3)
    .reduce((p, value) => p + value)
    .subscribe(value => {
      console.log(value);
    });

});
