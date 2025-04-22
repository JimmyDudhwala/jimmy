// components/ScrollLock.tsx
const ScrollLock: React.FC<{ locked: boolean; children: React.ReactNode }> = ({ locked, children }) => {
  return (
    <div className={`w-full ${locked ? 'overflow-hidden h-screen' : 'overflow-auto'}`}>
      {children}
    </div>
  )
}

export default ScrollLock