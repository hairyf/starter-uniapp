<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello World')
</script>

<template>
  <view class="flex flex-col items-center justify-center">
    <image class="size-[200rpx] mt-[200rpx] ml-auto mr-auto mb-[50rpx]" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="title text-xl text-gray-500">
        {{ title }}
      </text>
    </view>
  </view>
</template>
