// This is an example scene object! Fill out your scene in the same way in the /scenes folder. 
//Be sure to keep the same punctuation and random ass symbols OUTSIDE of the double quotes! Refer to standard JS syntax, if you know what that means.
var opening = [ 
  // this would be what one section would look like, we're organizing by what bg is being used. So add new brackets-etc for a new scene!
  { // Note: this part is first in this part-list, so in reference we'll be going by index. This part is index '1'.
    // link to the image for the bg for this scene.
    background: "park",
    // stats for the JS proficient.
    stats: {},
    // A play by play description of how this sitch is going to play out! 
    // There are a couple of modes that you can use that will affect how this is displayed.
    //
    //    1. p("character", "emotion", "line") - a standard dialogue with NO reply!
    //    2. p("character", "emotion", "line", [
    //             ["reply",line # (optional but will go to the next index of the screenplay if unspecified.)],
    //             ["reply",2 (goes to the second line of the screenplay)]
    //             ["reply",2,1 (goes to the first scene, second line of the section)]
    //        ]) - a standard dialogue with different replies!
    //    3. m("character", "emotion", [
    //             ["reply",0,2] <- see above notes on replies
    //        ]) - a menu freezeframe!
    //       
    // If what you're looking for isn't in this list, please let thte developer know either on github or tumblr!   
    screenplay: [
      p("rocky","happy","wanna go to the beach?"),
      m("rocky","happy",[
        ["YEAH!!!!!"]
        ["i'm sorry, I don't have time!!",4]
      ]),
      p("rocky","happy","wooo!!!! i'll bring a floatie!!!!"),
      p("rocky","sad","what's up with the bummer? it's really harshing my mellow...")
    ]
      
  }
];
