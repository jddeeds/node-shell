var fs = require('fs');

module.exports = {
  pwd: function() {
    if(args){
      process.stdout.write(process.cwd())
    }
      process.stdout.write(process.cwd())
  },
  date: function() {
    process.stdout.write(Date())
  },
  ls : function(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
    //process.stdout.write('hello');
    });
  },
//   newdate : function(){

//   var startTime = new Date;

//   setTimeout(function () {
//     var endTime = new Date;
//     console.log('Time elapsed: ', endTime - startTime, 'ms');
//   }, 500);

//   while (new Date - startTime < 1000) {};
// },

  echo : function(args){
    process.stdout.write(args)
 },

 cat : function(args){
  fs.readFile(args, function(err, data){
    if (err) throw err;
    console.log('data ', data);
    process.stdout.write(data);
  })
}

}
