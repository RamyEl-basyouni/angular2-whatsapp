import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
	constructor() {

	}

	checkPhoneNum(str: string) {
	  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
	}

	checkEmail(str: string) {
	  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str)
	}

}
