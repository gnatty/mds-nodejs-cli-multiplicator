let args            = require('minimist')(process.argv.slice(2));
let cliTable        = require('cli-table');
let getCurrentDate  = require('./date.js');
let table           = [];
let multi           = null;

let tableOutput = new cliTable({
    head: ['Table', 'Multiplicator', 'Result', 'Execution time']
});

try {

  let _table = (typeof args.t!='undefined') ? args.t : args.table;
  let _multi = (typeof args.m!='undefined') ? args.m : args.multi;


  // -- try arguments.
  if(typeof _table == 'undefined' || typeof _multi == 'undefined') {
    throw Error('Error');
  }

  // --- Try multiplicator.
  if( !Number.isInteger(parseInt(_multi)) ) {
    throw Error('Error');
  }
  multi = parseInt(_multi);

  // --- Try table.
  if(typeof JSON.parse(_table) == 'object') {

    JSON.parse(_table).map( (val) => {
      if( !Number.isInteger(parseInt(val)) ) {
        throw Error('Error');
      }
      table.push(parseInt(val));
    });
  } else if( Number.isInteger(parseInt(_table)) ) {

    table.push(parseInt(_table));
  } else {

    throw Error('Error');
  }

} catch(err) {
  console.log('Wrong arguments !');
  console.log('Argument 1 must be an integer');
  console.log('Argument 2 must be an integer');
  process.exit(0);
}

/**
  * Print result.
  *
  */
table.map( (t) => {

  tableOutput.push([t, multi, '', '']);

  for(let m = 0; m <= multi; m++) {
    tableOutput.push([
      t,
      m,
      t*m,
      getCurrentDate()
    ]);
  }

  tableOutput.push(['', '', '', '']);
});

console.log(tableOutput.toString());
