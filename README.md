# Octave.js
This script is meant for the Pocatello Symphony to manage their rewards system notifications.

## Usage
```html
<script src="https://raw.githubusercontent.com/IsaccBarker/Octave.js/master/octave.js"></script>
```

```set_display_warnings``` This function should really only be used when your site is being developed and tested. It disables warnings about default functions.  

```sign_person_up``` This function takes in a method of notification (```TEXT```, ```EMAIL```, or ```LETTER```) and some data. This data is then passed to the next four hopefully user defined functions.   

```set_text_sign_person_up``` This function sets the default function called by ```sign_person_up```. This should put the user (mentioned in ```data```) on some sort of SMS list.  

```set_email_sign_person_up``` This function sets the default function called by ```sign_person_up```. This should put the user (mentioned in ```data```) on some sort of email list.  

```set_letter_sign_person_up``` This function sets the default function called by ```sign_person_up```. This should put the user (mentioned in ```data```) on some sort of physical mail list.  

```set_user_has_deal``` This function sets the default function called by you after you have defined this function (the next listing). This should check some sort of cookie to see if the user has some sort of message (mainly deals) waiting for them.  

```user_has_deal_func``` This function should be called by you after you define the internals with ```set_user_has_deal```.
