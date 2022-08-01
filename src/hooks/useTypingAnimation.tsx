import {useEffect, useState} from 'react';

enum TypePhase {
  Typing,
  Paused,
  Deleting,
}

const TYPING_INTERVAL_MIN = 80
const TYPING_INTERVAL_MAX = 150
const TYPING_PAUSE_MS = 2000
const DELETING_INTERVAL = 50
const DELETING_PAUSE_MS = 500

const getRandomTypingInterval = () =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) +
  TYPING_INTERVAL_MIN

const useTypingAnimation = (text: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [phase, setPhase] = useState(TypePhase.Typing)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedText = text[selectedIndex].slice(
          0,
          typedText.length + 1,
        )

        if (nextTypedText === typedText) {
          setPhase(TypePhase.Paused)
          return
        }

        const timeout = setTimeout(() => {
          setTypedText(nextTypedText)
        }, getRandomTypingInterval())

        return () => clearTimeout(timeout)
      }
      case TypePhase.Deleting: {
        if (!typedText) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1
            setSelectedIndex(text[nextIndex] ? nextIndex : 0)
            setPhase(TypePhase.Typing)
          }, DELETING_PAUSE_MS)
          return () => clearTimeout(timeout)
        }

        const nextRemaining = text[selectedIndex].slice(
          0,
          typedText.length - 1,
        )

        const timeout = setTimeout(() => {
          setTypedText(nextRemaining)
        }, DELETING_INTERVAL)

        return () => clearTimeout(timeout)
      }
      case TypePhase.Paused:
      default:
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting)
        }, TYPING_PAUSE_MS)

        return () => clearTimeout(timeout)
    }
  }, [text, typedText, selectedIndex, phase])

  return {typedText}
};

export default useTypingAnimation;
