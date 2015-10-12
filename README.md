#Validate-Form : Password

This package extends the `Validate-Form` package found [here](https://github.com/AdamBrodzinski/validate-form)



## Setup

`meteor add forms:validate-password`


## Useage

Simply add `data-password-old` and `data-password` to your fields like so

```
<form id='new-user-form' class='validate'>
  <div class="form-group">
    <input type="password" name="password-old" data-onblur data-required data-password-old>
  </div>
  <div class="form-group">
    <input type="password" name="password-new" data-onblur data-required data-password>
  </div>

</form>

```
