import { motion } from 'framer-motion'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card'
import { Button } from '../ui/Button'
import './CalculationStep.css'

/**
 * Componente do passo de cálculo
 * Instrui o usuário a realizar operações matemáticas com o número escolhido
 * 
 * @param {Function} onNext - Função chamada para avançar para o próximo passo
 * @param {Function} onPrev - Função chamada para voltar ao passo anterior
 */
export function CalculationStep({ onNext, onPrev }) {
  return (
    <Card className="calculation-step">
      <CardHeader 
        title="🔮 Concentração Mental"
        subtitle="Vamos trabalhar com sua energia mental"
      />
      
      <CardContent>
        <motion.div 
          className="calculation-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="instruction-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p>
              Agora vamos canalizar sua energia mental através do número que você escolheu.
              <br />
              <strong>Siga cada passo com total concentração:</strong>
            </p>
          </motion.div>
          
          <div className="calculation-steps">
            <motion.div 
              className="calc-step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Una os dígitos mentalmente</h4>
                <p>
                  Pegue o número que você pensou e una os dois dígitos em sua mente.
                  <br />
                  <span className="example">Exemplo: se pensou em 47, una 4 + 7 = 11</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="calc-step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Transforme a energia</h4>
                <p>
                  Agora retire o resultado da união do seu número original.
                  <br />
                  <span className="example">Exemplo: 47 - 11 = 36</span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="calc-step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Fixe o número em sua mente</h4>
                <p>
                  Concentre-se intensamente nesse número final.
                  <br />
                  <span className="example">No nosso exemplo seria: 36</span>
                </p>
              </div>
            </motion.div>
          </div>
          

          <motion.div 
            className="calculation-tip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <div className="tip-icon">💡</div>
            <div className="tip-content">
              <strong>Dica:</strong> Mantenha total concentração durante o processo mental.
              O importante é chegar ao resultado correto!
            </div>
          </motion.div>
          
          <motion.div 
            className="thinking-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="calculator-icon">🧮</div>
            <div className="calculating-text">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Calculando...
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
      
      <CardFooter>
        <div className="step-buttons">
          <Button 
            onClick={onPrev}
            variant="ghost"
            size="md"
          >
            ← Voltar
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            <Button 
              onClick={onNext}
              size="lg"
              className="next-button"
            >
✅ Já Canalizei a Energia
            </Button>
          </motion.div>
        </div>
      </CardFooter>
    </Card>
  )
}