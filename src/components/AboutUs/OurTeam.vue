<template>
  <section class="our-team">
    <h2>Our Team</h2>
    <p>Meet the passionate individuals behind our services.</p>
    <div class="team-members">
      <div class="member" v-for="member in team" :key="member.name">
        <div class="member-photo">
          <img :src="member.image" alt="Komandos narys" />
        </div>
        <h3>{{ member.name }}</h3>
        <p class="role">{{ member.role }}</p>
        <p class="description">{{ member.description }}</p>
        <div class="social-icons">
          <a v-for="icon in member.socials" :key="icon" :href="icon.link">
            <img :src="icon.img" alt="Socialinė ikona" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Alice Johnson",
          role: "Lead Technician",
          description:
            "Alice has over 10 years of experience in electric vehicle maintenance and repair.",
          image: "#",
          socials: [{ img: "#", link: "#" }],
        },
        {
          name: "Bob Smith",
          role: "Service Manager",
          description:
            "Bob ensures our team meets the highest standards of customer service and satisfaction.",
          image: "#",
          socials: [{ img: "#", link: "#" }],
        },
        {
          name: "Cathy Lee",
          role: "Parts Specialist",
          description:
            "Cathy is an expert in sourcing and managing electric vehicle parts efficiently.",
          image: "#",
          socials: [{ img: "#", link: "#" }],
        },
        {
          name: "David Kim",
          role: "Quality Control",
          description:
            "David oversees quality checks to ensure every service meets our rigorous standards.",
          image: "#",
          socials: [{ img: "#", link: "#" }],
        },
      ],
    };
  },
};
</script>

<style scoped>
.our-team {
  text-align: center;
  padding: 60px 10%;
  background-color: #ffffff;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

p {
  font-size: 1.1rem;
  color: #555;
}

.team-members {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.member {
  flex: 1;
  max-width: 250px;
  text-align: center;
}

.member-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto 15px;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  font-size: 1.3rem;
  font-weight: 600;
}

.role {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.description {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-icons img {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.1);
}
</style>
