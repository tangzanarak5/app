import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";
import { action } from "ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import * as camera from "nativescript-camera";
import { securityService } from "../security.service";
import { user } from "../model/user.model"
import { Image } from "ui/image";
import * as dialogs from "ui/dialogs";
import { formPicAndAcceptService } from "./formPicAndAccept.service";

@Component({
    selector: "formPicAndAccept",
    templateUrl: "formPicAndAccept.component.html",
    styleUrls: ['formPicAndAccept.component.css'],
    moduleId: module.id
})

export class formPicAndAcceptComponent implements OnInit {
    user: user ;
    inputAlret = "";
    image ;
    constructor(
        private formPicAndAcceptService: formPicAndAcceptService,
        private route: ActivatedRoute,
        private router: Router,
        page: Page
    ) { page.actionBarHidden = true;}

    ngOnInit(): void {
        this.user = new user() ;
        this.image = new Image();
        console.log(securityService.getUserData);
        this.user = JSON.parse(securityService.getUserData);
}
tackPic () {
    camera.requestPermissions();
    camera.takePicture()
    .then((imageAsset) => {
        console.log("Result is an image asset instance");
        this.image.src = imageAsset;
        this.user.pic = JSON.stringify(this.image.src)
        console.log(JSON.stringify(this.image.src));
    }).catch((err) => {
        console.log("Error -> " + err.message);
    });
}
net () {
    securityService.setUserData = JSON.stringify(this.user);
    this.formPicAndAcceptService.postDataPatient();
    this.router.navigate(["/security/subMitForm"]);
}

nextToSymptom () {
    if (this.user.pic == "") {
        this.inputAlret = this.inputAlret + "\n- รูปบัตรประชาชน "
    }
    if (this.inputAlret != "") {
        alert("กรุณาใส่ข้อมูลให้ครบ !\n" + this.inputAlret);
    }
    if (this.inputAlret == ""){

        dialogs.confirm({
            title: "ข้อตกลง และยืนยันความเป็นจริง",
            message: "ข้าพเจ้าขอรับรองว่า.. ข้อมูลทั้งหมดนี้ถูกต้องตรงกับความจริงทุกประการ และยินยอมให้โรงพยาบาลเจ้าพระยาอภัยภูเบศรตรวจสอบหลักฐานข้อมูลทางทะเบียนใด ๆ ของรัฐ รวมถึงอนุญาตให้ใช้รูปภาพและข้อมูลประวัติ่ของข้าพเจ้าเพื่อการมีเวชระเบียนและการตรวจรักษา หากมีข้อมูลใด ไม่ถูกต้องหรือไม่ตรงกับความจริงและอาจจะทำให้ เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่น ข้าพเจ้ายินยอมรับผิดชอบ ในความเสียหายที่เกิดขึ้นทุกประการ ข้าพเจ้ายินยอมให้ใช้ข้อมูลประวัติการรักษาของข้าพเจ้าไปใช้เพื่อการศึกษา วิจัย หรือการพัฒนาคุณภาพโรงพยาบาลฯ",
            cancelButtonText: "ยอมรับ",
            okButtonText: "ยกเลิก"
        }).then(result => {
            // result argument is boolean
            console.log("Dialog result: " + result);
            if (result == false) {
            securityService.setUserData = JSON.stringify(this.user);
            this.formPicAndAcceptService.postDataPatient();
            this.user.idCard = "";
            this.user.nameTitle = "";
            this.user.name = "";
            this.user.surname = "" ;
            this.user.gender = "" ;
            this.user.birthDay = "";
            this.user.nation = "" ;
            this.user.religion = "" ;
            this.user.address = "" ;
            this.user.telephone = "" ;
            this.user.medicalEligibilityVerification = "" ;
            this.user.symptom = "" ;
            this.user.nameRelative = "" ;
            this.user.surnameRelative = "" ;
            this.user.contact = "" ;
            this.user.telephoneRelative = "" ;
            this.user.pic = "";
            securityService.setUserData = JSON.stringify(this.user);
            this.router.navigate(["/security/subMitForm"]);
            }
        });   
    }
    this.inputAlret = "";
}

dialogAgree () {
    
    dialogs.alert({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text"
    }).then(() => {
        console.log("Dialog closed!");
    });
}
    
}