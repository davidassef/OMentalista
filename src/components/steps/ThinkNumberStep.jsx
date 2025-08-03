import { motion } from 'framer-motion'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card'
import { Button } from '../ui/Button'
import './ThinkNumberStep.css'

/**
 * Componente do passo onde o usuário pensa em um número
 * Instrui o usuário a escolher um número de dois dígitos
 * 
 * @param {Function} onNext - Função chamada para avançar para o próximo passo
 * @param {Function} onPrev - Função chamada para voltar ao passo anterior
 */
export function ThinkNumberStep({ onNext, onPrev }) {
  return (
    <Card className="think-number-step">
      <CardHeader 
        title="🤔 Pense em um Número"
        subtitle="Escolha um número de dois dígitos"
      />
      
      <CardContent>
        <motion.div 
          className="think-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="instruction-main">
            <motion.p 
              className="instruction-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Pense em qualquer número de <strong>dois dígitos</strong> entre 10 e 99.
              <br />
              Pode ser qualquer um: sua idade, um número da sorte, ou simplesmente 
              o primeiro que vier à sua mente.
            </motion.p>
            
            <motion.div 
              className="number-display"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="number-placeholder">??</span>
            </motion.div>
          </div>
          
          <motion.div 
            className="examples-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h4>Exemplos válidos:</h4>
            <div className="examples-grid">
              <motion.div 
                className="example-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                25
              </motion.div>
              <motion.div 
                className="example-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                67
              </motion.div>
              <motion.div 
                className="example-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                43
              </motion.div>
              <motion.div 
                className="example-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                89
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="important-note"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <div className="note-icon">💡</div>
            <div className="note-content">
              <strong>Dica importante:</strong> Memorize bem o número que escolheu! 
              Você precisará dele nos próximos passos.
            </div>
          </motion.div>
          
          <motion.div 
            className="thinking-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <div className="brain-icon">🧠</div>
            <div className="thinking-dots">
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              >
                .
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
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            <Button 
              onClick={onNext}
              size="lg"
              className="next-button"
            >
              ✅ Já Pensei no Número
            </Button>
          </motion.div>
        </div>
      </CardFooter>
    </Card>
  )
}