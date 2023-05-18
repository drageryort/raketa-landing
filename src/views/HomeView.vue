<template>
  <router-view />
  <main class="main">
    <section class="container">
      <h1 class="page-title">{{ $t("title") }}</h1>
      <p class="text subtitle">{{ $t("postTitleParagraph") }}</p>
      <AppForm />
      <p class="text description">{{ $t("postFromParagraph") }}</p>
    </section>
  </main>
</template>

<script lang="ts" setup>
import AppForm from "@/components/homeView/AppForm.vue";
</script>
<style lang="scss" scoped>
.main {
  margin: -120px 0 0;
  padding: 200px 0 140px;
  background: url("../assets/images/png/common/background.png") no-repeat top
    center/100% auto;

  .page-title {
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .text {
    font-family: "TT Norms", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: var(--color-gray);

    &.subtitle {
      margin: 20px 0 0;
    }

    &.description {
      margin: 100px 0 0;
    }
  }
}

@media (max-width: 1000px) {
  .main {
    margin: -80px 0 0;
    padding: 160px 0 140px;

    .page-title {
      font-size: 20px;
      line-height: 24px;
    }

    .text {
      font-size: 16px;
      line-height: 22px;

      &.subtitle {
        margin: 30px 0 0;
      }

      &.description {
        margin: 80px 0 0;
      }
    }
  }
}

@media (max-width: 660px) {
  .main {
    padding: 140px 0;
    background: url("../assets/images/png/common/background.png") no-repeat
      center top/auto 460px;

    .page-title {
    }

    .text {
      &.subtitle {
        margin: 5px 0 0;
      }

      &.description {
        margin: 60px 0 0;
      }
    }
  }
}
</style>
