import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import './App.css';
import TextBlock from './textBlock';

function App() {
  return (
    <div className="App">
    <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
      <ParallaxLayer offset={0} speed={-0.1} >
        <div className="animation_layer parallax" id="layer_0"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3} >
        <div className="animation_layer parallax" id="layer_1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.35} >
        <div className="animation_layer parallax" id="layer_2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4} >
        <div className="animation_layer parallax" id="layer_3"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3} >
        <div className="animation_layer parallax" id="layer_4"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.45} >
        <div className="animation_layer parallax" id="layer_5"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.35}>
        <TextBlock />
      </ParallaxLayer>
    </Parallax>
    </div>
  );
}

export default App;
