import { Element } from '@htmlplus/element';
import { Grid } from "TODO";
import { Grid.Item } from "TODO";
import { Grid.Item } from "TODO";
import { Grid.Item } from "TODO";

const GridOffset = () => {
  return <>    
    <Grid>      
      <Grid.Item xs="3">        
        <div>
          xs=3
        </div>        
      </Grid.Item>      
      <Grid.Item offsetXs="3" xs="3">        
        <div>
          offset-xs="3", xs=3
        </div>        
      </Grid.Item>      
      <Grid.Item xs="3">        
        <div>
          xs=3
        </div>        
      </Grid.Item>      
    </Grid>    
  </>;
};

export default GridOffset;