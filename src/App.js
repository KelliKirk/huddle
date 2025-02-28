import { ThemeProvider } from "styled-components"; 
import Header from "./components/header";
import { Container } from "./components/styles/container.styles"; 
import GlobalStyles from "./components/styles/global";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',


  } 
} 

function App() {
  return (
   <ThemeProvider theme = {theme} >
    <>
    <GlobalStyles />
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>
    </ThemeProvider> 
  );
}

export default App;
