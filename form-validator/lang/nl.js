(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(["jquery"], function (a0) {
      return (factory(a0));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(root["jQuery"]);
  }
}(this, function (jQuery) {

/**
 * jQuery Form Validator
 * ------------------------------------------
 *
 * Dutch language package
 *
 * @website http://formvalidator.net/
 * @license MIT
 */
(function ($, window) {

  'use strict';

  $.formUtils.registerLoadedModule('lang/nl');

  $(window).bind('validatorsLoaded', function () {

    $.formUtils.LANG = {
      andSpaces: ' en spaties ',
      badAlphaNumeric: 'De ingevoerde waarde mag alleen alfabetische karakters bevatten',
      badAlphaNumericExtra: ' en ',
      badCVV: 'Het CVV nummer was onjuist',
      badCreditCard: 'Het creditcardnummer is onjuist',
      badCustomVal: 'De ingevoerde waarde is onjuist',
      badDate: 'U heeft niet de juiste datum aangegeven',
      badDomain: 'Incorrect domein',
      badEmail: 'U heeft een onjuist e-mailadres ingevoerd ',
      badInt: 'De ingevoerde waarde was een onjuist getal',
      badNumberOfSelectedOptionsEnd: ' antwoorden',
      badNumberOfSelectedOptionsStart: 'U moet tenminste ',
      badSecurityAnswer: 'U heeft de beveilingsvraag onjuist beantwoord',
      badSecurityNumber: 'Uw burgerservicenummer was incorrect',
      badStrength: 'Het wachtwoord is niet veilig genoeg',
      badTelephone: 'U heeft een onjuist telefoonnummer ingevoerd',
      badTime: 'U heeft een incorrecte tijd aangegeven',
      badUrl: 'De ingevoerde waarde is geen correcte URL',
      badreCaptcha: 'Bevestig a.u.b. dat u geen robot bent',
      errorTitle: 'Indienen van formulier mislukt!',
      groupCheckedEnd: ' item(s)',
      groupCheckedRangeStart: 'Kies a.u.b. tussen ',
      groupCheckedTooFewStart: 'Kies a.u.b. ten minste ',
      groupCheckedTooManyStart: 'Kies a.u.b. maximaal ',
      imageRatioNotAccepted: 'De afbeeldingsverhouding wordt niet geaccepteerd',
      imageTooSmall: 'de afbeelding was te klein',
      imageTooTall: 'de afbeelding kan niet langer zijn dan',
      imageTooWide: 'de afbeelding kan niet wijder zijn dan',
      lengthBadEnd: ' karakters',
      lengthBadStart: 'De ingevoerde waarde moet liggen tussen ',
      lengthTooLongStart: 'De ingevoerde waarde is langer dan ',
      lengthTooShortStart: 'De ingevoerde waarde is korter dan ',
      max: 'max',
      min: 'min',
      notConfirmed: 'Invoerwaarden konden niet worden bevestigd',
      requiredField: 'Dit is een verplicht veld',
      requiredFields: 'U heeft niet alle verplichte velden ingevuld',
      wrongFileDim: 'Incorrecte afbeeldingsafmetingen,',
      wrongFileSize: 'Het bestand dat u probeert te uploaden is te groot (max %s)',
      wrongFileType: 'Alleen type %s bestanden zijn toegestaan'
    };

  });

})(jQuery, window);


}));
