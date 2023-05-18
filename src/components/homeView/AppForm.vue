<template>
  <div class="form-block">
    <h2 class="form-title">{{ $t("form.title") }}</h2>
    <form class="form" action="">
      <label class="form-field-el field-input">
        <input
          v-model="v$.userName.$model"
          class="required"
          type="text"
          name="name"
          :placeholder="$t('form.placeholders.name')"
        />
        <span class="error-field" v-if="v$.userName.$error">
          {{ $t(`form.errors.${v$.userName.$errors[0].$message}`) }}
        </span>
      </label>
      <label class="form-field-el field-input">
        <input
          v-model="v$.userPhone.$model"
          class="phone required"
          type="text"
          name="phone"
          :placeholder="$t('form.placeholders.phone')"
        />
        <span class="error-field" v-if="v$.userPhone.$error">
          {{ $t(`form.errors.${v$.userPhone.$errors[0].$message}`) }}
        </span>
      </label>
      <label class="form-field-el field-input">
        <input
          v-model="v$.userEmail.$model"
          class="email required"
          type="text"
          name="email"
          :placeholder="$t('form.placeholders.email')"
        />
        <span class="error-field" v-if="v$.userEmail.$error">
          {{ $t(`form.errors.${v$.userEmail.$errors[0].$message}`) }}
        </span>
      </label>
      <button
        class="btn btn-primary btn-animate submit-btn"
        type="submit"
        :disabled="v$.$invalid"
      >
        {{ $t("form.buttons.subscribe") }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, helpers, minLength, required } from "@vuelidate/validators";

const formData = reactive({
  userName: "",
  userEmail: "",
  userPhone: "",
});
const rules = {
  userName: {
    required: helpers.withMessage("requiredError", required),
  },
  userEmail: {
    email: helpers.withMessage("emailError", email),
    required: helpers.withMessage("requiredError", required),
  },
  userPhone: {
    required: helpers.withMessage("requiredError", required),
    minLength: helpers.withMessage("minError17", minLength(17)),
  },
};

const v$ = useVuelidate(rules, formData);
</script>

<style lang="scss" scoped>
.form-block {
  display: block;
  margin: 60px auto 0;
  padding: 40px 100px 50px;
  width: max-content;
  background: var(--color-popup-dark-blue);
  border-radius: 20px;

  .form-title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    margin: 30px 0 0;

    .field-input {
      width: 300px;
    }

    .btn {
      margin: 20px auto 0;
    }
  }
}

@media (max-width: 1000px) {
  .form-block {
    .form-title {
    }

    .form {
      .field-input {
      }

      .btn {
      }
    }
  }
}

@media (max-width: 660px) {
  .form-block {
    width: 100%;
    padding: 40px 20px 50px;

    .form-title {
    }

    .form {
      .field-input {
        width: 100%;
      }

      .btn {
      }
    }
  }
}
</style>
