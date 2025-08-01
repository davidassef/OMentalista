import { motion } from 'framer-motion'
import './Card.css'

/**
 * Componente Card reutilizável com animações e estilos consistentes
 * 
 * @param {React.ReactNode} children - Conteúdo do card
 * @param {string} className - Classes CSS adicionais
 * @param {Object} motionProps - Props adicionais para o motion.div
 */
export function Card({ children, className = '', ...motionProps }) {
  return (
    <motion.div
      className={`card ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

/**
 * Variante do Card com efeito de brilho
 */
export function GlowCard({ children, className = '', ...motionProps }) {
  return (
    <motion.div
      className={`card card-glow ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

/**
 * Header do Card com título e subtítulo
 */
export function CardHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`card-header ${className}`}>
      {title && (
        <motion.h1 
          className="card-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {title}
        </motion.h1>
      )}
      {subtitle && (
        <motion.p 
          className="card-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

/**
 * Conteúdo do Card
 */
export function CardContent({ children, className = '' }) {
  return (
    <motion.div 
      className={`card-content ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Footer do Card com ações
 */
export function CardFooter({ children, className = '' }) {
  return (
    <motion.div 
      className={`card-footer ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      {children}
    </motion.div>
  )
}