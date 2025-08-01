import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card'
import { Button } from '../ui/Button'
import './SymbolTableStep.css'

/**
 * Componente do passo da tabela de símbolos
 * Exibe uma tabela paginada com símbolos para o usuário encontrar o correspondente ao seu resultado
 * 
 * @param {Object} symbolMap - Mapa de símbolos gerado pelo hook
 * @param {Function} onNext - Função chamada para avançar para o próximo passo
 * @param {Function} onPrev - Função chamada para voltar ao passo anterior
 */
export function SymbolTableStep({ symbolMap, onNext, onPrev }) {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 20
  const totalPages = Math.ceil(100 / itemsPerPage)
  
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, 100)
    const items = []
    
    for (let i = startIndex; i < endIndex; i++) {
      items.push({
        number: i,
        symbol: symbolMap.get(i)
      })
    }
    
    return items
  }
  
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  const goToPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <Card className="symbol-table-step">
      <CardHeader 
        title="🔍 Encontre Seu Símbolo"
        subtitle="Procure o número do seu resultado na tabela abaixo"
      />
      
      <CardContent>
        <motion.div 
          className="symbol-table-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="instruction-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p>
              Encontre o número que você fixou em sua mente na tabela abaixo e 
              <strong> memorize o símbolo</strong> que está abaixo dele.
            </p>
          </motion.div>
          
          <motion.div 
            className="table-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="symbol-grid">
              {getCurrentPageItems().map((item, index) => (
                <motion.div
                  key={item.number}
                  className="symbol-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.6 + (index * 0.05)
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)"
                  }}
                >
                  <div className="item-number">{item.number}</div>
                  <div className="item-symbol">{item.symbol}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="pagination-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <div className="pagination-controls">
              <Button
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                variant="ghost"
                size="sm"
                className="pagination-button"
              >
                <ChevronLeft size={16} />
                Anterior
              </Button>
              
              <div className="page-indicators">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`page-indicator ${
                      index === currentPage ? 'active' : ''
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                variant="ghost"
                size="sm"
                className="pagination-button"
              >
                Próxima
                <ChevronRight size={16} />
              </Button>
            </div>
            
            <div className="page-info">
              Página {currentPage + 1} de {totalPages} • 
              Números {currentPage * itemsPerPage} - {Math.min((currentPage + 1) * itemsPerPage - 1, 99)}
            </div>
          </motion.div>
          
          <motion.div 
            className="table-tip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
          >
            <div className="tip-icon">💡</div>
            <div className="tip-content">
              <strong>Dica:</strong> Use as setas ou clique nos números para navegar 
              entre as páginas da tabela.
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
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <Button 
              onClick={onNext}
              size="lg"
              className="next-button"
            >
              ✅ Já Memorizei o Símbolo
            </Button>
          </motion.div>
        </div>
      </CardFooter>
    </Card>
  )
}