//region Imports
import mixin from 'live-mixin'
import chalk from 'chalk'
//endregion

const colorNames = [
  'red',
  'green',
  //'yellow',
  'blue',
  'magenta',
  'cyan',
  //'bgRed',
  //'bgGreen',
  //'bgYellow',
  //'bgBlue',
  //'bgMagenta',
  //'bgCyan',
  //'bgWhite',
]

class ColorCode {

  colorIndex = 0

  colorMap = {}

  get(name) {
    // Assign color.
    let color = this.colorMap[name]
    if (!color) {
      color = this.colorMap[name] = colorNames[this.colorIndex++ % colorNames.length]
    }
    return chalk[color](name)
  }

}

const singleton = new ColorCode

const main = () => {
  const instance = new ColorCode
  return (name) => instance.get(name)
}

main.ColorCode = ColorCode

module.exports = main
