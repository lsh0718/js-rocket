	var car = {
			make: "VW",
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat 1',
				'seat 2',
				'seat 3',
				'seat 4'
				],
				turnOn: function(){
					this.isTurnedOn = TRUE;
				},
				fly: function(){
					alert('fly');
				},
				switchCar: function(isOn){
					if (isOn==true) {
						this.isTurnedOn = true;
					} else {
						this.isTurnedOn = false;
					}
				}

		};
		console.log('hello there friends!');