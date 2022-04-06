import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import date from 'date-and-time';

import '../lib/collection.js';
import '../lib/userAcct.js';
import '../lib/router.js';

import './main.html';
import './footer/footer.html';
import './error404.html';
import './components/confirmation.html';
import './components/saveDialog.html';
import './components/viewOne.html';

import './signIn/signIn.html';
import './signIn/signIn.js';

import './landing/landing.html';
import './landing/landing.js';

import './navbar/navBar.html';
import './navbar/navBar.js';

import './sideBar/sideBar.html';
import './sideBar/sideBar.js';

import './addRecord/addRecord.html';
import './addRecord/addRecord.js';

import './viewRecord/viewRecord.html';
import './viewRecord/viewRecord.js';

import './matchParent/matchParent.html';
import './matchParent/matchParent.js';

import './admin/admin.html';
import './admin/admin.js';