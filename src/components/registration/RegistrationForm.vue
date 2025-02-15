<template>
  <div class="registration-container">
    <h2>Registracijos Forma</h2>
    <form @submit.prevent="handleSubmit" class="registration-form">
  
      <!-- Email Field -->
      <div class="form-group">
        <label for="email">El. paštas:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="Įveskite elektroninį paštą"
          required
          aria-describedby="email-error"
        />
        <span id="email-error" class="error-message" v-if="errors.email">{{ errors.email }}</span>
      </div>
  
      <!-- Phone Number Field -->
      <div class="form-group">
        <label for="phone">Telefono numeris:</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          placeholder="Įveskite telefono numerį"
          required
          aria-describedby="phone-error"
        />
        <span id="phone-error" class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
      </div>
  
      <!-- Service Selection Field -->
      <div class="form-group">
        <label for="service">Paslaugos pasirinkimas:</label>
        <select
          id="service"
          v-model="form.service"
          required
          aria-describedby="service-error"
        >
          <option value="" disabled>Pasirinkite paslaugą</option>
          <option>EV Priežiūra</option>
          <option>Baterijos Diagnostika</option>
          <option>Hibridinis Patikrinimas</option>
        </select>
        <span id="service-error" class="error-message" v-if="errors.service">{{ errors.service }}</span>
      </div>
  
      <!-- Submit Button -->
      <div class="form-actions">
        <button type="submit" class="submit-btn">Registruotis</button>
      </div>
  
      <!-- Success Message -->
      <div v-if="isSubmitted" class="success-message">
        Registracija sėkminga! Ačiū, {{ form.name }}.
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        phone: '',
        dob: '',
        service: '',
      },
      errors: {
        email: '',
        phone: '',
        dob: '',
        service: '',
      },
      isSubmitted: false,
    };
  },
  methods: {
    validateForm() {
      let isValid = true;

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim()) {
        this.errors.email = 'El. paštas yra privalomas.';
        isValid = false;
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Įveskite teisingą el. paštą.';
        isValid = false;
      } else {
        this.errors.email = '';
      }

      // Phone validation
      const phonePattern = /^\+?[0-9]{8,12}$/;
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Telefono numeris yra privalomas.';
        isValid = false;
      } else if (!phonePattern.test(this.form.phone)) {
        this.errors.phone = 'Įveskite teisingą telefono numerį.';
        isValid = false;
      } else {
        this.errors.phone = '';
      }

      // Service validation
      if (!this.form.service) {
        this.errors.service = 'Pasirinkite paslaugą.';
        isValid = false;
      } else {
        this.errors.service = '';
      }

      return isValid;
    },
    handleSubmit() {
      if (this.validateForm()) {
        // Simulate form submission (e.g., send data to the server)
        console.log('Form submitted:', this.form);
        this.isSubmitted = true;

        // Reset form after submission
        setTimeout(() => {
          this.form = {
            name: '',
            email: '',
            phone: '',
            dob: '',
            service: '',
          };
          this.isSubmitted = false;
        }, 3000); // Reset after 3 seconds
      }
    },
  },
};
</script>

<style scoped>
.registration-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #f4f7fa;
  padding: 20px;
}

.registration-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-top: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

input,
select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus,
select:focus {
  border-color: #4caf50;
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

.submit-btn:active {
  background-color: #3e8e41;
}

.form-actions {
  text-align: center;
  margin-top: 1.5rem;
}

.error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 0.5rem;
  display: block;
}

.success-message {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  text-align: center;
}

@media (max-width: 480px) {
  .registration-form {
    padding: 1.5rem;
  }

  h2 {
    font-size: 20px;
  }

  input,
  select {
    padding: 0.7rem;
  }

  .submit-btn {
    padding: 0.9rem;
  }
}
</style>
