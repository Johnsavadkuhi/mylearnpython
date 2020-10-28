
const car = {
    name : 'car' , 
    start :function(){
        console.log('Start the ' + this.name);
    }, 
    speedup : function(){
        console.log('Speed up the ' + this.name);
    },
    stop :function(){
        console.log('Stop the ' + this.name);
    }

}

const aircraft = {
    name : 'aircraft', 
    fly: function(){
        console.log('Fly');
    }
}


//car.start.call(aircraft) 

car.start()