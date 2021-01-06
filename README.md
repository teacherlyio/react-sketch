# React-sketch-whiteboard-tool

Forked from [nakusyat/react-sketch](https://github.com/nakusyat/react-sketch)
And from [tboils/react-sketch](https://github.com/tbolis/react-sketch)

### Info

A Sketch tool for React based applications, backed-up by [FabricJS](http://fabricjs.com/)

## Installation

```sh
npm install react-sketch-whiteboard-tool --save
```

or with yarn

```sh
yarn add react-sketch-whiteboard-tool
```

## Usage

Import the relevant SketchField component and use it, you can find more on the examples folder of the project

```javascript
import { SketchField, Tools } from 'eact-sketch-whiteboard-tool';

class SketchFieldDemo extends React.Component {
     render() {
        return (
            <SketchField width='1024px' 
               height='768px' 
               tool={Tools.Pencil} 
               lineColor='black'
               lineWidth={3}
            />
        )
     }
}
```

## Examples

The project includes a webpack server for running the examples, just run:

```sh
git clone https://github.com/tbolis/react-sketch.git
yarn install
npm start
```

and navigate to http://localhost:23000

You can as well check the live showcase here: http://tbolis.github.io/showcase/react-sketch/

### Additional info

- Added `disableMultipleSelection` prop for disable multiple selection