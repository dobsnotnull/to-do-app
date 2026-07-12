////SPELLBOOK

- turn out even though you use <i><i/> for the lucide icons. In the css you can still call them svg

e.g

input[type = "checkbox"]:checked ~ .custom-checkbox 

This is the checkbox thingy

T wanted to change the color of the checkbox itself

so I used this code

input[type = "checkbox"]:checked ~ .custom-checkbox i

but it didn't worked so i replaced the "i" with svg and it worked perfectly