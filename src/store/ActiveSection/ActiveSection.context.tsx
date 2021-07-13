import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react'

import { useThrottle } from '../../custom-hooks/useThrottle'
import { SectionInView } from '../../types'

export const ActiveSectionContext = createContext({
  sections: [] as Pick<SectionInView, 'id' | 'scrollPosition'>[],
  setSectionInView: (() => null) as Dispatch<SetStateAction<SectionInView>>,
})

export const ActiveSectionContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [sectionInView, setSectionInView] = useState<SectionInView>({ id: '', inView: false, scrollPosition: 0 })
  const [sections, setSections] = useState<Pick<SectionInView, 'id' | 'scrollPosition'>[]>([])

  const sectionsRef = useRef<Pick<SectionInView, 'id' | 'scrollPosition'>[]>([])

  const throttledSetSectionHandler = useThrottle(() => setSections(sectionsRef.current), 100)

  useEffect(() => {
    const { id, inView, scrollPosition } = sectionInView

    if (!id) {
      return
    }

    const previousSections = sectionsRef.current

    const [lastSection] = previousSections.sort((previous, current) => previous.scrollPosition - current.scrollPosition).slice(-1)

    sectionsRef.current = inView
      ? lastSection && lastSection.scrollPosition > scrollPosition
        ? [{ id, scrollPosition }, ...previousSections]
        : [...previousSections, { id, scrollPosition }]
      : previousSections.filter(({ id: sectionId }) => sectionId !== id)

    throttledSetSectionHandler()
  }, [sectionInView])

  return (
    <ActiveSectionContext.Provider value={{ sections, setSectionInView }} >
      {children}
    </ActiveSectionContext.Provider>
  )
}
