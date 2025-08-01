import { motion } from 'framer-motion'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card'
import { Button } from '../ui/Button'
import './WelcomeStep.css'

/**
 * Componente do passo de boas-vindas
 * Introduz o usuário ao jogo de mentalismo
 * 
 * @param {Function} onNext - Função chamada para avançar para o próximo passo
 */
export function WelcomeStep({ onNext }) {
  return (
    <Card className="welcome-step">
      <CardHeader 
        title="🔮 O Mentalista"
        subtitle="Prepare-se para uma experiência que vai desafiar sua mente"
      />
      
      <CardContent>
        <motion.div 
          className="welcome-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="welcome-description">
            <p>
              Vou provar que consigo <strong>ler a sua mente</strong> através de um truque 
              matemático fascinante. Tudo o que você precisa fazer é seguir minhas 
              instruções com atenção.
            </p>
            
            <div className="welcome-features">
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <span className="feature-icon">🧠</span>
                <span>Leitura mental</span>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <span className="feature-icon">🔮</span>
                <span>Energia psíquica</span>
              </motion.div>
              
              <motion.div 
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <span className="feature-icon">✨</span>
                <span>Experiência única</span>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="welcome-warning"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <div className="warning-icon">⚠️</div>
            <p>
              <strong>Importante:</strong> Para que a conexão mental seja estabelecida, 
              siga cada instrução com total concentração.
            </p>
          </motion.div>
        </motion.div>
      </CardContent>
      
      <CardFooter>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <Button 
            onClick={onNext}
            size="lg"
            className="welcome-button"
          >
            🚀 Estou Pronto para Começar
          </Button>
        </motion.div>
        
        <motion.p 
          className="welcome-disclaimer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        >
          Prepare sua mente para uma experiência extraordinária de leitura mental ✨
        </motion.p>
      </CardFooter>
    </Card>
  )
}