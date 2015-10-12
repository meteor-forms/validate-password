Meteor.startup(function () {
  ValidateForm.addValidator('data-password', function ($el, instance) {
    var value = $el.val();
    var oldPass = $('[data-password-old]').val();

    if (value === oldPass) {
      instance._showSuccess();
      instance.log("[ValidateForm] password success", instance.el);
    } else {
      instance._showError("Passwords do not match.");
      instance.log("[ValidateForm] password failed", instance.el);
    }

    instance._validations.push(value === oldPass);
  });
});
