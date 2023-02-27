import { Request, Response } from 'express'
import sendgrid from '@sendgrid/mail'

const { SENDGRID_API_KEY_FULL_ACCESS = '' } = process.env

sendgrid.setApiKey(SENDGRID_API_KEY_FULL_ACCESS)

type EmailBody = ReadableStream<Uint8Array> & {
  subject: string,
  fullName: string,
  email: string,
  message: string,
}

export default async function sendMail(req: Request, res: Response) {
  const { body } = req
  const {
    subject = 'UnknownSubject',
    fullName = "UnknownName",
    email = 'UnknownEmail',
    message = 'UnknownMessage'
  } = body as EmailBody

  try {
    await sendgrid.send({
      to: 'danny@dannys.io',
      from: 'danny@dannys.io',
      subject: `[Lead from Danny's IO Form]: ${subject}`,
      html: `<!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <title>Outreach through Danny's IO Form</title>
      <meta name="description" content="Outreach through Danny's IO Form">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    </head>
    
    <body>
      <div style="margin-left: 20px;margin-right: 20px;">
        <h3 style="font-size: 28px;">New outreach</h3>
        <div style="font-size: 16px;">
          <p><b>From:</b></p>
          <p><pre>${fullName}(${email})</pre></p>
          <p><b>Message:</b></p>
          <p><i>"${message}</i>"</p>
          <br>
        </div>
      </div>
    </body>
    
    </html>`,
    });
  } catch (error: { statusCode: string, message: string } | any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
