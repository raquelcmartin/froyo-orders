
// enter: vanilla, vanilla, vanilla, strawberry, coffee, coffee

// "please enter a list of comma-separated froyo flavors");

// const flavor = {
//     vanilla: 3,
//     strawberry: 1,
//     coffee: 2
// }




    let Firstquestion = prompt("please enter a list of comma-separated froyo flavors"); 

    // vanilla, vanilla, chocolate

    let onlineOrder = Firstquestion.split(","); // .split(/[ ,]+/)

    // I have an array of flavors

    function froyo(flavorsOrdered) {

        const Howmanyflavors = {};
        // empty object


        for (let i = 0; i < flavorsOrdered.length; i++ ) { // last index = length - 1
        let currentFlavor = flavorsOrdered[i].toLowerCase().trim();
        
        if (Howmanyflavors [currentFlavor] === undefined) { // haven't added to the object yet

            Howmanyflavors[currentFlavor] = 1; // setting it to 1 (first time seen)

        } else {
            Howmanyflavors[currentFlavor]++; // or, Im ADDING 1 to whats already there. can also use += 1
        }
    } 
        return(Howmanyflavors);
    }  

    console.table(froyo(onlineOrder));

// dot notation - does NOT work with VARIABLE key values, but if you KNOW the key, dot notation is prefered
// bracket notation (for objects)

