<style lang="scss" global>
  @tailwind utilities;
  @tailwind components;
  @tailwind base;
  html {
    @apply bg-white p-5;
    margin  : 0;
    padding : 0;
  }

  .wrapper {
    @apply min-h-screen flex flex-col;

    header, footer {
      @apply flex-shrink;
    }

    main {
      @apply flex-grow
    }
  }
</style>