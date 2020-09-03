//email address should be sent as a query parameter, like {appLink}/exec?email=email.example@gmail.com

function doGet(e) {
  return sendEmails(e.parameter.email);
}

function getEmailTemplate() {
  var htmlTemplate = HtmlService.createTemplateFromFile("index.html");
  htmlTemplate.name = 'gabriel';
  var htmlBody = htmlTemplate.evaluate().getContent();
  return htmlBody;
}

function sendEmails(address) {
    var emailAddress = address;
    var subject = 'hello world'; //email subject
    var body = getEmailTemplate(); //email message
  MailApp.sendEmail({
    to: emailAddress,
    subject: subject,
    htmlBody: body
  });
  return ContentService
          .createTextOutput(JSON.stringify({"result":"success"}))
          .setMimeType(ContentService.MimeType.JSON);
}