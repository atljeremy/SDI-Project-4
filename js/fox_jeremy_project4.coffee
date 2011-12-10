# Deliverable 4
# Author: Jeremy Fox
# Created For: SDI Online
# Function Library

#Base Class
class Base
  constructor: (@funcType) ->
  
  log: (output) ->
    console.log @funcType + ": #{output}."

#Does a string follow a 123-456-7890 pattern like a phone number?
class FormatPhone extends Base
  log: ->
    phone = "456-345-3546"
    super "The Phone # #{phone} does follow the correct pattern"

fp = new FormatPhone "Format Phone Class"
fp.log()
  
#Does a string follow an aaa@bbb.ccc pattern like an email address?
class FormatEmail extends Base
  log: ->
    email = "aaa@bbb.ccc"
    super "The email address #email does follow the correct format"

fp = new FormatEmail "Format Email Class"
fp.log()

#Is the string a URL? (Does it start with http: or https:?)
class FormatURL extends Base
  log: ->
    url = "http://www.google.com"
    super "The URL #{url} does follow the correct pattern"

fp = new FormatURL "Format URL Class"
fp.log()

#Title-case a string (split into words, then uppercase the first letter of each word)
class FormatTitleCase extends Base
  log: ->
    string = "The is an example"
    strTitleCased = "This Is An Example"
    super "The String \"#{string}\" is now Title-cased, \"#{strTitleCased}\""

fp = new FormatTitleCase "Format Title Case Class"
fp.log()

#Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
class FormatSeperator extends Base
  log: ->
    string = "a,b,c,d/e/f/g"
    newString = string.replace(/[,]/g, '/')
    super "The String #{string} is now seperated by the second type of string seperator like so, #{newString}"

fp = new FormatSeperator "Format Seperator Class"
fp.log()

#Given a string version of a number such as "42", return the value as an actual Number, such as 42.
class FormatToInt extends Base
  log: ->
    string = "345 is a string number"
    int = parseInt string
    if typeof int == "number"
      super "The String \"#{string}\" contains a number in String format. Here is the proper integer that has been parsed out of the String, #{int}"
    else
      super "The String number could not be pasred to an integer"

fp = new FormatToInt "Format To Integer Class"
fp.log()

