import { RefObject, useEffect } from 'react'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

type Props = {
  isVisibleModal: boolean
  target: RefObject<HTMLElement>
}

export function useBodyScrollLock({ isVisibleModal, target }: Props) {
  useEffect(() => {
    if (target.current === null) {
      return
    }

    if (isVisibleModal) {
      disableBodyScroll(target.current)
    } else {
      enableBodyScroll(target.current)
    }

    return () => clearAllBodyScrollLocks()
  }, [isVisibleModal, target])
}
