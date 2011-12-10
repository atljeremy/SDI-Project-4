(function() {
  var Base, FormatEmail, FormatPhone, FormatSeperator, FormatTitleCase, FormatToInt, FormatURL, fp;
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
      phone = "456-345-3546";
      return FormatPhone.__super__.log.call(this, "The Phone # " + phone + " does follow the correct pattern");
    };
    return FormatPhone;
  })();
  fp = new FormatPhone("Format Phone Class");
  fp.log();
  FormatEmail = (function() {
    __extends(FormatEmail, Base);
    function FormatEmail() {
      FormatEmail.__super__.constructor.apply(this, arguments);
    }
    FormatEmail.prototype.log = function() {
      var email;
      email = "aaa@bbb.ccc";
      return FormatEmail.__super__.log.call(this, "The email address #email does follow the correct format");
    };
    return FormatEmail;
  })();
  fp = new FormatEmail("Format Email Class");
  fp.log();
  FormatURL = (function() {
    __extends(FormatURL, Base);
    function FormatURL() {
      FormatURL.__super__.constructor.apply(this, arguments);
    }
    FormatURL.prototype.log = function() {
      var url;
      url = "http://www.google.com";
      return FormatURL.__super__.log.call(this, "The URL " + url + " does follow the correct pattern");
    };
    return FormatURL;
  })();
  fp = new FormatURL("Format URL Class");
  fp.log();
  FormatTitleCase = (function() {
    __extends(FormatTitleCase, Base);
    function FormatTitleCase() {
      FormatTitleCase.__super__.constructor.apply(this, arguments);
    }
    FormatTitleCase.prototype.log = function() {
      var strTitleCased, string;
      string = "The is an example";
      strTitleCased = "This Is An Example";
      return FormatTitleCase.__super__.log.call(this, "The String \"" + string + "\" is now Title-cased, \"" + strTitleCased + "\"");
    };
    return FormatTitleCase;
  })();
  fp = new FormatTitleCase("Format Title Case Class");
  fp.log();
  FormatSeperator = (function() {
    __extends(FormatSeperator, Base);
    function FormatSeperator() {
      FormatSeperator.__super__.constructor.apply(this, arguments);
    }
    FormatSeperator.prototype.log = function() {
      var newString, string;
      string = "a,b,c,d/e/f/g";
      newString = string.replace(/[,]/g, '/');
      return FormatSeperator.__super__.log.call(this, "The String " + string + " is now seperated by the second type of string seperator like so, " + newString);
    };
    return FormatSeperator;
  })();
  fp = new FormatSeperator("Format Seperator Class");
  fp.log();
  FormatToInt = (function() {
    __extends(FormatToInt, Base);
    function FormatToInt() {
      FormatToInt.__super__.constructor.apply(this, arguments);
    }
    FormatToInt.prototype.log = function() {
      var int, string;
      string = "345 is a string number";
      int = parseInt(string);
      if (typeof int === "number") {
        return FormatToInt.__super__.log.call(this, "The String \"" + string + "\" contains a number in String format. Here is the proper integer that has been parsed out of the String, " + int);
      } else {
        return FormatToInt.__super__.log.call(this, "The String number could not be pasred to an integer");
      }
    };
    return FormatToInt;
  })();
  fp = new FormatToInt("Format To Integer Class");
  fp.log();
}).call(this);
