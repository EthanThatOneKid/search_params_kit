# search_params_kit

[![deno doc](https://doc.deno.land/badge.svg)](https://deno.land/x/search_params_kit)

Set of functions for the `URLSearchParams` object.

## Example

```ts
const params = new URLSearchParams("a.b.c=1&a.b.d=2&a.e=3");
const data = parse<
  { a: { b: { c: string; d: string }; e: string } }
>(params);
console.log(data);
```

---

Developed with [🦕](https://deno.land/) by
[**@EthanThatOneKid**](https://etok.codes/)
