import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export default defineConfig({
  theme: {
    colors: {
      'background': 'hsl(240 10% 3.9%)',
      'foreground': 'hsl(0 0% 98%)',
      'card': 'hsl(240 10% 3.9%)',
      'card-foreground': 'hsl(0 0% 98%)',
      'popover': 'hsl(240 10% 3.9%)',
      'popover-foreground': 'hsl(0 0% 98%)',
      'primary': 'hsl(0 0% 98%)',
      'primary-foreground': 'hsl(240 5.9% 10%)',
      'secondary': 'hsl(240 3.7% 15.9%)',
      'secondary-foreground': 'hsl(0 0% 98%)',
      'muted': 'hsl(240 3.7% 15.9%)',
      'muted-foreground': 'hsl(240 5% 64.9%)',
      'accent': 'hsl(240 3.7% 15.9%)',
      'accent-foreground': 'hsl(0 0% 98%)',
      'destructive': 'hsl(0 62.8% 30.6%)',
      'destructive-foreground': 'hsl(0 85.7% 97.3%)',
      'border': 'hsl(240 3.7% 15.9%)',
      'input': 'hsl(240 3.7% 15.9%)',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
