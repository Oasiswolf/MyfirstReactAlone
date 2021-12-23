import React from 'react'
import Dice from 'react-dice-roll'

export default function() {
    return(
          
        <Dice rollingTime={2500} onRoll={value} faces={[1, 2, 3, 4]} defaultValue={4} />

    )
}