# AEM Touch UI Dialog Listeners

This module contains commonly used touch ui listeners for 
* Validating fields
* For handling actions 

## File Structure
   
   ```
   ./
   ├── touchui-clientlibs
   ├───── touchui-reusable-brightcove
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── reusable-bightcove.js    -> JS file to validate birghtcove video by doing ajax call to backend system 
   ├───── touchui-reusable-dropdown
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── reusable-dropdown.js     -> select dropdown based field level changes (show/hide)
   ├───── touchui-reusable-promo
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── reusable-dropdown.js     -> JS based backend call to validate promo value entered
   ├───── touchui-reusable-radio
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── reusable-radio.js        -> onclick of radio button show hide fields
   ├───── touchui-reusable-rtecountervalidation
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── richtextvalidator.js     -> RTE text validator
   │           └── rtecountdisplay.js       -> displays the chacter count
   ├───── touchui-reusable-tags
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── validation.js            -> maximum allowed tags on tag selector
   ├───── touchui-reusable-radio
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── reusable-radio.js        -> onclick of radio button show hide fields
   ├───── touchui-reusable-textvalidation
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── validation.js            -> textfield validation based on reges (charcters allowed, email validation etc)
   ├───── touchui-reusable-vanityurl
   │       └── .content.xml
   │       └── js.txt
   │       └── js                           -> folder
   │           └── vanity-multifield.js     -> validates multifield and doesnt allow repeted values
  
   ```
   
   ## Files Explained
   
 
* all the above scripts are used for Dialog level field validation using jQuery, granite foundation validator