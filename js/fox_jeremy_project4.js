(function() {
  /*
  Deliverable 4
  Author: Jeremy Fox
  Created For: SDI Online
  Function Library
  */
  /*
  Base Class
  */
  var Base, FormatEmail, FormatPhone, FormatSeparator, FormatTitleCase, FormatToInt, FormatURL, email, emailVerified, fe, fp, fs, ftc, fti, furl, parseIntVerified, phone, phoneVerified, seperateVerified, string, stringWithUrl, titleCaseVerified, urlVerified;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Base = (function() {
    function Base(funcType) {
      this.funcType = funcType;
    }
    Base.prototype.log = function(output) {
      return console.log(this.funcType + (": " + output + "."));
    };
    return Base;
  })();
  /*
  Does a string follow a 123-456-7890 pattern like a phone number?
  */
  FormatPhone = (function() {
    __extends(FormatPhone, Base);
    function FormatPhone() {
      FormatPhone.__super__.constructor.apply(this, arguments);
    }
    FormatPhone.prototype.verifyPhone = function(phone) {
      var dashes, firstDash, firstThreeDigits, lastDash, lastFourDigits, match, matches, secondThreeDigits, validPhone, _i, _len;
      validPhone = true;
      firstDash = phone.indexOf("-");
      lastDash = phone.lastIndexOf("-");
      firstThreeDigits = phone.substr(0, firstDash);
      secondThreeDigits = phone.substr(firstDash + 1, 3);
      lastFourDigits = phone.substr(lastDash + 1, 4);
      /*
          Check to make sure we are seeing more than one "-" in the phone #
          */
      if (firstDash === lastDash) {
        validPhone = false;
      }
      /*
          Check to make sure the first "-" is at position 3 and the second is at position 7
          */
      if (firstDash < 3 || firstDash > 3 || lastDash < 7 || lastDash > 7) {
        validPhone = false;
      }
      /*
          Check to make sure we found the last four digits
          */
      if (lastFourDigits === "undefined" || lastFourDigits === null || lastFourDigits === "") {
        validPhone = false;
      }
      /*
          Check to make sure the length of the last four digits is actually 4
          */
      if (lastFourDigits.length !== 4) {
        validPhone = false;
      }
      /*
          Check to make sure we found the first three digits
          */
      if (firstThreeDigits === "undefined" || firstThreeDigits === null || firstThreeDigits === "") {
        validPhone = false;
      }
      /*
          Check to make sure the length of the first three digits is actually 3
          */
      if (firstThreeDigits.length !== 3) {
        validPhone = false;
      }
      /*
          Check to make sure we found the second three digits
          */
      if (secondThreeDigits === "undefined" || secondThreeDigits === null || secondThreeDigits === "") {
        validPhone = false;
      }
      /*
          Check to make sure the length of the second three digits is actually 3
          */
      if (secondThreeDigits.length !== 3) {
        validPhone = false;
      }
      matches = phone.match(/[\D]/g);
      dashes = [];
      for (_i = 0, _len = matches.length; _i < _len; _i++) {
        match = matches[_i];
        dashes.push(match);
      }
      if (dashes.length !== 2) {
        validPhone = false;
      }
      if (validPhone !== null || validPhone !== "" && typeof validPhone === "boolean") {
        return validPhone;
      } else {
        return console.log("An error has occurred!");
      }
    };
    FormatPhone.prototype.log = function(passOutput) {
      return FormatPhone.__super__.log.call(this, passOutput);
    };
    return FormatPhone;
  })();
  fp = new FormatPhone("Format Phone Class");
  phone = "123-123-1345";
  phoneVerified = fp.verifyPhone(phone);
  if (phoneVerified) {
    fp.log("The Phone # " + phone + " does follow the correct pattern");
  } else {
    fp.log("The Phone # " + phone + " does not follow the correct pattern");
  }
  /*
  Does a string follow an aaa@bbb.ccc pattern like an email address?
  */
  FormatEmail = (function() {
    __extends(FormatEmail, Base);
    function FormatEmail() {
      FormatEmail.__super__.constructor.apply(this, arguments);
    }
    FormatEmail.prototype.verifyEmail = function(email) {
      var OPERATOR, atIndex, domain, lastDotIndex, localLength, matches, tldLength, validEmail;
      validEmail = true;
      atIndex = email.indexOf("@");
      lastDotIndex = email.lastIndexOf(".");
      /*
          Check to make sure we have a top level domain (.com, .org, .net, .mobi, .ru, etc)
          */
      if (lastDotIndex === -1) {
        validEmail = false;
      }
      /*
          check length of top level domain (com, org, net, mobi, ru, etc). Minimum should be 2 charactors, max should be 4.
          */
      tldLength = email.substr(lastDotIndex + 1, 4);
      if (tldLength < 2 || tldLength > 4) {
        validEmail = false;
      }
      /*
          Check to make sure we find an "@" in the email address
          */
      if (atIndex < 0 || atIndex === -1) {
        validEmail = false;
      }
      /*
          Check length of local, max is 64 characters (the part of email address before the @)    
          */
      localLength = email.substr(0, atIndex);
      if (localLength < 1 || localLength > 64) {
        validEmail = false;
      }
      /*
          Check entire length of domain, max is 255 (the part of email address after the @) 
          */
      domain = email.substr(atIndex + 1, 255);
      if (domain < 1 || domain > 255) {
        validEmail = false;
      }
      /*
          Advanced regex to validate email address
          This regex was originally found online at: http://www.regular-expressions.info/email.html
          This regex does the following…
          */
      OPERATOR = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i;
      matches = email.match(OPERATOR);
      console.log(matches.length);
      if (matches.length === 0) {
        validEmail = false;
      }
      if (validEmail !== null || validEmail !== "" && typeof validEmail === "boolean") {
        return validEmail;
      } else {
        return console.log("An error has occurred!");
      }
    };
    FormatEmail.prototype.log = function(passOutput) {
      return FormatEmail.__super__.log.call(this, passOutput);
    };
    return FormatEmail;
  })();
  fe = new FormatEmail("Format Email Class");
  email = "atljeremy@fullsail.edu";
  emailVerified = fe.verifyEmail(email);
  if (emailVerified) {
    fe.log("The email address " + email + " does follow the correct format");
  } else {
    fe.log("The email address " + email + " does not follow the correct format");
  }
  /*
  Is the string a URL? (Does it start with http: or https:?)
  */
  FormatURL = (function() {
    __extends(FormatURL, Base);
    function FormatURL() {
      FormatURL.__super__.constructor.apply(this, arguments);
    }
    FormatURL.prototype.verifyURL = function(url) {
      var OPERATOR, match, matches, validURL, _i, _len;
      validURL = false;
      /*
          Advanced regex to validate a URL
          This regex was originally found online at: http://regexlib.com/Search.aspx?k=url&c=0&m=0&ps=20&p=3
          This regex does the following…
          */
      OPERATOR = /(http:\/\/|https:\/\/)(www\.)?([^\.]+)\.(\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/gim;
      matches = url.match(OPERATOR);
      for (_i = 0, _len = matches.length; _i < _len; _i++) {
        match = matches[_i];
        if (match.length !== null && match.length > 0) {
          console.log(match);
          validURL = true;
        }
      }
      if (validURL !== null || validURL !== "" && typeof validURL === "boolean") {
        return validURL;
      } else {
        return console.log("An error has occurred!");
      }
    };
    FormatURL.prototype.log = function(passOutput) {
      return FormatURL.__super__.log.call(this, passOutput);
    };
    return FormatURL;
  })();
  furl = new FormatURL("Format URL Class");
  stringWithUrl = "This is a test http://www.google.com";
  urlVerified = furl.verifyURL(stringWithUrl);
  if (urlVerified) {
    furl.log("The String " + stringWithUrl + " does have a falid URL");
  } else {
    furl.log("The String " + stringWithUrl + " does not have a valid URL");
  }
  /*
  Title-case a string (split into words, then uppercase the first 
  letter of each word)
  */
  FormatTitleCase = (function() {
    __extends(FormatTitleCase, Base);
    function FormatTitleCase() {
      FormatTitleCase.__super__.constructor.apply(this, arguments);
    }
    FormatTitleCase.prototype.makeTitleCase = function(arg) {
      var string, word, words, _i, _len;
      string = "";
      words = arg.split(" ");
      for (_i = 0, _len = words.length; _i < _len; _i++) {
        word = words[_i];
        string += ' ' + word.substr(0, 1).toUpperCase() + word.substr(1, word.length);
      }
      return string;
    };
    FormatTitleCase.prototype.log = function(passOutput) {
      return FormatTitleCase.__super__.log.call(this, passOutput);
    };
    return FormatTitleCase;
  })();
  ftc = new FormatTitleCase("Format Title Case Class");
  string = "The is an example";
  titleCaseVerified = ftc.makeTitleCase(string);
  if (titleCaseVerified !== string) {
    ftc.log("The String \"" + string + "\" is now Title-cased, \"" + titleCaseVerified + "\"");
  } else {
    ftc.log("The String \"" + string + "\" has not been Title-cased");
  }
  /*
  Given a string that is a list of things separated by a given string,
  as well as another string separator, return a string with the first
  separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
  */
  FormatSeparator = (function() {
    __extends(FormatSeparator, Base);
    function FormatSeparator() {
      FormatSeparator.__super__.constructor.apply(this, arguments);
    }
    FormatSeparator.prototype.makeSeperated = function(arg) {
      var newString;
      newString = arg.replace(/[,]/g, '/');
      if (newString.indexOf("," !== -1)) {
        return newString;
      } else {
        return "error";
      }
    };
    FormatSeparator.prototype.log = function(passOutput) {
      return FormatSeparator.__super__.log.call(this, passOutput);
    };
    return FormatSeparator;
  })();
  fs = new FormatSeparator("Format Seperator Class");
  string = "a,b,c,d/e/f/g";
  seperateVerified = fs.makeSeperated(string);
  if (seperateVerified !== "error") {
    fs.log("The String " + string + " is now separated by the second type of string separator like so, " + seperateVerified);
  } else {
    fs.log("The String " + string + " is not separated by the second type of string separator.");
  }
  /*
  Given a string version of a number such as "42", return the value 
  as an actual Number, such as 42.
  */
  FormatToInt = (function() {
    __extends(FormatToInt, Base);
    function FormatToInt() {
      FormatToInt.__super__.constructor.apply(this, arguments);
    }
    FormatToInt.prototype.makeInt = function(arg) {
      var int;
      if (typeof arg === "string") {
        int = parseInt(arg);
        if (typeof int === "number") {
          return int;
        } else {
          return "error";
        }
      } else {
        return "no int";
      }
    };
    FormatToInt.prototype.log = function(passOutput) {
      return FormatToInt.__super__.log.call(this, passOutput);
    };
    return FormatToInt;
  })();
  fti = new FormatToInt("Format To Integer Class");
  string = "345 is a string number";
  parseIntVerified = fti.makeInt(string);
  if (parseIntVerified === "no int") {
    fti.log("The String \"" + string + "\" doesn't contain any numbers to be parsed.");
  } else if (parseIntVerified === "error") {
    fti.log("An error was encountered while trying to parse the string, \"" + string + "\"");
  } else if (parseIntVerified !== "error") {
    fti.log("The String \"" + string + "\" contains a number in String format. Here is the proper integer that has been parsed out of the String: " + parseIntVerified);
  }
}).call(this);
