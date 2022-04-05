import date from 'date-and-time';

Template.nav.events({
    'click .js-logout'() {
        AccountsTemplates.logout();
    }
});

Template.nav.helpers({
    username() {
        return Meteor.user().username; //.emails[0].address;
    },
    currDate() {
        return date.format(new Date(), 'D/M/YYYY');
    },
    currTime() {
        return date.format(new Date(), 'h:mm');
    }
});