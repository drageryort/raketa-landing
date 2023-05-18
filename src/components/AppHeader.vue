<template>
  <header class="header container">
    <div
      class="lang-trigger"
      :class="{ active: langTriggerState }"
      @click="langTriggerAction"
    >
      <span class="active-lang"> {{ currentLang }}</span>
      <ul class="lang-list">
        <li class="lang-el" v-for="lang of langTrigger" :key="lang.url">
          <router-link :to="lang.url"> {{ lang.name }}</router-link>
        </li>
      </ul>
    </div>
    <a href="#" class="logo">
      <img src="@/assets/images/svg/common/logo.svg" alt="logo" />
    </a>
  </header>
</template>

<script lang="ts" setup>
import { computed, ref, Ref } from "vue";
import { useRoute } from "vue-router";

interface Lang {
  name: string;
  url: string;
}

const langTriggerState = ref<boolean>(false);
const langTriggerAction = () => {
  langTriggerState.value = !langTriggerState.value;
};

const route = useRoute();
const languages: Ref<Lang[]> = ref<Lang[]>([
  { name: "en", url: "/" },
  { name: "ru", url: "ru" },
  { name: "ua", url: "ua" },
]);

const currentLang = computed(() => route.params.locale || "en");
const langTrigger = computed(() => {
  const filteredList: Lang[] = languages.value.filter(
    (el: Lang) => el.name !== currentLang.value
  );
  return filteredList;
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
  z-index: 2;

  .lang-trigger {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    .active-lang {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
      color: var(--color-white);
      cursor: pointer;

      &:after {
        display: block;
        content: "";
        background: url("@/assets/images/svg/common/arrow-bottom.svg") no-repeat
          center center/cover;
        width: 6px;
        height: 4px;
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
      }
    }

    .lang-list {
      max-height: 0;
      padding: 0 10px;
      border-radius: 6px;
      background: var(--color-gradient-blue);
      filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.2));
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.5s;

      &:after {
        content: "";
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 6px;
        border-color: transparent transparent #121434 transparent;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
      }

      .lang-el {
        &:not(:last-child) {
          margin-bottom: 8px;
        }

        a {
          font-size: 12px;
          line-height: 14px;
          text-transform: uppercase;
          color: var(--color-white);
        }
      }
    }

    &.active {
      .active-lang {
        &:after {
          transform: translateY(-50%) rotate(180deg);
          transition: 0.5s;
        }
      }

      .lang-list {
        max-height: unset;
        padding: 16px 10px 8px;
        overflow: unset;
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
  }

  .logo {
    width: 220px;

    img {
      width: 100%;
    }
  }
}

@media (max-width: 1000px) {
  .header {
    padding: 16px 0;

    .lang-trigger {
      .active-lang {
        &:after {
        }
      }

      .lang-list {
        &:after {
        }

        .lang-el {
          &:not(:last-child) {
          }

          a {
          }
        }
      }

      &.active {
        .active-lang {
          &:after {
          }
        }

        .lang-list {
        }
      }
    }

    .logo {
      width: 156px;

      img {
      }
    }
  }
}

@media (max-width: 660px) {
  .header {
    .lang-trigger {
      .active-lang {
        &:after {
        }
      }

      .lang-list {
        &:after {
        }

        .lang-el {
          &:not(:last-child) {
          }

          a {
          }
        }
      }

      &.active {
        .active-lang {
          &:after {
          }
        }

        .lang-list {
        }
      }
    }

    .logo {
      img {
      }
    }
  }
}
</style>
