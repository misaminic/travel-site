import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes $0 in Texas.");
	}
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "white");
jane.greet();
jane.payTaxes();