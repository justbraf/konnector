import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../lib/collection.js';
import '../lib/userAcct.js';
// import './infiniteScroll.js';
import '../lib/router.js';

import './main.html';

import './error404.html';

import './signIn/signIn.html';
import './signIn/signIn.js';

import './landing/landing.html';
import './landing/landing.js';

import './navbar/navBar.html';
import './navbar/navBar.js';