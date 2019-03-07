
export class User{

    constructor(
        private _id:number,
        private _username:string,
        private _email:string,
        private _phone:string
    ){}

    get id():number{return this._id;}
    set id(id:number){this._id = id;}

    get username():string{return this._username;}
    set username(username:string){this._username = username;}

    get email():string{return this._email;}
    set email(email:string){this._email = email;}

    get phone():string{return this._phone;}
    set phone(phone:string){this._phone = phone;}
}