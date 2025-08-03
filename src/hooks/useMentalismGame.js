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
    
    const symbolMap = new Map()
    
    // 1. Escolhe um único símbolo mágico para todos os múltiplos de 9
    const magicSymbol = shuffledSymbols[0]
    
    // 2. Cria um pool de distração com todos os outros símbolos
    const distractionPool = shuffledSymbols.slice(1)

    // 3. Para cada "página" (dezena), escolhe um número aleatório para ser a "isca"
    const decoyNumbers = new Set()
    for (let page = 0; page < 10; page++) {
      const pageStart = page * 10
      const pageEnd = pageStart + 9
      
      const availableDecoys = []
      for (let i = pageStart; i <= pageEnd; i++) {
        if (i % 9 !== 0) {
          availableDecoys.push(i)
        }
      }
      
      if (availableDecoys.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableDecoys.length)
        decoyNumbers.add(availableDecoys[randomIndex])
      }
    }

    // 4. Preenche o mapa de símbolos
    for (let i = 0; i <= 99; i++) {
      if (i % 9 === 0 || decoyNumbers.has(i)) {
        // Múltiplos de 9 e "iscas" recebem o símbolo mágico
        symbolMap.set(i, magicSymbol)
      } else {
        // Outros números recebem um símbolo aleatório do pool de distração
        const randomSymbol = distractionPool[Math.floor(Math.random() * distractionPool.length)]
        symbolMap.set(i, randomSymbol)
      }
    }
    
    return { symbolMap, magicSymbol }
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