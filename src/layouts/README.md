## Layouts

Vue components in this dir are used as layouts.

By default, `default.vue` will be used unless an alternative is specified in the route meta.

With [`@uni-helper/vite-plugin-uni-layouts`](https://github.com/uni-helper/vite-plugin-uni-layouts), you can specify the layout in the page's SFCs like this:

```vue
<route lang="json">
{
  "layout": "anyLayout"
}
</route>
```
