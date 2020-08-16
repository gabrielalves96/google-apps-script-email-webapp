//email address should be sent as a query parameter, like {appLink}/exec?email=email.example@gmail.com

function doGet(e) {
  return sendEmails(e.parameter.email);
}


function sendEmails(address) {
    var emailAddress = address;
    var subject = 'hello world'; //email subject
    var message = 'hello world'; //email message
    MailApp.sendEmail(emailAddress, subject, message);
  return ContentService
          .createTextOutput(JSON.stringify({"result":"success"}))
          .setMimeType(ContentService.MimeType.JSON);
}