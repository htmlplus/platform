import { Breadcrumb } from "TODO";
import { Breadcrumb } from "TODO";
import { Breadcrumb } from "TODO";

const BreadcrumbSeparator = () => {
  return <>    
    <div className="container">      
      <Breadcrumb separator="\">        
        <a href="#">          First</a>        
        <a href="#">          Second</a>        
        <a href="#">          Third</a>        
        <a href="#">          Fourth</a>        
        <a href="#">          Fifth</a>        
      </Breadcrumb>      
    </div>    
    <div className="container">      
      <Breadcrumb separator="-">        
        <a href="#">          First</a>        
        <a href="#">          Second</a>        
        <a href="#">          Third</a>        
        <a href="#">          Fourth</a>        
        <a href="#">          Fifth</a>        
      </Breadcrumb>      
    </div>    
    <div className="container">      
      <Breadcrumb separator="/">        
        <a href="#">          First</a>        
        <a href="#">          Second</a>        
        <a href="#">          Third</a>        
        <a href="#">          Fourth</a>        
        <a href="#">          Fifth</a>        
      </Breadcrumb>      
    </div>    
  </>;
};

export default BreadcrumbSeparator;