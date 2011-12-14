###
Deliverable 4
Author: Jeremy Fox
Created For: SDI Online
Function Library
###

###
Base Class
###
class Base
  constructor: (@funcType) ->
  
  log: (output) ->
    console.log @funcType + ": #{output}."





###
Does a string follow a 123-456-7890 pattern like a phone number?
###
class FormatPhone extends Base
  
  verifyPhone: (phone) ->
    validPhone        = true
    firstDash         = phone.indexOf "-"
    lastDash          = phone.lastIndexOf "-"
    firstThreeDigits  = phone.substr 0, firstDash
    secondThreeDigits = phone.substr firstDash+1, 3
    lastFourDigits    = phone.substr lastDash+1, 4

    ###
    Check to make sure we are seeing more than one "-" in the phone #
    ###
    validPhone = false if firstDash == lastDash

    ###
    Check to make sure the first "-" is at position 3 and the second is at position 7
    ###
    validPhone = false if firstDash < 3 or firstDash > 3 or lastDash < 7 or lastDash > 7

    ###
    Check to make sure we found the last four digits
    ###
    validPhone = false if lastFourDigits == "undefined" or lastFourDigits == null or lastFourDigits == ""

    ###
    Check to make sure the length of the last four digits is actually 4
    ###
    validPhone = false if lastFourDigits.length != 4

    ###
    Check to make sure we found the first three digits
    ###
    validPhone = false if firstThreeDigits == "undefined" or firstThreeDigits == null or firstThreeDigits == ""

    ###
    Check to make sure the length of the first three digits is actually 3
    ###
    validPhone = false if firstThreeDigits.length != 3

    ###
    Check to make sure we found the second three digits
    ###
    validPhone = false if secondThreeDigits == "undefined" or secondThreeDigits == null or secondThreeDigits == ""
 
    ###
    Check to make sure the length of the second three digits is actually 3
    ###
    validPhone = false if secondThreeDigits.length != 3

    matches = phone.match(/[\D]/g)
    dashes  = []
    dashes.push match for match in matches
    validPhone = false if dashes.length != 2
    
    if validPhone != null or validPhone != "" and typeof validPhone == "boolean"
      return validPhone
    else
      console.log "An error has occurred!"

  log: (passOutput) ->
    super passOutput

fp = new FormatPhone "Format Phone Class"
phone = "123-123-1345"
phoneVerified = fp.verifyPhone phone
if phoneVerified
  fp.log("The Phone # #{phone} does follow the correct pattern")
else
  fp.log("The Phone # #{phone} does not follow the correct pattern")





###
Does a string follow an aaa@bbb.ccc pattern like an email address?
###
class FormatEmail extends Base
  
  verifyEmail: (email) ->
    validEmail   = true
    atIndex      = email.indexOf "@"
    lastDotIndex = email.lastIndexOf "."
    
    ###
    Check to make sure we have a top level domain (.com, .org, .net, .mobi, .ru, etc)
    ###
    validEmail = false if lastDotIndex == -1
    
    ###
    check length of top level domain (com, org, net, mobi, ru, etc). Minimum should be 2 charactors, max should be 4.
    ###
    tldLength = email.substr lastDotIndex+1, 4
    validEmail = false if tldLength < 2 || tldLength > 4

    ###
    Check to make sure we find an "@" in the email address
    ###
    validEmail = false if atIndex < 0 or atIndex == -1
    
    ###
    Check length of local, max is 64 characters (the part of email address before the @)    
    ###
    localLength = email.substr 0, atIndex
    validEmail = false if localLength < 1 or localLength > 64
    
    ###
    Check entire length of domain, max is 255 (the part of email address after the @) 
    ###
    domain = email.substr atIndex+1, 255
    validEmail = false if domain < 1 or domain > 255
    
    ###
    Advanced regex to validate email address
    This regex was originally found online at: http://www.regular-expressions.info/email.html
    This regex does the following…
    ###
    OPERATOR = ///
      \b            # \b = Matches a word boundry position such as white space or the beginning or end of a string.
      [A-Z0-9._%+-] # [A-Z0-9._%+-] = This is a character set match in which matchs characters A-Z, 0-9, ., _, %, -. The + in this make this match one or more of the preceding values.
      +@            # +@ = The + here matches previous token 1 or more times. The @ is a macther used to find the "@" in an email address.
      [A-Z0-9.-]    # [A-Z0-9.-] = This is a character set match in which matches characters A_Z, 0-9, ., -.
      +\.           # +\. = The + here matches previous token 1 or more times. The \. matches a ".".
      [A-Z]         # [A-Z] = This has a characters set matcher "[A-Z]"
      {2,4}         # {2,4} = The "{2-4}" will match previous token between 2 and 4 times (ru, com, info, etc)
      \b            # \b = Matches a word boundry position such as white space or the beginning or end of a string.
    ///i            # i = This makes the match case insensitive.

    matches = email.match(OPERATOR)
    console.log matches.length
    validEmail = false if matches.length == 0

    if validEmail != null or validEmail != "" and typeof validEmail == "boolean"
      return validEmail
    else
      console.log "An error has occurred!"

  log: (passOutput) ->
    super passOutput

