import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Subject } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(() => {

  console.log('*'.repeat(10), 'Subject');

  const subject = new Subject();


  subject
    .subscribe(value => {
      console.log(value);
    }, err => { }, () => console.log('(subject complete)'));


  subject.next(1);
  subject.next(2);
  subject.next(3);

  subject.complete();

  subject.next(4);

});
