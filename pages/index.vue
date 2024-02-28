<template>
  <main>
    <div class="lg:flex mx-auto prose max-w-none prose-gray dark:prose-invert">
      <div class="text-center mx-20 lg:my-20">
        <div class="sticky top-5 flex flex-col gap-4">
          <div>
            <NuxtImg
              src="/oeyoews.jpeg"
              alt="oeyoews"
              class="size-32 bg-cover bg-center rounded-full inline-block mx-auto" />
            <h1 class="font-bold text-2xl">oeyoews</h1>
          </div>
          <div class="flex gap-4 justify-center">
            <NuxtLink href="https://twitter.com/oeyoews" target="_blank">
              <Icon name="uil:twitter" color="" size="24" />
            </NuxtLink>

            <NuxtLink href="https://github.com/oeyoews" target="_blank">
              <Icon name="uil:github" color="" size="24" />
            </NuxtLink>

            <NuxtLink href="https://neotw.vercel.app" target="_blank">
              <Icon name="i-simple-icons:tiddlywiki" color="" size="24" />
            </NuxtLink>
          </div>
          <div class="text-slate-500 text-sm my-4">Blog Since 2023</div>
        </div>
      </div>
      <div class="lg:my-20 mx-6">
        <div>
          <div class="mx-auto text-sm">
            <div>
              <h2 class="font-bold my-4 text-md">Projects / 项目</h2>
              <a href="/blog/">项目</a>
            </div>
            <h2 class="font-bold my-4 text-md">Articles / 文章</h2>
            <div><a href="/blog">文章</a></div>
            <h2 class="font-bold my-4 text-md">ABOUT / 关于我</h2>
            <div class="text-gray-400">
              这个人很懒，什么也没留下 (coming ...)
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
