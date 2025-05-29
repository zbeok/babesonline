// This is an example game! Fill out your scene in the same way in the /scenes folder. Read the README for documentation ofc!
var screenplay = `
----------------------------- intro 
BG: park
-----------------------------------

1. phi: wanna go to the beach?
>2 yeah!!
>3 im sorry, I don't have the time!!

2. phi (happy): oh damn nice!!!! i'll bring a floatie!!!!
>beach see you there!!

3. phi (sad): what's up with the bummer? it's really harshing my mellow...
>4 i don't mean to be rude it's just that i have a final on thursday and i haven't studied
>5 fuck you

4. phi: oh, do you need help? we can do it at the beach tbh
>beach hell yeah

----------------------------- beach 
BG: coffee
-----------------------------------
1. phi: ok this is fine

2. phi: i know we're at the beach but....

3. phi (omg): why are we at a cafe????? 

4. BAD END
>park
`
export {screenplay}