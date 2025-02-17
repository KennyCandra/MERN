import { motion } from "motion/react"

function Try() {

    const variants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }
    return (
        <div>
            <motion.div variants={variants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 1 }}>
                <h1>Hello</h1>
            </motion.div>
        </div>
    )
}

export default Try
