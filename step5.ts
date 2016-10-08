import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import * as lodash from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(async () => {

  console.log('*'.repeat(10), 'waiting with async/await');

  await new Promise(resolve => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 500);
  });

  await new Promise(resolve => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 500);
  });


  await Observable.of(3).delay(500).toPromise().then(value => console.log(value));

  await Observable.of(4).delay(500).toPromise().then(value => console.log(value));

});
