# Etch a Sketch Devlog

## 2022/02/13

### 13:37

Starting out - haven't read much of the brief, excited to just try and figure it out myself. Read as far as a 16x16 grid of divs, and that's as far as I want to go. Keen to get the rest figured out myself. 

Basically, I think it'll be the following:
* Set up basic project skeleton
* Set up divs in HTML 
* Create a colourIn function that changes the colour of the given element when it is clicked (can take any colour, defaults to black)
* querySelectorAll to get the divs in JS, assign them event listeners
* Think about how to uncolour elements (going to need a way of keeping track of their state - maybe with JSON?)

Once that's all done and functional, I'll take another look at the Odin page and see what other features they want me to add.   


### 14:05 - basic MVP set up, no uncoloring yet

### 14:17 - b/w color toggle implemented

Unexpected part of this was that using `element.style.backgroundColor` didn't actually yield the assigned background color - I had to use `window.getComputedStyle(element).backgroundColor` to do that. 

Lots more features I could add - but lets see what Odin wants from me. 

Ok, so a few things:
1. I did `onclick` instead of hover - easily changed.
2. Things I haven't done that I don't want to right now:
   1. Redraw the grid with a user-defined block length (this would be done using loops and innerHTML() I'm guessing)
   1. A "clear" button (if i use the class method defined below, this would just for forEach'ing through the elements and removing the added class from any of them)
1. A more elegant way of changing color would have been to add/remove a particular class to the `div` tags instead of manually changing the color. That's also easier to check for.

For now, I'm going to skip part the things I haven't done - I see how they could be done, and if I feel I've held myself back, I'll come back and do them. But I really want to press on and get into the more advanced stuff. 