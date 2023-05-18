<template>
  <footer class="footer container">
    <div class="top-block">
      <div class="left-col">
        <a href="/" class="logo">
          <img src="@/assets/images/svg/common/logo.svg" alt="logo" />
        </a>
      </div>
      <div class="right-col">
        <h4 class="title">{{ $t("footer.stayConnected") }}</h4>
        <div class="social-links">
          <a href="#" class="link">
            <img
              src="@/assets/images/svg/common/instagram-icon.svg"
              alt="instagram"
            />
          </a>
          <a href="#" class="link">
            <img
              src="@/assets/images/svg/common/fbmessenger-icon.svg"
              alt="fbmessanger"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <span class="left-col"> © 2023 Rocket Rewards </span>
      <ul class="right-col">
        <li class="list-el">
          <a href="#">{{ $t("footer.privacyPolicyTerms") }}</a>
        </li>
        <li class="list-el">
          <a href="#">{{ $t("footer.conditions") }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  padding: 60px 0 30px;
  background: var(--color-black);
  &:before {
    content: "";
    width: 100%;
    height: 280px;
    background: radial-gradient(
        50% 100% at 50% 100%,
        #1d2156 0,
        rgba(17, 19, 49, 0) 100%
      )
      no-repeat left top/100% 100%;
    position: absolute;
    left: 50%;
    top: -280px;
    z-index: -1;
    transform: translate(-50%, 0);
    opacity: 0.52;
  }
  .top-block {
    display: flex;
    justify-content: space-between;
    padding: 0 0 60px;
    .left-col {
      .logo {
        display: block;
        width: 220px;
        img {
          width: 100%;
        }
      }
    }
    .right-col {
      .title {
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: var(--color-gray);
      }
      .social-links {
        display: flex;
        column-gap: 20px;
        justify-content: flex-end;
        margin: 15px 0 0;
        .link {
          width: 30px;
          height: 30px;
          img {
          }
        }
      }
    }
  }
  .copyrights {
    display: flex;
    justify-content: space-between;
    .left-col {
      font-family: "TT Norms", sans-serif;
      font-size: 16px;
      line-height: 22px;
      font-feature-settings: "liga" off;
      color: var(--color-gray);
    }
    .right-col {
      display: flex;
      align-items: center;
      column-gap: 40px;
      .list-el {
        a {
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.02em;
          text-decoration-line: underline;
          color: var(--color-gray);
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .footer {
    padding: 30px 0;

    &:before {
      height: 270px;
      top: -150px;
    }

    .top-block {
      padding: 0 0 60px;

      .left-col {
        .logo {
          width: 195px;

          img {
          }
        }
      }

      .right-col {
        .title {
        }

        .social-links {
          .link {
            img {
            }
          }
        }
      }
    }

    .copyrights {
      .left-col {
      }

      .right-col {
        .list-el {
          a {
          }
        }
      }
    }
  }
}
@media (max-width: 660px) {
  .footer {
    padding: 22px 0 30px;
    &:before {
      height: 145px;
      top: -88px;
      opacity: 1;
    }
    .top-block {
      flex-direction: column;
      padding: 0 0 60px;
      align-items: center;
      row-gap: 20px;
      .left-col {
        .logo {
          width: 188px;
          img {
          }
        }
      }
      .right-col {
        .title {
        }
        .social-links {
          .link {
            img {
            }
          }
        }
      }
    }
    .copyrights {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      .left-col {
      }
      .right-col {
        .list-el {
          a {
          }
        }
      }
    }
  }
}
</style>
