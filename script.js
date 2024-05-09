
let exawatt_generators = 0
let gpt5 = false
let marry_dwarf = false
let free_lives = 0
let sealand_destroyed = false
let walrus_tusks = 0
let money = 0
let invented_agi = false
let became_pfp = false
let times_pope_lightning = 0
let sex_dif = false
let miras_pet = false
let own_moon = false
let google_press_release = false
let vetoing = false
let dead = false
let negated = 0
let presses = 0
//negate 15%
//veto 20%
let stung_by_scorpions = 0
//document.getElementById('veto').style.display = "none"




function handleButtonClick(index, effects) {
      console.log(`Button at index ${index} was clicked.`);
      if(index != -1)
        {
            effects.splice(index, 1);
        }
        const container = document.getElementById('veto');
        //container.style.display = "none"
        container.innerHTML = '';
        exec_effects(effects)
        vetoing = false
    }
function veto(effects)
{
    vetoing = true
    const container = document.getElementById('veto');
    
    //container.style.display = ""
    container.hidden = false
    const newText = document.createTextNode("Veto an effect:");
    const newParagraph = document.createElement('h3');
    newParagraph.appendChild(newText);
    container.appendChild(newParagraph);
    
    const button = document.createElement('button');
    button.textContent = "None";
    button.addEventListener('click', () => handleButtonClick(-1, effects));
    container.appendChild(button);
    
  effects.forEach((str, index) => {
    const button = document.createElement('button');
    button.textContent = str;
    button.addEventListener('click', () => handleButtonClick(index, effects));
    container.appendChild(button);
  });
    
}

function add_text(t, id = null)
{
    const container = document.getElementById('container');
    console.log(id)
    const e = document.getElementById(id);
    if(e)
    {
        container.removeChild(e)
    }
    
    // Create a new text node
    const newText = document.createTextNode(t);

    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    if(id)
    {
        newParagraph.id = id;
    }
    // Append the text node to the paragraph element
    newParagraph.appendChild(newText);


    // Get the first child of the container
    const firstChild = container.firstChild;

    // Prepend the new paragraph to the container
    if (firstChild) {
        container.insertBefore(newParagraph, firstChild);
    } else {
        container.appendChild(newParagraph); // If no children, append instead
    }
    
}

function restart_game()
{
    document.getElementById('agi').style.display = "none"
    document.getElementById('pet').style.display = "none"
    document.getElementById('thumbsup').style.display = "none"
    document.getElementById('cry').style.display = "none"
    exawatt_generators = 0
    gpt5 = false
    marry_dwarf = false
    free_lives = 0
    sealand_destroyed = false
    walrus_tusks = 0
    money = 0
    invented_agi = false
    became_pfp = false
    times_pope_lightning = 0
    sex_dif = false
    miras_pet = false
    own_moon = false
    google_press_release = false
    vetoing = false
    negated = 0
    presses = 0
    //negate 15%
    //veto 20%
    stung_by_scorpions = 0
    document.getElementById("container").innerHTML = ""
    document.getElementById("presses").innerHTML = ""
    document.getElementById("veto").innerHTML = ""
}

function end_game()
{
}



function press_button()
{
    if(invented_agi || dead || vetoing)
    {
        return
    }
    presses += 1
    const p = document.getElementById("presses")
    p.innerHTML = ""
    if(presses == 1)
    {
        p.appendChild(document.createTextNode("1 Press"))
    }else
    {
        p.appendChild(document.createTextNode(`${presses} Presses`))
    }
        
    
    const effects = []
    if(Math.random() <= 0.08)
    {
        effects.push("get infinite energy generator")
    }

    if(Math.random() <= 0.1)
    {
        effects.push("GPT 5 is released")
    }

    if(Math.random() <= 0.15)
    {
        effects.push("marry a dwarf")
    }

    if(Math.random() <= 0.25)
    {
        effects.push("free extra life")
    }
    if(Math.random() <= 0.15)
    {
        effects.push("destroy sealand")
    }

    if(Math.random() <= 0.05)
    {
        effects.push("grow a walrus tusk")
    }
    if(Math.random() <= 0.1)
    {
        effects.push("get a million dollars")
    }
    if(Math.random() <= 0.2)
    {
        effects.push("invent agi and become god")
    }
    if(Math.random() <= 0.15)
    {
        effects.push("die instantly")
    }

    if(Math.random() <= 0.1)
    {
        effects.push("become your profile picture")
    }
    if(Math.random() <= 0.05)
    {
        effects.push("the pope will get struck by lightning")
    }

    if(Math.random() <= 0.35)
    {
        effects.push("become the opposite sex")
    }

    if(Math.random() <= 0.12)
    {
        effects.push("become miras pet")
    }

    if(Math.random() <= 0.15)
    {
        effects.push("get the legal title to the moon")
    }

    if(Math.random() <= 0.2)
    {
        effects.push("google writes a press release begging you to spare them")
    }

    if(Math.random() <= 0.13)
    {
        effects.push("get stung by a scorpion")
    }
    if(Math.random() <= 0.15)
    {
        effects.push("negate a random effect")
        
    }
    if(Math.random() <= 0.20 && effects.length > 0)
    {
        console.log(effects)
        veto(effects)

    }else
    {
        exec_effects(effects)
    }

    


    
}

