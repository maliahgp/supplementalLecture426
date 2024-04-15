let make_message_div = function (message) {
    let message_div = document.createElement('div');
    let message_h2 = document.createElement('h2');
    message_h2.append(document.createTextNode(message));
    message_div.append(message_h2);
    return message_div;
};
let rig_div = document.getElementById('rig');

rig_div.append(make_message_div("Bye, Bye< Mars!"));

