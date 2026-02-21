/**
 * smoothScroll(targetY, duration)
 *
 * Animates window scroll position from current to targetY
 * using a custom easeInOutCubic curve over `duration` ms.
 * Uses requestAnimationFrame — works in all browsers, no
 * dependency on CSS scroll-behavior or Next.js router.
 */
export function smoothScroll(targetY: number, duration = 900) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  // easeInOutCubic — slow start, fast middle, slow end
  function ease(t: number): number {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

/**
 * scrollToSection(id, offset)
 *
 * Smooth-scrolls to a DOM element by ID.
 * `offset` subtracts pixels from the top (e.g. 80 for a fixed navbar).
 */
export function scrollToSection(id: string, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  smoothScroll(top)
}
