// import { Session } from 'meteor/session';
import date from 'date-and-time';

itsMyTime = () => Session.set("theDateandTime", new Date());

Template.nav.onCreated(() => {
    itsMyTime();
    this.timerHandle = Meteor.setInterval(() => { itsMyTime(); }, 60000);
});

Template.nav.onDestroyed(() => {
    Meteor.clearInterval(this.timerHandle);
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
    },
    breadcrumbs() {
        return Session.get("breadcrumbs");
    }
});