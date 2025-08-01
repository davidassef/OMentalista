import { motion } from 'framer-motion'
import './Button.css'

/**
 * Componente Button reutilizável com animações e variantes
 * 
 * @param {React.ReactNode} children - Conteúdo do botão
 * @param {string} variant - Variante do botão (primary, secondary, ghost)
 * @param {string} size - Tamanho do botão (sm, md, lg)
 * @param {boolean} disabled - Se o botão está desabilitado
 * @param {boolean} loading - Se o botão está em estado de carregamento
 * @param {Function} onClick - Função chamada ao clicar
 * @param {string} className - Classes CSS adicionais
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  onClick,
  className = '',
  ...props 
}) {
  const buttonClass = `
    button 
    button-${variant} 
    button-${size} 
    ${loading ? 'button-loading' : ''}
    ${className}
  `.trim()

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      {loading && (
        <motion.div 
          className="button-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          ⟳
        </motion.div>
      )}
      <span className={loading ? 'button-text-hidden' : 'button-text'}>
        {children}
      </span>
    </motion.button>
  )
}

/**
 * Botão com ícone
 */
export function IconButton({ 
  icon, 
  children, 
  iconPosition = 'left',
  ...props 
}) {
  return (
    <Button {...props}>
      <div className={`button-with-icon button-icon-${iconPosition}`}>
        {iconPosition === 'left' && <span className="button-icon">{icon}</span>}
        <span>{children}</span>
        {iconPosition === 'right' && <span className="button-icon">{icon}</span>}
      </div>
    </Button>
  )
}

/**
 * Grupo de botões
 */
export function ButtonGroup({ children, className = '' }) {
  return (
    <div className={`button-group ${className}`}>
      {children}
    </div>
  )
}