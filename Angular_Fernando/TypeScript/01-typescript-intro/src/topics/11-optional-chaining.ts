export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Antonio',
}

const passenger2: Passenger = {
    name: 'Jose',
    children: ['Marta', 'Alejandro'],
}

const printChildren = (passanger: Passenger) => {
    const howManyChildren = passanger.children?.length || 0;

    console.log(passanger.name, howManyChildren);
}

printChildren(passenger1);