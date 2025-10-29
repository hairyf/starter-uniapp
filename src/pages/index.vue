<script setup lang="ts">
const counter = useCounterStore()
</script>

<template>
  <view class="flex flex-col items-center justify-center">
    <image class="size-[200rpx] mt-[200rpx] ml-auto mr-auto mb-[50rpx]" src="/static/logo.png" />
    <view class="flex justify-center">
      <u-button type="primary" @click="counter.increment">
        Count:
        {{ counter.count }}
      </u-button>
    </view>
  </view>
</template>
