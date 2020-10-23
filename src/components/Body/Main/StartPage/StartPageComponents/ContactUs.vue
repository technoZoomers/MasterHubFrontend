<template lang="pug">
div.contact-us-flex
  div.contact-us-text contact us
  div.contact-us-email example.com
</template>

<script>
export default {
  name: "ContactUs",
}
</script>

<style>

.contact-us-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(1vh + 10px);
}

.contact-us-email {
  font-size: calc(1vh + 10px);
  color: var(--red-color);
}
.contact-us-text {
  font-size: calc(1vh + 10px);
  padding: 10px; 
}
</style>
