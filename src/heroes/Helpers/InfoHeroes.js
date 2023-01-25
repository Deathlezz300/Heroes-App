import batman from '/heroes/dc-batman.jpg';
import arrow from '/heroes/dc-arrow.jpg';
import superman from '/heroes/dc-superman.jpg';
import flash from '/heroes/dc-flash.jpg';
import green from '/heroes/dc-green.jpg'
import wonder from '/heroes/dc-wonder.jpg';
import martian from '/heroes/dc-martian.jpg';
import robin from '/heroes/dc-robin.jpg';
import blue from '/heroes/dc-blue.jpg';
import black from '/heroes/dc-black.jpg';
import spider from '/heroes/marvel-spider.jpg';
import captain from  '/heroes/marvel-captain.jpg';
import iron from '/heroes/marvel-iron.jpg';
import thor from '/heroes/marvel-thor.jpg';
import hulk from '/heroes/marvel-hulk.jpg';
import wolverine from '/heroes/marvel-wolverine.jpg';
import dared from '/heroes/marvel-daredevil.jpg';
import hawkeye from '/heroes/marvel-hawkeye.jpg';
import cyclops from '/heroes/marvel-cyclops.jpg';
import silver from '/heroes/marvel-silver.jpg';
export const heroes = [
    {
        'id': 'dc-batman',
        'superhero':'Batman', 
        'publisher':'DC Comics', 
        'alter_ego':'Bruce Wayne',
        'first_appearance':'Detective Comics #27',
        'characters':'Bruce Wayne',
        'image':batman
    },
    {
        'id': 'dc-superman',
        'superhero':'Superman', 
        'publisher':'DC Comics', 
        'alter_ego':'Kal-El',
        'first_appearance':'Action Comics #1',
        'characters':'Kal-El',
        'image':superman
    },
    {
        'id': 'dc-flash',
        'superhero':'Flash', 
        'publisher':'DC Comics', 
        'alter_ego':'Jay Garrick',
        'first_appearance':'Flash Comics #1',
        'characters':'Jay Garrick, Barry Allen, Wally West, Bart Allen'
        ,'image':flash
    },
    {
        'id': 'dc-green',
        'superhero':'Green Lantern', 
        'publisher':'DC Comics', 
        'alter_ego':'Alan Scott',
        'first_appearance':'All-American Comics #16',
        'characters':'Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz'
        ,'image':green
    },
    {
        'id': 'dc-arrow',
        'superhero':'Green Arrow', 
        'publisher':'DC Comics', 
        'alter_ego':'Oliver Queen',
        'first_appearance':'More Fun Comics #73',
        'characters':'Oliver Queen',
        'image':arrow
    },
    {
        'id': 'dc-wonder',
        'superhero':'Wonder Woman', 
        'publisher':'DC Comics', 
        'alter_ego':'Princess Diana',
        'first_appearance':'All Star Comics #8',
        'characters':'Princess Diana',
        'image':wonder
    },
    {
        'id': 'dc-martian',
        'superhero':'Martian Manhunter', 
        'publisher':'DC Comics', 
        'alter_ego':'J\'onn J\'onzz',
        'first_appearance':'Detective Comics #225',
        'characters':'Martian Manhunter',
        'image':martian
    },
    {
        'id': 'dc-robin',
        'superhero':'Robin/Nightwing', 
        'publisher':'DC Comics', 
        'alter_ego':'Dick Grayson',
        'first_appearance':'Detective Comics #38',
        'characters':'Dick Grayson',
        'image':robin
    },
    {
        'id': 'dc-blue',
        'superhero':'Blue Beetle', 
        'publisher':'DC Comics', 
        'alter_ego':'Dan Garret',
        'first_appearance':'Mystery Men Comics #1',
        'characters':'Dan Garret, Ted Kord, Jaime Reyes',
        'image':blue
    },
    {
        'id': 'dc-black',
        'superhero':'Black Canary', 
        'publisher':'DC Comics', 
        'alter_ego':'Dinah Drake',
        'first_appearance':'Flash Comics #86',
        'characters':'Dinah Drake, Dinah Lance',
        'image':black
    },
    {
        'id': 'marvel-spider',
        'superhero':'Spider Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Peter Parker',
        'first_appearance':'Amazing Fantasy #15',
        'characters':'Peter Parker',
        'image':spider
    },
    {
        'id': 'marvel-captain',
        'superhero':'Captain America', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Steve Rogers',
        'first_appearance':'Captain America Comics #1',
        'characters':'Steve Rogers',
        'image':captain
    },
    {
        'id': 'marvel-iron',
        'superhero':'Iron Man', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Tony Stark',
        'first_appearance':'Tales of Suspense #39',
        'characters':'Tony Stark',
        'image':iron
    },
    {
        'id': 'marvel-thor',
        'superhero':'Thor', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Thor Odinson',
        'first_appearance':'Journey into Myster #83',
        'characters':'Thor Odinson',
        'image':thor
    },
    {
        'id': 'marvel-hulk',
        'superhero':'Hulk', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Bruce Banner',
        'first_appearance':'The Incredible Hulk #1',
        'characters':'Bruce Banner',
        'image':hulk
    },
    {
        'id': 'marvel-wolverine',
        'superhero':'Wolverine', 
        'publisher':'Marvel Comics', 
        'alter_ego':'James Howlett',
        'first_appearance':'The Incredible Hulk #180',
        'characters':'James Howlett',
        'image':wolverine
    },
    {
        'id': 'marvel-daredevil',
        'superhero':'Daredevil', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Matthew Michael Murdock',
        'first_appearance':'Daredevil #1',
        'characters':'Matthew Michael Murdock',
        'image':dared
    },
    {
        'id': 'marvel-hawkeye',
        'superhero':'Hawkeye', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Clinton Francis Barton',
        'first_appearance':'Tales of Suspense #57',
        'characters':'Clinton Francis Barton',
        'image':hawkeye
    },
    {
        'id': 'marvel-cyclops',
        'superhero':'Cyclops', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Scott Summers',
        'first_appearance':'X-Men #1',
        'characters':'Scott Summers',
        'image':cyclops
    },
    {
        'id': 'marvel-silver',
        'superhero':'Silver Surfer', 
        'publisher':'Marvel Comics', 
        'alter_ego':'Norrin Radd',
        'first_appearance':'The Fantastic Four #48',
        'characters':'Norrin Radd',
        'image':silver
    }
]