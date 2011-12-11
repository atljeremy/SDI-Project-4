# Deliverable 4
# Author: Jeremy Fox
# Created For: SDI Online
# Function Library

##################################################################
# Base Class
##################################################################
class Base
  constructor: (@funcType) ->
  
  log: (output) ->
    console.log @funcType + ": #{output}."





##################################################################
# Does a string follow a 123-456-7890 pattern like a phone number?
##################################################################
class FormatPhone extends Base
  log: ->
    phone = @funcArg
    super "The Phone # #{phone} does follow the correct pattern"

fp = new FormatPhone "Format Phone Class", "123-123-1234"
fp.log()
  
  
  
  
  
##################################################################
# Does a string follow an aaa@bbb.ccc pattern like an email address?
##################################################################
class FormatEmail extends Base
  
  verifyEmail: (email) ->
    validEmail = true
    atIndex = email.indexOf "@"
    lastDotIndex = email.lastIndexOf "."
    
    # Check to make sure we find an "@" in the email address
    if atIndex < 0 or atIndex == -1
      validEmail = false 

    # Check length of local, max is 64 characters (the part of email address before the @)    
    localLength = email.substr 0, atIndex
    console.log localLength
    if localLength < 1 or localLength > 64
      validEmail = false
      
    # check length of top level domain (com, org, net, mobi, ru, etc). Minimum should be 2 charactors, max should be 4.
    tldLength = email.substr lastDotIndex+1, 4
    console.log tldLength
    if tldLength < 2 || tldLength > 4
      validEmail = false
      
    # Check entire length of domain, max is 255 (the part of email address after the @) 
    domainLength = email.substr atIndex+1, 255
    console.log domainLength
    if domainLength < 1 or domainLength > 255
      validEmail = false
    
    if validEmail != null or validEmail != "" and typeof validEmail == "boolean"
      return validEmail
    else
      console.log "An error has occurred!"
      
  log: (passOutput) ->
    super passOutput

fp = new FormatEmail "Format Email Class"
email = "atljeremy@fullsail.com"
emailVerified = fp.verifyEmail email
if emailVerified
  fp.log("The email address #{email} does follow the correct format")
else
  fp.log("The email address #{email} does not follow the correct format")
  
  
  
  
  
##################################################################
# Is the string a URL? (Does it start with http: or https:?)
##################################################################
class FormatURL extends Base

  log: (passOutput) ->
    super passOutput
    
  log: ->
    url = @funcArg
    super 

furl = new FormatURL "Format URL Class"
url = "http://www.google.com"
urlVerified = furl.verifyURL url
if urlVerified
  fp.log "The URL #{url} does follow the correct pattern"
else
  fp.log "The URL #{url} does not follow the correct pattern"





##################################################################
# Title-case a string (split into words, then uppercase the first 
# letter of each word)
##################################################################
class FormatTitleCase extends Base
  log: ->
    string = @funcArg
    strTitleCased = "This Is An Example"
    super "The String \"#{string}\" is now Title-cased, \"#{strTitleCased}\""

ftc = new FormatTitleCase "Format Title Case Class", "The is an example"
ftc.log()





##################################################################
# Given a string that is a list of things separated by a given string,
# as well as another string separator, return a string with the first
# separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
##################################################################
class FormatSeperator extends Base
  log: ->
    string = @funcArg
    newString = string.replace(/[,]/g, '/')
    super "The String #{string} is now seperated by the second type of string seperator like so, #{newString}"

fs = new FormatSeperator "Format Seperator Class", "a,b,c,d/e/f/g"
fs.log()





##################################################################
# Given a string version of a number such as "42", return the value 
# as an actual Number, such as 42.
##################################################################
class FormatToInt extends Base
  log: ->
    string = @funcArg
    int = parseInt string
    if typeof int == "number"
      super "The String \"#{string}\" contains a number in String format. Here is the proper integer that has been parsed out of the String, #{int}"
    else
      super "The String number could not be pasred to an integer"

fs = new FormatToInt "Format To Integer Class", "345 is a string number"
fs.log()

