import React from "react";
import { PlusGrid, PlusGridItem } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement(PlusGrid, {
    reverse: true
  }, /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "Item 1")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "Item 2")), /*#__PURE__*/React.createElement(PlusGridItem, {
    xs: "2"
  }, /*#__PURE__*/React.createElement("div", null, "Item 3"))));
};

export default {
  "key": "reverse",
  "ports": {
    "javascript": {
      "template": "<plus-grid reverse>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      Item 1\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      Item 2\n    </div>    \n  </plus-grid-item>  \n  <plus-grid-item xs=\"2\">    \n    <div>\n      Item 3\n    </div>    \n  </plus-grid-item>  \n</plus-grid>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusGrid, PlusGridItem } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <PlusGrid reverse>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          Item 1\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          Item 2\n        </div>        \n      </PlusGridItem>      \n      <PlusGridItem xs=\"2\">        \n        <div>\n          Item 3\n        </div>        \n      </PlusGridItem>      \n    </PlusGrid>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <plus-grid reverse>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        Item 1\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        Item 2\n      </div>      \n    </plus-grid-item>    \n    <plus-grid-item xs=\"2\">      \n      <div>\n        Item 3\n      </div>      \n    </plus-grid-item>    \n  </plus-grid>  \n</div>",
      "script": ""
    }
  }
}