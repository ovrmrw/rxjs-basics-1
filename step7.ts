import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Observable, Subject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(async () => {

  console.log('*'.repeat(10), 'zip operator');

  const subject1 = new Subject();
  const subject2 = new Subject();


  Observable
    .zip(...[
      subject1,
      subject2
    ])
    .subscribe(values => {
      console.log(values);
    }, err => { }, () => console.log('(zip complete)'));


  subject1.next(1);
  subject1.next(2);
  subject2.next('first');

  await Observable.of('').do(() => console.log('wait...')).delay(1000).toPromise();

  subject2.next('second');


  subject1.complete();
  subject2.complete();

});
