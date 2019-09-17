module.exports.english = function htmlTemplate(url) {
  return `
     <!DOCTYPE html>
      <html>
        <head>
            <title>Title of the document</title>
            <style>
              .button {
              background-color: #E9831D;
              border: none;
              border-radius: 10px;
              color: white;
              padding: 10px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 18px;
              color: white;
              margin: 10px 2px;
              cursor: pointer;
              }
              .fixLinkColorIssue a {
                color: white;
              }
            </style>
        </head>
        <body>
            <p style="text-align: center; font-size: 18px;">Thanks for subscribing to my newsletter.</p>
            <p style="text-align: center; font-size: 18px;">Please confirm your email address.</p>
            <p style="text-align:center; font-size: 18px;">
              Thank you &hearts;
          </p>
          <p style="text-align:center; font-weight:bold; font-size: 18px;">
              Ariana Braving
          </p>
          <p style="text-align: center;"><span class="fixLinkColorIssue"><a href="${url}" class="button"> Confirm My Email</a></span></p>
            <p>&nbsp;</p>
            
          
            <p style="text-align: center; font-size: 12px;">This is a DoNotReply email and only used for verification purpose. To contact Ariana please use: info@ArianaBraving.com </p>
          
        </body>
      </html>
    `
}

module.exports.farsi = function htmlTemplate(url) {
  return `
     <!DOCTYPE html>
      <html>
        <head>
            <title>Title of the document</title>
            <style>
              .button {
              background-color: #E9831D;
              border: none;
              border-radius: 10px;
              color: white;
              padding: 10px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 18px;
              color: white;
              margin: 10px 2px;
              cursor: pointer;
              }
              .fixLinkColorIssue a {
                color: white;
              }
            </style>
        </head>
        <body>
            <p style="text-align: center; font-size: 18px; direction: rtl;">تشکر برای درخواست اشتراک.</p>
            <p style="text-align: center; font-size: 18px; direction: rtl;">لطفا ایمیل خود را تایید کنید.</p>
            <p style="text-align:center; font-size: 18px; direction: rtl;">
              با احترام &hearts;
          </p>
          <p style="text-align:center; font-weight:bold; font-size: 18px; direction: rtl;">
              آریانا بریوینگ
          </p>
          <p style="text-align: center; direction: rtl;"><span class="fixLinkColorIssue"><a href="${url}" class="button"> تایید ایمیل</a></span></p>
            <p>&nbsp;</p>
  
          <p style="text-align: center; font-size: 12px; direction: rtl;">این ایمیل پاسخ داده نمی‌شود و از آن تنها برای تایید استفاده می‌گردد. برای تماس با آریانا می‌توانید از info@ArianaBraving.com استفاده کنید.  </p>
                    
          
        </body>
      </html>
    `
}
