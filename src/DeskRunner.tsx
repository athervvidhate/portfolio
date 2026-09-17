import { useEffect, useRef, useState } from 'react'

type RunnerMotion = { y: number; velocity: number; book: number; distance: number }

export function advanceRunner(m: RunnerMotion, dt: number) {
  m.velocity -= 1400 * dt
  m.y = Math.max(0, m.y + m.velocity * dt)
  if (!m.y) m.velocity = 0
  const speed = Math.min(285, 180 + m.distance / 160)
  m.book -= speed * dt
  m.distance += speed * dt
  if (m.book < -25) m.book = 420 + Math.random() * 120
  return m.book < 83 && m.book + 19 > 56 && m.y < 28
}

// One book at a time keeps every jump possible, even as the pace increases.
export default function DeskRunner({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<'ready' | 'running' | 'over'>('ready')
  const [frame, setFrame] = useState({ y: 0, book: 420, score: 0 })
  const motion = useRef({ y: 0, velocity: 0, book: 420, distance: 0 })
  const control = useRef<HTMLButtonElement>(null)

  useEffect(() => { control.current?.focus() }, [])
  useEffect(() => {
    if (phase !== 'running') return
    let request = 0
    let previous = 0
    const tick = (time: number) => {
      const dt = previous ? Math.min((time - previous) / 1000, 0.032) : 0
      previous = time
      const m = motion.current
      const hit = advanceRunner(m, dt)
      setFrame({ y: m.y, book: m.book, score: Math.floor(m.distance / 10) })
      if (hit) {
        setPhase('over')
        return
      }
      request = requestAnimationFrame(tick)
    }
    request = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(request)
  }, [phase])

  const jump = () => {
    if (phase !== 'running') {
      motion.current = { y: 0, velocity: 0, book: 420, distance: 0 }
      setFrame({ y: 0, book: 420, score: 0 })
      setPhase('running')
    } else if (motion.current.y === 0) motion.current.velocity = 390
  }

  return <div className="desk-screen desk-monitor-screen desk-runner" onKeyDown={event => {
    if (event.key === 'Escape') { event.stopPropagation(); onClose() }
  }}>
    <div className="runner-bar"><span>DESK DINO / {String(frame.score).padStart(4, '0')}</span><button onClick={onClose} aria-label="Close game">×</button></div>
    <button ref={control} className="runner-play" onClick={jump} aria-label={phase === 'running' ? 'Jump' : phase === 'over' ? 'Play again' : 'Start Desk Dino'} onKeyDown={event => {
      if ([' ', 'ArrowUp', 'Enter'].includes(event.key)) {
        event.preventDefault()
        if (!event.repeat) jump()
      }
    }}>
      <svg viewBox="0 0 400 160" aria-hidden="true">
        <path d="M0 132H400" stroke="#728776"/>
        {[0,1,2,3,4].map(i => <path key={i} d={`M${(i * 100 - frame.score * 2 % 100)} 143h18`} stroke="#a3b09b"/>)}
        <path d="M290 29h23v-6h21v6h17" fill="none" stroke="#a3b09b"/>
        <g transform={`translate(52 ${132 - frame.y})`} fill="#315849">
          <path d="M0-28L9-19H17V-39H38V-22H26V-14H33V-9H26V-13H21V-3H26V0H17V-11H12V0H4V-3H8V-13L0-19Z"/>
          <rect x="29" y="-35" width="3" height="3" fill="#edf0df"/>
          <path d="M27-26h11" stroke="#edf0df" strokeWidth="2"/>
          <rect x="11" y="-26" width="9" height="15" rx="2" fill="#bc7756"/>
        </g>
        <g transform={`translate(${frame.book} 103)`}>
          <rect width="20" height="29" rx="2" fill="#b47b51"/><path d="M4 0v29M7 7h10M7 11h10" stroke="#e8d9b8"/>
        </g>
        {phase !== 'running' && <g><rect x="104" y="49" width="228" height="57" rx="3" fill="#e6ead8"/><text x="218" y="71" textAnchor="middle" fill="#315849" fontSize="16" fontFamily="Georgia,serif">{phase === 'over' ? 'Mind the books.' : 'A little study break.'}</text><text x="218" y="91" textAnchor="middle" fill="#315849" fontSize="10">{phase === 'over' ? 'Tap to try again' : 'Tap to run'}</text></g>}
      </svg>
    </button>
    <p className="runner-help" aria-live="polite">{phase === 'over' ? `Score ${frame.score}. Tap to restart.` : 'Space / ↑ / tap to jump'}</p>
  </div>
}
