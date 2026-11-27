import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [reportOpen, setReportOpen] = useState(false)
  const [contactState, setContactState] = useState({
    open: false,
    defaultType: 'Enterprise Partnership',
  })

  const openReport = useCallback(() => setReportOpen(true), [])
  const closeReport = useCallback(() => setReportOpen(false), [])

  const openContact = useCallback((defaultType = 'Enterprise Partnership') => {
    setContactState({ open: true, defaultType })
  }, [])

  const closeContact = useCallback(() => {
    setContactState((previous) => ({ ...previous, open: false }))
  }, [])

  const value = useMemo(
    () => ({
      reportOpen,
      openReport,
      closeReport,
      contactOpen: contactState.open,
      contactDefaultType: contactState.defaultType,
      openContact,
      closeContact,
    }),
    [reportOpen, openReport, closeReport, contactState.open, contactState.defaultType, openContact, closeContact],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}
