/*eslint no-unused-vars: 0*/

import FabricCanvasTool from './fabrictool'

const fabric = require('fabric').fabric;

class Text extends FabricCanvasTool {

  configureCanvas(props) {
    let canvas = this._canvas;
    canvas.isDrawingMode = canvas.selection = false;
    canvas.forEachObject((o) => o.selectable = o.evented = false);
    this._width = props.lineWidth;
    this._color = props.lineColor;
    this._fill = props.fillColor;
  }

  doMouseDown(o) {
    let canvas = this._canvas;
    let activeObj = canvas.getActiveObject();

    if(!o.target && !activeObj){
        this.isDown = true;
        let pointer = canvas.getPointer(o.e);
        this.startX = pointer.x;
        this.startY = pointer.y;
        this.text = new fabric.IText('', {
            left: this.startX,
            top: this.startY,
          }
        )
        canvas.add(this.text);
        canvas.setActiveObject(this.text);
        this.text.enterEditing();
        this.text.hiddenTextarea.focus();
    }
  }

  doMouseUp(o) {
    this.isDown = false;
  }
}

export default Text;