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
    const distractionPool = shuffledSymbols.slice(1, 15)
    
    const symbolMap = new Map()
    
    // Preenche o mapa de símbolos
    for (let i = 0; i <= 99; i++) {
      if (i > 0 && i % 9 === 0) {
        // Números com energia especial recebem o símbolo mágico
        symbolMap.set(i, magicSymbol)
      } else {
        // Outros números recebem símbolos aleatórios
        const randomSymbol = distractionPool[
          Math.floor(Math.random() * distractionPool.length)
        ]
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