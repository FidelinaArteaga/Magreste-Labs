import Icrc37Mo "mo:icrc37-mo";
actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
