/*eslint no-unused-vars: 0*/

import FabricCanvasTool from './fabrictool'

class Remove extends FabricCanvasTool {

  configureCanvas(props) {
    let canvas = this._canvas;

    canvas.isDrawingMode = false;
    canvas.selection = false;
    canvas.hoverCursor = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png"), auto';
  }

  doMouseDown(o) {
    let canvas = this._canvas;
    if(o.target) canvas.remove(o.target);
  }
}

export default Remove