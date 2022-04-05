import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.mainContainer');

const normal = FlowRouter.group();
const loggedIn = FlowRouter.group({
    triggersEnter: [
        function (context, redirect) {
            if (!Meteor.userId()) {
                if (context.route.name != 'index')
                    redirect('index');
            }
        }
    ]
});

// Create index route
normal.route('/', {
    name: 'index',
    action() {
        // Do something here
        // After route is followed
        BlazeLayout.render('app_layout', { sideBar: 'sideBar', nav: 'nav', mainBody: 'signInForm', footer: 'footer' });
    },
    waitOn() {
        // return Meteor.subscribe('noUser');
    }
});

// Create Add Record route
loggedIn.route('/add', {
    name: "addRecord",
    action() {
        BlazeLayout.render('app_layout', { sideBar: 'sideBar', nav: 'nav', mainBody: 'addRecord', footer: 'footer' });
    },
    waitOn(params) {
        return Meteor.subscribe('crsData');
    }
});

// Create View Record route
loggedIn.route('/view', {
    name: "viewRecord",
    action() {
        BlazeLayout.render('app_layout', { sideBar: 'sideBar', nav: 'nav', mainBody: 'viewRecord', footer: 'footer' });
    },
    waitOn(params) {
        return Meteor.subscribe('crsData');
    }
});

// Create Match Parents route
loggedIn.route('/match', {
    name: "matchParent",
    action() {
        BlazeLayout.render('app_layout', { sideBar: 'sideBar', nav: 'nav', mainBody: 'matchParent', footer: 'footer' });
    },
    waitOn(params) {
        return Meteor.subscribe('crsData');
    }
});

// Create adminsitration route
loggedIn.route('/admin', {
    name: "administration",
    action() {
        BlazeLayout.render('app_layout', { nav: 'nav', mainBody: 'adminMan', footer: 'footer' });
    },
    waitOn(params) {
        return Meteor.subscribe('adminData');
    }
});

// Create profiles route
// loggedIn.route('/profiles', {
//     name:"allProfiles",
//     action() {
//         BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'myAccounts'});
//     },
//     waitOn(params) {
//       return Meteor.subscribe('profData');
//     }
// });

// Create profile route to show an indiviual profile
// loggedIn.route('/profile/:pid', {
//     name: "individualProfile",
//     action(params) {
//         BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'viewProfile'});
//     },
//     waitOn(params) {
//       return Meteor.subscribe('proDat', params.pid);
//     }
// });

// Create 404 route (catch-all)
FlowRouter.route('*', {
    action() {
        // Show 404 error page
        BlazeLayout.render('app_layout', { mainBody: 'notFound' });
    }
});
