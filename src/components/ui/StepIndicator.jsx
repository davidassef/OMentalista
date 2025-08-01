import { motion } from 'framer-motion'
import './StepIndicator.css'

/**
 * Componente que mostra o progresso atual do usuário no jogo
 * 
 * @param {number} currentStep - Passo atual (0-5)
 * @param {number} totalSteps - Total de passos
 */
export function StepIndicator({ currentStep, totalSteps }) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i)
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="step-indicator">
      <div className="step-indicator-header">
        <h2 className="step-indicator-title">
          O Mentalista
        </h2>
        <div className="step-indicator-counter">
          {currentStep + 1} de {totalSteps}
        </div>
      </div>
      
      <div className="step-indicator-progress">
        <div className="step-indicator-track">
          <motion.div 
            className="step-indicator-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        <div className="step-indicator-dots">
          {steps.map((step) => (
            <motion.div
              key={step}
              className={`step-dot ${
                step <= currentStep ? 'step-dot-active' : 'step-dot-inactive'
              }`}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: step <= currentStep ? 1 : 0.8,
                opacity: step <= currentStep ? 1 : 0.5
              }}
              transition={{ duration: 0.3, delay: step * 0.1 }}
            >
              {step < currentStep && (
                <motion.div
                  className="step-dot-check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}