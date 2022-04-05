// import { Session } from 'meteor/session';
import date from 'date-and-time';

itsMyTime = () => Session.set("theDateandTime", new Date());

Template.nav.onCreated(() => {
    itsMyTime();
    Meteor.setInterval(() => { itsMyTime(); }, 1000);
});

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
        return date.format(Session.get("theDateandTime"), 'D/M/YYYY');
    },
    currTime() {
        return date.format(Session.get("theDateandTime"), 'h:mm A');
    }
});