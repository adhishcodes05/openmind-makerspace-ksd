import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header 
      className="header"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '12px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <div className="logo">
          <img 
            src={logo} 
            alt="OpenMind Makerspace Logo"
            style={{ 
              height: '48px', 
              width: 'auto',
              display: 'block'
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
