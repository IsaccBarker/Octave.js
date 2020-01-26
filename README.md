# Octave.js
Octave.js is a script that is meant for the Pocatello Symphony to use to automate there rewards notification system.

## Usage
Include this:
```html
<script src="https://raw.githubusercontent.com/IsaccBarker/Octave.js/master/octave.js"></script>
```

```sign_person_up``` will take in an enum value (```TEXT```,```EMAIL```,```LETTER```) and some data. This data will then be passed to either ```text_sign_person_up```, ```email_sign_person_up```, or ```letter_sign_person_up```, which is defined by you. This should call a script or something on a server, as not to expose API keys and whatnot. You can change these functions by passing in a function variable in one of these functions: ```set_text_sign_person_up```, ```set_email_sign_person_up```, ```set_user_has_deal```, or ```set_letter_sign_person_up```. The ```set_user_has_deal``` should be run after you have declared that function. This function should deal with cookies.
