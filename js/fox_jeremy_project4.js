(function() {
  var Base, FormatEmail, FormatPhone, FormatSeperator, FormatTitleCase, FormatToInt, FormatURL, email, emailVerified, fe, fp, fs, ftc, fti, furl, parseIntVerified, phone, phoneVerified, seperateVerified, string, titleCaseVerified, url, urlVerified;
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
  FormatPhone = (function() {
    __extends(FormatPhone, Base);
    function FormatPhone() {
      FormatPhone.__super__.constructor.apply(this, arguments);
    }
    FormatPhone.prototype.verifyPhone = function() {
      var validPhone;
      return validPhone = true;
    };
    FormatPhone.prototype.log = function(passOutput) {
      return FormatPhone.__super__.log.call(this, passOutput);
    };
    return FormatPhone;
  })();
  fp = new FormatPhone("Format Phone Class");
  phone = "123-123-1234";
  phoneVerified = fp.verifyPhone(phone);
  if (phoneVerified) {
    fp.log("The Phone # " + phone + " does follow the correct pattern");
  } else {
    fp.log("The Phone # " + phone + " does not follow the correct pattern");
  }
  FormatEmail = (function() {
    __extends(FormatEmail, Base);
    function FormatEmail() {
      FormatEmail.__super__.constructor.apply(this, arguments);
    }
    FormatEmail.prototype.verifyEmail = function(email) {
      var atIndex, domain, lastDotIndex, localLength, matches, tldLength, validEmail;
      validEmail = true;
      atIndex = email.indexOf("@");
      lastDotIndex = email.lastIndexOf(".");
      if (lastDotIndex === -1) {
        validEmail = false;
      }
      tldLength = email.substr(lastDotIndex + 1, 4);
      if (tldLength < 2 || tldLength > 4) {
        validEmail = false;
      }
      if (atIndex < 0 || atIndex === -1) {
        validEmail = false;
      }
      localLength = email.substr(0, atIndex);
      if (localLength < 1 || localLength > 64) {
        validEmail = false;
      }
      domain = email.substr(atIndex + 1, 255);
      if (domain < 1 || domain > 255) {
        validEmail = false;
      }
      matches = domain.match(/[\w-\.]+/i);
      if (matches !== domain) {
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
  email = "atljeremy@fulls*$%!ail.c$^&*om";
  emailVerified = fe.verifyEmail(email);
  if (emailVerified) {
    fe.log("The email address " + email + " does follow the correct format");
  } else {
    fe.log("The email address " + email + " does not follow the correct format");
  }
  FormatURL = (function() {
    __extends(FormatURL, Base);
    function FormatURL() {
      FormatURL.__super__.constructor.apply(this, arguments);
    }
    FormatURL.prototype.verifyURL = function(arg) {
      var validURL;
      return validURL = true;
    };
    FormatURL.prototype.log = function(passOutput) {
      return FormatURL.__super__.log.call(this, passOutput);
    };
    return FormatURL;
  })();
  furl = new FormatURL("Format URL Class");
  url = "http://www.google.com";
  urlVerified = furl.verifyURL(url);
  if (urlVerified) {
    fp.log("The URL " + url + " does follow the correct pattern");
  } else {
    fp.log("The URL " + url + " does not follow the correct pattern");
  }
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
  FormatSeperator = (function() {
    __extends(FormatSeperator, Base);
    function FormatSeperator() {
      FormatSeperator.__super__.constructor.apply(this, arguments);
    }
    FormatSeperator.prototype.makeSeperated = function(arg) {
      var newString;
      newString = arg.replace(/[,]/g, '/');
      if (newString.indexOf("," !== -1)) {
        return newString;
      } else {
        return "error";
      }
    };
    FormatSeperator.prototype.log = function(passOutput) {
      return FormatSeperator.__super__.log.call(this, passOutput);
    };
    return FormatSeperator;
  })();
  fs = new FormatSeperator("Format Seperator Class");
  string = "a,b,c,d/e/f/g";
  seperateVerified = fs.makeSeperated(string);
  if (seperateVerified !== "error") {
    fs.log("The String " + string + " is now seperated by the second type of string seperator like so, " + seperateVerified);
  } else {
    fs.log("The String " + string + " is not seperated by the second type of string seperator.");
  }
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
