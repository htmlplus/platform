import React from "react";
import { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from "@htmlplus/react";

const App = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "preview"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PlusDialogToggler, {
    connector: "dialog-full-height"
  }, "Open")), /*#__PURE__*/React.createElement(PlusDialog, {
    className: "fade",
    connector: "dialog-full-height",
    placement: "center",
    fullHeight: true
  }, /*#__PURE__*/React.createElement(PlusDialogContent, null, /*#__PURE__*/React.createElement(PlusDialogHeader, null, "Dialog Title"), /*#__PURE__*/React.createElement(PlusDialogBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/React.createElement(PlusDialogFooter, null, /*#__PURE__*/React.createElement(PlusDialogToggler, null, "Close")))));
};

export default {
  "key": "full-height",
  "ports": {
    "javascript": {
      "template": "<div>    \n  <plus-dialog-toggler connector=\"dialog-full-height\">\n    Open\n  </plus-dialog-toggler>    \n</div>  \n<plus-dialog class=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>    \n  <plus-dialog-content>      \n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>      \n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.\n    </plus-dialog-body>      \n    <plus-dialog-footer>        \n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>        \n    </plus-dialog-footer>      \n  </plus-dialog-content>    \n</plus-dialog>"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from \"react\";\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from \"@htmlplus/react\";\n\nconst App = () => {\n  return <>    \n    <div>      \n      <PlusDialogToggler connector=\"dialog-full-height\">\n        Open\n      </PlusDialogToggler>      \n    </div>    \n    <PlusDialog className=\"fade\" connector=\"dialog-full-height\" placement=\"center\" fullHeight>      \n      <PlusDialogContent>        \n        <PlusDialogHeader>\n          Dialog Title\n        </PlusDialogHeader>        \n        <PlusDialogBody>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.\n        </PlusDialogBody>        \n        <PlusDialogFooter>          \n          <PlusDialogToggler>\n            Close\n          </PlusDialogToggler>          \n        </PlusDialogFooter>        \n      </PlusDialogContent>      \n    </PlusDialog>    \n  </>;\n};\n\nexport default App;"
    },
    "vue": {
      "template": "<div>  \n  <div>    \n    <plus-dialog-toggler connector=\"dialog-full-height\">\n      Open\n    </plus-dialog-toggler>    \n  </div>  \n  <plus-dialog class=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>    \n    <plus-dialog-content>      \n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>      \n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.\n      </plus-dialog-body>      \n      <plus-dialog-footer>        \n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>        \n      </plus-dialog-footer>      \n    </plus-dialog-content>    \n  </plus-dialog>  \n</div>",
      "script": ""
    }
  }
}