import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Observable, Subject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(async () => {

  console.log('*'.repeat(10), 'combineLatest operator');

  const subject1 = new Subject();
  const subject2 = new Subject();
  const provider = new Subject();


  Observable
    .combineLatest(...[
      subject1,
      subject2
    ])
    .subscribe(values => {
      provider.next(values);
    }, err => { }, () => console.log('(zip complete)'));


  provider
    .subscribe(values => {
      console.log(values);
    }, err => { }, () => console.log('(provider complete)'));


  subject1.next('action 1');
  subject1.next('action 2');
  subject2.next('action A');

  await Observable.of('').do(() => console.log('wait...')).delay(1000).toPromise();

  subject2.next('action B');

  await Observable.of('').do(() => console.log('wait...')).delay(1000).toPromise();

  subject1.next('action 3');

  await Observable.of('').do(() => console.log('wait...')).delay(1000).toPromise();

  subject2.next('action C');


  subject1.complete();
});
