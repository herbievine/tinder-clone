import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../styles/Cards.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { shuffle } from '../util'

const Cards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        const wrapper = async () => {
            const db = firebase.firestore()

            db.collection('people').onSnapshot((snapshot) =>
                setPeople([...shuffle(snapshot.docs.map((doc) => doc.data()))])
            )
        }

        wrapper().then(() => console.log('Successfully fetched the gang'))
    }, [])

    const reload = () => window.location.reload(false)

    return (
        <div className="cards-container">
            <div className="lastCard" onClick={() => reload()}>
                <h2>You've got though all your matches. Click to refresh</h2>
            </div>
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                    <div
                        className="card"
                        style={{ backgroundImage: `url(${person.imageUrl})` }}
                    >
                        <h2>{person.name}</h2>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default Cards
