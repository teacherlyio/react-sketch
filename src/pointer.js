/*eslint no-unused-vars: 0*/

import FabricCanvasTool from './fabrictool'

const fabric = require('fabric').fabric;

class Pointer extends FabricCanvasTool {
  configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = false;
    canvas.forEachObject((o) => o.selectable = o.evented = false);
    canvas.discardActiveObject();
    canvas.defaultCursor = `url('/assets/pointer_tool.svg'), auto`;
    canvas.renderAll();
  }

}

export default Pointer;