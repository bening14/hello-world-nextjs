const React = require('react')

function Home() {
  return React.createElement('div', {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f9ff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }
  }, [
    React.createElement('h1', {
      key: 'title',
      style: {
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#0369a1',
        marginBottom: '24px'
      }
    }, 'Hello World! 🌍'),
    
    React.createElement('p', {
      key: 'subtitle',
      style: {
        fontSize: '20px',
        color: '#475569',
        maxWidth: '600px',
        lineHeight: '1.6',
        marginBottom: '32px'
      }
    }, 'Ini adalah aplikasi Next.js sederhana yang dibuat oleh Nindya.'),
    
    React.createElement('div', {
      key: 'info',
      style: {
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        width: '100%'
      }
    }, [
      React.createElement('h2', {
        key: 'info-title',
        style: {
          fontSize: '24px',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '16px'
        }
      }, 'Informasi Aplikasi'),
      
      React.createElement('ul', {
        key: 'info-list',
        style: {
          listStyle: 'none',
          padding: '0',
          textAlign: 'left'
        }
      }, [
        React.createElement('li', {
          key: 'item1',
          style: {
            marginBottom: '12px',
            paddingLeft: '24px',
            position: 'relative'
          }
        }, [
          React.createElement('span', {
            key: 'bullet1',
            style: {
              position: 'absolute',
              left: '0',
              color: '#0ea5e9'
            }
          }, '• '),
          'Framework: Next.js'
        ]),
        
        React.createElement('li', {
          key: 'item2',
          style: {
            marginBottom: '12px',
            paddingLeft: '24px',
            position: 'relative'
          }
        }, [
          React.createElement('span', {
            key: 'bullet2',
            style: {
              position: 'absolute',
              left: '0',
              color: '#0ea5e9'
            }
          }, '• '),
          'Dibuat oleh: Nindya (Asisten AI SCM)'
        ]),
        
        React.createElement('li', {
          key: 'item3',
          style: {
            marginBottom: '12px',
            paddingLeft: '24px',
            position: 'relative'
          }
        }, [
          React.createElement('span', {
            key: 'bullet3',
            style: {
              position: 'absolute',
              left: '0',
              color: '#0ea5e9'
            }
          }, '• '),
          'Status: Testing GitHub push'
        ]),
        
        React.createElement('li', {
          key: 'item4',
          style: {
            paddingLeft: '24px',
            position: 'relative'
          }
        }, [
          React.createElement('span', {
            key: 'bullet4',
            style: {
              position: 'absolute',
              left: '0',
              color: '#0ea5e9'
            }
          }, '• '),
          'Tanggal: 14 April 2026'
        ])
      ])
    ]),
    
    React.createElement('footer', {
      key: 'footer',
      style: {
        marginTop: '40px',
        color: '#64748b',
        fontSize: '14px'
      }
    }, [
      'CV Solusi Cipta Media (SCM) • ',
      React.createElement('code', {
        key: 'code',
        style: {
          backgroundColor: '#e2e8f0',
          padding: '4px 8px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          marginLeft: '8px'
        }
      }, 'nindya@scm')
    ])
  ])
}

module.exports = Home