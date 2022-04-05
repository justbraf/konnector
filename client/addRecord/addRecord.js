import { Datepicker } from "vanillajs-datepicker";
import 'vanillajs-datepicker/dist/css/datepicker-bs5.css';

Template.addRecord.onRendered(() => {
    const getDatePickerTitle = elem => {
        // From the label or the aria-label
        const label = elem.nextElementSibling;
        let titleText = '';
        if (label && label.tagName === 'LABEL') {
            titleText = label.textContent;
        } else {
            titleText = elem.getAttribute('aria-label') || '';
        }
        return titleText;
    }

    const elems = document.querySelectorAll('.datepicker_input');
    for (const elem of elems) {
        const datepicker = new Datepicker(elem, {
            'format': 'dd/mm/yyyy', // UK format
            title: getDatePickerTitle(elem)
        });
    }
});

Template.addRecord.events({
    // confirmation msg and clear the input boxes
    'click .js-addRecord'() {
        let fName = $("#fName").val()
        let lName = $("#lName").val()
        let gender = $("#gender").val()
        let age = $("#age").val()
        let dob = $("#dob").val()
        let natId = $("#natId").val()
        let addr = $("#addr").val()
        let height = $("#height").val()
        let eye = $("#eye").val()
        let hair = $("#hair").val()
        let skin = $("#skin").val()
        let ethin = $("#ethin").val()

        profilesdb.insert({
            "fName": fName,
            "lName": lName,
            "gender": gender,
            "age": age,
            "dob": dob,
            "natId": natId,
            "addr": addr,
            "height": height,
            "eye": eye,
            "hair": hair,
            "skin": skin,
            "ethin": ethin,
            "agent": Meteor.userId(),
            "agentName": Meteor.user().username,
            "createdOn": new Date().getTime()
        });
    }
});