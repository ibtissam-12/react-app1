function App() {
    const [count, setCount] = React.useState(0);
  
    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);
  
    return (
      React.createElement("div", null,
        React.createElement("h1", null, "🕋 Tasbih Digital"),
        React.createElement("div", { className: "counter" }, count),
        React.createElement("button", { className: "btn-count", onClick: increment }, "📿 Compter"),
        React.createElement("button", { className: "btn-reset", onClick: reset }, "🔄 Réinitialiser")
      )
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
  
  
  