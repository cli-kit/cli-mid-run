/**
 *  Emits the run event if there are no commands for the program.
 */
module.exports = function() {
  return function run(req, next) {
    var cmds = Object.keys(this._commands);
    if(!cmds.length) {
      this.emit('run', req);
    }
    next();
  }
}
