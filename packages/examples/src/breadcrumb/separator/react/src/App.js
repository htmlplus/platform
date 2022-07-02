import { Element } from '@htmlplus/element';
import { Breadcrumb } from "@htmlplus/react";

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