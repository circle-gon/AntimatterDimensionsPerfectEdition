<script>
import ModalOptionsToggleButton from "@/components/ModalOptionsToggleButton";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";
import PrimaryButton from "@/components/PrimaryButton";
import SliderComponent from "@/components/SliderComponent";

export default {
  name: "NewsOptionsModal",
  components: {
    ModalOptionsToggleButton,
    ModalWrapperOptions,
    PrimaryButton,
    SliderComponent
  },
  data() {
    return {
      enabled: false,
      repeatBuffer: 40,
      AIChance: 0,
      speed: 1,
      includeAnimated: false,
      counter: 0
    };
  },
  computed: {
    newsOnOffLabel() {
      return `News: ${this.enabled ? "On" : "Off"}`;
    },
    sliderPropsRepeatBuffer() {
      return {
        min: 0,
        max: 80,
        interval: 1,
        width: "98%",
        tooltip: false
      };
    },
    sliderPropsAIChance() {
      return {
        min: 0,
        max: 1,
        interval: 0.01,
        width: "98%",
        tooltip: false
      };
    },
    sliderPropsSpeed() {
      return {
        min: 0.5,
        max: 2,
        interval: 0.01,
        width: "98%",
        tooltip: false
      };
    },
  },
  watch: {
    type(newValue) {
      this.bad();
    },
    repeatBuffer(newValue) {
      this.bad();
    },
    AIChance(newValue) {
      this.bad();
    },
    speed(newValue) {
      this.bad();
    },
    includeAnimated(newValue) {
      this.bad();
    },
  },
  methods: {
    update() {
      const options = player.options.news;
      this.enabled = options.enabled;
      this.repeatBuffer = options.repeatBuffer;
      this.AIChance = options.AIChance;
      this.speed = options.speed;
      this.includeAnimated = options.includeAnimated;
    },
    bad() {
      this.counter++;

      // Don't ask why, it is what it is
      if (this.counter >= 2) {
        SecretAchievement(33).unlock();
        GameUI.notify.error("We're sorry but you cannot modify your advertising settings.");
      }
    },
    adjustSliderValueRepeatBuffer(value) {
      this.bad();
    },
    adjustSliderValueAIChance(value) {
      this.bad();
    },
    adjustSliderValueSpeed(value) {
      this.bad();
    }
  }
};
</script>

<template>
  <ModalWrapperOptions>
    <template #header>
      News Options
    </template>
    <PrimaryButton
      class="o-primary-btn o-primary-btn--option-wide"
      onclick="GameOptions.toggleNews()"
    >
      {{ newsOnOffLabel }}
    </PrimaryButton>
    <div class="o-primary-btn o-primary-btn--option-wide o-primary-btn--slider">
      <b>{{ formatInt(parseInt(repeatBuffer)) }} message repeat buffer</b>
      <SliderComponent
        class="o-primary-btn--slider__slider"
        v-bind="sliderPropsRepeatBuffer"
        :value="repeatBuffer"
        @input="adjustSliderValueRepeatBuffer($event)"
      />
    </div>
    <div class="o-primary-btn o-primary-btn--option-wide o-primary-btn--slider">
      <b>{{ formatPercents(parseFloat(AIChance)) }} AI messages</b>
      <SliderComponent
        class="o-primary-btn--slider__slider"
        v-bind="sliderPropsAIChance"
        :value="AIChance"
        @input="adjustSliderValueAIChance($event)"
      />
    </div>
    <div class="o-primary-btn o-primary-btn--option-wide o-primary-btn--slider">
      <b>{{ formatPercents(parseFloat(speed)) }} scroll speed</b>
      <SliderComponent
        class="o-primary-btn--slider__slider"
        v-bind="sliderPropsSpeed"
        :value="speed"
        @input="adjustSliderValueSpeed($event)"
      />
    </div>
    <ModalOptionsToggleButton
      v-model="includeAnimated"
      class="o-primary-btn o-primary-btn--option-wide"
      text="Animation Effects:"
    />
  </ModalWrapperOptions>
</template>
