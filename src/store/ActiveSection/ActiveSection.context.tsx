import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react'

import { useThrottle } from '../../custom-hooks/useThrottle'

export const ActiveSectionContext = createContext({
  sections: [] as string[],
  setSectionInView: (() => null) as Dispatch<SetStateAction<{ id: string; inView: boolean }>>,
})

export const ActiveSectionContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [sectionInView, setSectionInView] = useState<{ id: string; inView: boolean }>({ id: '', inView: false })
  const [sections, setSections] = useState<string[]>([])

  const sectionsRef = useRef<string[]>([])

  const throttledSetSectionHandler = useThrottle(() => setSections(sectionsRef.current), 200)

  useEffect(() => {
    const { id, inView } = sectionInView

    if (!id) {
      return
    }

    const previousSections = sectionsRef.current
    sectionsRef.current = inView
      ? [...previousSections, id]
      : previousSections.filter((section) => section !== id)

    throttledSetSectionHandler()
  }, [sectionInView])

  return (
    <ActiveSectionContext.Provider value={{ sections, setSectionInView }} >
      {children}
    </ActiveSectionContext.Provider>
  )
}
