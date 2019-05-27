import React from 'react'

export default ({ children }) => (
  <div style={{  margin: '0 auto', maxWidth: 600 }}>
    {children}
    <footer style={{ marginTop: 10, display:'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: '1.2em' }}>By Jeftar Mascarenhas</p>
    </footer>
  </div>
)