<template>
    <section class="battery-repair">
      <div class="text-content">
        <h2>Baterijų remontas</h2>
        <p class="section-description">
          teksts
        </p>
        <div class="details">
          <div class="detail">
            <h3>Paslauga 1</h3>
            <p>blala</p>
          </div>
          <div class="detail">
            <h3>Paslauga 2</h3>
            <p>blala</p>
          </div>
        </div>
      </div>
      <div class="image-placeholder">Image</div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BatteryRepair'
  };
  </script>
  
  <style scoped>
  .battery-repair {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    margin: 3rem auto;
    padding: 3rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 1200px;
  }
  
  .text-content {
    flex: 1;
    max-width: 600px;
  }
  
  .section-description {
    color: #555;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .details {
    display: flex;
    gap: 1.5rem;
  }
  
  .detail {
    background: #f9f9f9;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex: 1;
  }
  
  .detail h3 {
    color: #333;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .detail p {
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .image-placeholder {
    width: 40%;
    height: 250px;
    background-color: #e0e0e0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-size: 1.2rem;
  }
  
  @media (max-width: 1024px) {
    .battery-repair {
      flex-direction: column;
      text-align: center;
    }
  
    .details {
      flex-direction: column;
    }
  
    .image-placeholder {
      width: 100%;
      height: 200px;
    }
  }
  </style>
  