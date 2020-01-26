console.log("Starting octave.js....")

// Check if the user has a deal
user_has_deal_func()

const messaging_type = {
	TEXT: 0,
	EMAIL: 1,
	LETTER: 2
}

var spread_sheet_id = ""
var display_warnings = true

const c_text_func = function (data) {
	warn_not_to_use("c_text_func")
}

const c_email_func = function (data) {
	warn_not_to_use("c_email_func")
}

const c_letter_func = function (data) {
	warn_not_to_use("c_letter_func")
}

const c_user_has_deal = function () {
	warn_not_to_use("c_user_has_deal")
}

var text_func = c_text_func
var email_func = c_email_func
var letter_func = c_letter_func
var user_has_deal_func = c_user_has_deal

function set_display_warnings(value) {
	display_warnings = value
}

function sign_person_up(method, data) {
	switch (method) {
		case messaging_type.TEXT:
			text_sign_person_up(data)
		case messaging_type.EMAIL:
			email_sign_person_up(data)
		case messaging_type.LETTER:
			letter_sign_person_up(data)
	}
}

function set_text_sign_person_up(func) {
	text_func = func
}

function set_email_sign_person_up(func) {
	email_func = func
}

function set_letter_sign_person_up(func) {
	letter_func = func
}

function set_user_has_deal(func) {
	user_has_deal_func = func
}

function warn_not_to_use(name) {
	if (display_warnings) {
		console.warn("`" + name + "'" + " is still default. Please change this to call a backend script on your server.")
		alert("Please look at the console. You have not changed the default function " + name + ".")
	}
}