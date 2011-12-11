(function() {
  var Base, FormatEmail, FormatPhone, FormatSeperator, FormatTitleCase, FormatToInt, FormatURL, email, emailVerified, fp;
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
    FormatPhone.prototype.log = function() {
      var phone;
      phone = this.funcArg;
      return FormatPhone.__super__.log.call(this, "The Phone # " + phone + " does follow the correct pattern");
    };
    return FormatPhone;
  })();
  fp = new FormatPhone("Format Phone Class", "123-123-1234");
  fp.log();
  FormatEmail = (function() {
    __extends(FormatEmail, Base);
    function FormatEmail() {
      FormatEmail.__super__.constructor.apply(this, arguments);
    }
    FormatEmail.prototype.verifyEmail = function(email) {
      var atIndex, domainLength, lastDotIndex, localLength, tldLength, validEmail;
      validEmail = true;
      atIndex = email.indexOf("@");
      lastDotIndex = email.lastIndexOf(".");
      localLength = email.substr(0, atIndex);
      console.log(localLength);
      if (localLength < 1 || localLength > 64) {
        validEmail = false;
      }
      tldLength = email.substr(lastDotIndex + 1, 4);
      console.log(tldLength);
      if (tldLength < 2 || tldLength > 4) {
        validEmail = false;
      }
      domainLength = email.substr(atIndex + 1, 255);
      console.log(domainLength);
      if (domainLength < 1 || domainLength > 255) {
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
  fp = new FormatEmail("Format Email Class");
  email = "atljeremy@fullsail.com";
  emailVerified = fp.verifyEmail(email);
  if (emailVerified) {
    fp.log("The email address " + email + " does follow the correct format");
  } else {
    fp.log("The email address " + email + " does not follow the correct format");
  }
  FormatURL = (function() {
    __extends(FormatURL, Base);
    function FormatURL() {
      FormatURL.__super__.constructor.apply(this, arguments);
    }
    FormatURL.prototype.log = function() {
      var url;
      url = this.funcArg;
      return FormatURL.__super__.log.call(this, "The URL " + url + " does follow the correct pattern");
    };
    return FormatURL;
  })();
  fp = new FormatURL("Format URL Class", "http://www.google.com");
  fp.log();
  FormatTitleCase = (function() {
    __extends(FormatTitleCase, Base);
    function FormatTitleCase() {
      FormatTitleCase.__super__.constructor.apply(this, arguments);
    }
    FormatTitleCase.prototype.log = function() {
      var strTitleCased, string;
      string = this.funcArg;
      strTitleCased = "This Is An Example";
      return FormatTitleCase.__super__.log.call(this, "The String \"" + string + "\" is now Title-cased, \"" + strTitleCased + "\"");
    };
    return FormatTitleCase;
  })();
  fp = new FormatTitleCase("Format Title Case Class", "The is an example");
  fp.log();
  FormatSeperator = (function() {
    __extends(FormatSeperator, Base);
    function FormatSeperator() {
      FormatSeperator.__super__.constructor.apply(this, arguments);
    }
    FormatSeperator.prototype.log = function() {
      var newString, string;
      string = this.funcArg;
      newString = string.replace(/[,]/g, '/');
      return FormatSeperator.__super__.log.call(this, "The String " + string + " is now seperated by the second type of string seperator like so, " + newString);
    };
    return FormatSeperator;
  })();
  fp = new FormatSeperator("Format Seperator Class", "a,b,c,d/e/f/g");
  fp.log();
  FormatToInt = (function() {
    __extends(FormatToInt, Base);
    function FormatToInt() {
      FormatToInt.__super__.constructor.apply(this, arguments);
    }
    FormatToInt.prototype.log = function() {
      var int, string;
      string = this.funcArg;
      int = parseInt(string);
      if (typeof int === "number") {
        return FormatToInt.__super__.log.call(this, "The String \"" + string + "\" contains a number in String format. Here is the proper integer that has been parsed out of the String, " + int);
      } else {
        return FormatToInt.__super__.log.call(this, "The String number could not be pasred to an integer");
      }
    };
    return FormatToInt;
  })();
  fp = new FormatToInt("Format To Integer Class", "345 is a string number");
  fp.log();
}).call(this);
