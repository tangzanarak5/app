import { Injectable } from "@angular/core";
import { getString, setString, getNumber, setNumber } from "application-settings";

export class securityService {

  static set setUserData(userDataJson: string){
    setString("user",userDataJson);
  }

  static get getUserData(): string {
    return getString("user");
  }

  static set setCheckHn(checkHnJson: string){
    setString("checkHn",checkHnJson);
  }
  
  static get getCheckHn(): string {
    return getString("checkHn");
  }
  static set setCheckRegister(checkRegisterJson: string){
    setString("checkRegister",checkRegisterJson);
  }
  
  static get getCheckRegister(): string {
    return getString("checkRegister");
  }

}