function exec_effects(effects)
{
    const textElements = document.getElementById("container").querySelectorAll('p');

    // Set the color for each text element
    textElements.forEach(function(element) {
      element.style.color = 'gray';
    });
    console.log(effects)
    if(effects.includes("negate a random effect"))
    {
        effects.splice(effects.indexOf("negate a random effect"))
        if(effects.length > 0)
        {
            const randomIndex = Math.floor(Math.random() * effects.length);
            console.log("negate a random effect", effects[randomIndex])
            add_text(`Negated ${effects[randomIndex]}`)
            effects.splice(randomIndex, 1);
        }
        
    }
    console.log(effects)
    
    

    if(effects.includes("die instantly"))
    {
        if(effects.includes("free extra life"))
        {
            console.log("saved by free life")
            add_text("Saved from death by a free life")
        }
        else if (!effects.includes("invent agi and become god"))
        {
            console.log("you died")
            add_text("You died")
            document.getElementById('cry').style.display = "block"
            dead = true
            return
        }
    }

    if(effects.includes("get infinite energy generator"))
    {
        exawatt_generators += 1
        console.log("you have", exawatt_generators, "exawatt power generators")
        add_text(`you have ${exawatt_generators} exawatt power generators`, "get infinite energy generator")
    }

    if(effects.includes("GPT 5 is released") && !gpt5)
    {

        gpt5 = true
        console.log("gpt5 is released")
        add_text("gpt5 is released")
    
    
    }

    if(effects.includes("marry a dwarf") && !marry_dwarf)
    {
        marry_dwarf = true
        console.log("you are now married to a dwarf")
        add_text("you are now married to a dwarf")
    }

    if(effects.includes("destroy sealand") && !sealand_destroyed)
    {

        sealand_destroyed = true
        console.log("sealand is destroyed")
        add_text("sealand is destroyed by a hurricane")
    }

    if(effects.includes("grow a walrus tusk"))
    {
        walrus_tusks += 1
        console.log("you have", walrus_tusks, "walrus tusks")
        add_text(`you have ${walrus_tusks} walrus tusks`, "grow a walrus tusk")
    }

    if(effects.includes("get a million dollars"))
    {
        money += 1
        console.log("you have", money, "million dollars")
        add_text(`you have ${money} million dollars`, "money")
    }

    if(effects.includes("become your profile picture") && !became_pfp)
    {
        became_pfp = true
        console.log("you are now your pfp")
        add_text("you are now your profile picture")
    }

    if(effects.includes("the pope will get struck by lightning at his next speech"))
    {
        times_pope_lightning += 1
        console.log("the pope will be struck by lightning", times_pope_lightning, "times at his next speech")
    add_text(`the pope will be struck by lightning" ${times_pope_lightning} times at his next speech`, "pope")
    }

    if(effects.includes("become the opposite sex"))
    {
        sex_dif = !sex_dif
        if(sex_dif)
        {
            console.log("you are now the opposite sex")
            add_text("you are now the opposite sex", "sex")
        }else
        {
            console.log("you are back to your original sex")
            add_text("you are back to your original sex", "sex")
        }
    }

    if(effects.includes("become miras pet") && !miras_pet)
    {
        miras_pet = true
        console.log("you are now miras pet")
        document.getElementById('pet').style.display = "block"
        add_text("you are now miras pet")
    }

    if(effects.includes("get the legal title to the moon") && !own_moon)
    {
        console.log("you now own the moon")
        add_text("you now legally own the moon")
        own_moon = true
    }

    if(effects.includes("google writes a press release begging you to spare them"))
    {
        console.log("google has written a press release begging you to spare them")
        add_text("google has written a press release begging you to spare them")
    }

    if(effects.includes("get stung by a scorpion"))
    {
        stung_by_scorpions += 1
        console.log("you have been stung by a scorpion", stung_by_scorpions, "times")
        add_text(`you have been stung by a scorpion ${stung_by_scorpions} times`, "get stung by a scorpion")
    }
    
    if(effects.includes("invent agi and become god"))
    {
        invented_agi = true
        document.getElementById('agi').style.display = "block"
        document.getElementById('thumbsup').style.display = "block"
        console.log("you are now god")
        add_text("you invented agi and have become god")
    }
}