fe = new FormatEmail "Format Email Class"
email = "atljeremy@fullsail.edu"
emailVerified = fe.verifyEmail email
if emailVerified
  fe.log("The email address #{email} does follow the correct format")
else
  fe.log("The email address #{email} does not follow the correct format")





###
Is the string a URL? (Does it start with http: or https:?)
###
class FormatURL extends Base

  verifyURL: (url) ->
    validURL = false

    ###
    Advanced regex to validate a URL
    This regex was originally found online at: http://regexlib.com/Search.aspx?k=url&c=0&m=0&ps=20&p=3
    This regex does the following…
    ###
    OPERATOR = ///
    (http://|https://)(www\.)
    ?
    ([^\.]+)
    \.
    (\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))
    $
    ///gim

    matches = url.match(OPERATOR)
    for match in matches
      if match.length != null and match.length > 0
        console.log match
        validURL = true
        
    if validURL != null or validURL != "" and typeof validURL == "boolean"
      return validURL
    else
      console.log "An error has occurred!"
          
  log: (passOutput) ->
    super passOutput

furl = new FormatURL "Format URL Class"
stringWithUrl = "This is a test http://www.google.com"
urlVerified = furl.verifyURL stringWithUrl
if urlVerified
  furl.log "The String #{stringWithUrl} does have a falid URL"
else
  furl.log "The String #{stringWithUrl} does not have a valid URL"





###
Title-case a string (split into words, then uppercase the first 
letter of each word)
###
class FormatTitleCase extends Base

  makeTitleCase: (arg) ->
    string = ""
    words = arg.split " "
    for word in words
      string += ' ' + word.substr(0,1).toUpperCase() + word.substr(1,word.length)
    
    return string
    
  log: (passOutput) ->
    super passOutput

ftc = new FormatTitleCase "Format Title Case Class"
string = "The is an example"
titleCaseVerified = ftc.makeTitleCase string
if titleCaseVerified != string
  ftc.log "The String \"#{string}\" is now Title-cased, \"#{titleCaseVerified}\""
else
  ftc.log "The String \"#{string}\" has not been Title-cased"





###
Given a string that is a list of things separated by a given string,
as well as another string separator, return a string with the first
separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
###
class FormatSeparator extends Base

  makeSeperated: (arg) ->
    newString = arg.replace(/[,]/g, '/')
    
    if newString.indexOf "," != -1
      return newString
    else
      return "error"
    
  log: (passOutput) ->
    super passOutput

fs = new FormatSeparator "Format Seperator Class"
string = "a,b,c,d/e/f/g"
seperateVerified = fs.makeSeperated string
if seperateVerified != "error"
  fs.log("The String #{string} is now separated by the second type of string separator like so, #{seperateVerified}")
else
  fs.log("The String #{string} is not separated by the second type of string separator.")  





###
Given a string version of a number such as "42", return the value 
as an actual Number, such as 42.
###
class FormatToInt extends Base

  makeInt: (arg) ->
    if typeof arg == "string"
      int = parseInt arg
      if typeof int == "number"
        return int
      else
        return "error"
    else
      return "no int"
      
  log: (passOutput) ->
    super passOutput

fti = new FormatToInt "Format To Integer Class"
string = "345 is a string number"
parseIntVerified = fti.makeInt string
if parseIntVerified == "no int"
  fti.log("The String \"#{string}\" doesn't contain any numbers to be parsed.")
else if parseIntVerified == "error"
  fti.log("An error was encountered while trying to parse the string, \"#{string}\"")
else if parseIntVerified != "error"
  fti.log("The String \"#{string}\" contains a number in String format. Here is the proper integer that has been parsed out of the String: #{parseIntVerified}")

