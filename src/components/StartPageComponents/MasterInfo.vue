<template lang="pug">
- var master = "<span class=\"color-text\">master</span>";
- var theme = "<span class=\"color-text\">theme</span>";
- var subtheme = "<span class=\"color-text\">theme</span>";
- var presentation = "<span class=\"color-text\">presentation</span>";
- var trial = "<span class=\"color-text\">trial</span>";
- var approve = "<span class=\"color-text\">approve</span>";

div
  div.info-master-button Become a master
  div.info-master-text Create account as !{master}
  div.info-master-text Chose your !{theme} and !{subtheme}
  div.info-master-text Upload video !{presentation}
  div.info-master-text Upload !{trial} video lessons
  div.info-master-text Choose dates when you are avaliable
  div.info-master-text Contact your student and !{approve} a lesson
</template>

<script>
export default {
  name: "MasterInfo",
}
</script>

<style>
.color-text {
  color: var(--red-color);
}

.info-master-text {
  font-size: calc(1.5vh + 15px);
  padding: 5px;

  border-right: 1px solid;
  border-right-color: var(--red-color);
}

.info-master-button {
  font-size: calc(2.5vh + 15px);
  padding: 5px;
  background-color: var(--red-color);
  width: fit-content;
  border-radius: 20px;
  padding: calc(0.7vh + 4px);
}

</style>
