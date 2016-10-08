import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import * as lodash from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(async () => {

  console.log('*'.repeat(10), 'setInterval');

  let i = 0;

  await new Promise(resolve => {
    const timer = setInterval(() => {
      if (i < 3) {
        console.log(i);
      } else {
        clearInterval(timer);
        resolve();
      }
      i++;
    }, 500);
  });


  console.log('timer, take');

  Observable.timer(0, 500)
    .take(3)
    .subscribe(index => {
      console.log(index);
    }, err => { }, () => console.log('(timer complete)'));

});
