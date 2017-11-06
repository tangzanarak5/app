import { Injectable } from "@angular/core";
import { getString, setString, getNumber, setNumber } from "application-settings";

export class BackendService {

  static set settoken(userDataJson: string){
    setString("user",userDataJson);
  }

  static get gettoken(): string {
    return getString("user");
  }
}