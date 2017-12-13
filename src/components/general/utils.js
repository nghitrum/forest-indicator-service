import $ from "jquery";

export function changeInputBackgroundColor() {
  $(".time-periods span").css("background-color", "unset");
}

export function setCheckedBackgroundColor(value) {
  $(".time-periods input[name='" + value + "'] + span").css(
    "background-color",
    "rgb(222, 235, 217)"
  );
}
