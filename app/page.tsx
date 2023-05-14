'use client';
import React from 'react'
import styles from './styles.module.css'
import { Client, Account, Databases, ID } from 'appwrite'

const client = new Client()
  .setEndpoint('https://appwrite.walter-wm.de/v1')
  .setProject('6460dff6d69fcb94c2e0');

const account = new Account(client);
const databases = new Databases(client);


export default function Home() {
  let handleSubmit = (event: any) => {
    event.preventDefault();
    let name = event.target.name.value;
    let street = event.target.street.value;
    let street_nr = event.target.street_nr.value;

    const promise = databases.createDocument('6460ec4c21eba442998e', '6460ec9798595e935d3f', ID.unique(), {
      name: name,
      street: street,
      street_nr: street_nr
    })

    promise.then(function (response) {
      console.log(response); // Success
      window.location.href = '/success'
    }, function (error) {
      console.log(error); // Failure
      alert("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.")
    });

  }

  return (
    <>
      <h1 className={styles.heading}>Sternsingeraktion 2024</h1>
      <p>Sie wünschen einen Besuch der Sternsinger?
        Melden Sie sich jetzt!
        Bitte beachten Sie, dass wir Ihnen den Besuch nicht versprechen können. Es hängt immer davon ab, wie viele Kinder und Jugendliche bereit sind, einen Teil ihrer Weihnachtsferien in die Sternsingeraktion einzubringen.
        Bei Rückfragen können Sie uns telefonisch unter 924 533 411 oder per Email an sternsinger@pg-weilheim.de erreichen.
        Ihnen wünsche ich auch im Namen aller Sternsinger alles Gute
        Engelbert Birkle, Pfarrer</p>
      <div className={styles.spacer} />
      <p>Bitte füllen Sie das Formular aus, um sich anzumelden.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Familienname *</label> <br />
        <input className={styles.input} type="text" id="name" name="name" required /> <br />
        <label htmlFor="street">Straße *</label> <br />
        <input className={styles.input} type="text" id="street" name="street" required /> <br />
        <label htmlFor="street_nr">Hausnummer *</label> <br />
        <input className={styles.input} type="text" id="street_nr" name="street_nr" required />

        <button className={styles.submit} type="submit" >Absenden</button>
      </form>
    </>
  )
}
