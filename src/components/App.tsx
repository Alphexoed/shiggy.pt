import { useRef } from 'react'
import '../styles/index.css'
import { motion } from 'framer-motion'

function App() {
    const parentRef = useRef(null);

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
                dragConstraints={parentRef}
                drag
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                dragElastic={.2}


                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.75,
                    delay: 0.75,
                }}
            >
                Shiggy
            </motion.h1>
        </motion.div>
    )
}

export default App
