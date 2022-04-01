import date from 'date-and-time';

Template.sideBar.events({
    'click .js-logout'() {
        Meteor.logout();
    }
});

Template.sideBar.helpers({
    loginTimeStamp() {
        const theDateNow = new Date();
        let stat = "Logged In: " + date.format(theDateNow, 'ddd, MMM DD YYYY');
        console.log(stat);
        return stat;
    }
});