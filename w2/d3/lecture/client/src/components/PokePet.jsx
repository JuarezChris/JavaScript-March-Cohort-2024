import {React, useState} from 'react'
import { motion } from 'framer-motion'
import Magikarp from '../assets/clear_magikarp.webp'

const PokePet = (props) => {
    const {hp, hungry} = props

    const [pokeHp, setPokeHp] = useState(hp)
    const [pokeHungry, setPokeHungry] = useState(hungry)
    const [move, setMove] = useState(false)

    const [grow, setGrow] = useState(1)

    const feed = () => {
        setGrow(grow + 1)
        setPokeHungry(pokeHungry - 20)
        setPokeHp(pokeHp + 10)
    }

    const splash = () => {
        setPokeHp(() => pokeHp - 5)
        setMove(!move)
    }

return (
    <div className='pokeBall'>
        <h2>Hello world</h2>
        <div className='statsBox'>
            <h2>Stats</h2>
            <p>Hp: {pokeHp}</p>
            <p>Hungry: {pokeHungry}</p>
        </div>
        <motion.img 
            animate = {{ scale: grow }}
            transition = {{ bounce: 1, type: move? "spring" : null }}
            className='petImg'
            src={Magikarp} 
            alt="magikarp"
        />
    {/* <motion.img 
    className='petImg'
    src={Magikarp}
     alt=""
     initial={{ 
        scale: grow
     }}
     animate={{
        scale: grow
     }}
     transition={{
        duration: 1,
        type: splashAtk
     }}
      /> */}
    <div className='buttonBox'>
            <button onClick={feed}>Feed</button>
            <button onClick={(e) => splash()}>Splash Attack</button>
        </div>
    </div>
  )
}

export default PokePet