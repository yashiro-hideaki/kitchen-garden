<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<template>
  <header class="fixed left-0 top-0 w-60 bg-green-600 h-screen text-base max-h-screen px-10 pt-8 text-white font-bold font-body">
    <div>
      <img src="" alt="">
      <p>サービス名</p>
    </div>
    <Link class="flex gap-3 mt-14 items-center">
      <img class="w-8 h-8" src="/images/concept.png" alt="">
      <p>コンセプト</p>
    </Link>
    <Link class="flex gap-3 mt-14 items-center">
      <img class="w-8 h-8" src="/images/vegetable.png" alt="">
      <p>商品一覧</p>
    </Link>
    <Link class="flex gap-3 mt-14 items-center">
      <img class="w-8 h-8" src="/images/question.png" alt="">
      <p>野菜の育て方</p>
    </Link>
    <Link class="flex gap-3 mt-14 items-center">
      <img class="w-8 h-8" src="/images/recipe.png" alt="">
      <p>野菜のレシピ集</p>
    </Link>
    <Link class="flex gap-3 mt-14 items-center">
      <img class="w-8 h-8" src="/images/article.png" alt="">
      <p>特集記事</p>
    </Link>
    <Link class="flex gap-3 mt-14 items-center">
      <img class="w-8 h-8" src="/images/cart.png" alt="">
      <p>カート(0)</p>
    </Link>
  </header>
</template>