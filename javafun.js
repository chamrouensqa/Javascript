const day = "wednessday";

switch(day){
    case 'monday':
        console.log('Today is monday');
        console.log('Go to meeting meetup');
        break;
    case 'tuesday':
        console.log('Today is tuesday');
        break;
    case 'wednessday':
        console.log('Today is wednessday');
        break;
    case 'Thursday':
        console.log('Today is Thursday');
        break;
    case 'friday':
        console.log('Today is friday');
        break;
    case 'saturday':
        console.log('Today is saturday');
        break;
    case 'sunday':
        console.log('Today is sunday');
        break;
    default:
        console.log('Not a valid day');
}

if (day === 'monday'){
    console.log("Today is monday");
} else if (day === 'tuesday' || day === 'wednessday'){
    console.log("Today is the middle day XD");
} else if (day === 'thursday' && day === 'friday'){
    console.log("Today is friday");
} else{
    console.log("hehe not a valid date....")
}

const name = 'John';
console.log(`I am ${2022-1998} year old, ${name}`);