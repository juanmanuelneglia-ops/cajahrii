export function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconChevron({ up }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d={up ? 'M2 8l4-4 4 4' : 'M2 4l4 4 4-4'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconComputer() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconHeadset() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 13a8 8 0 0116 0" stroke="#fff" strokeWidth="2" />
      <rect x="3" y="12" width="5" height="7" rx="2" fill="#fff" />
      <rect x="16" y="12" width="5" height="7" rx="2" fill="#fff" />
    </svg>
  )
}

export function IconAccess() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="5" r="2.2" fill="#fff" />
      <path d="M5 10h14M8 10l-2 10M16 10l2 10M9 15h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ compact }) {
  return (
    <span className={`brand ${compact ? 'compact' : ''}`}>
      <span className="brand-mark" aria-hidden="true">
        ca
      </span>
      <span className="brand-name">Caja de Ahorros</span>
    </span>
  )
}

export function CasaMasMark() {
  return (
    <span className="casa-mark">
      <svg viewBox="0 0 220 78" width="220" height="78" aria-hidden="true">
        <path
          d="M18 40 L110 8 L202 40 V70 H18 Z"
          fill="none"
          stroke="#7dd8f5"
          strokeWidth="3"
        />
        <text x="38" y="58" fill="#7dd8f5" fontSize="34" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">
          Casa
        </text>
        <text x="128" y="58" fill="#fff" fontSize="34" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">
          Más
        </text>
      </svg>
    </span>
  )
}

export function Mascot() {
  return (
    <svg className="mascot" viewBox="0 0 220 220" width="220" height="220" aria-hidden="true">
      <circle cx="110" cy="110" r="104" fill="#0b4f94" />
      <circle cx="110" cy="110" r="92" fill="#0e63b5" />
      <ellipse cx="58" cy="78" rx="22" ry="46" fill="#f4f7fb" transform="rotate(-18 58 78)" />
      <ellipse cx="162" cy="78" rx="22" ry="46" fill="#f4f7fb" transform="rotate(18 162 78)" />
      <ellipse cx="58" cy="82" rx="10" ry="24" fill="#d7e3f0" transform="rotate(-18 58 82)" />
      <ellipse cx="162" cy="82" rx="10" ry="24" fill="#d7e3f0" transform="rotate(18 162 82)" />
      <ellipse cx="110" cy="128" rx="58" ry="52" fill="#f7fbff" />
      <circle cx="110" cy="96" r="42" fill="#f7fbff" />
      <ellipse cx="86" cy="102" rx="10" ry="12" fill="#1a2433" />
      <ellipse cx="134" cy="102" rx="10" ry="12" fill="#1a2433" />
      <circle cx="89" cy="99" r="3" fill="#fff" />
      <circle cx="137" cy="99" r="3" fill="#fff" />
      <ellipse cx="110" cy="118" rx="9" ry="6" fill="#2b2b2b" />
      <path d="M101 128c6 8 22 8 28 0" stroke="#2b2b2b" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 118c8 10 8 18 0 24M150 118c-8 10-8 18 0 24" stroke="#f2a0b4" strokeWidth="6" fill="none" />
      <path d="M78 58h64l-8 22H86z" fill="#0b4f94" />
      <rect x="72" y="48" width="76" height="16" rx="6" fill="#08386b" />
      <circle cx="110" cy="56" r="5" fill="#3ec6f0" />
      <path d="M96 132c8 14 20 14 28 0" fill="#c62828" />
      <rect x="104" y="124" width="12" height="18" rx="3" fill="#b71c1c" />
      <path d="M148 148c12-4 22 6 16 18" stroke="#f7fbff" strokeWidth="10" strokeLinecap="round" />
      <circle cx="168" cy="168" r="10" fill="#f7fbff" />
    </svg>
  )
}
