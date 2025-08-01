import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMentalismGame } from './hooks/useMentalismGame'
import { WelcomeStep } from './components/steps/WelcomeStep'
import { ThinkNumberStep } from './components/steps/ThinkNumberStep'
import { CalculationStep } from './components/steps/CalculationStep'
import { SymbolTableStep } from './components/steps/SymbolTableStep'
import { RevealStep } from './components/steps/RevealStep'
import { Background } from './components/ui/Background'
import { StepIndicator } from './components/ui/StepIndicator'
import './styles/App.css'

const TOTAL_STEPS = 5

function App() {
  const { currentStep, symbolMap, magicSymbol, nextStep, prevStep, restart } = useMentalismGame()

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={nextStep} />
      case 1:
        return <ThinkNumberStep onNext={nextStep} onPrev={prevStep} />
      case 2:
        return <CalculationStep onNext={nextStep} onPrev={prevStep} />
      case 3:
        return <SymbolTableStep symbolMap={symbolMap} onNext={nextStep} onPrev={prevStep} />
      case 4:
        return <RevealStep magicSymbol={magicSymbol} onRestart={restart} onPrev={prevStep} />
      default:
        return <WelcomeStep onNext={nextStep} />
    }
  }

  return (
    <div className="app">
      <Background />
      
      <div className="app-container">
        <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        
        <main className="app-main">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="step-container"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App