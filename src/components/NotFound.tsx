import { useRef, useState } from 'react'
import '../styles/index.css'
import { motion } from 'framer-motion'

const messages: string[] = [
    "Don't leave shiggy alone!",
    'Shiggy needs you!',
    ':c why did you leave shiggy alone?',
    'u dumb',
    'vencord is very cool!',
    'meow',
    'nyah',
    '() => {}',
    "i'm so eepy",
    'powered by monster',
    'uwu',
    'damn you look lost',
    'did you know 1+1=3?',
]

function NotFound() {
    const parentRef = useRef(null)

    const randomiseString = () => {
        const randomIndex = Math.floor(Math.random() * messages.length)
        return messages[randomIndex]
    }

    const [string, setString] = useState<string>(randomiseString())

    return (
        <motion.div
            ref={parentRef}
            className="shiggy-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.75,
                delay: 0.5,
            }}
        >
            <motion.img
                draggable="false"
                dragConstraints={parentRef}
                drag
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                dragElastic={0.2}
                src="/shiggy.gif"
                alt="Shiggy :3"
            />

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.75,
                    delay: 0.75,
                }}
            >
                404 - Not Found
            </motion.h1>
            <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.75,
                    delay: 1,
                }}
                onClick={() => setString(randomiseString())}
            >
                {string}
            </motion.span>
        </motion.div>
    )
}

export default NotFound
