<template lang="pug">
- var student = "<span class=\"color-text\">student</span>";
- var themes = "<span class=\"color-text\">themes</span>";
- var presentation = "<span class=\"color-text\">presentation</span>";
- var Start = "<span class=\"color-text\">Start</span>";

div
  div.info-student-button Become a student
  div.info-student-text Create account as !{student} 
  div.info-student-text Find masters using !{themes}
  div.info-student-text Watch master’s !{presentation} and trial lessons
  div.info-student-text Book a lesson with !{master} you liked
  div.info-student-text Wait till your master contacts you 
  div.info-student-text !{Start} learning


</template>

<script>
export default {
  name: "StudentInfo",
}
</script>

<style>
.info-student-text {
  font-size: calc(1.5vh + 15px);
  padding: 5px;
}
.info-student-button{
  font-size: calc(2.5vh + 15px);
  padding: 5px;
  background-color: var(--hover-color);
  width: fit-content;
  border-radius: 20px;
  padding: calc(0.7vh + 4px);
}
</style>
