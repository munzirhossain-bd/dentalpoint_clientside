import { motion } from "framer-motion"

export const ButtonAnimation = (props) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >{props.element}</motion.button>
)