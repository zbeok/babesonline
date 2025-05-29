# GUIDE

How do you use this project? Well, all you need to do is fill out whatever in the `data` folder and the appropriate characters in the character folder. 

## data/bgs.js

A dictionary of bgs you'll be using in the screenplay. It's literally `name` as key, value is a link to image. You'll use that name in the screenplay to refer to which images to use. KISS applies here.

## data/characters.js

A dictionary of characters you'll be using in the screenplay. This is a pretty standard JS dictionary, these are your options:

`fullname` When displayed on the actual site (not this code stuff), you'll see this name for the character.
`name` We'll use this name in the screenplay. If your fullname is really long this is a good time to abbreviate. Also if your fullname has weird characters, and you can't use that in the screenplay.
`emotions` A dictionary of emotions to their corresponding images! Remember the name you use, you'll have to refer to these by name in the scene.

## data/screenplay.js

The meat of the engine! This is play by play description of how this sitch is going to play out! See below for actual instructions on how to fill it out. An example is included in the folder.

### SCENES

We organize our game into scenes. They are preceded by a line of dashes more than 5 dashes long (ie `-----`) and then a scene label. That label is important for our pointing-things-places, see below section on replies. They DO HAVE TO BE UNIQUE. 

After that are some default settings where you set the default background and other things. The line of dashes ends this section. Here are a list of things you might set, in proper syntax. The lines preceded by a `#` symbol are comments and descriptions, are ignored and not part of what you should copy.

```
----- example
# default example bg for scene
BG: examplebg
# default index for scene, ie the frame that you go to automatically
Index: 1

```

### FRAMES
Within each scene we'll call each snapshot that the sim goes through a frame. Every frame the audience should see is numbered.
You'll use that number to point your replies to the correct destination (see replies section below!). No, it does not have to be  in order but it might be tricky if it's not. They DO HAVE TO BE UNIQUE. A standard frame starts with a character, their emotion (see character section) and a line of dialogue, and follows with some reply. It looks like this:
```
666. Sophie (happy): It does not matter how fast you go, so long as you do not stop.
>667 ok
```
If you leave the upper line blank that's fine too. It just won't show a character or dialogue. That's helpful for if you only want a menu screen.
```
1010. 
> Go with her
> Go with him
> Go with them
```

### REPLIES
The replies are denoted by a > symbol and then an address. The address can be another section (see label notes above), or it can be a number indicating another frame, but only numbers within the section work. (YES INFINITE LOOPS ARE POSSIBLE) 

# NOTES

- Be sure to keep the same punctuation and random ass symbols OUTSIDE of the double quotes! Refer to standard JS syntax, if you know what that means.
- Commenting is available in the screenplay! This entails a line with the first character as `#`. 