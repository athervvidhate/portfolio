/// <reference types="vite/client" />
import { lazy, Suspense } from 'react'
import FireReadyForests from './FireReadyForests'

const WorkbenchPortfolio = lazy(() => import('./PortfolioPrototype').then(module => ({ default: module.WorkbenchPortfolio })))
const PortfolioPrototype = import.meta.env.DEV ? lazy(() => import('./PortfolioPrototype')) : null

function App() {
  const isFireReady = window.location.hostname.startsWith('fireready.') || window.location.pathname.startsWith('/fire-ready-forests')
  return isFireReady
    ? <FireReadyForests />
    : PortfolioPrototype && new URLSearchParams(window.location.search).has('variant')
      ? <Suspense fallback={<p>Loading design preview...</p>}><PortfolioPrototype /></Suspense>
      : <Suspense fallback={<div className="portfolio-loading" aria-label="Loading portfolio"><div className="loading-header" /><div className="loading-heading" /><div className="loading-desk" /></div>}><WorkbenchPortfolio /></Suspense>
}

export default App
