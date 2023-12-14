//Não confunda, um evento onClick no React é um evento próprio do React e não um evento nativo do JavaScript.
// O correto é React.MouseEvent e não MouseEvent.

const Button = () => {
    const handleClick = (event: React.MouseEvent) => {
      console.log(event.pageX);
    };
  
    return <button onClick={handleClick}>Comprar</button>;
  };
  
  export default Button;