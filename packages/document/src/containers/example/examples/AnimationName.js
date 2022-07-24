import { Animation, Grid } from "@htmlplus/react";

const AnimationName = () => {
  return <div className="ex-animation-name">    
    <Grid justifyContent="evenly" gutter="md">      
      <Grid.Item xs="12" sm="auto">        
        <Animation name="fade-in" iterations="Infinity" play>
          HTMLPLUS
        </Animation>        
      </Grid.Item>      
      <Grid.Item xs="12" sm="auto">        
        <Animation name="fade-out" iterations="Infinity" play>
          HTMLPLUS
        </Animation>        
      </Grid.Item>      
    </Grid>    
    <style>{".ex-animation-name plus-grid-item {  text-align: center;}"}</style></div>;
};

export default AnimationName;