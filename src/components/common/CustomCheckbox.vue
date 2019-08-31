<template>
    <label :class="classes" class="checkbox-container">
        <input type="checkbox">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
	props: {
		classes: String
	}
}
/*
NOTE: Got the checkbox directly from https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
      - just changed what i needed to make it look like the one i needed
*/
</script>

<style lang="scss">
/* Customize the label (the container) */
.checkbox-container {
    width:16px;
    height:16px;
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &.margin-right-16px {
        margin-right:16px;
    }
}

/* Hide the browser's default checkbox */
.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

/* Create a custom checkbox */
.checkmark {
    position:absolute;
    left:0;
    top:0;
    height: 16px;
    width: 16px;
    background-color: transparent;
    border-radius:2px;
    border: 1.5px solid #859EFF;
    box-sizing:border-box;
}

/* When the checkbox is checked, add a purple background */
.checkbox-container input:checked ~ .checkmark {
    background-color: #859EFF;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
    left: 4.5px;
    top: 1px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 1.5px 1.5px 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
