import { firstName as fname } from './utils/fname.js';
import { age } from './utils/age.js';
import Person from './utils/person.js';

console.log(fname, age);

const person = new Person('john', 'doe', 23);
person.info();
