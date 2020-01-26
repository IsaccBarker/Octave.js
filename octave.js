console.log("Starting octave.js....")

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

const c_user_has_deal = function (data) {
	warn_not_to_use("c_user_has_deal")
}

var text_func = c_text_func
var email_func = c_email_func
var letter_func = c_letter_func
var user_has_deal = c_cookie_func

function set_display_warnings(value) {
	display_warnings = value
}

function get_sheet_id(link) {
	console.log("Getting sheet id from " + link)
	var id = link.split("/")[5]
	console.log("Got " + id)
	return id
}

function set_sheet_id(id) {
	spread_sheet_id = id
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

function warn_not_to_use(name) {
	if (display_warnings) {
		console.warn("`" + name + "'" + " is still default. Please change this to call a backend script on your server.")
		alert("Please look at the console. You have not changed the default function " + name + ".")
	}
}