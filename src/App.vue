<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about-us">About Us</router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/registration">Registration</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  display: flex;
  gap: 20px;
  padding: 10px;
}
</style>
