import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

export const sendMessageOnEntry = functions.database
  .ref('/digipark/uid/{key}/entry')
  .onWrite(async (change, context) => {
    console.log('entry message called');

    if (!change.before.exists() || !change.after.exists()) {
      functions.logger.log('Data does not exist');
      return null;
    }

    const snapshot = await admin.database().ref('/digipark/user').once('value');
    const userList = snapshot.val();
    let customerEmail;
    for (const key in userList) {
      if (Object.prototype.hasOwnProperty.call(userList, key)) {
        const element = userList[key];
        if (element.key === context.params.key) {
          customerEmail = element.email;
        }
      }
    }
    console.log('Email: ', customerEmail);
    const timestamp = new Date(
      new Date().getTime() + 330 * 60 * 1000,
    ).toLocaleString();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jaimikpatel2001@gmail.com',
        pass: 'bbplnhwbajveenrt',
      },
    });
    transporter.sendMail(
      {
        from: 'jaimikpatel2001@gmail.com',
        to: customerEmail,
        subject: 'Entry into the parking lot',
        text: `You have entered into the parking lot by scanning your RFID Key.\n
        Entry time: ${timestamp}`,
      },
      function (err, _data) {
        if (err) {
          console.log('Error Occurs');
          console.error(err);
        } else {
          console.log('Email sent successfully');
        }
      },
    );

    return null;
  });

export const sendMessageOnExit = functions.database
  .ref('/digipark/uid/{key}/balance')
  .onWrite(async (change, context) => {
    console.log('entry message called');

    if (!change.before.exists() || !change.after.exists()) {
      functions.logger.log('Data does not exist');
      return null;
    }

    const snapshot = await admin.database().ref('/digipark/user').once('value');
    const userList = snapshot.val();
    let customerEmail;
    for (const key in userList) {
      if (Object.prototype.hasOwnProperty.call(userList, key)) {
        const element = userList[key];
        if (element.key === context.params.key) {
          customerEmail = element.email;
        }
      }
    }
    console.log('Email: ', customerEmail);
    const timestamp = new Date(
      new Date().getTime() + 330 * 60 * 1000,
    ).toLocaleString();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jaimikpatel2001@gmail.com',
        pass: 'bbplnhwbajveenrt',
      },
    });
    transporter.sendMail(
      {
        from: 'jaimikpatel2001@gmail.com',
        to: customerEmail,
        subject: 'Exit from the parking lot',
        text: `You have exited from the parking lot by scanning your RFID Key.\n
        Exit time: ${timestamp}.\n
        Previous Balance: ${change.before.val()}\n
        New Balance: ${change.after.val()}`,
      },
      function (err, _data) {
        if (err) {
          console.log('Error Occurs');
          console.error(err);
        } else {
          console.log('Email sent successfully');
        }
      },
    );

    return null;
  });
