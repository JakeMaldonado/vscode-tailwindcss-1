/*
|-----------------------------------------------------------------------------
| Shadows                                https://tailwindcss.com/docs/shadows
|-----------------------------------------------------------------------------
|
| Here is where you define your shadow utilities. As you can see from
| the defaults we provide, it's possible to apply multiple shadows
| per utility using comma separation.
|
| If a `default` shadow is provided, it will be made available as the non-
| suffixed `.shadow` utility.
|
| Class name: .shadow-{size?}
|
*/

module.exports = {
  default: '0 1px 2px 0 rgba(0,0,0,0.15)',
  'md': '0 5px 10px -1px rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.15)',
  'lg': '0 8px 20px -2px rgba(0,0,0,0.15), 0 3px 8px 0 rgba(0,0,0,0.06)',
  'xl': '0 10px 25px -3px rgba(0,0,0,0.17), 0 7px 16px 0 rgba(0,0,0,0.03)',
  '2xl': '0 20px 40px -5px rgba(0,0,0,0.20)',
  'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  'outline': '0 0 0 3px rgba(52,144,220,0.5)',
  'none': 'none',
};
