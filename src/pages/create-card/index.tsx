export default function MyCards() {
  return (
    <div>
      <iframe 
        src="https://ymssx.gitee.io/card/" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: '-1'
        }}></iframe>
    </div>
  );
}
