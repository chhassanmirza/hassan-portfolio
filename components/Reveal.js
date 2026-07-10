export default function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>;
}
