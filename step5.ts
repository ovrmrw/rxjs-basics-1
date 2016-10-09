import 'babel-polyfill';
import 'zone.js/dist/zone-node';
import { Observable } from 'rxjs/Rx';
declare const Zone: any;


Zone.current.fork({ name: 'myZone' }).runGuarded(async () => {

  console.log('*'.repeat(10), 'waiting by Promise and delay oeprator with async/await');

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


  await Observable.of(3)
    .delay(500)
    .do(value => console.log(value))
    .toPromise();

  await Observable.of(4)
    .delay(500)
    .do(value => console.log(value))
    .toPromise();

});
