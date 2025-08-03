import { useState, useMemo } from 'react'

/**
 * Hook personalizado para gerenciar o estado e lógica do jogo de mentalismo
 * 
 * Gerencia a experiência de leitura mental através de energia psíquica.
 * 
 * @returns {Object} Estado e funções do jogo
 */
export function useMentalismGame() {
  const [currentStep, setCurrentStep] = useState(0)
  const [gameId, setGameId] = useState(0) // Para forçar regeneração dos símbolos

  /**
   * Gera o mapeamento de símbolos para a experiência psíquica
   * Distribui os símbolos de acordo com a energia mental
   */
  const { symbolMap, magicSymbol } = useMemo(() => {
    const allSymbols = [
      '🌟', '🌙', '☀️', '❤️', '🔥', '💎', '🚀', '🎉', '💡', '🔑',
      '👑', '🎩', '🔮', '✨', '🍀', '🎯', '⚓', '🎁', '🎈', '🎲',
      '🧩', '🎨', '🎸', '🏆', '🥇', '🌍', '🧭', '⏳', '⚡', '💯',
      '🦋', '🌺', '🎭', '🎪', '🎵', '🎹', '🎺', '🎻', '🌈', '⭐'
    ]
    
    // Embaralha os símbolos para cada nova partida
    const shuffledSymbols = [...allSymbols].sort(() => Math.random() - 0.5)
    const magicSymbol = shuffledSymbols[0]
    const distractionPool = shuffledSymbols.slice(1)
    
    const symbolMap = new Map()
    
    // Para cada múltiplo de 9, cria um símbolo único que se repete exatamente uma vez na mesma página
    const pageSymbols = new Map() // Mapeia cada múltiplo de 9 para seu símbolo
    const usedSymbols = new Set()
    
    // Identifica os múltiplos de 9 e atribui símbolos únicos para cada um
    const magicNumbers = []
    for (let i = 9; i <= 99; i += 9) {
      magicNumbers.push(i)
      
      // Seleciona um símbolo único para este múltiplo de 9
      let symbolForThisMultiple
      do {
        symbolForThisMultiple = shuffledSymbols[Math.floor(Math.random() * shuffledSymbols.length)]
      } while (usedSymbols.has(symbolForThisMultiple))
      
      usedSymbols.add(symbolForThisMultiple)
      pageSymbols.set(i, symbolForThisMultiple)
    }
    
    // Para cada página, seleciona um número aleatório para repetir o símbolo do múltiplo de 9
    const decoyNumbers = new Map() // Mapeia múltiplo de 9 -> número que repetirá seu símbolo
    
    magicNumbers.forEach(multiple => {
      const pageStart = Math.floor((multiple - 1) / 10) * 10 + 1
      const pageEnd = pageStart + 9
      
      // Encontra todos os números da página que não são o próprio múltiplo de 9
      const availableNumbers = []
      for (let i = pageStart; i <= pageEnd; i++) {
        if (i !== multiple && i >= 10) { // Exclui números menores que 10
          availableNumbers.push(i)
        }
      }
      
      // Seleciona um número aleatório para repetir o símbolo
      if (availableNumbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableNumbers.length)
        const decoyNumber = availableNumbers[randomIndex]
        decoyNumbers.set(multiple, decoyNumber)
      }
    })
    
    // Preenche o mapa de símbolos para todos os números de 0 a 99
    for (let i = 0; i <= 99; i++) {
      if (i >= 10 && i % 9 === 0) {
        // Múltiplos de 9 (a partir de 18) recebem seu símbolo específico
        symbolMap.set(i, pageSymbols.get(i))
      } else if (i >= 10) {
        // Verifica se este número é o "isca" de algum múltiplo de 9
        let isDecoy = false
        for (const [multiple, decoy] of decoyNumbers.entries()) {
          if (i === decoy) {
            symbolMap.set(i, pageSymbols.get(multiple))
            isDecoy = true
            break
          }
        }
        
        if (!isDecoy) {
          // Números normais recebem símbolos aleatórios
          const randomSymbol = distractionPool[Math.floor(Math.random() * distractionPool.length)]
          symbolMap.set(i, randomSymbol)
        }
      } else {
        // Números de 0 a 9 recebem símbolos aleatórios
        const randomSymbol = distractionPool[Math.floor(Math.random() * distractionPool.length)]
        symbolMap.set(i, randomSymbol)
      }
    }
    
    // Retorna o símbolo do primeiro múltiplo de 9 como referência
    const firstMagicSymbol = pageSymbols.get(9) || magicSymbol
    
    return { symbolMap, magicSymbol: firstMagicSymbol }
  }, [gameId]) // Regenera quando gameId muda

  /**
   * Avança para o próximo passo
   */
  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
    // Scroll automático para o topo da página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  /**
   * Volta para o passo anterior
   */
  const prevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1))
  }

  /**
   * Reinicia o jogo
   */
  const restart = () => {
    setCurrentStep(0)
    setGameId(prev => prev + 1) // Força regeneração dos símbolos
    // Scroll automático para o topo da página
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  /**
   * Vai para um passo específico
   */
  const goToStep = (step) => {
    if (step >= 0 && step <= 5) {
      setCurrentStep(step)
    }
  }

  return {
    currentStep,
    symbolMap,
    magicSymbol,
    nextStep,
    prevStep,
    restart,
    goToStep
  }
}