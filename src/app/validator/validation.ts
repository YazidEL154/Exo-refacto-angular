import { AbstractControl, ValidatorFn } from '@angular/forms';

// Validator perso
export default class Validation {
  /**
   * Vérifie la correspondance entre 2 champs de formulaire
   * @param controlName premier champ
   * @param checkControlName deuxiemme champ
   * @returns ValidatorFn
   */
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      // récupération des valeurs des 2 champs
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);


      if (checkControl?.errors && !checkControl.errors.matching) {
        return null;
      }

      // vérif de la correspondance entre les deux champs
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
}
