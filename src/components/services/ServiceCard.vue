<template>
    <div class="service-card">
      <div class="image-placeholder"></div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String
    }
  };
  </script>
  
  <style scoped>
  .service-card {
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 300px;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .image-placeholder {
    width: 100%;
    height: 150px;
    background: #ddd;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  
  .service-card h3 {
    color: #333;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .service-card p {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
  }
  </style>
  