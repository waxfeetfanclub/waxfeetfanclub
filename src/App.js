

import GlobalStyles from './styles/GlobalStyles';
import { light } from './styles/Themes';
import { ThemeProvider } from 'styled-components';
// import { Navigation } from 'swiper';
import Navigation from './components/Navigation'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Roadmap from './components/sections/Roadmap'
import Showcase from './components/sections/Showcase'
import Team from './components/sections/Team'
import Faq from './components/sections/Faq'


function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>

      <Navigation />
      <Home />
      <About />
      <Roadmap />
      <Showcase />
      <Team />
      <Faq />
      
      </ThemeProvider>
    </>
  );
}

export default App;
