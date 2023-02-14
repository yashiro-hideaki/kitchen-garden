<script>
import Header from '@/Components/Header.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Header,
  },
  data() {
    return {
      photoGallery: [
        {photo: "/images/pickup.png"},
        {photo: "/images/pickup.png"},
        {photo: "/images/pickup.png"},
      ],
    };
  },
};
</script>
<template>
  <div class="w-full font-body font-bold">
    <div class="flex">
      <Header></Header>
      <div class="ml-60 w-full">
        <div class="relative h-[600px] bg-main">
          <p class="absolute right-16 bottom-16 text-white text-[50px]">どこでも簡単に<br>菜園ができる空間</p>
        </div>
      </div>
    </div>
    <div class="ml-60 relative mt-56">
      <div class="flex absolute">
        <p class="rotate-90 text-[60px]">CONCEPT</p>
        <p class="underline text-[32px] absolute left-[200px] w-full top-[-110px]">コンセプト</p>
      </div>
      <div class="bg-green-100 h-[400px] py-12">
        <img class="max-w-md absolute right-0 top-[-150px]" src="/images/christine-Wyx2vBv8WU0-unsplash 1.png" alt="">
        <div class="mx-auto max-w-2xl w-full absolute left-1/2 -translate-x-1/2">
          <div class="text-[32px] text-left">コンセプトタイトルコンセプトタイトル</div>
          <p class="mt-16 text-base">コンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトル</p>
          <button class="bg-green-900 rounded-lg w-40 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">もっと見る</button>
        </div>
      </div>
    </div>
    <div class="ml-60 text-center mt-14 px-16">
      <h2 class="text-[60px]">PICK UP</h2>
      <p class="text-[32px]">おすすめ</p>
      <carousel :items-to-show="1">
        <slide v-for="slide in photoGallery" :key="slide">
          <a href="/main">
            <img :src="slide.photo" alt="photo">
          </a>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    <div class="ml-60 mt-48">
      <div class="flex px-14 justify-between">
        <div class="w-[421px]">
          <h2 class="text-[60px] text-center">ITEM</h2>
          <p class="text-[32px] text-center">商品</p>
          <p class="mt-5">商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品商品</p>
          <img class="mt-16" src="/images/Rectangle82.png" alt="">
          <button class="bg-green-900 rounded-full w-72 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">商品一覧を見る</button>
        </div>
        <div class="flex gap-8 flex-wrap justify-center max-w-2xl">
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
          <div class="w-[200px] text-center">
            <img src="/images/Rectangle77.png" alt="">
            <p class="mt-3">商品名</p>
            <p>¥1,000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-60 mt-48">
      <h2 class="text-[60px] text-center">FEATURE-CONTENTS</h2>
      <p class="text-[32px] text-center">サービス名の特徴</p>
      <div class="px-20 flex justify-between mt-12">
        <div class="w-80 relative">
          <span class="absolute text-[48px] rotate-[15deg] top-[-40px] left-5">1</span>
          <div class="w-[313px] bg-green-600 rounded-[30px] py-6 text-[30px] font-bold text-white text-center">セット販売</div>
          <p class="mt-10">セット販売セット販売セット販売セット販売セット販売セット販売セット販売セットセット販売セット販売セット販売セット販売セット販売セット販売セット販売セット</p>
          <button class="bg-green-900 rounded-lg w-40 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">もっと見る</button>
        </div>
        <img class="max-w-2xl" src="/images/Rectangle22.png" alt="">
      </div>
      <div class="px-20 flex justify-between mt-12">
        <img class="max-w-2xl" src="/images/Rectangle22.png" alt="">
        <div class="w-80 relative">
          <span class="absolute text-[48px] rotate-[15deg] top-[-40px] left-5">2</span>
          <div class="w-[313px] bg-green-600 rounded-[30px] py-6 text-[30px] font-bold text-white text-center">セット販売</div>
          <p class="mt-10">セット販売セット販売セット販売セット販売セット販売セット販売セット販売セットセット販売セット販売セット販売セット販売セット販売セット販売セット販売セット</p>
          <button class="bg-green-900 rounded-lg w-40 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">もっと見る</button>
        </div>
      </div>
      <div class="px-20 flex justify-between mt-12">
        <div class="w-80 relative">
          <span class="absolute text-[48px] rotate-[15deg] top-[-40px] left-5">3</span>
          <div class="w-[313px] bg-green-600 rounded-[30px] py-6 text-[30px] font-bold text-white text-center">セット販売</div>
          <p class="mt-10">セット販売セット販売セット販売セット販売セット販売セット販売セット販売セットセット販売セット販売セット販売セット販売セット販売セット販売セット販売セット</p>
          <button class="bg-green-900 rounded-lg w-40 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">もっと見る</button>
        </div>
        <img class="max-w-2xl" src="/images/Rectangle22.png" alt="">
      </div>
    </div>
    <div class="ml-60 mt-48 bg-green-100 py-8 px-24">
      <h2 class="text-[60px] text-center">TOPICS</h2>
      <p class="text-[32px] text-center underline">ニュース・特集</p>
      <ul class="flex flex-wrap gap-14">
        <li class="w-80">
          <a href="">
            <img class="w-full h-60" src="/images/topic.png" alt="">
            <div class="bg-white px-4 pt-3 pb-16 rounded-br-xl rounded-bl-xl">
              <p class="text-right text-[14px] text-gray-100">2023-2-12</p>
              <p class="text-left font-bold text-base mt-5">タイトルタイトルタイトル</p>
            </div>
          </a>
        </li>
        <li class="w-80">
          <a href="">
            <img class="w-full h-60" src="/images/topic.png" alt="">
            <div class="bg-white px-4 pt-3 pb-16 rounded-br-xl rounded-bl-xl">
              <p class="text-right text-[14px] text-gray-100">2023-2-12</p>
              <p class="text-left font-bold text-base mt-5">タイトルタイトルタイトル</p>
            </div>
          </a>
        </li>
        <li class="w-80">
          <a href="">
            <img class="w-full h-60" src="/images/topic.png" alt="">
            <div class="bg-white px-4 pt-3 pb-16 rounded-br-xl rounded-bl-xl">
              <p class="text-right text-[14px] text-gray-100">2023-2-12</p>
              <p class="text-left font-bold text-base mt-5">タイトルタイトルタイトル</p>
            </div>
          </a>
        </li>
        <li class="w-80">
          <a href="">
            <img class="w-full h-60" src="/images/topic.png" alt="">
            <div class="bg-white px-4 pt-3 pb-16 rounded-br-xl rounded-bl-xl">
              <p class="text-right text-[14px] text-gray-100">2023-2-12</p>
              <p class="text-left font-bold text-base mt-5">タイトルタイトルタイトル</p>
            </div>
          </a>
        </li>
        <li class="w-80">
          <a href="">
            <img class="w-full h-60" src="/images/topic.png" alt="">
            <div class="bg-white px-4 pt-3 pb-16 rounded-br-xl rounded-bl-xl">
              <p class="text-right text-[14px] text-gray-100">2023-2-12</p>
              <p class="text-left font-bold text-base mt-5">タイトルタイトルタイトル</p>
            </div>
          </a>
        </li>
        <li class="w-80">
          <a href="">
            <img class="w-full h-60" src="/images/topic.png" alt="">
            <div class="bg-white px-4 pt-3 pb-16 rounded-br-xl rounded-bl-xl">
              <p class="text-right text-[14px] text-gray-100">2023-2-12</p>
              <p class="text-left font-bold text-base mt-5">タイトルタイトルタイトル</p>
            </div>
          </a>
        </li>
      </ul>
      <button class="bg-green-900 rounded-lg w-40 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">もっと見る</button>
    </div>
  </div>
  <div class="ml-60 relative mt-56">
      <div class="flex absolute">
        <p class="rotate-90 text-[60px]">CONCEPT</p>
        <p class="underline text-[32px] absolute left-[200px] w-full top-[-110px]">コンセプト</p>
      </div>
      <div class="bg-green-100 h-[400px] py-12">
        <img class="max-w-md absolute right-0 top-[-150px]" src="/images/christine-Wyx2vBv8WU0-unsplash 1.png" alt="">
        <div class="mx-auto max-w-2xl w-full absolute left-1/2 -translate-x-1/2">
          <div class="text-[32px] text-left">コンセプトタイトルコンセプトタイトル</div>
          <p class="mt-16 text-base">コンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトルコンセプトタイトル</p>
          <button class="bg-green-900 rounded-lg w-40 h-12 flex items-center justify-center text-white mx-auto mt-20 hover:opacity-60">もっと見る</button>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
.bg-main{
  background-image: url('/images/main-visual.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
<style scoped lang="scss">
.carousel__slide {
  height: 573px;
  margin-top: 100px;
}
</style>