import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card'
import { Button } from '../ui/Button'
import './RevealStep.css'

/**
 * Componente do passo de revelação
 * Revela dramaticamente o símbolo "mágico" que o usuário pensou
 * 
 * @param {string} magicSymbol - O símbolo mágico a ser revelado
 * @param {Function} onRestart - Função chamada para reiniciar o jogo
 * @param {Function} onPrev - Função chamada para voltar ao passo anterior
 */
export function RevealStep({ magicSymbol, onRestart, onPrev }) {
  const [isRevealing, setIsRevealing] = useState(false)
  const [showSymbol, setShowSymbol] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  
  useEffect(() => {
    // Inicia a sequência de revelação após um pequeno delay
    const timer = setTimeout(() => {
      setIsRevealing(true)
      
      // Mostra o símbolo após a animação de buildup
      setTimeout(() => {
        setShowSymbol(true)
        setShowConfetti(true)
      }, 2000)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <Card className="reveal-step" variant={showSymbol ? 'glow' : 'default'}>
      <CardHeader 
        title="🔮 A Revelação"
        subtitle="O momento da verdade chegou..."
      />
      
      <CardContent>
        <motion.div 
          className="reveal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {!isRevealing && (
            <motion.div 
              className="pre-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p>
                Concentre-se no símbolo que você memorizou...
                <br />
                Estou lendo sua mente...
              </p>
              
              <div className="mind-reading-animation">
                <motion.div 
                  className="brain-waves"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🧠
                </motion.div>
                
                <div className="wave-lines">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="wave-line"
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {isRevealing && !showSymbol && (
            <motion.div 
              className="revealing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3
                animate={{ 
                  scale: [1, 1.1, 1],
                  color: ['#8b5cf6', '#f59e0b', '#8b5cf6']
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Eu vejo... Eu vejo...
              </motion.h3>
              
              <div className="crystal-ball">
                <motion.div 
                  className="crystal-sphere"
                  animate={{ 
                    rotateY: [0, 360],
                    boxShadow: [
                      '0 0 20px rgba(139, 92, 246, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.6)',
                      '0 0 20px rgba(139, 92, 246, 0.3)'
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="crystal-inner" />
                </motion.div>
              </div>
            </motion.div>
          )}
          
          {showSymbol && (
            <motion.div 
              className="symbol-reveal"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1,
                ease: "backOut",
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Você pensou neste símbolo:
              </motion.h2>
              
              <motion.div 
                className="magic-symbol"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {magicSymbol}
              </motion.div>
              
              <motion.div 
                className="reveal-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <h3>🎉 Incrível, não é?</h3>
                <p>
                  Através da leitura da sua energia mental, consegui captar exatamente
                  <br />
                  <strong>o símbolo que estava em sua mente!</strong>
                </p>
                
                <div className="mystical-explanation">
                  <p className="explanation-text">
                    A conexão entre mente e números é mais profunda do que imaginamos.
                    Sua concentração criou uma ponte energética que me permitiu
                    acessar seus pensamentos mais íntimos.
                  </p>
                  
                  <p className="final-message">
                    ✨ <em>"A mente humana é o maior mistério do universo"</em> ✨
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {showConfetti && (
            <div className="confetti-container">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="confetti-piece"
                  initial={{ 
                    opacity: 1,
                    y: -100,
                    x: Math.random() * 400 - 200,
                    rotate: 0
                  }}
                  animate={{ 
                    opacity: 0,
                    y: 400,
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 3,
                    delay: Math.random() * 2,
                    ease: "easeOut"
                  }}
                  style={{
                    backgroundColor: [
                      '#8b5cf6', '#f59e0b', '#10b981', 
                      '#ef4444', '#3b82f6', '#f97316'
                    ][Math.floor(Math.random() * 6)]
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </CardContent>
      
      <CardFooter>
        <div className="step-buttons">
          {showSymbol && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.5 }}
              className="final-buttons"
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Button 
                onClick={onRestart}
                size="lg"
                className="restart-button"
              >
                🔄 Jogar Novamente
              </Button>
            </motion.div>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}