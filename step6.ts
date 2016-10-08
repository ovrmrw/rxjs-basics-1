import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import * as lodash from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('*'.repeat(10), 'Subject');

  const subject = new Subject();


  subject
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(subject complete)'));


  subject.next(1);
  subject.next('second');
  subject.next({ third: true });
  subject.next([1, 2, 3, 4]);

  subject.complete();

});
