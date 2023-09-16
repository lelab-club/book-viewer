<template>
  <div class="github-ribbon">
    <a target="_blank" href="book/Le%20Lab%20-%20Book%20Projet%20FLL%202024.pdf">Télécharger le book</a>
  </div>
</template>

<style scoped>
.github-ribbon {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  z-index: 99999;
}
.github-ribbon a {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  padding: 6px 0px;
  text-align: center;
  transform: rotate(-45deg);
  text-decoration: none;
  color: rgb(255, 255, 255);
  position: inherit;
  bottom: 45px;
  right: -40px;
  font: 700 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 3px 0px;
  background-color: #e68d4a;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
  border-width: 1px 0px;
  //border-style: dotted;
  border-color: rgba(255, 255, 255, 0.7);
}
</style>
