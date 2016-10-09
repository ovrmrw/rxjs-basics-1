import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Observable } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('*'.repeat(10), 'delay operator instead of setTimeout');

  console.log('   0ms');


  setTimeout(() => {
    console.log('1000ms');
  }, 1000);


  Observable.of('')
    .delay(2000)
    .subscribe(() => {
      console.log('2000ms');
    });

});
