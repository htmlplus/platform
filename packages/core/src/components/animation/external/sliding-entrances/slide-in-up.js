import { register } from '../register';

register('slide-in-up', [
  { offset: 0, transform: 'translate3d(0, 100%, 0)', visibility: 'visible' },
  { offset: 1, transform: 'translate3d(0, 0, 0)' }
]);
